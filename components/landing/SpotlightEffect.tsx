"use client";
import { useEffect, useRef } from "react";

interface SpotlightEffectProps {
  targetPosition: { x: number; y: number };
}

// Helper function to parse CSS color values and convert to RGB
const parseCSSColor = (colorValue: string): [number, number, number] => {
  // Handle hex colors
  if (colorValue.startsWith('#')) {
    const hex = colorValue.slice(1);
    const r = parseInt(hex.slice(0, 2), 16) / 255;
    const g = parseInt(hex.slice(2, 4), 16) / 255;
    const b = parseInt(hex.slice(4, 6), 16) / 255;
    return [r, g, b];
  }
  // Handle RGB space-separated values (like your glow colors)
  if (colorValue.includes(' ')) {
    const [r, g, b] = colorValue.split(' ').map(v => parseInt(v.trim()) / 255);
    return [r, g, b];
  }
  // Default fallback
  return [1.0, 1.0, 1.0];
};

// Function to get CSS variable value
const getCSSVariable = (variableName: string): string => {
  if (typeof window === 'undefined') return '';
  return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
};

export const SpotlightEffect: React.FC<SpotlightEffectProps> = ({
  targetPosition,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const animationRef = useRef<number>(0);
  const animatedPosition = useRef({ x: targetPosition.x, y: targetPosition.y });
  const targetPositionRef = useRef(targetPosition);

  // Inertia tracking variables
  const velocity = useRef({ x: 0, y: 0 });
  const lastPosition = useRef({ x: targetPosition.x, y: targetPosition.y });
  const inertiaOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    targetPositionRef.current = targetPosition;
  }, [targetPosition]);

  const vertexShaderSource = `
    attribute vec2 a_position;
    varying vec2 v_texCoord;
    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
      v_texCoord = a_position * 0.5 + 0.5;
    }
  `;

  const fragmentShaderSource = `
  precision highp float;
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec2 u_center;
  uniform vec2 u_inertiaOffset;
  uniform float u_velocity;
  
  // Color uniforms from CSS variables
  uniform vec3 u_primaryColor;
  uniform vec3 u_secondaryColor;
  uniform vec3 u_secondarySaturatedColor;
  uniform vec3 u_glowColor;
  
  varying vec2 v_texCoord;

  // Enhanced noise functions for wind-like effects
  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
  }

  // Multi-octave noise for more complex wind patterns
  float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    
    vec2 u = f * f * (3.0 - 2.0 * f);
    
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  float fbm(vec2 st) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 0.0;
    
    for (int i = 0; i < 4; i++) {
      value += amplitude * noise(st);
      st *= 2.0;
      amplitude *= 0.5;
    }
    return value;
  }

  void main() {
    vec2 uv = v_texCoord;
    uv.y = 1.0 - uv.y; // Invert Y-axis so (0,0) is top-left
    vec2 center = u_center;
    
    // Apply inertia-based distortion to create wind effect
    vec2 wind_displacement = u_inertiaOffset * 0.3; // Scale down the effect
    
    // Create multiple layers of wind distortion at different scales
    float time_slow = u_time * 0.4;
    float time_medium = u_time * 0.8;
    float time_fast = u_time * 1.5;
    
    // Large-scale wind waves
    vec2 wind_large = vec2(
      sin(time_slow + uv.y * 2.0) * 0.015,
      cos(time_slow * 0.7 + uv.x * 3.0) * 0.008
    );
    
    // Medium-scale turbulence
    vec2 wind_medium = vec2(
      fbm(uv * 3.0 + time_medium * 0.1) * 0.008,
      fbm(uv * 4.0 + time_medium * 0.15) * 0.005
    );
    
    // Fine-scale shimmer based on velocity
    float velocity_factor = clamp(u_velocity * 2.0, 0.0, 1.0);
    vec2 wind_fine = vec2(
      sin(time_fast + uv.y * 8.0) * 0.003 * velocity_factor,
      noise(uv * 12.0 + time_fast * 0.2) * 0.002 * velocity_factor
    );
    
    // Combine all wind effects
    vec2 total_wind = wind_large + wind_medium + wind_fine + wind_displacement;
    
    // Calculate distance from current fragment to the center (with wind effect)
    vec2 to_frag = uv - center + total_wind;
    
    // Create the horizontal arc shape that's properly constrained
    float arc_width = 0.17;  // Much smaller width to fit within feature bounds
    float arc_height = 1.1;
    
    // Normalize coordinates for the arc shape
    vec2 arc_coord = to_frag;
    arc_coord.x /= arc_width;
    arc_coord.y /= arc_height;
    
    // Create the curved arc shape - parabolic curve that tapers at ends
    float curve_factor = 1.0 - abs(arc_coord.x);
    curve_factor = pow(curve_factor, 1.7);
    
    // Distance from the arc centerline
    float arc_distance = abs(arc_coord.y);
    
    // Create the arc mask - only show the top half of the curve
    float arc_mask = step(arc_coord.y, curve_factor * 0.5) * step(-1.0, arc_coord.x) * step(arc_coord.x, 1.0);
    
    // Distance calculation for intensity
    float intensity_dist = arc_distance / max(curve_factor, 0.02);
    
    // Core light - brilliant, focused center (affected by wind)
    float core_radius = 0.12 + sin(time_slow + uv.x * 5.0) * 0.01;
    float core_softness = 0.18 + cos(time_medium + uv.y * 3.0) * 0.02;
    float core = 1.0 - smoothstep(core_radius - core_softness, core_radius + core_softness, intensity_dist);
    core = pow(core, 2.5);
    
    // Inner glow - tight around the core (with subtle breathing)
    float inner_glow_radius = 0.30 + sin(time_slow * 1.3) * 0.02;
    float inner_glow_softness = 0.2 + cos(time_slow * 0.9 + arc_coord.x * 2.0) * 0.03;
    float inner_glow = 1.0 - smoothstep(inner_glow_radius - inner_glow_softness, inner_glow_radius + inner_glow_softness, intensity_dist);
    inner_glow = pow(inner_glow, 1.8);
    
    // Outer glow - softer, more ethereal (most affected by wind)
    float outer_glow_radius = 0.7 + fbm(uv * 2.0 + time_slow * 0.1) * 0.1;
    float outer_glow_softness = 0.6 + sin(time_slow * 0.6 + arc_coord.x * 1.5) * 0.08;
    float outer_glow = 1.0 - smoothstep(outer_glow_radius - outer_glow_softness, outer_glow_radius + outer_glow_softness, intensity_dist);
    
    // Enhanced shimmer effect with inertia influence
    float shimmer_base = 0.92 + 0.08 * sin(time_medium * 2.5 + arc_coord.x * 8.0);
    float movement_shimmer = 1.0 + 0.05 * sin(time_fast * 4.0 + center.x * 20.0);
    float inertia_shimmer = 1.0 + velocity_factor * 0.03 * sin(time_fast * 6.0 + arc_coord.y * 10.0);
    float shimmer = shimmer_base * movement_shimmer * inertia_shimmer;
    
    // Wind-based flickering for the edges
    float edge_flicker = 1.0 + fbm(uv * 5.0 + time_medium * 0.3) * 0.15 * velocity_factor;
    
    // Combine all light layers
    float total_intensity = 0.0;
    total_intensity += core * 0.9;
    total_intensity += inner_glow * 0.7;
    total_intensity += outer_glow * 0.4 * edge_flicker;
    
    // Apply shimmer and arc mask
    total_intensity *= shimmer * arc_mask;
    
    // Create the tapered ends effect with subtle wind variation
    float end_fade = smoothstep(0.95, 0.2, abs(arc_coord.x));
    float wind_end_variation = 1.0 + sin(time_slow * 2.0 + arc_coord.x * 4.0) * 0.05;
    total_intensity *= end_fade * wind_end_variation;
    
    // Enhanced pulsing effect with inertia influence
    float pulse = 0.9 + 0.1 * sin(time_slow * 1.8) + velocity_factor * 0.05 * sin(time_medium * 3.0);
    total_intensity *= pulse;
    
    // Use CSS-based color palette with dynamic transitions
    vec3 core_color = mix(vec3(0.95, 1.0, 1.0), u_primaryColor, 0.3);  // Blend white with primary
    vec3 inner_color = u_secondaryColor;                                // Use secondary color
    vec3 outer_color = u_secondarySaturatedColor;                       // Use saturated secondary
    vec3 edge_color = u_glowColor * 0.8;                               // Use glow color, slightly dimmed
    
    // Enhanced movement-based color variation with inertia
    float color_shift = sin(time_slow * 0.8 + center.x * 3.0) * 0.1;
    float inertia_color_shift = velocity_factor * 0.08 * sin(time_medium * 2.0);
    inner_color.r += color_shift + inertia_color_shift;
    outer_color.g += color_shift * 0.5 + inertia_color_shift * 0.3;
    
    // Add subtle color temperature shift based on movement
    vec3 warm_tint = vec3(1.05, 0.98, 0.95);
    vec3 cool_tint = vec3(0.95, 0.98, 1.05);
    float temp_shift = velocity_factor * sin(time_medium * 1.5);
    vec3 temperature_color = mix(cool_tint, warm_tint, (temp_shift + 1.0) * 0.5);
    
    // Color mixing based on intensity layers
    vec3 final_color = edge_color * temperature_color;
    final_color = mix(final_color, outer_color * temperature_color, outer_glow);
    final_color = mix(final_color, inner_color, inner_glow);
    final_color = mix(final_color, core_color, core * 0.8);
    
    // Enhance the core brightness with movement and inertia
    final_color += core_color * core * (0.4 + 0.1 * movement_shimmer + 0.05 * velocity_factor);
    
    gl_FragColor = vec4(final_color, clamp(total_intensity, 0.0, 1.0));
  }
`;

  const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
    const shader = gl.createShader(type);
    if (!shader) return null;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error("Shader compilation error:", gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  };

  const initWebGL = (gl: WebGLRenderingContext) => {
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program linking error:", gl.getProgramInfoLog(program));
      return;
    }

    programRef.current = program;

    const positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    gl.enable(gl.BLEND);
    gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { antialias: true });
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    glRef.current = gl;
    initWebGL(gl);

    const render = (now: number) => {
      now *= 0.001;
      const time = now;
      const program = programRef.current;
      if (!gl || !program || !canvas) return;

      if (canvas.width !== canvas.offsetWidth || canvas.height !== canvas.offsetHeight) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }

      const currentTarget = targetPositionRef.current;

      // Calculate velocity for inertia effects
      const deltaX = currentTarget.x - lastPosition.current.x;
      const deltaY = currentTarget.y - lastPosition.current.y;

      // Velocity dampening (0.0-0.99): Higher = more persistent velocity
      const velocityDampening = 0.3;

      // Velocity responsiveness (0.01-0.5): Higher = more immediate response
      const velocityResponsiveness = 0.01;

      // Smooth velocity calculation with dampening
      velocity.current.x = velocity.current.x * velocityDampening + deltaX * velocityResponsiveness;
      velocity.current.y = velocity.current.y * velocityDampening + deltaY * velocityResponsiveness;

      // Calculate speed magnitude for shader
      const speed = Math.sqrt(velocity.current.x * velocity.current.x + velocity.current.y * velocity.current.y);

      // Inertia trail strength (0.0-2.0): Higher = stronger trailing effect
      const inertiaStrength = 1.2;

      // Inertia catch-up speed (0.01-0.3): Lower = more lag, Higher = quicker catch-up
      const inertiaCatchUp = 0.3;

      // Create inertia offset that trails behind movement
      inertiaOffset.current.x += (velocity.current.x * inertiaStrength - inertiaOffset.current.x) * inertiaCatchUp;
      inertiaOffset.current.y += (velocity.current.y * inertiaStrength - inertiaOffset.current.y) * inertiaCatchUp;

      // Smooth easing for position transitions
      const smoothingFactor = 0.04;
      animatedPosition.current.x += (currentTarget.x - animatedPosition.current.x) * smoothingFactor;
      animatedPosition.current.y += (currentTarget.y - animatedPosition.current.y) * smoothingFactor;

      // Update last position for next frame
      lastPosition.current.x = currentTarget.x;
      lastPosition.current.y = currentTarget.y;

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(program);

      // Get uniform locations
      const timeLocation = gl.getUniformLocation(program, "u_time");
      const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
      const centerLocation = gl.getUniformLocation(program, "u_center");
      const inertiaOffsetLocation = gl.getUniformLocation(program, "u_inertiaOffset");
      const velocityLocation = gl.getUniformLocation(program, "u_velocity");
      const primaryColorLocation = gl.getUniformLocation(program, "u_primaryColor");
      const secondaryColorLocation = gl.getUniformLocation(program, "u_secondaryColor");
      const secondarySaturatedColorLocation = gl.getUniformLocation(program, "u_secondarySaturatedColor");
      const glowColorLocation = gl.getUniformLocation(program, "u_glowColor");

      // Get colors from CSS variables
      const primaryColor = parseCSSColor(getCSSVariable('--color-landing-glow'));
      const secondaryColor = parseCSSColor(getCSSVariable('--color-landing-glow'));
      const secondarySaturatedColor = parseCSSColor(getCSSVariable('--color-landing-glow'));
      const glowColor = parseCSSColor(getCSSVariable('--color-landing-glow'));

      // Velocity scale for visual effects (10.0-100.0): Higher = more dramatic visual response
      const velocityScale = 50.0;

      // Set uniforms
      gl.uniform1f(timeLocation, time);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform2f(centerLocation, animatedPosition.current.x, animatedPosition.current.y);
      gl.uniform2f(inertiaOffsetLocation, inertiaOffset.current.x, inertiaOffset.current.y);
      gl.uniform1f(velocityLocation, Math.min(speed * velocityScale, 1.0)); // Scale and clamp velocity
      gl.uniform3f(primaryColorLocation, primaryColor[0], primaryColor[1], primaryColor[2]);
      gl.uniform3f(secondaryColorLocation, secondaryColor[0], secondaryColor[1], secondaryColor[2]);
      gl.uniform3f(secondarySaturatedColorLocation, secondarySaturatedColor[0], secondarySaturatedColor[1], secondarySaturatedColor[2]);
      gl.uniform3f(glowColorLocation, glowColor[0], glowColor[1], glowColor[2]);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationRef.current = requestAnimationFrame(render);
    };

    animationRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div className="absolute inset-0 translate-y-11 pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  );
};

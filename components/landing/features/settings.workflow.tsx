import { gsap } from "gsap";
import type { FeatureData } from "./display-section";

export const settingsWorkflow = (tl: gsap.core.Timeline, data: FeatureData) => {
  // Get elements
  const windows = gsap.utils.toArray<HTMLElement>('.settings-window');
  const copyPhases = gsap.utils.toArray<HTMLElement>('.copy-phase');

  // Set initial states
  gsap.set(windows, {
    autoAlpha: 0,
    scale: 0.7,
    y: 60,
    rotationY: 15,
    transformOrigin: "center center"
  });

  gsap.set(copyPhases.slice(1), { autoAlpha: 0, y: 20 });

  // Phase 1: Introduction - Basic Settings (first 3 windows)
  tl.to(copyPhases[0], { autoAlpha: 1, y: 0, duration: 0.5 })
    .to(windows.slice(0, 3), {
      autoAlpha: 1,
      scale: 1,
      y: 0,
      rotationY: 0,
      duration: 1.2,
      ease: "back.out(1.4)",
      stagger: {
        amount: 0.8,
        from: "start"
      }
    }, "+=0.3");

  // Phase 2: Core Features (next 3 windows)
  tl.to(copyPhases[0], { autoAlpha: 0, y: -20, duration: 0.4 }, "+=1.5")
    .to(copyPhases[1], { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.2")
    .to(windows.slice(3, 6), {
      autoAlpha: 1,
      scale: 1,
      y: 0,
      rotationY: 0,
      duration: 1.2,
      ease: "back.out(1.4)",
      stagger: {
        amount: 0.8,
        from: "center"
      }
    }, "-=0.3");

  // Phase 3: Advanced Settings (remaining windows)
  tl.to(copyPhases[1], { autoAlpha: 0, y: -20, duration: 0.4 }, "+=1.5")
    .to(copyPhases[2], { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.2")
    .to(windows.slice(6), {
      autoAlpha: 1,
      scale: 1,
      y: 0,
      rotationY: 0,
      duration: 1.2,
      ease: "back.out(1.4)",
      stagger: {
        amount: 0.6,
        from: "end"
      }
    }, "-=0.3");

  // Final phase: Subtle continuous animation
  tl.to(windows, {
    rotationY: 3,
    duration: 3,
    ease: "sine.inOut",
    stagger: {
      amount: 1.2,
      from: "random",
      repeat: -1,
      yoyo: true
    }
  }, "+=1");
};

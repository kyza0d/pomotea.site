import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { FeatureData } from "./display-section";

gsap.registerPlugin(ScrollTrigger);

export const settingsWorkflow = (tl: gsap.core.Timeline, data: FeatureData) => {
  if (!data.hasWorkflow || !data.workflowStates || !data.phaseContent) return;

  const states = data.workflowStates;

  // Initialize workflow elements
  states.forEach((_, index) => {
    gsap.set(`.workflow-child-${index}`, { autoAlpha: 0, y: 25 });
  });

  // Initialize individual settings windows
  gsap.set(".settings-window", { autoAlpha: 0, y: 30 });

  const phaseDurations = [0.8, 1.4, 1.4];

  // Core workflow phase transitions
  states.forEach((state, index) => {
    const phaseDuration = phaseDurations[index] || 1.4;
    tl.addLabel(`phase-${index}`, `+=${phaseDuration}`);

    if (index > 0) {
      const prevPhaseKey = states[index - 1].phase;
      tl.to(`.copy-phase-${prevPhaseKey}`, { autoAlpha: 0, y: -15, duration: 0.4 }, `phase-${index}-=1.0`);
      tl.to(`.workflow-child-${index - 1}`, {
        duration: 0.6,
        autoAlpha: 0,
        y: -15,
        stagger: { each: 0.15, from: "end", ease: "power2.inOut" },
      }, "<");
    }

    const currentPhaseKey = state.phase;
    tl.to(`.copy-phase-${currentPhaseKey}`, { autoAlpha: 1, y: 0, duration: 0.4 }, `phase-${index}-=0.6`);
    tl.to(`.workflow-child-${index}`, {
      duration: 0.7,
      autoAlpha: 1,
      y: 0,
      stagger: { each: 0.35, from: "start", ease: "power2.out" },
    }, "<");

    // Animate settings windows for this phase
    const windowIndices = state.elements.map((_, i) => states.slice(0, index).reduce((sum, s) => sum + s.elements.length, 0) + i);
    tl.to(windowIndices.map(i => `.settings-window-${i}`), {
      autoAlpha: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    }, `phase-${index}-=0.3`);
  });
};

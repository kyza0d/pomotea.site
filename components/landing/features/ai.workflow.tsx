import { gsap } from "gsap";
import { type FeatureData } from "./display-section";

export function aiWorkflow(tl: gsap.core.Timeline, data: FeatureData) {
  if (!data.hasWorkflow || !data.workflowStates || !data.phaseContent) return;

  const states = data.workflowStates;

  const phaseDurations = [1.5, 2.2, 2.8, 2.5];

  states.forEach((_, index) => {
    gsap.set(`.workflow-child-${index}`, { autoAlpha: 0, y: 25 });
  });

  states.forEach((state, index) => {
    const phaseDuration = phaseDurations[index] || 1.8;
    const currentPhaseLabel = `phase-${index}`;
    tl.addLabel(currentPhaseLabel, `+=${phaseDuration}`);

    if (index > 0) {
      const prevPhaseKey = states[index - 1].phase;
      tl.to(`.copy-phase-${prevPhaseKey}`, { autoAlpha: 0, y: -15, duration: 0.4 }, `${currentPhaseLabel}-=1.4`);
      tl.to(`.workflow-child-${index - 1}`, {
        duration: 0.8,
        autoAlpha: 0,
        y: -25,
        stagger: { each: 0.2, from: "end", ease: "power2.inOut" },
      }, "<");
      // The color transition on the previous tool chip has been removed.
    }

    const currentPhaseKey = state.phase;
    tl.to(`.copy-phase-${currentPhaseKey}`, { autoAlpha: 1, y: 0, duration: 0.5 }, `${currentPhaseLabel}-=1.0`);
    tl.to(`.workflow-child-${index}`, {
      duration: 1.0,
      autoAlpha: 1,
      y: 0,
      stagger: { each: 0.4, from: "start", ease: "power2.out" },
    }, "<");
    const chipFadeInOffset = index === 0 ? 0.5 : 0.3; // First chip has a different timing
    tl.to(`.tool-chip-${index}`, {
      duration: 0.6,
      ease: "power2.out",
    }, `${currentPhaseLabel}+=${chipFadeInOffset}`);

    if (index === 1) {
      tl.from(".task-creation-visual", {
        autoAlpha: 0,
        x: 30,
        duration: 1.0,
        ease: "power2.out",
      }, `${currentPhaseLabel}+=0.6`);
    } else if (index === 2) {
      tl.from(".time-savings-display", {
        scale: 0.9,
        autoAlpha: 0,
        duration: 0.8,
        ease: "back.out(1.4)",
      }, `${currentPhaseLabel}+=0.5`);
    } else if (index === 3) {
      tl.from(`.workflow-child-${index} .progress-stat`, {
        autoAlpha: 0,
        scale: 0.9,
        duration: 0.8,
      }, `${currentPhaseLabel}+=0.6`);
    }
  });
}

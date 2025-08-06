import { gsap } from "gsap";
import { type FeatureData } from "./display-section";

export function aiWorkflow(tl: gsap.core.Timeline, data: FeatureData) {
  if (!data.hasWorkflow || !data.workflowStates || !data.phaseContent) return;

  const states = data.workflowStates;

  const phaseDurations = [2.8, 2.8, 4];

  states.forEach((_, index) => {
    gsap.set(`.workflow-child-${index}`, { autoAlpha: 0, y: 25 });
  });

  states.forEach((state, index) => {
    const phaseDuration = phaseDurations[index] || 2.5;
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
    }

    const currentPhaseKey = state.phase;
    tl.to(`.copy-phase-${currentPhaseKey}`, { autoAlpha: 1, y: 0, duration: 0.5 }, `${currentPhaseLabel}-=1.0`);
    tl.to(`.workflow-child-${index}`, {
      duration: 1.0,
      autoAlpha: 1,
      y: 0,
      stagger: { each: 0.4, from: "start", ease: "power2.out" },
    }, "<");
    const chipFadeInOffset = index === 0 ? 0.5 : 0.3;
    tl.to(`.tool-chip-${index}`, {
      duration: 0.6,
      ease: "power2.out",
    }, `${currentPhaseLabel}+=${chipFadeInOffset}`);
  });
}

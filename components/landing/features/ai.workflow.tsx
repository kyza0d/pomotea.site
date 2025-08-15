import { gsap } from "gsap";
import { type FeatureData } from "./display-section";

export function aiWorkflow(tl: gsap.core.Timeline, data: FeatureData) {
  if (!data.hasWorkflow || !data.workflowStates || !data.phaseContent) return;

  const states = data.workflowStates;
  const sharedCopyPhases = data.sharedCopyPhases || [];

  const phaseDurations = [2.8, 2.8, 2.0, 2.0];

  // Helper function to check if two phases share the same copy
  const phasesShareCopy = (phase1: string, phase2: string): boolean => {
    return sharedCopyPhases.some(group =>
      group.includes(phase1) && group.includes(phase2)
    );
  };

  states.forEach((_, index) => {
    gsap.set(`.workflow-child-${index}`, { autoAlpha: 0, y: 25 });
  });

  states.forEach((state, index) => {
    const phaseDuration = phaseDurations[index] || 2.5;
    const currentPhaseLabel = `phase-${index}`;
    tl.addLabel(currentPhaseLabel, `+=${phaseDuration}`);

    if (index > 0) {
      const prevPhaseKey = states[index - 1].phase;
      const currentPhaseKey = state.phase;
      const sharesCopy = phasesShareCopy(prevPhaseKey, currentPhaseKey);

      // Hide previous phase tools
      tl.to(`.phase-tools-${prevPhaseKey}`, { autoAlpha: 0, duration: 0.3 }, `${currentPhaseLabel}-=1.4`);

      // Only transition copy if phases don't share copy content
      if (!sharesCopy) {
        tl.to(`.copy-phase-${prevPhaseKey}`, { autoAlpha: 0, y: -15, duration: 0.4 }, "<");
      }

      tl.to(`.workflow-child-${index - 1}`, {
        duration: 0.8,
        autoAlpha: 0,
        y: -25,
        stagger: { each: 0.2, from: "end", ease: "power2.inOut" },
      }, sharesCopy ? `${currentPhaseLabel}-=1.4` : "<");
    }

    const currentPhaseKey = state.phase;
    // Only show copy if it's not already visible from a previous shared phase
    const shouldShowCopy = index === 0 || !phasesShareCopy(states[index - 1].phase, currentPhaseKey);
    if (shouldShowCopy) {
      tl.to(`.copy-phase-${currentPhaseKey}`, { autoAlpha: 1, y: 0, duration: 0.5 }, `${currentPhaseLabel}-=1.0`);
    }
    tl.to(`.workflow-child-${index}`, {
      duration: 1.0,
      autoAlpha: 1,
      y: 0,
      stagger: { each: 0.4, from: "start", ease: "power2.out" },
    }, "<");

    // Show current phase tools
    const chipFadeInOffset = index === 0 ? 0.5 : 0.3;
    tl.to(`.phase-tools-${currentPhaseKey}`, { autoAlpha: 1, duration: 0.2 }, `${currentPhaseLabel}+=${chipFadeInOffset}`);
    tl.to(`.tool-chip-${index}-0, .tool-chip-${index}-1, .tool-chip-${index}-2`, {
      duration: 0.6,
      autoAlpha: 1,
      y: 0,
      stagger: { each: 0.2, from: "start" },
      ease: "power2.out",
    }, "<0.1");
  });
}

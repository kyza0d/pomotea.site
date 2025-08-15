import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type FeatureData } from "./display-section";

gsap.registerPlugin(ScrollTrigger);

export function goalsWorkflow(tl: gsap.core.Timeline, data: FeatureData) {
  if (!data.hasWorkflow || !data.workflowStates || !data.phaseContent) return;

  const states = data.workflowStates;

  // Initialize individual goal elements, not the container
  gsap.set([".yearly-view-card", ".monthly-view-card", ".new-goal-card"], { autoAlpha: 0, y: 30 });
  gsap.set(".goal-card", { autoAlpha: 0, y: 30 });

  const phaseDurations = [0.8, 1.4, 1.4, 1.4, 1.8];

  // Core workflow phase transitions (same as tasks)
  states.forEach((state, index) => {
    const phaseDuration = phaseDurations[index] || 1.4;
    tl.addLabel(`phase-${index}`, `+=${phaseDuration}`);

    if (index > 0) {
      const prevPhaseKey = states[index - 1].phase;
      tl.to(`.copy-phase-${prevPhaseKey}`, { autoAlpha: 0, y: -15, duration: 0.4 }, `phase-${index}-=1.0`);
    }

    const currentPhaseKey = state.phase;
    tl.to(`.copy-phase-${currentPhaseKey}`, { autoAlpha: 1, y: 0, duration: 0.4 }, `phase-${index}-=0.6`);
    tl.to(`.workflow-child-${index}`, {
      duration: 0.7,
      autoAlpha: 1,
      y: 0,
      stagger: { each: 0.35, from: "start", ease: "power2.out" },
    }, "<");
  });

  // Goals visual reveal - animate individual elements, not container
  tl.to([".yearly-view-card", ".monthly-view-card", ".new-goal-card"], {
    autoAlpha: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out"
  }, "phase-0");

  tl.to(".goal-card", {
    autoAlpha: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out"
  }, "phase-0");

  const lastIndex = states.length - 1;
  const lastPhaseKey = states[lastIndex].phase;
  tl.addLabel('phase-1', '+=1.8');

  tl.to([`.workflow-child-${lastIndex}`, `.copy-phase-${lastPhaseKey}`], {
    duration: 0.6,
    autoAlpha: 1,
    stagger: { each: 0.1, from: "end" },
  }, `+=${0.8}`);
}

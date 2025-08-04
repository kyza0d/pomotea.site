// File: components/landing/features/tasks.workflow.tsx
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type FeatureData } from "./display-section";

gsap.registerPlugin(ScrollTrigger);

export function tasksWorkflow(tl: gsap.core.Timeline, data: FeatureData) {
  if (!data.hasWorkflow || !data.workflowStates || !data.phaseContent) return;

  const states = data.workflowStates;

  states.forEach((_, index) => {
    gsap.set(`.workflow-child-${index}`, { autoAlpha: 0, y: 25 });
  });

  const phaseDurations = [0.8, 1.4, 1.4, 1.4, 1.8, 1.8, 1.8];

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
  });

  tl.from(["#timer-display-wrapper", ".session-card"], {
    autoAlpha: 0,
    y: 20,
    stagger: 0.2,
    ease: "power2.out",
  }, "phase-1");

  const timerTaskName = document.querySelector("#timer-task-name");
  const timerSessionType = document.querySelector("#timer-session-type");

  if (timerTaskName && timerSessionType) {
    tl.to("#session-cards-scroller", { y: "-11rem", ease: "power2.inOut" }, "phase-4");
    tl.to(timerTaskName, { textContent: "Short Break" }, "phase-4");
    tl.to(timerSessionType, { textContent: "Time to recharge:" }, "phase-4");

    tl.to("#session-cards-scroller", { y: "-22rem", ease: "power2.inOut" }, "phase-5");
    tl.to(timerTaskName, { textContent: "Meditation" }, "phase-5");
    tl.to(timerSessionType, { textContent: "Mindfulness:" }, "phase-5");

    tl.to("#session-cards-scroller", { y: "-33rem", ease: "power2.inOut" }, "phase-6");
    tl.to(timerTaskName, { textContent: "Review project files" }, "phase-6");
    tl.to(timerSessionType, { textContent: "Focusing on:" }, "phase-6");
  }

  const lastIndex = states.length - 1;
  const lastPhaseKey = states[lastIndex].phase;
  tl.addLabel('phase-7', '+=1.8');
  tl.to([`.workflow-child-${lastIndex}`, `.copy-phase-${lastPhaseKey}`], {
    duration: 0.6,
    autoAlpha: 1,
    stagger: { each: 0.1, from: "end" },
  }, `+=${0.8}`);

  const mainScrollTrigger = tl.scrollTrigger;
  const progressCircle = document.querySelector("#progress-circle");
  const timerText1 = document.querySelector("#timer-text-1");
  const timerTextBreak = document.querySelector("#timer-text-break");
  const timerTextHabit = document.querySelector("#timer-text-habit");
  const timerText2 = document.querySelector("#timer-text-2");

  if (mainScrollTrigger && progressCircle) {
    const radius = (progressCircle as SVGCircleElement).r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    gsap.set(progressCircle, { attr: { 'stroke-dashoffset': circumference } });

    const timers = {
      focus1: 25 * 60,
      break: 5 * 60,
      meditation: 5 * 60,
      focus2: 25 * 60,
    };

    const updateTimerText = (element: Element, totalSeconds: number, progress: number) => {
      const timeInSeconds = totalSeconds * (1 - progress);
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = Math.floor(timeInSeconds % 60);
      element.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const createProgressTrigger = (startLabel: string, endLabel: string, timerElement: Element | null, totalSeconds: number) => {
      ScrollTrigger.create({
        trigger: mainScrollTrigger.trigger,
        start: () => mainScrollTrigger.labelToScroll(startLabel),
        end: () => mainScrollTrigger.labelToScroll(endLabel),
        scrub: 0.5, // The fix: adds a 0.5-second smoothing effect
        onEnter: () => gsap.set(progressCircle, { attr: { 'stroke-dashoffset': circumference } }),
        onUpdate: (self) => {
          gsap.set(progressCircle, { attr: { 'stroke-dashoffset': circumference * (1 - self.progress) } });
          if (timerElement) updateTimerText(timerElement, totalSeconds, self.progress);
        },
        onLeave: () => gsap.set(progressCircle, { attr: { 'stroke-dashoffset': 0 } }),
        onEnterBack: () => gsap.set(progressCircle, { attr: { 'stroke-dashoffset': 0 } }),
        onLeaveBack: () => gsap.set(progressCircle, { attr: { 'stroke-dashoffset': circumference } }),
      });
    };

    createProgressTrigger("phase-2", "phase-3", timerText1, timers.focus1);
    createProgressTrigger("phase-4", "phase-5", timerTextBreak, timers.break);
    createProgressTrigger("phase-5", "phase-6", timerTextHabit, timers.meditation);
    createProgressTrigger("phase-6", "phase-7", timerText2, timers.focus2);
  }
}

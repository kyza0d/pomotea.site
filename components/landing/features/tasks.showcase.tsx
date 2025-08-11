import React from "react";
import { Brain, Clock, Coffee, Timer as TimerIcon } from "lucide-react";
import { Mascot } from "@/components/ui/mascot";
import { clsx } from "clsx";
import { CircularProgressSVG } from "../items";
import { DisplaySection, type FeatureData, type WorkflowState, type PhaseContent } from "./display-section";
import { showcaseData, workflowMessages, showcaseExtras } from "@/copy/showcase";
import {
  TimerStatus,
  MessageRow,
  TaskListCard,
  TaskCompletedCard,
  SessionIndicatorCard,
  WorkflowDisplay
} from "./shared/workflow-components";

import { SkewedSessionItem, type SkewedSessionItemProps } from "../shared/ui-components";

import { FaCheckCircle, FaClock, FaList, FaStream } from "react-icons/fa";
import { cn } from "@/lib/utils";

const colorThemes = {
  primary: { text: "text-landing-foreground", border: "border-landing-borders", bg: "bg-landing-base/30" },
  purple: { text: "text-landing-foreground", border: "border-purple-500/30", bg: "bg-purple-500/10" },
  green: { text: "text-landing-primary/40", border: "border-green-500", bg: "bg-green-500" },
};

const workflowStates: WorkflowState[] = [
  {
    phase: "ai-interaction",
    elements: [
      <MessageRow isUser key="p1-user-1">{workflowMessages.tasks.userStart}</MessageRow>,
      <MessageRow key="p1-ai-1" showTimeline>{workflowMessages.tasks.aiSessionStart}</MessageRow>,
      <MessageRow avatarIcon={Mascot} key="p1-ai-2" isJsx>
        <TimerStatus
          duration={1500} // 25 min
          timeRemaining={1500}
          sessionType="work"
          currentGoal={workflowMessages.tasks.timerStatus}
        />
      </MessageRow>
    ]
  },
  {
    phase: "task-generation",
    elements: [
      <MessageRow key="p2-ai-1" showTimeline>{workflowMessages.tasks.tasksIntro}</MessageRow>,
      <MessageRow avatarIcon={FaList} key="p2-tool-1" isJsx>
        <TaskListCard title={workflowMessages.tasks.taskTitle} tasks={workflowMessages.tasks.exampleTasks} />
      </MessageRow>
    ]
  },
  {
    phase: "session-start",
    elements: [
      <MessageRow avatarIcon={TimerIcon} key="p3-tool-1" isJsx>
        <SessionIndicatorCard
          title={workflowMessages.tasks.sessionStarted.title}
          subtitle={workflowMessages.tasks.sessionStarted.subtitle}
          colorClass={clsx(colorThemes.primary.text, colorThemes.primary.border, colorThemes.primary.bg)}
        />
      </MessageRow>
    ]
  },
  {
    phase: "session-complete",
    elements: [
      <MessageRow avatarIcon={FaCheckCircle} key="p4-tool-1" isJsx>
        <TaskCompletedCard title={workflowMessages.tasks.sessionCompleted.title} completedTasks={workflowMessages.tasks.sessionCompleted.completedTasks} />
      </MessageRow>
    ]
  },
  {
    phase: "break-start",
    elements: [
      <MessageRow avatarIcon={TimerIcon} key="p5-tool-1" isJsx>
        <SessionIndicatorCard
          title={workflowMessages.tasks.breakStarted.title}
          subtitle={workflowMessages.tasks.breakStarted.subtitle}
          colorClass={clsx(colorThemes.primary.text, colorThemes.primary.border)}
        />
      </MessageRow>
    ]
  },
  {
    phase: "habit-start",
    elements: [
      <MessageRow avatarIcon={Brain} key="p6-tool-1" isJsx>
        <SessionIndicatorCard
          title={workflowMessages.tasks.habitStarted.title}
          subtitle={workflowMessages.tasks.habitStarted.subtitle}
          colorClass={clsx(colorThemes.primary.text, colorThemes.primary.border)}
        />
      </MessageRow>
    ]
  },
  {
    phase: "session-start-2",
    elements: [
      <MessageRow avatarIcon={FaClock} key="p7-tool-1" isJsx>
        <SessionIndicatorCard
          title={workflowMessages.tasks.sessionStarted2.title}
          subtitle={workflowMessages.tasks.sessionStarted2.subtitle}
          colorClass={clsx(colorThemes.primary.text, colorThemes.primary.border)}
        />
      </MessageRow>
    ]
  },
];

const sessionCardData: SkewedSessionItemProps[] = [
  { id: "session-card-1", timeId: "timer-text-1", icon: Clock, title: "Focus", time: "25:00", description: "Clean your workspace, turn off notifications, and focus on one task at a time." },
  { id: "session-card-2", timeId: "timer-text-break", icon: Coffee, title: "Break", time: "05:00", description: "Take a short break to recharge. Stretch, hydrate, or take a quick walk." },
  { id: "session-card-habit", timeId: "timer-text-habit", icon: Brain, title: "Meditation", time: "05:00", description: "A short, guided session to clear your mind and reset your focus.", className: "border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-landing-base", iconClassName: "text-purple-400" },
  { id: "session-card-3", timeId: "timer-text-2", icon: Clock, title: "Focus", time: "25:00", description: "Review project files and identify areas for optimization and refactoring." },
  { id: "session-card-4", timeId: "timer-text-break", icon: Coffee, title: "Break", time: "05:00", description: "Take a short break to recharge. Stretch, hydrate, or take a quick walk." },
  { id: "session-card-5", timeId: "timer-text-1", icon: Clock, title: "Focus", time: "25:00", description: "Clean your workspace, turn off notifications, and focus on one task at a time." },
];

const phaseContent: Record<string, PhaseContent> = showcaseData.tasks.phaseContent;

const AIFeatureVisual = ({ workflowStates }: { workflowStates: WorkflowState[] }) => (
  <>
    <div className="absolute origin-top-left scale-60 md:scale-80 lg:scale-100 top-2 left-2 md:top-5 md:left-5 lg:top-8 lg:left-8">
      <WorkflowDisplay workflowStates={workflowStates} />
    </div>

    <div className={cn(
      // Base positioning
      "absolute left-3/5 sm:left-3/5 md:left-1/2 top-1/5 md:top-4/7 -translate-x-1/2 origin-right -skew-x-26 skew-y-12",

      "sm:ml-8",
      "md:ml-12",
      "lg:ml-20",
      "xl:ml-30",

      "scale-75",
      "sm:scale-85",
      "md:scale-95",
      "lg:scale-105",
      "xl:scale-130"
    )}>
      <div className="absolute left-0" id="timer-display-wrapper">
        <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6 lg:space-x-8">
          <CircularProgressSVG
            size={80}
            strokeWidth={6}
            progress={0}
            className="circular-progress-svg sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[90px] lg:h-[90px]"
          />
          <div className="space-y-0 min-w-0 flex-1">
            <span
              id="timer-session-type"
              className="text-xs sm:text-sm text-landing-foreground block"
            >
{showcaseExtras.tasks.timerDisplay.sessionType}
            </span>
            <h3
              id="timer-task-name"
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-landing-headers truncate"
            >
              {showcaseExtras.tasks.timerDisplay.taskName}
            </h3>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden fade-box mt-18 lg:mt-24 h-96 sm:h-104 md:h-112 lg:h-120 xl:h-126 pt-4 sm:pt-6 md:pt-8">
        <div
          id="session-cards-scroller"
          className="space-y-12 mt-16"
        >
          {sessionCardData.map((card) => (
            <SkewedSessionItem key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  </>
);

const featureData: FeatureData = {
  icon: FaStream,
  title: showcaseData.tasks.title,
  subtitle: showcaseData.tasks.subtitle,
  heading: showcaseData.tasks.heading,
  description: showcaseData.tasks.description,
  animation: { order: "interleave", visual: { autoAlpha: 0, x: 30 }, copy: { autoAlpha: 0, x: -30 }, end: "+=1600%" },
  visual: <AIFeatureVisual workflowStates={workflowStates} />,
  hasWorkflow: true,
  workflowType: "tasks",
  workflowStates,
  phaseContent,
};


export const TasksScroll = ({ index, onActivate }: { index: number; onActivate: (i: number) => void }) => (
  <DisplaySection data={featureData} index={index} onActivate={onActivate} />
);

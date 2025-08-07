import React from "react";
import { Clock, Coffee, Zap, CheckCircle, Timer as TimerIcon, Brain, AlignLeft } from "lucide-react";
import { Mascot } from "@/components/ui/mascot";
import { clsx } from "clsx";
import { SkewedCard, CircularProgressSVG } from "../items";
import { DisplaySection, type FeatureData, type WorkflowState, type PhaseContent } from "./display-section";
import {
  TimerStatus,
  MessageRow,
  TaskListCard,
  TaskCompletedCard,
  SessionIndicatorCard,
  WorkflowDisplay
} from "./shared/workflow-components";
import { FaBars } from "react-icons/fa";
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
      <MessageRow isUser key="p1-user-1">Let's continue working on our website</MessageRow>,
      <MessageRow key="p1-ai-1" showTimeline>Sounds good, I'll start a work session.</MessageRow>,
      <MessageRow avatarIcon={Mascot} key="p1-ai-2" isJsx>
        <TimerStatus
          duration={1500} // 25 min
          timeRemaining={1500}
          sessionType="work"
          currentGoal="Preparing your session..."
        />
      </MessageRow>
    ]
  },
  {
    phase: "task-generation",
    elements: [
      <MessageRow key="p2-ai-1" showTimeline>Here are your tasks for today:</MessageRow>,
      <MessageRow avatarIcon={Zap} key="p2-tool-1" isJsx>
        <TaskListCard title="Tasks for 'Website Development'" tasks={["Clean workspace and organize desk", "Review project files for efficiency"]} />
      </MessageRow>
    ]
  },
  {
    phase: "session-start",
    elements: [
      <MessageRow avatarIcon={TimerIcon} key="p3-tool-1" isJsx>
        <SessionIndicatorCard
          title="Focus Session Started"
          subtitle="Clean workspace and organize desk"
          colorClass={clsx(colorThemes.primary.text, colorThemes.primary.border, colorThemes.primary.bg)}
        />
      </MessageRow>
    ]
  },
  {
    phase: "session-complete",
    elements: [
      <MessageRow avatarIcon={CheckCircle} key="p4-tool-1" isJsx>
        <TaskCompletedCard title="Focus session completed!" completedTasks={["Clean workspace and organize desk"]} />
      </MessageRow>
    ]
  },
  {
    phase: "break-start",
    elements: [
      <MessageRow avatarIcon={TimerIcon} key="p5-tool-1" isJsx>
        <SessionIndicatorCard
          title="Break Session Started"
          subtitle="Time to recharge"
          colorClass={clsx(colorThemes.primary.text, colorThemes.primary.border)}
        />
      </MessageRow>
    ]
  },
  {
    phase: "habit-start",
    elements: [
      <MessageRow avatarIcon={Mascot} key="p6-tool-1" isJsx>
        <SessionIndicatorCard
          title="Meditation Session"
          subtitle="Mindfulness break"
          colorClass={clsx(colorThemes.primary.text, colorThemes.primary.border)}
        />
      </MessageRow>
    ]
  },
  {
    phase: "session-start-2",
    elements: [
      <MessageRow avatarIcon={TimerIcon} key="p7-tool-1" isJsx>
        <SessionIndicatorCard
          title="Focus Session Started"
          subtitle="Review project files for efficiency"
          icon={Clock}
          colorClass={clsx(colorThemes.primary.text, colorThemes.primary.border)}
        />
      </MessageRow>
    ]
  },
];

type SessionCardProps = {
  id: string;
  timeId: string;
  icon: React.ElementType;
  title: string;
  time: string;
  description: string;
  className?: string;
  iconClassName?: string;
};

const SessionCard = ({ id, timeId, icon: Icon, title, time, description, className, iconClassName }: SessionCardProps) => (
  <div className={clsx("session-card", id)}>
    <SkewedCard className={clsx("h-30 w-120 md:w-130 flex items-center justify-between px-4 relative", className)}>
      <div className={clsx("absolute flex flex-row items-center top-0 -mt-8 text-sm", iconClassName || "text-landing-foreground")}>
        <Icon className="mr-4" size={16} />
        {title}
      </div>
      <div className="text-2xl font-bold pl-4 text-landing-headers">
        <span id={timeId} className="text-2xl font-bold text-landing-headers">{time}</span>
      </div>
      <div className="max-w-[300px] text-sm pr-4 text-landing-foreground/70">
        {description}
      </div>
    </SkewedCard>
  </div>
);

const sessionCardData: SessionCardProps[] = [
  { id: "session-card-1", timeId: "timer-text-1", icon: Clock, title: "Focus", time: "25:00", description: "Clean your workspace, turn off notifications, and focus on one task at a time." },
  { id: "session-card-2", timeId: "timer-text-break", icon: Coffee, title: "Break", time: "05:00", description: "Take a short break to recharge. Stretch, hydrate, or take a quick walk." },
  { id: "session-card-habit", timeId: "timer-text-habit", icon: Brain, title: "Meditation", time: "05:00", description: "A short, guided session to clear your mind and reset your focus.", className: "border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-landing-base", iconClassName: "text-purple-400" },
  { id: "session-card-3", timeId: "timer-text-2", icon: Clock, title: "Focus", time: "25:00", description: "Review project files and identify areas for optimization and refactoring." },
  { id: "session-card-4", timeId: "timer-text-break", icon: Coffee, title: "Break", time: "05:00", description: "Take a short break to recharge. Stretch, hydrate, or take a quick walk." },
  { id: "session-card-5", timeId: "timer-text-1", icon: Clock, title: "Focus", time: "25:00", description: "Clean your workspace, turn off notifications, and focus on one task at a time." },
];

const phaseContent: Record<string, PhaseContent> = {
  "ai-interaction": { heading: "Start with Simple Conversations", description: "Tell Pomotea about your goals in natural language. The AI understands context and helps translate your ideas into actionable tasks.", listItems: ["Natural language goal processing", "Context-aware task interpretation", "Smart goal breakdown and analysis", "Conversational task planning"] },
  "task-generation": { heading: "Watch Tasks Generate Automatically", description: "From your conversation, Pomotea creates a structured task list with optimal ordering and clear priorities, ready for focused work sessions.", listItems: ["AI-driven task generation from goals", "Intelligent task prioritization", "Automatic task sequencing", "Context-based task structuring"] },
  "session-start": { heading: "Focus Sessions <br/>Begin Seamlessly", description: "With tasks ready, Pomotea automatically starts focus sessions with optimal timing, keeping you in flow state without manual intervention.", listItems: ["Automated focus session scheduling", "Intelligent timer management", "Seamless session transitions", "Flow state optimization"] },
  "session-complete": { heading: "Progress Tracking <br/>Made Effortless", description: "As you complete sessions, Pomotea tracks your progress and intelligently adjusts upcoming tasks and timers based on your productivity patterns.", listItems: ["Automatic progress tracking", "Intelligent timer adjustments", "Productivity pattern analysis", "Adaptive workflow optimization"] },
  "break-start": { heading: "Recharge with Smart Breaks", description: "After completing a focus session, Pomotea automatically schedules a break to help you rest and prepare for mindfulness activities.", listItems: ["Automatic break scheduling", "Customizable break durations", "Prevents burnout", "Prepares mind for mindfulness"] },
  "habit-start": { heading: "Integrate Healthy Habits", description: "Following your break, Pomotea encourages mindfulness with short, guided habits like meditation, helping you reset your focus effectively.", listItems: ["Seamless habit integration", "Guided mindfulness breaks", "Recharge and refocus", "Build consistent wellness routines"] },
  "session-start-2": { heading: "Maintain Your Momentum", description: "After a refreshing break, Pomotea seamlessly transitions you to the next task, helping you dive back into a state of deep focus effortlessly.", listItems: ["Automated next-task queuing", "Maintains productivity flow", "Reduces context-switching friction", "Keeps your goals on track"] }
};

const AIFeatureVisual = ({ workflowStates }: { workflowStates: WorkflowState[] }) => (
  <>
    <div className="absolute origin-top-left scale-60 md:scale-80 lg:scale-100 top-2 left-2 md:top-5 md:left-5 lg:top-8 lg:left-8">
      <WorkflowDisplay workflowStates={workflowStates} />
    </div>

    <div className={cn(
      // Base positioning
      "absolute left-3/5 sm:left-2/4 md:left-1/2 -translate-x-1/2 top-1/4 sm:top-3/5 origin-right -skew-x-26 skew-y-12",

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
      <div className="absolute left-0 -top-8 sm:-top-10 md:-top-16 lg:-top-20 xl:-top-30" id="timer-display-wrapper">
        <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6 lg:space-x-8">
          <CircularProgressSVG
            size={60}
            strokeWidth={6}
            progress={0}
            className="circular-progress-svg sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[90px] lg:h-[90px]"
          />
          <div className="space-y-0 min-w-0 flex-1">
            <span
              id="timer-session-type"
              className="text-xs sm:text-sm text-landing-foreground block"
            >
              Focusing on:
            </span>
            <h3
              id="timer-task-name"
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-landing-headers truncate"
            >
              Clean workspace
            </h3>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden fade-box top-1/2 left-0 h-96 sm:h-104 md:h-112 lg:h-120 xl:h-126 pt-4 sm:pt-6 md:pt-8">
        <div
          id="session-cards-scroller"
          className="space-y-12 mt-16"
        >
          {sessionCardData.map((card) => (
            <SessionCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  </>
);

const featureData: FeatureData = {
  icon: FaBars,
  title: "Session based",
  subtitle: "Task Management",
  heading: "Automate Your Workflow, from Tasks to Timers",
  description: "Pomotea's AI doesn't just manage tasks; it builds your entire focus schedule. Describe your goals, and watch as it generates a structured task list and automatically schedules focus and break sessions, keeping you in a state of flow.",
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

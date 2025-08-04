import React from "react";
import { Brain, Clock, Coffee, Zap, CheckCircle, Timer as TimerIcon, User, Bot } from "lucide-react";
import { clsx } from "clsx";
import { SkewedCard, CircularProgressSVG } from "../items";
import { DisplaySection, type FeatureData, type WorkflowState, type PhaseContent } from "./display-section";
import { FiCheck } from "react-icons/fi";

const Text = ({ children, size, className }: { children: React.ReactNode; size?: 'sm' | 'xs'; className?: string }) => {
  const sizeClasses = {
    sm: 'text-sm',
    xs: 'text-xs'
  };
  return (
    <p className={clsx(size && sizeClasses[size], className)}>
      {children}
    </p>
  );
};

export interface TimerStatusProps {
  duration: number;
  timeRemaining: number;
  sessionType: "work" | "break";
  currentGoal?: string;
  className?: string;
  onClick?: () => void;
}

const TimerStatus: React.FC<TimerStatusProps> = ({
  duration,
  timeRemaining,
  sessionType,
  currentGoal,
  className,
}) => {
  const progress = duration > 0 ? ((duration - timeRemaining) / duration) * 100 : 0;
  const circumference = 2 * Math.PI * 8; // radius = 8
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = Math.floor(totalSeconds % 60);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div
      className={clsx(
        "flex items-center gap-3 py-2 px-3 rounded-lg bg-landing-base rounded-xl border-2 border-landing-borders/60 transition-colors cursor-pointer w-full",
        className
      )}
    >
      {/* Circular Progress */}
      <div className="relative w-8 h-8 flex-shrink-0 flex items-center mr-1">
        <svg className="w-8 h-8 -rotate-90" viewBox="0 0 20 20">
          {/* Background circle */}
          <circle
            cx="10"
            cy="10"
            r="8"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-landing-borders/40"
          />
          {/* Progress circle */}
          <circle
            cx="10"
            cy="10"
            r="8"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="text-landing-primary transition-all duration-300"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Timer Info */}
      <div className="flex-grow min-w-0">
        <Text size="sm" className="font-medium text-landing-foreground">
          {sessionType === "work" ? "Focus session" : "Break time"} • {formatTime(timeRemaining)}
        </Text>
        {currentGoal && (
          <Text size="xs" className="text-landing-foreground/80 truncate">
            {currentGoal}
          </Text>
        )}
      </div>
    </div>
  );
};

const MessageBubble = ({ children, isUser, jsx = false }: { children: React.ReactNode; isUser: boolean; jsx?: boolean }) => (
  <div className={clsx(
    !jsx && "px-4 py-3 rounded-xl",
    isUser ? "bg-landing-secondary-shaded/30 border-2 border-landing-borders" : "bg-landing-base border-2 border-landing-borders"
  )}>
    <p className="text-xs text-landing-foreground break-words">{children}</p>
  </div>
);

const UserAvatar = () => (
  <div className="mt-2 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-landing-primary/20 text-landing-primary">
    <User size={16} />
  </div>
);

const AssistantAvatar = ({ icon: Icon = Bot }: { icon?: React.ElementType }) => (
  <div className="mt-2 relative z-10 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-landing-borders/70 border border-landing-borders/20">
    <Icon size={16} className="text-landing-foreground/80" />
  </div>
);

const MessageRow = ({
  isUser = false,
  avatarIcon,
  children,
  showTimeline = false,
  isJsx = false
}: {
  isUser?: boolean;
  avatarIcon?: React.ElementType;
  children: React.ReactNode;
  showTimeline?: boolean;
  isJsx?: boolean;
}) => {
  // To avoid duplication, we can define the message content once.
  const messageContent = (
    <div>
      {isJsx ? <>{children}</> :
        <MessageBubble isUser={isUser}>
          {children}
        </MessageBubble>}
    </div>
  );

  return (
    <div className={clsx("relative flex items-start gap-3 w-full mb-3", isUser ? "justify-end" : "justify-start")}>
      {isUser ? (
        // Layout for the User's message
        <>
          {messageContent}
          <div className="flex-shrink-0">
            <UserAvatar />
          </div>
        </>
      ) : (
        // Layout for the Assistant's message
        <>
          <div className="w-8 flex-shrink-0 relative">
            {showTimeline && (
              <div
                className="absolute left-4 w-px bg-landing-borders/30"
                style={{ top: '2.5rem', bottom: '-0.75rem', zIndex: -1 }}
              />
            )}
            <AssistantAvatar icon={avatarIcon} />
          </div>
          {messageContent}
        </>
      )}
    </div>
  );
};


const TaskListItem = ({ children, completed = false }: { children: React.ReactNode; completed?: boolean; }) => (
  <div className="flex items-center gap-3">
    <div className={clsx(
      "w-5 h-5 rounded-sm border-2 flex-shrink-0 flex items-center justify-center",
      completed ? "border-landing-borders/80" : "border-landing-borders/80"
    )}>
      {completed && <FiCheck size={15} className="text-landing-primary" />}
    </div>
    <span className={clsx("text-xs", completed ? "line-through text-landing-foreground/50" : "text-landing-foreground/90")}>
      {children}
    </span>
  </div>
);

const TaskListCard = ({ title, tasks }: { title: string; tasks: string[] }) => (
  <div className="p-3 rounded-xl bg-landing-base border-2 border-landing-borders/80 w-full">
    <h4 className="text-xs font-semibold text-landing-headers mb-2">{title}</h4>
    <div className="space-y-2">
      {tasks.map((task, i) => (
        <TaskListItem key={i}>{task}</TaskListItem>
      ))}
    </div>
  </div>
);

const TaskCompletedCard = ({ title, completedTasks }: { title: string; completedTasks: string[] }) => (
  <div className="p-3 rounded-xl bg-landing-base border-2 border-landing-borders/80 w-full">
    <h4 className="text-xs font-semibold text-green-400 mb-2">{title}</h4>
    <div className="space-y-2">
      {completedTasks.map((task, i) => (
        <TaskListItem key={i} completed>{task}</TaskListItem>
      ))}
    </div>
  </div>
);

const SessionIndicatorCard = ({ title, subtitle, icon: Icon, colorClass }: { title: string, subtitle: string, icon?: React.ElementType, colorClass: string }) => (
  <div className={clsx("p-3 rounded-xl border-2 w-full bg-landing-base", colorClass, "border-opacity-30")}>
    <div className={clsx("flex items-center gap-2 mb-1")}>
      {Icon && <Icon size={12} />}
      <span className="text-xs font-medium">{title}</span>
    </div>
    <div className="text-xs text-landing-foreground/70">{subtitle}</div>
  </div>
);


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
      <MessageRow avatarIcon={Bot} key="p1-ai-2" isJsx>
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
      <MessageRow avatarIcon={Brain} key="p6-tool-1" isJsx>
        <SessionIndicatorCard
          title="Meditation Session"
          subtitle="Mindfulness break"
          colorClass={clsx(colorThemes.purple.text, colorThemes.purple.border, colorThemes.purple.bg)}
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
    <SkewedCard className={clsx("h-30 w-150 flex items-center justify-between px-4 relative", className)}>
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
  "session-start": { heading: "Focus Sessions Begin Seamlessly", description: "With tasks ready, Pomotea automatically starts focus sessions with optimal timing, keeping you in flow state without manual intervention.", listItems: ["Automated focus session scheduling", "Intelligent timer management", "Seamless session transitions", "Flow state optimization"] },
  "session-complete": { heading: "Progress Tracking Made Effortless", description: "As you complete sessions, Pomotea tracks your progress and intelligently adjusts upcoming tasks and timers based on your productivity patterns.", listItems: ["Automatic progress tracking", "Intelligent timer adjustments", "Productivity pattern analysis", "Adaptive workflow optimization"] },
  "break-start": { heading: "Recharge with Smart Breaks", description: "After completing a focus session, Pomotea automatically schedules a break to help you rest and prepare for mindfulness activities.", listItems: ["Automatic break scheduling", "Customizable break durations", "Prevents burnout", "Prepares mind for mindfulness"] },
  "habit-start": { heading: "Integrate Healthy Habits", description: "Following your break, Pomotea encourages mindfulness with short, guided habits like meditation, helping you reset your focus effectively.", listItems: ["Seamless habit integration", "Guided mindfulness breaks", "Recharge and refocus", "Build consistent wellness routines"] },
  "session-start-2": { heading: "Maintain Your Momentum", description: "After a refreshing break, Pomotea seamlessly transitions you to the next task, helping you dive back into a state of deep focus effortlessly.", listItems: ["Automated next-task queuing", "Maintains productivity flow", "Reduces context-switching friction", "Keeps your goals on track"] }
};

const AIFeatureVisual = ({ workflowStates }: { workflowStates: WorkflowState[] }) => (
  <>
    <div className="absolute top-8 left-8">
      <WorkflowDisplay workflowStates={workflowStates} />
    </div>

    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 origin-right -skew-x-26 skew-y-12 scale-110">
      <div className="absolute -top-32 left-0" id="timer-display-wrapper">
        <div className="flex items-center space-x-8">
          <CircularProgressSVG size={90} strokeWidth={8} progress={0} className="circular-progress-svg" />
          <div>
            <span id="timer-session-type" className="text-landing-foreground">Focusing on:</span>
            <h3 id="timer-task-name" className="text-2xl font-bold text-landing-headers">Clean workspace</h3>
          </div>
        </div>
      </div>

      <div className="relative h-126 pt-8 overflow-hidden fade-box top-1/2 left-0">
        <div id="session-cards-scroller" className="space-y-14 mt-10">
          {sessionCardData.map((card) => (
            <SessionCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  </>
);

const featureData: FeatureData = {
  icon: Brain,
  title: "AI-Powered",
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

const WorkflowDisplay = ({ workflowStates }: { workflowStates: WorkflowState[] }) => (
  <div className="w-80 space-y-3 workflow-container relative h-[300px]">
    {workflowStates.map((state, stateIndex) => (
      <div key={stateIndex} className="workflow-phase absolute inset-0">
        <div className="space-y-1 flex flex-col">
          {state.elements.map((element, elementIndex) => (
            <div key={`${stateIndex}-${elementIndex}`} className={`workflow-child-${stateIndex} workflow-element`}>
              {element}
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export const TasksScroll = ({ index, onActivate }: { index: number; onActivate: (i: number) => void }) => (
  <DisplaySection data={featureData} index={index} onActivate={onActivate} />
);

import React from "react";
import { clsx } from "clsx";
import { FiCheck, FiChevronRight } from "react-icons/fi";
import { User, Bot, BookOpen, Code } from "lucide-react";
import { HiPaperClip } from "react-icons/hi2";
import { Mascot } from "@/components/ui/mascot";
import { WorkflowState } from "../display-section";


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

export const TimerStatus: React.FC<TimerStatusProps> = ({
  duration,
  timeRemaining,
  sessionType,
  currentGoal,
  className,
}) => {
  const progress = duration > 0 ? ((duration - timeRemaining) / duration) * 100 : 0;
  const circumference = 2 * Math.PI * 8;
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
      <div className="relative w-8 h-8 flex-shrink-0 flex items-center mr-1">
        <svg className="w-8 h-8 -rotate-90" viewBox="0 0 20 20">
          <circle
            cx="10"
            cy="10"
            r="8"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-landing-borders/40"
          />
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

export const MessageBubble = ({ children, isUser, jsx = false }: { children: React.ReactNode; isUser: boolean; jsx?: boolean }) => (
  <div className={clsx(
    !jsx && "px-4 py-3 rounded-xl",
    isUser ? "bg-landing-secondary-shaded/30 border-2 border-landing-borders" : "bg-landing-base border-2 border-landing-borders"
  )}>
    <p className="text-xs text-landing-foreground break-words">{children}</p>
  </div>
);

export const UserAvatar = () => (
  <div className="mt-2 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-landing-primary/20 text-landing-primary">
    <User size={16} />
  </div>
);

export const AssistantAvatar = ({ icon: Icon = Mascot }: { icon?: React.ElementType }) => (
  <div className="mt-2 relative z-10 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-landing-borders/70 border border-landing-borders/20">
    <Icon size={16} className="text-landing-foreground/80" />
  </div>
);

export const MessageRow = ({
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
        <>
          {messageContent}
          <div className="flex-shrink-0">
            <UserAvatar />
          </div>
        </>
      ) : (
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

export const TaskListItem = ({ children, completed = false }: { children: React.ReactNode; completed?: boolean; }) => (
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

export const TaskListCard = ({ title, tasks }: { title: string; tasks: string[] }) => (
  <div className="p-3 rounded-xl bg-landing-base border-2 border-landing-borders/80 w-full">
    <h4 className="text-xs font-semibold text-landing-headers mb-2">{title}</h4>
    <div className="space-y-2">
      {tasks.map((task, i) => (
        <TaskListItem key={i}>{task}</TaskListItem>
      ))}
    </div>
  </div>
);

export const TaskCompletedCard = ({ title, completedTasks }: { title: string; completedTasks: string[] }) => (
  <div className="p-3 rounded-xl bg-landing-base border-2 border-landing-borders/80 w-full">
    <h4 className="text-xs font-semibold text-green-400 mb-2">{title}</h4>
    <div className="space-y-2">
      {completedTasks.map((task, i) => (
        <TaskListItem key={i} completed>{task}</TaskListItem>
      ))}
    </div>
  </div>
);

export const SessionIndicatorCard = ({ title, subtitle, icon: Icon, colorClass }: { title: string, subtitle: string, icon?: React.ElementType, colorClass: string }) => (
  <div className={clsx("p-3 rounded-xl border-2 w-full bg-landing-base", colorClass, "border-opacity-30")}>
    <div className={clsx("flex items-center gap-2 mb-1")}>
      {Icon && <Icon size={12} />}
      <span className="text-xs font-medium">{title}</span>
    </div>
    <div className="text-xs text-landing-foreground/70">{subtitle}</div>
  </div>
);

export const WorkflowDisplay = ({ workflowStates }: { workflowStates: WorkflowState[] }) => (
  <div className="w-80 space-y-3 workflow-container relative h-[300px]">
    {workflowStates.map((state, stateIndex) => (
      <div key={stateIndex} className="workflow-phase absolute inset-0">
        <div className="space-y-1 flex flex-col">
          {state.elements.map((element: React.ReactNode, elementIndex: number) => (
            <div key={`${stateIndex}-${elementIndex}`} className={`workflow-child-${stateIndex} workflow-element`}>
              {element}
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export const FileAttachmentChip = ({ fileName }: { fileName: string }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-landing-secondary-shaded/40 border border-landing-borders">
    <HiPaperClip className="text-landing-foreground/80" size={16} />
    <span className="text-xs font-medium text-landing-foreground">{fileName}</span>
  </div>
);

export const MonthlySummaryCard = () => (
  <div className="p-3 rounded-xl bg-landing-base border-2 border-landing-borders/80 w-full space-y-3">
    <div>
      <div className="flex items-center gap-2 text-xs font-semibold text-landing-headers mb-1">
        <BookOpen size={14} />
        <span>Advanced React Course</span>
      </div>
      <div className="text-xs text-landing-foreground/80 pl-6">
        <span className="font-medium text-landing-primary">18 hours</span> spent, <span className="font-medium text-landing-primary">42 tasks</span> completed
      </div>
    </div>
    <div>
      <div className="flex items-center gap-2 text-xs font-semibold text-landing-headers mb-1">
        <Code size={14} />
        <span>New App Build</span>
      </div>
      <div className="text-xs text-landing-foreground/80 pl-6">
        <span className="font-medium text-landing-primary">32 hours</span> spent, <span className="font-medium text-landing-primary">51 tasks</span> completed
      </div>
    </div>
  </div>
);

export interface MultiLevelTask {
  title: string;
  subtasks?: MultiLevelTask[];
}

const MultiLevelTaskItem: React.FC<{ task: MultiLevelTask; level?: number }> = ({ task, level = 0 }) => {
  const hasSubtasks = task.subtasks && task.subtasks.length > 0;

  return (
    <div>
      <div className="flex items-center gap-3" style={{ paddingLeft: `${level * 16}px` }}>
        {hasSubtasks ? (
          <div className="flex">
            <FiChevronRight className="w-4 h-4 mr-2 text-landing-foreground/50 flex-shrink-0 mt-0.5" />
            <div className="w-5 h-5 rounded-sm border-2 flex-shrink-0 border-landing-borders/80" />
          </div>
        ) : (
          <div className="w-5 h-5 rounded-sm border-2 flex-shrink-0 border-landing-borders/80" />
        )}
        <span className="text-xs text-landing-foreground/90">{task.title}</span>
      </div>
      {hasSubtasks && (
        <div className="space-y-2 mt-2 pl-8">
          {task.subtasks!.map((subtask, index) => (
            <MultiLevelTaskItem key={index} task={subtask} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export const MultiLevelTaskListCard = ({ title, tasks }: { title: string; tasks: MultiLevelTask[] }) => (
  <div className="p-3 rounded-xl bg-landing-base border-2 border-landing-borders/80 w-full">
    <h4 className="text-xs font-semibold text-landing-headers mb-3">{title}</h4>
    <div className="space-y-2">
      {tasks.map((task, i) => (
        <MultiLevelTaskItem key={i} task={task} />
      ))}
    </div>
  </div>
);

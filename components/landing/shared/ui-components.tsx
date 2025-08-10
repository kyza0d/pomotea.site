import React from 'react';
import { User, Clock, Coffee, Brain, Paperclip, Mic, ArrowUpRight } from 'lucide-react';
import { FiCheck } from 'react-icons/fi';
import { Mascot } from '@/components/ui/mascot';
import { clsx } from 'clsx';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { HiArrowUturnRight, HiPaperClip } from 'react-icons/hi2';
import { FaMicrophone } from 'react-icons/fa';

// Types
export type Session = {
  id: number | string;
  type: string;
  duration: string;
  task: string;
  icon: React.ElementType;
  active?: boolean;
  special?: boolean;
};

export type SkewedSessionItemProps = {
  id: string;
  timeId: string;
  icon: React.ElementType;
  title: string;
  time: string;
  description: string;
  className?: string;
  iconClassName?: string;
};

export type SessionCardProps = {
  id: string;
  timeId: string;
  icon: React.ElementType;
  title: string;
  time: string;
  description: string;
  className?: string;
  iconClassName?: string;
};


// Avatar Components
export const UserAvatar = ({ size = 14, className }: { size?: number; className?: string }) => (
  <div className={cn(
    "mt-1 sm:mt-2 w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0 bg-landing-primary/20 text-landing-primary",
    className
  )}>
    <User size={size} className="sm:w-4 sm:h-4" />
  </div>
);

export const AssistantAvatar = ({
  icon: Icon = Mascot,
  size = 14,
  className
}: {
  icon?: React.ElementType;
  size?: number;
  className?: string;
}) => (
  <div className={cn(
    "mt-1 sm:mt-2 relative z-10 w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0 bg-landing-borders/70 border border-landing-borders/20",
    className
  )}>
    <Icon size={size} className="sm:w-4 sm:h-4 text-landing-foreground/80" />
  </div>
);

// Message Components
export const MessageBubble = ({
  children,
  isUser,
  className
}: {
  children: React.ReactNode;
  isUser: boolean;
  className?: string;
}) => (
  <div className={cn(
    "px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-3 rounded-lg sm:rounded-xl",
    isUser
      ? "bg-landing-secondary-shaded/30 border sm:border-2 border-landing-borders"
      : "bg-landing-base border sm:border-2 border-landing-borders",
    className
  )}>
    <div className="text-[10px] sm:text-xs text-landing-foreground break-words">{children}</div>
  </div>
);

export const MessageRow = ({
  isUser = false,
  children,
  avatarIcon,
  showTimeline = false,
  isJsx = false,
  className
}: {
  isUser?: boolean;
  children: React.ReactNode;
  avatarIcon?: React.ElementType;
  showTimeline?: boolean;
  isJsx?: boolean;
  className?: string;
}) => (
  <div className={cn(
    "relative flex items-start gap-2 sm:gap-3 w-full mb-2 sm:mb-3",
    isUser ? "justify-end" : "justify-start",
    className
  )}>
    {isUser ? (
      <>
        <div className="max-w-[70%] sm:max-w-none">
          {isJsx ? children : <MessageBubble isUser={isUser}>{children}</MessageBubble>}
        </div>
        <div className="flex-shrink-0">
          <UserAvatar />
        </div>
      </>
    ) : (
      <>
        <div className="w-6 sm:w-8 flex-shrink-0 relative">
          <AssistantAvatar icon={avatarIcon} />
        </div>
        <div className="max-w-[70%] sm:max-w-none">
          {isJsx ? children : <MessageBubble isUser={isUser}>{children}</MessageBubble>}
        </div>
      </>
    )}
  </div>
);

// Chat Window Component
export const ChatWindow = ({
  messages,
  showInput = true,
  className,
  height = "h-[320px] sm:h-[350px] md:h-[420px]"
}: {
  messages?: React.ReactNode[];
  showInput?: boolean;
  className?: string;
  height?: string;
}) => {
  const defaultMessages = [
    <MessageRow key="user-1" isUser={true}>
      Help me focus on my website project today
    </MessageRow>,
    <MessageRow key="ai-1" isUser={false}>
      Perfect! I'll create a focus session for your website project. Let me generate some tasks.
    </MessageRow>,
    <MessageRow key="ai-2" isUser={false} isJsx={true}>
      <div className="bg-landing-base border sm:border-2 border-landing-borders rounded-lg sm:rounded-xl p-2 sm:p-3 max-w-[180px] sm:max-w-[220px] md:max-w-[260px]">
        <div className="text-[10px] sm:text-xs font-medium text-landing-foreground mb-1 sm:mb-2">
          Starting 25-minute focus session
        </div>
        <div className="text-[10px] sm:text-xs text-landing-foreground/80">
          Clean workspace and organize files
        </div>
      </div>
    </MessageRow>
  ];

  return (
    <div className={cn(
      `${height} w-full bg-landing-base border-3 border-landing-borders rounded-xl flex flex-col p-2`,
      className
    )}>
      <div className="flex-1 p-2 sm:p-3 md:p-4 space-y-2 sm:space-y-3 overflow-hidden">
        {messages || defaultMessages}
      </div>

      {showInput && (
        <div className="p-2 pb-0 px-0.5 mt-auto z-10 flex border-landing-borders/50 bg-landing-base w-full rounded-2xl flex-col border-3  overflow-hidden">
          <textarea
            className="flex-1 px-3 focus:outline-none resize-none"
          />
          <div>
            <div className="flex justify-between">
              <Button>
                <HiPaperClip size={18} />
              </Button>
              <div>
                <Button>
                  <FaMicrophone />
                </Button>
                <Button
                  size="sm"
                  variant="primary"
                  className="w-22 h-8 rounded-xl"
                >
                  <HiArrowUturnRight className="mr-2" />
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Timer Components
export const CircularTimer = ({
  progress = 30,
  size = "w-10 h-10 sm:w-14 sm:h-14 md:w-18 md:h-18",
  className
}: {
  progress?: number;
  size?: string;
  className?: string;
}) => {
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className={cn("relative", className)}>
      <svg className={cn(size, "-rotate-90")} viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="currentColor"
          strokeWidth="10"
          fill="none"
          className="text-landing-borders/40"
        />
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="currentColor"
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="text-landing-primary"
        />
      </svg>
    </div>
  );
};

export const TimerDisplay = ({
  title = "Website Project",
  subtitle = "Focusing on:",
  progress = 30,
  className
}: {
  title?: string;
  subtitle?: string;
  progress?: number;
  className?: string;
}) => (
  <div className={cn("w-full rounded-lg sm:rounded-xl flex items-center -mb-3 sm:-mb-6", className)}>
    <div className="flex items-center w-full space-x-6 space-y-6">
      <CircularTimer progress={progress} />
      <div className="flex flex-col">
        <span className="text-[10px] sm:text-xs md:text-sm font-medium text-landing-foreground/80">
          {subtitle}
        </span>
        <h3 className="text-xs sm:text-sm md:text-lg font-bold text-landing-headers">
          {title}
        </h3>
      </div>
    </div>
  </div>
);

export const SessionItem = ({
  session,
  className
}: {
  session: Session;
  className?: string;
}) => {
  const Icon = session.icon;

  const cardClasses = cn(
    "space-x-2 sm:space-x-4 md:space-x-8 border sm:border-2 flex items-center justify-between rounded-lg p-5 py-6 border-landing-borders/50 bg-landing-base",
    {
      "border-purple-500/50 bg-purple-500/10": session.special,
      "border-landing-borders/50 bg-landing-base": !session.active && !session.special,
    }
  );

  const headerTextClasses = cn("ml-2 sm:ml-3 font-medium text-[10px] sm:text-xs md:text-sm", {
    "text-purple-500": session.special,
    "text-landing-foreground": !session.active && !session.special,
  });

  return (
    <div className={cn("mb-2 sm:mb-3 md:mb-4", className)}>
      <div className="flex items-center px-3 mb-2">
        <Icon
          size={12}
          className={cn("sm:w-3.5 sm:h-3.5 md:w-4 md:h-5", {
            "text-purple-500": session.special,
            "text-landing-foreground/70": !session.active && !session.special,
          })}
        />
        <span className={headerTextClasses}>{session.type}</span>
      </div>

      <div className={cardClasses}>
        <span className="text-lg font-bold text-landing-foreground">
          {session.duration}
        </span>
        <p className="text-[10px] sm:text-xs md:text-sm text-landing-foreground/70 truncate">
          {session.task}
        </p>
      </div>
    </div>
  );
};

export const SkewedSessionItem = ({
  id,
  timeId,
  icon: Icon,
  title,
  time,
  description,
  className,
  iconClassName
}: SkewedSessionItemProps) => (
  <div className={clsx("session-card", id)}>
    <div className={clsx("bg-landing-base border-3 border-landing-borders/60 rounded-2xl h-30 w-120 md:w-130 flex items-center justify-between px-4 relative", className)}>
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
    </div>
  </div>
);

export const SessionList = ({
  sessions,
  className,
  height = "h-[240px] sm:h-[300px] md:h-[360px]"
}: {
  sessions?: Session[];
  className?: string;
  height?: string;
}) => {
  const defaultSessions: Session[] = [
    { id: 1, type: 'Focus', duration: '25:00', task: 'Clean workspace & organize', icon: Clock, active: true },
    { id: 2, type: 'Break', duration: '05:00', task: 'Rest and recharge', icon: Coffee, active: false },
    { id: 3, type: 'Meditation', duration: '05:00', task: 'Mindfulness break', icon: Brain, special: true },
    { id: 4, type: 'Focus', duration: '25:00', task: 'Respond to emails', icon: Clock, active: false },
  ];

  return (
    <div className={cn(`${height} w-full fade-bottom p-2 sm:p-3 md:p-4`, className)}>
      <div className="overflow-y-hidden h-full">
        {(sessions || defaultSessions).map((session) => (
          <SessionItem key={session.id} session={session} />
        ))}
      </div>
    </div>
  );
};

// Workflow Display Component (from shared/workflow-components)
export const CentralizedWorkflowDisplay = ({
  workflowStates,
  className
}: {
  workflowStates: any[];
  className?: string;
}) => (
  <div className={cn("overflow-hidden rounded-3xl border-3 border-landing-borders bg-landing-base", className)}>
    <div className="relative flex h-full">
      {workflowStates.map((state, stateIndex) => (
        <div key={stateIndex} className="workflow-phase mb-40 absolute inset-0 top-4 px-4">
          <div className="space-y-4 h-full overflow-y-hidden">
            {state.elements.map((element: React.ReactNode, elementIndex: number) => (
              <div key={`${stateIndex}-${elementIndex}`} className={`workflow-child-${stateIndex}`}>
                {element}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Checklist Component
export const ChecklistItem = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex items-center gap-2 sm:gap-3", className)}>
    <div className="w-6 h-6 mt-0.5 sm:mt-0 rounded-md border sm:border-2 border-landing-borders flex-shrink-0 flex items-center justify-center">
      <FiCheck size={16} className="sm:w-[15px] sm:h-[15px] text-landing-primary" />
    </div>
    <span className="text-sm sm:text-base text-landing-foreground/90">{children}</span>
  </div>
);

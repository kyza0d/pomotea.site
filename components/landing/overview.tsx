import React from 'react';
import { User, Clock, Coffee, Brain, Paperclip, Mic, ArrowUpRight } from 'lucide-react';
import { FiCheck } from 'react-icons/fi';
import { Mascot } from '../ui/mascot';
import clsx from 'clsx';

type Session = {
  id: number;
  type: string;
  duration: string;
  task: string;
  icon: any;
  active?: boolean;
  special?: boolean;
};

const ChatWindow = () => {
  const MessageBubble = ({ children, isUser }: { children: React.ReactNode; isUser: boolean }) => (
    <div className={clsx(
      "px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-3 rounded-lg sm:rounded-xl",
      isUser
        ? "bg-landing-secondary-shaded/30 border sm:border-2 border-landing-borders"
        : "bg-landing-base border sm:border-2 border-landing-borders"
    )}>
      <p className="text-[10px] sm:text-xs text-landing-foreground break-words">{children}</p>
    </div>
  );

  const UserAvatar = () => (
    <div className="mt-1 sm:mt-2 w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0 bg-landing-primary/20 text-landing-primary">
      <User size={14} className="sm:w-4 sm:h-4" />
    </div>
  );

  const AssistantAvatar = () => (
    <div className="mt-1 sm:mt-2 relative z-10 w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0 bg-landing-borders/70 border border-landing-borders/20">
      <Mascot size={14} className="sm:w-4 sm:h-4 text-landing-foreground/80" />
    </div>
  );

  const MessageRow = ({ isUser = false, children }: { isUser?: boolean; children: React.ReactNode }) => (
    <div className={clsx("relative flex items-start gap-2 sm:gap-3 w-full mb-2 sm:mb-3", isUser ? "justify-end" : "justify-start")}>
      {isUser ? (
        <>
          <div className="max-w-[70%] sm:max-w-none">{children}</div>
          <div className="flex-shrink-0">
            <UserAvatar />
          </div>
        </>
      ) : (
        <>
          <div className="w-6 sm:w-8 flex-shrink-0 relative">
            <AssistantAvatar />
          </div>
          <div className="max-w-[70%] sm:max-w-none">{children}</div>
        </>
      )}
    </div>
  );

  return (
    <div className="h-[280px] sm:h-[350px] md:h-[420px] w-full bg-landing-base border-2 sm:border-3 border-landing-borders rounded-lg sm:rounded-xl flex flex-col">
      <div className="flex-1 p-2 sm:p-3 md:p-4 space-y-2 sm:space-y-3 overflow-y-auto">
        <MessageRow isUser={true}>
          <MessageBubble isUser={true}>
            Help me focus on my website project today
          </MessageBubble>
        </MessageRow>

        <MessageRow isUser={false}>
          <MessageBubble isUser={false}>
            Perfect! I'll create a focus session for your website project. Let me generate some tasks.
          </MessageBubble>
        </MessageRow>

        <MessageRow isUser={false}>
          <div className="bg-landing-base border sm:border-2 border-landing-borders rounded-lg sm:rounded-xl p-2 sm:p-3 max-w-[180px] sm:max-w-[220px] md:max-w-[260px]">
            <div className="text-[10px] sm:text-xs font-medium text-landing-foreground mb-1 sm:mb-2">Starting 25-minute focus session</div>
            <div className="text-[10px] sm:text-xs text-landing-foreground/80">Clean workspace and organize files</div>
            <div className="mt-1 sm:mt-2 w-full bg-landing-borders/40 rounded-full h-1.5 sm:h-2">
              <div className="h-1.5 sm:h-2 rounded-full w-1/4"></div>
            </div>
          </div>
        </MessageRow>
      </div>

      <div className="p-2 sm:p-3 border-t-2 sm:border-t-3 border-landing-borders">
        <div className="flex items-center gap-1 sm:gap-2 bg-landing-base border-2 sm:border-3 border-landing-borders/50 rounded-xl sm:rounded-2xl px-2 sm:px-3 py-1.5 sm:py-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 bg-transparent text-[10px] sm:text-xs outline-none text-landing-foreground placeholder-landing-foreground/60"
          />
          <div className="flex gap-0.5 sm:gap-1">
            <button className="p-0.5 sm:p-1 hover:bg-landing-borders/20 rounded">
              <Paperclip size={10} className="sm:w-3 sm:h-3 text-landing-foreground/60" />
            </button>
            <button className="p-0.5 sm:p-1 hover:bg-landing-borders/20 rounded">
              <Mic size={10} className="sm:w-3 sm:h-3 text-landing-foreground/60" />
            </button>
            <button className="px-2 py-0.5 sm:px-3 sm:py-1 bg-landing-primary text-white rounded-lg sm:rounded-xl text-[10px] sm:text-xs flex items-center gap-0.5 sm:gap-1 hover:bg-landing-primary/90">
              <ArrowUpRight size={8} className="sm:w-2.5 sm:h-2.5" />
              <span className="hidden xs:inline">Send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Timer Component
const Timer = () => {
  const progress = 30; // 30% complete
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="w-full rounded-lg sm:rounded-xl flex items-center -mb-3 sm:-mb-6">
      <div className="flex items-center justify-between w-full">
        <div className="relative">
          <svg className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 -rotate-90" viewBox="0 0 100 100">
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

        <div className="flex flex-col">
          <span className="text-[10px] sm:text-xs md:text-sm font-medium text-landing-foreground/80">Focusing on:</span>
          <h3 className="text-xs sm:text-sm md:text-lg font-bold text-landing-headers">Website Project</h3>
        </div>
      </div>
    </div>
  );
};

// Represents a single session item in the list
const SessionItem = ({ session }: { session: Session }) => {
  const Icon = session.icon;

  // Define base and state-specific classes for the card
  const cardClasses = clsx(
    "space-x-2 sm:space-x-4 md:space-x-8 border sm:border-2 flex items-center justify-between rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border-landing-borders/50 bg-landing-base",
    {
      "border-purple-500/50 bg-purple-500/10": session.special,
      "border-landing-borders/50 bg-landing-base": !session.active && !session.special,
    }
  );

  // Define state-specific classes for the header text
  const headerTextClasses = clsx("ml-2 sm:ml-3 font-medium text-[10px] sm:text-xs md:text-sm", {
    "text-purple-500": session.special,
    "text-landing-foreground": !session.active && !session.special,
  });

  return (
    <div className="mb-2 sm:mb-3 md:mb-4">
      {/* Header section with Icon and Type */}
      <div className="flex items-center px-1 sm:px-2 py-1 sm:py-2">
        <Icon
          size={12}
          className={clsx("sm:w-3.5 sm:h-3.5 md:w-4 md:h-4", {
            "text-purple-500": session.special,
            "text-landing-foreground/70": !session.active && !session.special,
          })}
        />
        <span className={headerTextClasses}>{session.type}</span>
      </div>

      {/* Main card with Duration and Task */}
      <div className={cardClasses}>
        <span className="text-sm sm:text-lg md:text-2xl font-bold text-landing-foreground">
          {session.duration}
        </span>
        <p className="text-[10px] sm:text-xs md:text-sm text-landing-foreground/70 truncate">
          {session.task}
        </p>
      </div>
    </div>
  );
};

// The main list component that renders SessionItems
const SessionList = () => {
  const sessions = [
    { id: 1, type: 'Focus', duration: '25:00', task: 'Clean workspace & organize', icon: Clock, active: true },
    { id: 2, type: 'Break', duration: '05:00', task: 'Rest and recharge', icon: Coffee, active: false },
    { id: 4, type: 'Focus', duration: '25:00', task: 'Respond to emails', icon: Clock, active: false },
  ];

  return (
    <div className="h-[240px] sm:h-[300px] md:h-[360px] w-full overflow-hidden p-2 sm:p-3 md:p-4">
      <div className="overflow-y-hidden h-full">
        {sessions.map((session) => (
          <SessionItem key={session.id} session={session} />
        ))}
      </div>
    </div>
  );
};

// Checklist Item Component
const ChecklistItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start sm:items-center gap-2 sm:gap-3">
    <div className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-0 rounded-sm border sm:border-2 border-landing-borders/80 flex-shrink-0 flex items-center justify-center bg-landing-primary/10">
      <FiCheck size={12} className="sm:w-[15px] sm:h-[15px] text-landing-primary" />
    </div>
    <span className="text-sm sm:text-base text-landing-foreground/90">{children}</span>
  </div>
);

// Main Overview Component with skewed container
export const Overview = () => {
  return (
    <section className="mt-8 sm:mt-16 md:mt-24 lg:mt-30 px-4 sm:px-6 md:px-8">
      <div className="mx-auto flex w-full max-w-7xl min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[500px] flex-col lg:flex-row items-stretch gap-4 sm:gap-6 md:gap-8 rounded-xl sm:rounded-2xl md:rounded-[2rem] border-2 sm:border-3 border-landing-borders bg-landing-base p-4 sm:p-6 md:p-8">

        {/* UI Preview Container - Hidden on mobile, visible on lg+ */}
        <div className="hidden lg:flex relative isolate overflow-hidden w-full lg:w-2/5 min-h-[300px] items-center justify-center rounded-xl sm:rounded-[1.4rem] border-2 sm:border-3 border-landing-borders">
          {/* Skewed container for UI previews */}
          <div className="pointer-events-none absolute mt-6 top-1/2 -translate-y-1/2 skew-x-12 xl:skew-x-20 -skew-y-6 xl:-skew-y-10 flex space-x-3 md:space-x-4">
            <ChatWindow />
            <div className="flex flex-col gap-y-3 md:gap-y-4 fade-bottom">
              <Timer />
              <SessionList />
            </div>
          </div>

          {/* Background texture and shadow */}
          <div className='-z-10 absolute landing-bg-grid-texture right-0 top-0 w-full h-full'>
            <div className='absolute landing-dual-inner-shadow-pseudo origin-bottom right-0 top-0 w-full h-full'>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center py-2 sm:py-4 md:py-6 px-0 sm:px-2 md:px-4 lg:pr-6 lg:pl-0 lg:flex-1">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Zero setup friction.
            <br className="hidden sm:block" />
            <span className="text-landing-primary">Maximum productivity</span> output.
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base max-w-full lg:max-w-[60ch]">
            Unlike traditional Pomodoro apps that require manual session planning, Pomotea automatically generates your timer
            sessions from your goals and tasks.
          </p>
          <div className="mt-4 sm:mt-6 flex flex-col gap-2">
            <ChecklistItem>Automatic timer generation from your task list</ChecklistItem>
            <ChecklistItem>Goal-centric approach with integrated deadlines</ChecklistItem>
            <ChecklistItem>Real-time sync across all your devices</ChecklistItem>
          </div>
        </div>

        {/* Mobile/Tablet UI Preview - Visible below lg breakpoint */}
        <div className="flex lg:hidden relative isolate overflow-hidden w-full min-h-[250px] sm:min-h-[350px] md:min-h-[400px] items-center justify-center rounded-xl sm:rounded-[1.4rem] border-2 sm:border-3 border-landing-borders mt-4 sm:mt-6">
          {/* Skewed container for UI previews */}
          <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 skew-x-6 sm:skew-x-12 -skew-y-3 sm:-skew-y-6 flex space-x-2 sm:space-x-3 scale-[0.75]">
            <ChatWindow />
            <div className="flex flex-col gap-y-2 sm:gap-y-3 fade-bottom">
              <Timer />
              <SessionList />
            </div>
          </div>

          {/* Background texture and shadow */}
          <div className='-z-10 absolute landing-bg-grid-texture right-0 top-0 w-full h-full'>
            <div className='absolute landing-dual-inner-shadow-pseudo origin-bottom right-0 top-0 w-full h-full'>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { User, Clock, Coffee, Brain, Paperclip, Mic, ArrowUpRight, type LucideIcon } from 'lucide-react';
import { FiCheck } from 'react-icons/fi';
import { Mascot } from '../ui/mascot';
import clsx from 'clsx';

type Session = {
  id: number;
  type: string;
  duration: string;
  task: string;
  icon: LucideIcon;
  active?: boolean;
  special?: boolean;
};

const ChatWindow = () => {
  const MessageBubble = ({ children, isUser }: { children: React.ReactNode; isUser: boolean }) => (
    <div className={clsx(
      "px-4 py-3 rounded-xl",
      isUser
        ? "bg-landing-secondary-shaded/30 border-2 border-landing-borders"
        : "bg-landing-base border-2 border-landing-borders"
    )}>
      <p className="text-xs text-landing-foreground break-words">{children}</p>
    </div>
  );

  const UserAvatar = () => (
    <div className="mt-2 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-landing-primary/20 text-landing-primary">
      <User size={16} />
    </div>
  );

  const AssistantAvatar = () => (
    <div className="mt-2 relative z-10 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-landing-borders/70 border border-landing-borders/20">
      <Mascot size={16} className="text-landing-foreground/80" />
    </div>
  );

  const MessageRow = ({ isUser = false, children }: { isUser?: boolean; children: React.ReactNode }) => (
    <div className={clsx("relative flex items-start gap-3 w-full mb-3", isUser ? "justify-end" : "justify-start")}>
      {isUser ? (
        <>
          <div>{children}</div>
          <div className="flex-shrink-0">
            <UserAvatar />
          </div>
        </>
      ) : (
        <>
          <div className="w-8 flex-shrink-0 relative">
            <AssistantAvatar />
          </div>
          <div>{children}</div>
        </>
      )}
    </div>
  );

  return (
    <div className="h-[420px] w-full bg-landing-base border-3 border-landing-borders rounded-xl flex flex-col">
      <div className="flex-1 p-4 space-y-3 overflow-y-auto">
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
          <div className="bg-landing-base border-2 border-landing-borders rounded-xl p-3 max-w-[260px]">
            <div className="text-xs font-medium text-landing-foreground mb-2">Starting 25-minute focus session</div>
            <div className="text-xs text-landing-foreground/80">Clean workspace and organize files</div>
            <div className="mt-2 w-full bg-landing-borders/40 rounded-full h-2">
              <div className="h-2 rounded-full w-1/4"></div>
            </div>
          </div>
        </MessageRow>
      </div>

      <div className="p-3 border-t-3 border-landing-borders">
        <div className="flex items-center gap-2 bg-landing-base border-3 border-landing-borders/50 rounded-2xl px-3 py-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 bg-transparent text-xs outline-none text-landing-foreground placeholder-landing-foreground/60"
          />
          <div className="flex gap-1">
            <button className="p-1 hover:bg-landing-borders/20 rounded">
              <Paperclip size={12} className="text-landing-foreground/60" />
            </button>
            <button className="p-1 hover:bg-landing-borders/20 rounded">
              <Mic size={12} className="text-landing-foreground/60" />
            </button>
            <button className="px-3 py-1 bg-landing-primary text-white rounded-xl text-xs flex items-center gap-1 hover:bg-landing-primary/90">
              <ArrowUpRight size={10} />
              Send
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
    <div className="w-6/8 rounded-xl flex items-center -mb-6">
      <div className="flex items-center justify-between w-full">
        <div className="relative">
          <svg className="w-20 h-20 -rotate-90" viewBox="0 0 100 100">
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
          <span className="text-sm font-medium text-landing-foreground/80">Focusing on:</span>
          <h3 className="text-lg font-bold text-landing-headers">Website Project</h3>
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
    "space-x-8 border-2 flex items-center justify-between rounded-xl p-6 border-landing-borders/50 bg-landing-base",
    {
      "border-purple-500/50 bg-purple-500/10": session.special,
      "border-landing-borders/50 bg-landing-base": !session.active && !session.special,
    }
  );

  // Define state-specific classes for the header text
  const headerTextClasses = clsx("ml-3 font-medium text-sm", {
    "text-purple-500": session.special,
    "text-landing-foreground": !session.active && !session.special,
  });

  return (
    <div className="mb-4">
      {/* Header section with Icon and Type */}
      <div className="flex items-center px-2 py-2">
        <Icon
          size={16}
          className={clsx({
            "text-purple-500": session.special,
            "text-landing-foreground/70": !session.active && !session.special,
          })}
        />
        <span className={headerTextClasses}>{session.type}</span>
      </div>

      {/* Main card with Duration and Task */}
      <div className={cardClasses}>
        <span className="text-2xl font-bold text-landing-foreground">
          {session.duration}
        </span>
        <p className="text-sm text-landing-foreground/70 truncate">
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
    <div className="h-[360px] w-full overflow-hidden p-4">
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
  <div className="flex items-center gap-3">
    <div className="w-5 h-5 rounded-sm border-2 border-landing-borders/80 flex-shrink-0 flex items-center justify-center bg-landing-primary/10">
      <FiCheck size={15} className="text-landing-primary" />
    </div>
    <span className="text-landing-foreground/90">{children}</span>
  </div>
);

// Main Overview Component with skewed container
export const Overview = () => {
  return (
    <section className="mt-30">
      <div className="mx-auto flex w-full h-100 space-x-6 flex-row items-stretch gap-4 rounded-[2rem] border-3 border-landing-borders bg-landing-base p-4">
        <div className="relative isolate overflow-hidden flex w-2/5 items-center justify-center rounded-[1.4rem] border-3 border-landing-borders">
          {/* Skewed container for UI previews */}
          <div className="pointer-events-none absolute mt-6 top-1/2 -translate-y-1/2 skew-x-20 -skew-y-10 flex space-x-4 scale-60">
            <ChatWindow />
            <div className="flex flex-col gap-y-4 fade-bottom">
              <Timer />
              <SessionList />
            </div>
          </div>

          {/* Background texture and shadow */}
          <div className='-z-10 absolute landing-bg-grid-texture right-0 top-0 w-full h-[45vh] min-h-200 h-full'>
            <div className='absolute landing-dual-inner-shadow-pseudo origin-bottom right-0 top-0 w-full h-[45vh] min-h-200 h-full'>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center py-6 pr-6">
          <h2 className="text-3xl font-bold">
            Zero setup friction.
            <br /> <span className="text-landing-primary">Maximum productivity</span> output.
          </h2>
          <p className="mt-3 max-w-[60ch]">
            Unlike traditional Pomodoro apps that require manual session planning, Pomotea automatically generates your timer
            sessions from your goals and tasks.
          </p>
          <div className="mt-6 flex flex-col gap-2">
            <ChecklistItem>Automatic timer generation from your task list</ChecklistItem>
            <ChecklistItem>Goal-centric approach with integrated deadlines</ChecklistItem>
            <ChecklistItem>Real-time sync across all your devices</ChecklistItem>
          </div>
        </div>
      </div>
    </section>
  );
};

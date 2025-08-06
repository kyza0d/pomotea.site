// File: components/landing/items.tsx
import { type LucideIcon } from "lucide-react";
import { FiCheck } from "react-icons/fi";
import { cn } from "@/lib/utils";

export type FeatureItemProps = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  iconBgColor?: string;
  iconColor?: string;
  borderColor?: string;
  padding?: string;
};

export type CardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const FeatureItem: React.FC<FeatureItemProps> = ({
  icon: Icon,
  title,
  subtitle,
  iconBgColor = "bg-landing-secondary-shaded/20",
  iconColor = "text-landing-secondary",
  borderColor = "border-landing-borders",
  padding = "p-5 px-7",
}) => (
  <div className="flex items-center space-x-3">
    <div className={`${iconBgColor} ${padding} flex-shrink-0 items-center justify-center rounded-3xl border-2 ${borderColor}`}>
      <Icon size={28} className={iconColor} />
    </div>
    <span className="ml-2 whitespace-nowrap">
      {title} <br /> {subtitle}
    </span>
  </div>
);

export const ChatBubble: React.FC<{ sender: "user" | "ai"; children: React.ReactNode, className?: string }> = ({ sender, children, className }) => (
  <div className={cn(`flex w-full ${sender === "user" ? "justify-end" : "justify-start"}`, className)}>
    <div
      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${sender === "user"
        ? "bg-landing-primary text-landing-base"
        : "border-2 border-landing-borders bg-landing-secondary-shaded/60 text-landing-foreground"
        }`}
    >
      {children}
    </div>
  </div>
);

export const ContextualToolChip: React.FC<{
  icon: LucideIcon;
  name: string;
  category: "goal" | "task" | "session" | "insight";
  isActive?: boolean;
  className?: string;
}> = ({ icon: Icon, name, category, isActive = false, className }) => {
  const categoryColors = {
    goal: isActive && "bg-blue-500/20 border-blue-400/50 text-blue-300",
    task: isActive && "bg-purple-500/20 border-purple-400/50 text-purple-300",
    session: isActive && "bg-green-500/20 border-green-400/50 text-green-300",
    insight: isActive && "bg-orange-500/20 border-orange-400/50 text-orange-300",
  };

  return (
    <div className={cn(
      "flex items-center space-x-3 rounded-4xl p-3 transition-all duration-300",
      categoryColors[category],
      isActive && "animate-pulse",
      className
    )}>
      <div className="bg-landing-secondary-shaded p-5 rounded-3xl">
        <Icon className={`h-5 w-5 ${isActive ? "text-current" : "text-landing-secondary"}`} />
      </div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
};

export const GoalProgressBar: React.FC<{
  goalName: string;
  progress: number;
  totalTasks: number;
  className?: string;
}> = ({ goalName, progress, totalTasks, className }) => (
  <div className={cn("space-y-2 p-4 rounded-xl bg-landing-secondary-shaded/20 border border-landing-borders/30", className)}>
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium text-landing-foreground">{goalName}</span>
      <span className="text-xs text-landing-primary">{Math.round(progress)}%</span>
    </div>
    <div className="w-full bg-landing-borders rounded-full h-2">
      <div
        className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full transition-all duration-500"
        style={{ width: `${progress}%` }}
      />
    </div>
    <p className="text-xs text-landing-foreground/70">{totalTasks} tasks generated</p>
  </div>
);

export const SessionTimeline: React.FC<{
  sessions: Array<{ name: string; duration: number; type: "focus" | "break" }>;
  className?: string;
}> = ({ sessions, className }) => (
  <div className={cn("space-y-3", className)}>
    <h4 className="text-sm font-semibold text-landing-foreground mb-3">Generated Schedule</h4>
    <div className="space-y-2">
      {sessions.map((session, index) => (
        <div key={index} className="flex items-center gap-3 p-2 rounded-lg bg-landing-base/50">
          <div className={`w-3 h-3 rounded-full ${session.type === "focus" ? "bg-green-400" : "bg-blue-400"}`} />
          <span className="text-sm text-landing-foreground flex-1">{session.name}</span>
          <span className="text-xs text-landing-foreground/60">{session.duration}m</span>
        </div>
      ))}
    </div>
  </div>
);

export const TaskCreationPreview: React.FC<{
  tasks: Array<{ name: string; estimatedTime: number; priority: "high" | "medium" | "low" }>;
  className?: string;
}> = ({ tasks, className }) => (
  <div className={cn("space-y-3", className)}>
    <div className="flex items-center gap-2 mb-3">
      <div className="w-2 h-2 bg-landing-primary rounded-full animate-pulse"></div>
      <span className="text-sm font-semibold text-landing-primary">Tasks Created in App</span>
    </div>
    <div className="space-y-2 max-h-40 overflow-y-auto">
      {tasks.map((task, index) => (
        <div key={index} className="flex items-center gap-3 p-3 bg-landing-secondary-shaded/30 rounded-lg border border-landing-borders/40 hover:bg-landing-secondary-shaded/50 transition-colors">
          <div className="w-5 h-5 rounded border-2 border-purple-400/60 flex items-center justify-center bg-purple-400/10">
            <FiCheck className="w-3 h-3 text-purple-400" />
          </div>
          <div className="flex-1">
            <span className="text-sm font-medium text-landing-foreground">{task.name}</span>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-landing-foreground/60">{task.estimatedTime}m</span>
              <span className={`text-xs px-2 py-0.5 rounded ${task.priority === "high" ? "bg-red-500/20 text-red-400" :
                task.priority === "medium" ? "bg-yellow-500/20 text-yellow-400" :
                  "bg-green-500/20 text-green-400"
                }`}>
                {task.priority}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const FeatureCard: React.FC<CardProps & { className?: string }> = ({ icon: Icon, title, description, className }) => (
  <div className={cn("my-10 flex max-w-md flex-col items-stretch overflow-hidden rounded-3xl border-3 border-landing-borders/40 bg-landing-secondary-shaded/40", className)}>
    <div className="m-4 flex h-32 items-center justify-center rounded-2xl bg-landing-secondary-shaded px-14 py-8">
      <Icon className="h-7 w-7 text-landing-secondary" />
    </div>
    <div className="flex flex-col justify-center p-6">
      <h4 className="text-lg font-semibold text-landing-foreground">{title}</h4>
      <p className="mt-1 text-base text-landing-foreground">{description}</p>
    </div>
  </div>
);

export const ChecklistItem: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
  <div className={cn("mt-3 flex items-center space-x-4", className)}>
    <div className="relative h-6 w-6 mr-2 flex-shrink-0 rounded-md border-2 border-landing-borders/70">
      <FiCheck className="absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 text-landing-primary" />
    </div>
    {children}
  </div>
);

export const SkewedCard = ({ children, className = "" }: { children?: React.ReactNode; className?: string }) => (
  <div className={`bg-landing-base border-3 border-landing-borders/60 rounded-2xl ${className}`}>
    {children}
  </div>
);

export const CircularProgressSVG = ({
  size = 100,
  strokeWidth = 8,
  progress = 0,
  trailColor = "var(--color-landing-borders)",
  children,
  className,
}: {
  size?: number;
  strokeWidth?: number;
  progress?: number;
  trailColor?: string;
  progressColor?: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progress / 100);

  return (
    <div className={cn("relative", className)} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="absolute inset-0 -rotate-90">
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke={trailColor}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          id="progress-circle"
          className="progress-circle-stroke"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
};

export const ToolUsageIndicator = ({ icon: Icon, children }: { icon: React.ElementType, children: React.ReactNode }) => (
  <div className="my-3 flex justify-center">
    <div className="tool-indicator inline-flex items-center space-x-2 rounded-full border-2 border-landing-borders bg-landing-base px-4 py-2 text-xs text-landing-foreground/80">
      <Icon size={16} className="text-landing-primary animate-pulse" />
      <span className="font-medium">{children}</span>
    </div>
  </div>
);

export const ShowcaseTaskItem: React.FC<{
  children: React.ReactNode;
  status: "pending" | "active" | "completed";
}> = ({ children, status }) => {
  const StatusIndicator = () => {
    switch (status) {
      case "completed":
        return (
          <div className="w-5 h-5 rounded-md border-2 relative border-landing-borders/70 flex-shrink-0">
            <FiCheck className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-landing-primary" />
          </div>
        );
      case "active":
        return (
          <div className="w-5 h-5 rounded-md border-2 relative border-landing-primary/80 flex-shrink-0">
            <div className="absolute inset-1 bg-landing-primary rounded-sm animate-pulse" />
          </div>
        );
      default:
        return (
          <div className="w-5 h-5 rounded-md border-2 border-landing-borders/70 flex-shrink-0" />
        );
    }
  };

  return (
    <div
      className="flex items-center gap-3 p-2 rounded-lg"
    >
      <StatusIndicator />
      <span
        className={cn(
          "text-sm",
          status === 'completed' && "line-through text-landing-foreground/60 decoration-2",
          status === 'active' && "font-bold text-landing-headers",
          status === 'pending' && "text-landing-foreground"
        )}
      >
        {children}
      </span>
    </div>
  );
};

export const ToastPreviewCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBg?: string;
  iconColor?: string;
}> = ({ icon, title, description, iconBg = 'bg-landing-primary/10', iconColor = 'text-landing-primary' }) => (
  <div className="flex items-start gap-3 p-3 rounded-lg border-2 border-landing-borders/50 bg-landing-base">
    <div className={cn("p-2 rounded-lg flex-shrink-0", iconBg, iconColor)}>
      {icon}
    </div>
    <div className="flex-grow">
      <h4 className="text-sm font-semibold text-landing-headers">{title}</h4>
      <p className="text-xs text-landing-foreground/80">{description}</p>
    </div>
  </div>
);

// in components/landing/items.tsx

// A simplified chat window to demonstrate AI interaction
export const AIInteractionWindow: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={cn("rounded-2xl border-3 border-landing-borders bg-landing-base p-4 space-y-3 w-full max-w-md", className)}>
    {children}
  </div>
);

// A card to represent the active goal and its progress
export const GoalProgressCard: React.FC<{ title: string; progress: number; className?: string }> = ({ title, progress, className }) => (
  <div className={cn("p-4 rounded-xl bg-landing-secondary-shaded/20 border-2 border-landing-borders/30 w-full max-w-xs", className)}>
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-medium text-landing-foreground">{title}</span>
      <span className="text-xs font-semibold text-landing-primary">{progress}%</span>
    </div>
    <div className="w-full bg-landing-borders/50 rounded-full h-2">
      <div
        id="goal-progress-bar"
        className="bg-landing-primary h-2 rounded-full transition-all duration-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>
);

// A view that shows the main timer focused on a specific task
export const SessionFocusWindow: React.FC<{ taskName: string; className?: string }> = ({ taskName, className }) => (
  <div className={cn("p-4 rounded-xl bg-landing-base border-2 border-landing-borders w-full max-w-xs text-center", className)}>
    <CircularProgressSVG size={80} strokeWidth={6} progress={75} />
    <p className="text-xs text-landing-foreground/80 mt-2">Focusing on:</p>
    <p id="session-task-name" className="text-md font-bold text-landing-headers">{taskName}</p>
  </div>
);

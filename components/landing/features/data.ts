// File: components/landing/features/data.ts
import {
  CheckCircle,
  Palette,
  Settings,
  Sparkles,
  Target,
  Timer,
  TrendingUp,
  Users,
  Zap,
  Lightbulb,
  Activity,
  Brain,
  BarChart3,
  Calendar,
  Clock,
  ListTodo,
  Flag,
  Award
} from "lucide-react";

export const goalCards = [
  { icon: CheckCircle, title: "Task Management", description: "Break goals into actionable tasks with progress tracking" },
  { icon: TrendingUp, title: "Progress Analytics", description: "Visual progress indicators and completion flows" },
  { icon: Zap, title: "Context Switching", description: "Seamless transitions between tasks with guided management" },
];

export const customizationItems = [
  { icon: Palette, title: "15+ Focus", subtitle: "Optimized Themes" },
  { icon: Sparkles, title: "14 Professional", subtitle: "Fonts" },
  { icon: Settings, title: "Background", subtitle: "Personalization" },
  { icon: Timer, title: "Custom Session", subtitle: "Durations" },
  { icon: CheckCircle, title: "Smart", subtitle: "Notifications" },
  { icon: Users, title: "Community", subtitle: "Coming Soon" },
];

export const aiTools = [
  { name: "Goal Planning", icon: Target, category: "goal" as const, description: "Break down complex goals into actionable steps" },
  { name: "Task Generation", icon: ListTodo, category: "task" as const, description: "Automatically create tasks from conversations" },
  { name: "Smart Scheduling", icon: Calendar, category: "session" as const, description: "Generate optimal focus session timelines" },
  { name: "Progress Analysis", icon: TrendingUp, category: "insight" as const, description: "Track and analyze productivity patterns" },
  { name: "Context Retention", icon: Brain, category: "insight" as const, description: "Remember and connect your work context" },
  { name: "Time Optimization", icon: Clock, category: "session" as const, description: "Optimize session lengths based on task complexity" },
];

export const goalExamples = [
  {
    id: "goal-1",
    title: "Launch Product Feature",
    description: "Complete MVP development and user testing",
    progress: 75,
    timeInvested: "12.5 hours",
    status: "on-track" as const,
    urgency: "high" as const,
    tasksCompleted: 6,
    totalTasks: 8,
    type: "Work",
    nextSession: "API Testing"
  },
  {
    id: "goal-2",
    title: "Learn React Patterns",
    description: "Master advanced React concepts and patterns",
    progress: 40,
    timeInvested: "8 hours",
    status: "active" as const,
    urgency: "medium" as const,
    tasksCompleted: 4,
    totalTasks: 10,
    type: "Learning",
    nextSession: "Custom Hooks"
  },
  {
    id: "goal-3",
    title: "Learn React Patterns",
    description: "Master advanced React concepts and patterns",
    progress: 40,
    timeInvested: "8 hours",
    status: "active" as const,
    urgency: "medium" as const,
    tasksCompleted: 4,
    totalTasks: 10,
    type: "Learning",
    nextSession: "Custom Hooks"
  }
];

export const goalMetrics = {
  planningTimeReduction: "15 min → 15 sec",
  contextRetention: "100% clarity",
  completionIncrease: "3x higher",
  avgSessionLength: "25 min"
};

export const goalWorkflowFeatures = [
  { icon: Target, title: "Natural Language", subtitle: "Goal Input" },
  { icon: Brain, title: "AI-Powered", subtitle: "Task Breakdown" },
  { icon: Timer, title: "Automatic", subtitle: "Session Scheduling" },
  { icon: BarChart3, title: "Real-time", subtitle: "Progress Tracking" }
];

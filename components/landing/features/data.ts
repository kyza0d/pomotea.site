
import {
  Brain,
  Calendar,
  MessageSquare,
  TrendingUp,
  Target,
  Workflow,
  BarChart3,
  Activity,
  LineChart,
  PieChart,
  Settings,
  Palette,
  Sliders,
  Sparkles,
  Timer
} from "lucide-react";

export const aiTools = [
  {
    icon: Brain,
    name: "Intelligent Task Breakdown",
    description: "Transform overwhelming goals into perfectly-sized, actionable tasks with AI-powered estimation and smart prioritization that adapts to your working style."
  },
  {
    icon: Calendar,
    name: "Adaptive Daily Planning",
    description: "Experience personalized scheduling that learns your peak productivity hours and creates optimal focus-break cycles tailored to your unique rhythm."
  },
  {
    icon: MessageSquare,
    name: "Natural Goal Creation",
    description: "Simply describe what you want to achieve in conversation - our AI instantly transforms your ideas into structured, executable action plans."
  },
  {
    icon: TrendingUp,
    name: "Productivity Intelligence",
    description: "Receive personalized insights and coaching based on your work patterns, with actionable recommendations to optimize your focus and eliminate productivity bottlenecks."
  }
];

export const aiPhaseTools = {
  "accountability-partner": [
    {
      icon: MessageSquare,
      name: "Contextual Check-ins",
      category: "session" as const,
      description: "Get timely encouragement based on your actual progress and current challenges, not generic motivation."
    },
    {
      icon: TrendingUp,
      name: "Progress Recognition",
      category: "insight" as const,
      description: "Celebrate your wins with intelligent recognition of your accomplishments and growth patterns."
    },
    {
      icon: Activity,
      name: "Burnout Prevention",
      category: "insight" as const,
      description: "Receive smart suggestions for rest and recovery before you hit productivity walls."
    }
  ],
  "task-recall": [
    {
      icon: BarChart3,
      name: "Instant Summaries",
      category: "insight" as const,
      description: "Get comprehensive overviews of your work across any time period with zero manual tracking."
    },
    {
      icon: PieChart,
      name: "Time Allocation Analysis",
      category: "insight" as const,
      description: "Understand where your effort goes with detailed breakdowns of focus time across projects."
    },
    {
      icon: LineChart,
      name: "Achievement Visualization",
      category: "insight" as const,
      description: "See your productivity patterns and celebrate consistent progress with beautiful data insights."
    }
  ],
  "document-analysis": [
    {
      icon: Brain,
      name: "Document Intelligence",
      category: "task" as const,
      description: "Instantly extract actionable insights from any document format - PDFs, notes, requirements, or ideas."
    },
    {
      icon: Workflow,
      name: "Structure Generation",
      category: "task" as const,
      description: "Automatically organize complex information into logical task hierarchies and project phases."
    },
    {
      icon: Target,
      name: "Smart Prioritization",
      category: "goal" as const,
      description: "Get intelligent task ordering based on dependencies, effort estimation, and strategic importance."
    }
  ],
  "task-completion": [
    {
      icon: Target,
      name: "Multi-level Planning",
      category: "goal" as const,
      description: "Break down complex goals into phases, tasks, and subtasks with intelligent dependency mapping."
    },
    {
      icon: Calendar,
      name: "Timeline Estimation",
      category: "task" as const,
      description: "Get realistic project timelines with AI-powered effort estimation based on task complexity."
    },
    {
      icon: Sparkles,
      name: "Adaptive Refinement",
      category: "task" as const,
      description: "Continuously improve task breakdowns based on your completion patterns and feedback."
    }
  ]
};

export const goalWorkflowFeatures = [
  {
    icon: Target,
    title: "Hierarchical Goal Architecture",
    subtitle: "Create unlimited goal depth with intelligent task nesting, automatic progress propagation, and dependency mapping that keeps complex projects organized."
  },
  {
    icon: Workflow,
    title: "Purpose-Driven Sessions",
    subtitle: "Every focus session connects to meaningful objectives, providing clear context and motivation while ensuring consistent progress toward your bigger vision."
  },
  {
    icon: BarChart3,
    title: "Intelligent Progress Synthesis",
    subtitle: "Watch goals evolve automatically as tasks complete, with visual progress indicators and milestone celebrations that maintain momentum and clarity."
  }
];

export const progressTrackingItems = [
  {
    icon: Activity,
    title: "Deep Work Analytics",
    subtitle: "Understand your productivity patterns with comprehensive session tracking, focus quality metrics, and personalized insights into your most effective working rhythms."
  },
  {
    icon: LineChart,
    title: "Visual Progress Intelligence",
    subtitle: "Transform data into motivation with beautiful dashboards showing goal velocity, time investment trends, and achievement patterns that inspire continued progress."
  },
  {
    icon: PieChart,
    title: "Long-Term Performance Mastery",
    subtitle: "Unlock productivity optimization through historical analysis, identifying peak performance windows and success patterns to systematically improve your effectiveness."
  }
];

export const customizationItems = [
  {
    icon: Settings,
    title: "Intelligent Timer Adaptation",
    subtitle: "Experience productivity sessions that evolve with you - customizable durations, wellness integration, and smart break suggestions that prevent burnout while maximizing flow."
  },
  {
    icon: Palette,
    title: "Personal Environment Design",
    subtitle: "Create your perfect productivity sanctuary with extensive theming options, custom color palettes, typography choices, and background personalization."
  },
  {
    icon: Sliders,
    title: "Workflow Personalization Engine",
    subtitle: "Fine-tune every aspect of your productivity experience with granular preference controls, notification customization, and behavioral adaptations that match your unique style."
  }
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

export const customizationItemsLanding = [
  { icon: Palette, title: "Hand crafted", subtitle: "themes" },
  { icon: Sparkles, title: "Use your", subtitle: "own fonts" },
  { icon: Settings, title: "Background", subtitle: "Personalization" },
  { icon: Timer, title: "Custom Session", subtitle: "Durations" },
];

/**
 * Centralized showcase copy for all feature showcase components
 * Contains all text content for AI, Goals, Tasks, and Settings showcases
 */

// Core types for showcase content structure
export interface PhaseContent {
  heading: string;
  description: string;
  listItems: string[];
}

export interface FeatureShowcaseContent {
  title: string;
  subtitle: string;
  heading: string;
  description: string;
  phaseContent: Record<string, PhaseContent>;
}

// AI Showcase Copy
export const aiShowcase: FeatureShowcaseContent = {
  title: "AI-Powered",
  subtitle: "Productivity",
  heading: "Your Flow Companion",
  description:
    "Discover effortless focus with an AI that intuitively understands your workflow and gently guides you into a state of flow. It's more than a tool—it's a seamless partner in unlocking your natural productivity.",
  phaseContent: {
    "accountability-partner": {
      heading: "Your Flow <br/>Companion",
      description:
        "Stay immersed with an AI that senses your rhythm and offers subtle nudges to maintain momentum. It's designed to enhance your natural flow, reducing interruptions and fostering sustained focus.",
      listItems: [
        "Contextual guidance",
        "Rhythm-based suggestions",
        "Reduces mental fatigue",
        "Builds natural consistency",
      ],
    },
    "task-recall": {
      heading: "Effortless Recall <br/>of Your Progress",
      description:
        "Banish the fog of forgotten efforts. Your AI captures every session and task, providing a clear, insightful overview of your time and achievements across any timeframe.",
      listItems: [
        "Monthly & weekly insights",
        "Time flow summaries",
        "Cross-goal connection tracking",
        "Progress visualization",
      ],
    },
    "document-analysis": {
      heading: "From Documents <br/>to Flow-Ready Plans",
      description:
        "Upload a document, and let your AI transform it into a streamlined, multi-layered task structure. It aligns with your goals to create plans that feel intuitive and easy to dive into.",
      listItems: [
        "AI-driven document breakdown",
        "Layered task creation",
        "Goal-aligned structuring",
        "Handles diverse content",
      ],
    },
  },
};

// AI Workflow Messages
export const aiWorkflowMessages = {
  "accountability-partner": {
    aiGreeting:
      "Hey, how's your flow today? Tell me about your current projects.",
    userOverwhelmed:
      "Feeling scattered... everything seems overwhelming right now.",
    aiReassurance:
      "I get it. But look at your momentum this week—you've comleted in <strong className=\"text-landing-primary\">93 tasks!</strong> That's real progress. Maybe pause to recharge, then ease back in. You've got this rhythm.",
  },
  "task-recall": {
    userQuery: "What have I accomplished in the past month?",
    aiResponse:
      "You've been deeply engaged with your courses and that new app build. Here's an overview of your time flow:",
  },
  "document-analysis": {
    userRequest: "Can you help shape a goal around this new idea?",
    aiConfirmation:
      "Absolutely! I'll craft a goal with tasks that flow from your PRD.",
    analysisPhases: {
      breakdown: "Distilling complex ideas into fluid tasks",
      milestones: "Mapping natural milestones from PRD",
      structuring: "Organizing phases for seamless progression",
    },
  },
  "task-completion": {
    aiCompletion: "Ready to go! Here's the flow plan I've prepared for you.",
    goalTitle: "Build New 'Sidekick' App",
  },
};

// AI Task Development Example
export const aiTaskExample = {
  phases: [
    {
      title: "Phase 1: Project Setup & Core Features",
      subtasks: [
        { title: "Initialize new repository" },
        { title: "Setup authentication (email/password)" },
      ],
    },
    {
      title: "Phase 2: UI/UX Development",
      subtasks: [
        { title: "Design dashboard layout" },
        { title: "Create reusable component library" },
      ],
    },
    { title: "Phase 3: Deployment" },
  ],
};

// Goals Showcase Copy
export const goalsShowcase: FeatureShowcaseContent = {
  title: "Goal-Centric",
  subtitle: "Design",
  heading: "Connect Every Effort to Your Vision",
  description:
    "Turn broad ambitions into a clear path forward. pomotea's goal-focused system ensures each session and task aligns with your bigger picture, helping you build momentum toward what truly matters.",
  phaseContent: {
    "goal-input": {
      heading: "All Your Goals, Unified",
      description:
        "Effortlessly view and organize your objectives. Gain a holistic view of your progress and next steps in one intuitive space.",
      listItems: [
        "Centralized goal hub",
        "Seamless progress monitoring",
        "Instant objective access",
        "Integrated task flow",
      ],
    },
  },
};

// Goals Workflow Messages
export const goalsWorkflowMessages = {
  userGoal: "I want to launch a new product feature by the end of March",
  aiProcessing: "Mapping your goal into flow...",
};

// Goals View Labels
export const goalsViewLabels = {
  yearlyView: {
    title: "2025 Goals",
    completedStatus: "8/12 completed",
  },
  monthlyView: {
    title: "January 2024",
    sessionsLabel: "Sessions This Month",
    focusTimeLabel: "Focus Time",
    activeLabel: "Active This Month",
  },
};

// Tasks Showcase Copy
export const tasksShowcase: FeatureShowcaseContent = {
  title: "Session-Based",
  subtitle: "Task Management",
  heading: "Streamline Your Path to Flow",
  description:
    "pomotea's AI goes beyond task lists—it curates your entire workflow. Share your goals, and it crafts a tailored task structure while seamlessly scheduling focus and recharge sessions to sustain your natural flow.",
  phaseContent: {
    "ai-interaction": {
      heading: "Begin with Natural Dialogue",
      description:
        "Describe your goals conversationally to pomotea. The AI grasps nuances and converts your thoughts into fluid, actionable steps.",
      listItems: [
        "Conversational goal input",
        "Nuance-aware task mapping",
        "Insightful goal decomposition",
        "Intuitive planning exchange",
      ],
    },
    "task-generation": {
      heading: "See Tasks Emerge Effortlessly",
      description:
        "Drawing from your input, pomotea assembles a coherent task flow with thoughtful sequencing and priorities, primed for immersive sessions.",
      listItems: [
        "AI-guided task creation",
        "Thoughtful prioritization",
        "Logical task flow",
        "Goal-linked organization",
      ],
    },
    "session-start": {
      heading: "Dive into Sessions <br/>Without Friction",
      description:
        "With your path clear, pomotea initiates focus sessions at the right moments, minimizing disruptions to help you slip into flow.",
      listItems: [
        "Smart session initiation",
        "Adaptive timing",
        "Smooth transitions",
        "Flow enhancement",
      ],
    },
    "session-complete": {
      heading: "Track Momentum <br/>Intuitively",
      description:
        "Upon session end, pomotea logs your advances and refines future tasks and timings based on your evolving patterns.",
      listItems: [
        "Seamless progress capture",
        "Pattern-based adjustments",
        "Productivity insights",
        "Dynamic workflow tuning",
      ],
    },
    "break-start": {
      heading: "Refresh with Intentional Pauses",
      description:
        "Post-focus, pomotea cues a break to restore energy, setting the stage for mindful recharge.",
      listItems: [
        "Timed break prompts",
        "Flexible durations",
        "Fatigue prevention",
        "Mindfulness preparation",
      ],
    },
    "habit-start": {
      heading: "Weave in Restorative Habits",
      description:
        "After breaks, pomotea suggests brief mindfulness practices, like meditation, to realign your focus gently.",
      listItems: [
        "Habit seamless blending",
        "Guided wellness moments",
        "Energy renewal",
        "Sustained routine building",
      ],
    },
    "session-start-2": {
      heading: "Sustain Your Rhythm",
      description:
        "Refreshed, pomotea guides you to the next step, easing re-entry to maintain uninterrupted progress.",
      listItems: [
        "Next-task auto-queue",
        "Momentum preservation",
        "Switching minimization",
        "Goal alignment upkeep",
      ],
    },
  },
};

// Tasks Workflow Messages
export const tasksWorkflowMessages = {
  userStart: "Ready to make progress on our website project?",
  aiSessionStart: "Awesome, let's dive into a productive focus session!",
  timerStatus: "Session started",
  tasksIntro: "Here's your prioritized task flow for today:",
  taskTitle: "Tasks for 'Website Development Sprint'",
  exampleTasks: [
    "Implement responsive navigation bar for mobile view",
    "Optimize image assets for faster page load times"
  ],
  sessionStarted: {
    title: "Focus Session Started",
    subtitle: "Implement responsive navigation bar for mobile view",
  },
  sessionCompleted: {
    title: "Focus Session Complete!",
    completedTasks: ["Implemented responsive navigation bar for mobile view"],
  },
  breakStarted: {
    title: "Take a Break!",
    subtitle: "Grab a coffee or stretch to recharge.",
  },
  habitStarted: {
    title: "Mindfulness Break",
    subtitle: "5-minute meditation to clear your mind.",
  },
  sessionStarted2: {
    title: "Next Focus Session Started",
    subtitle: "Optimize image assets for faster page load times",
  },
};

// Tasks Session Cards
export const tasksSessionCards = [
  {
    icon: "Clock",
    title: "Focus",
    time: "25:00",
    description:
      "Clear your space, silence distractions, and immerse in one task.",
  },
  {
    icon: "Coffee",
    title: "Break",
    time: "05:00",
    description: "Pause to refresh—stretch, hydrate, or step away briefly.",
  },
  {
    icon: "Brain",
    title: "Meditation",
    time: "05:00",
    description: "A gentle guide to clear thoughts and renew focus.",
    isSpecial: true,
  },
  {
    icon: "Clock",
    title: "Focus",
    time: "25:00",
    description:
      "Dive into project files, spotting optimization opportunities.",
  },
  {
    icon: "Coffee",
    title: "Break",
    time: "05:00",
    description: "Pause to refresh—stretch, hydrate, or step away briefly.",
  },
];

// Tasks Timer Display
export const tasksTimerDisplay = {
  sessionType: "Focusing on:",
  taskName: "Clean workspace",
};

// Settings Showcase Copy

// Settings Content Sections
export const settingsContent = {
  sessions: {
    sectionTitle: "Session Timing",
    focusDuration: {
      label: "Focus Duration",
      value: 25,
      max: 120,
    },
    breakDuration: {
      label: "Break Duration",
      value: 5,
      max: 30,
    },
    wellnessTitle: "Wellness Features",
    healthyHabits: {
      label: "Healthy Habits",
      description: "Incorporate wellness pauses after cycles",
      enabled: true,
    },
  },
};

// Export all showcase data for easy access
export const showcaseData = {
  ai: aiShowcase,
  goals: goalsShowcase,
  tasks: tasksShowcase,
};

export const workflowMessages = {
  ai: aiWorkflowMessages,
  goals: goalsWorkflowMessages,
  tasks: tasksWorkflowMessages,
};

export const showcaseExtras = {
  ai: {
    taskExample: aiTaskExample,
  },
  goals: {
    viewLabels: goalsViewLabels,
  },
  tasks: {
    sessionCards: tasksSessionCards,
    timerDisplay: tasksTimerDisplay,
  },
};

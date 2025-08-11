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
  description: "Discover effortless focus with an AI that intuitively understands your workflow and gently guides you into a state of flow. It's more than a tool—it's a seamless partner in unlocking your natural productivity.",
  phaseContent: {
    "accountability-partner": {
      heading: "Your Flow <br/>Companion",
      description: "Stay immersed with an AI that senses your rhythm and offers subtle nudges to maintain momentum. It's designed to enhance your natural flow, reducing interruptions and fostering sustained focus.",
      listItems: ["Contextual guidance", "Rhythm-based suggestions", "Reduces mental fatigue", "Builds natural consistency"],
    },
    "task-recall": {
      heading: "Effortless Recall <br/>of Your Progress",
      description: "Banish the fog of forgotten efforts. Your AI captures every session and task, providing a clear, insightful overview of your time and achievements across any timeframe.",
      listItems: ["Monthly & weekly insights", "Time flow summaries", "Cross-goal connection tracking", "Progress visualization"],
    },
    "document-analysis": {
      heading: "From Documents <br/>to Flow-Ready Plans",
      description: "Upload a document, and let your AI transform it into a streamlined, multi-layered task structure. It aligns with your goals to create plans that feel intuitive and easy to dive into.",
      listItems: ["AI-driven document breakdown", "Layered task creation", "Goal-aligned structuring", "Handles diverse content"],
    },
  },
};

// AI Workflow Messages
export const aiWorkflowMessages = {
  "accountability-partner": {
    aiGreeting: "Hey, how's your flow today? Tell me about your current projects.",
    userOverwhelmed: "Feeling scattered... everything seems overwhelming right now.",
    aiReassurance: "I get it. But look at your momentum this week—you've immersed in <strong className=\"text-landing-primary\">93 tasks!</strong> That's real progress. Maybe pause to recharge, then ease back in. You've got this rhythm.",
  },
  "task-recall": {
    userQuery: "What have I accomplished in the past month?",
    aiResponse: "You've been deeply engaged with your courses and that new app build. Here's an overview of your time flow:",
  },
  "document-analysis": {
    userRequest: "Can you help shape a goal around <br />this new idea?",
    aiConfirmation: "Absolutely! I'll craft a goal <br />with tasks that flow from your PRD.",
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
  description: "Turn broad ambitions into a clear path forward. Pomotea's goal-focused system ensures each session and task aligns with your bigger picture, helping you build momentum toward what truly matters.",
  phaseContent: {
    "goal-input": {
      heading: "All Your Goals, Unified",
      description: "Effortlessly view and organize your objectives. Gain a holistic view of your progress and next steps in one intuitive space.",
      listItems: ["Centralized goal hub", "Seamless progress monitoring", "Instant objective access", "Integrated task flow"],
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
  description: "Pomotea's AI goes beyond task lists—it curates your entire workflow. Share your goals, and it crafts a tailored task structure while seamlessly scheduling focus and recharge sessions to sustain your natural flow.",
  phaseContent: {
    "ai-interaction": {
      heading: "Begin with Natural Dialogue",
      description: "Describe your goals conversationally to Pomotea. The AI grasps nuances and converts your thoughts into fluid, actionable steps.",
      listItems: ["Conversational goal input", "Nuance-aware task mapping", "Insightful goal decomposition", "Intuitive planning exchange"],
    },
    "task-generation": {
      heading: "See Tasks Emerge Effortlessly",
      description: "Drawing from your input, Pomotea assembles a coherent task flow with thoughtful sequencing and priorities, primed for immersive sessions.",
      listItems: ["AI-guided task creation", "Thoughtful prioritization", "Logical task flow", "Goal-linked organization"],
    },
    "session-start": {
      heading: "Dive into Sessions <br/>Without Friction",
      description: "With your path clear, Pomotea initiates focus sessions at the right moments, minimizing disruptions to help you slip into flow.",
      listItems: ["Smart session initiation", "Adaptive timing", "Smooth transitions", "Flow enhancement"],
    },
    "session-complete": {
      heading: "Track Momentum <br/>Intuitively",
      description: "Upon session end, Pomotea logs your advances and refines future tasks and timings based on your evolving patterns.",
      listItems: ["Seamless progress capture", "Pattern-based adjustments", "Productivity insights", "Dynamic workflow tuning"],
    },
    "break-start": {
      heading: "Refresh with Intentional Pauses",
      description: "Post-focus, Pomotea cues a break to restore energy, setting the stage for mindful recharge.",
      listItems: ["Timed break prompts", "Flexible durations", "Fatigue prevention", "Mindfulness preparation"],
    },
    "habit-start": {
      heading: "Weave in Restorative Habits",
      description: "After breaks, Pomotea suggests brief mindfulness practices, like meditation, to realign your focus gently.",
      listItems: ["Habit seamless blending", "Guided wellness moments", "Energy renewal", "Sustained routine building"],
    },
    "session-start-2": {
      heading: "Sustain Your Rhythm",
      description: "Refreshed, Pomotea guides you to the next step, easing re-entry to maintain uninterrupted progress.",
      listItems: ["Next-task auto-queue", "Momentum preservation", "Switching minimization", "Goal alignment upkeep"],
    },
  },
};

// Tasks Workflow Messages
export const tasksWorkflowMessages = {
  userStart: "Ready to make progress on our website project?",
  aiSessionStart: "Awesome, let's dive into a productive focus session!",
  timerStatus: "Getting your workflow ready...",
  tasksIntro: "Here's your prioritized task flow for today:",
  taskTitle: "Tasks for 'Website Development Sprint'",
  exampleTasks: [
    "Implement responsive navigation bar for mobile view",
    "Optimize image assets for faster page load times",
    "Debug form submission error on contact page",
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
    description: "Clear your space, silence distractions, and immerse in one task.",
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
    description: "Dive into project files, spotting optimization opportunities.",
  },
  {
    icon: "Coffee",
    title: "Break",
    time: "05:00",
    description: "Pause to refresh—stretch, hydrate, or step away briefly.",
  },
  {
    icon: "Clock",
    title: "Focus",
    time: "25:00",
    description: "Clear your space, silence distractions, and immerse in one task.",
  },
];

// Tasks Timer Display
export const tasksTimerDisplay = {
  sessionType: "Focusing on:",
  taskName: "Clean workspace",
};

// Settings Showcase Copy
export const settingsShowcase: FeatureShowcaseContent = {
  title: "Beautiful",
  subtitle: "Customization",
  heading: "Shape Your Ideal Flow Space",
  description: "Design an environment that feels right for deep immersion. From AI tuning to focus modes, personalize every element to support your unique path to flow.",
  phaseContent: {
    "settings-core": {
      heading: "Core Settings",
      description: "Set foundational options like session rhythms and privacy to align with your needs.",
      listItems: ["Session rhythm tweaks", "Privacy safeguards", "Essential tailoring"],
    },
    "settings-personalization": {
      heading: "Tailor Your Journey",
      description: "Customize visuals, goal handling, and AI style to match your personal workflow.",
      listItems: ["Interface personalization", "Goal & task fine-tuning", "AI demeanor adjustment"],
    },
    "settings-advanced": {
      heading: "Deep Customization",
      description: "Refine palettes, alerts, and insights for a truly harmonious productivity setup.",
      listItems: ["Palette choices", "Alert preferences", "Flow analytics"],
    },
  },
};

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
  appearance: {
    uiScale: "UI Scale",
    fontSize: {
      label: "Font Size",
      value: 16,
      max: 18,
    },
    background: "Background",
    opacity: {
      label: "Opacity",
      value: 75,
    },
    blur: {
      label: "Blur",
      value: 2,
      max: 5,
    },
    typography: "Typography",
    fonts: ["Inter", "Roboto", "Poppins", "+ Add"],
  },
  colors: {
    colorThemes: "Color Themes",
    themes: ["Ivy", "Fall", "Deep Space", "Obsidian"],
    backgroundColors: "Background Colors",
    textColors: "Text Colors",
    colorValues: {
      background: "#181e1d",
      backgroundDarker: "#0b0f0e",
      headers: "#e4e8e7",
      accent: "#bcc661",
    },
  },
  aiCompanion: {
    aiPersonality: "AI Personality",
    coachingStyle: {
      label: "Guidance Style",
      value: "Supportive",
      options: ["Supportive", "Direct", "Motivational", "Gentle"],
    },
    proactivity: {
      label: "Proactivity Level",
      value: 7,
      max: 10,
    },
    taskGeneration: "Task Generation",
    autoBreakdown: {
      label: "Auto-breakdown",
      description: "Seamlessly decompose large goals",
      enabled: true,
    },
    taskGranularity: {
      label: "Task Granularity",
      value: 6,
      max: 10,
    },
    learningAdaptation: "Learning & Adaptation",
    learnPatterns: {
      label: "Learn from Patterns",
      description: "Evolve suggestions with your rhythms",
      enabled: true,
    },
  },
  goalsTasks: {
    goalManagement: "Goal Management",
    defaultDuration: {
      label: "Default Goal Duration",
      value: "1 Week",
      options: ["1 Day", "3 Days", "1 Week", "2 Weeks", "1 Month"],
    },
    progressTracking: {
      label: "Progress Tracking",
      description: "Display flow indicators",
      enabled: true,
    },
    taskPreferences: "Task Preferences",
    defaultTaskDuration: {
      label: "Default Task Duration",
      value: 25,
      max: 120,
    },
    prioritySystem: {
      label: "Task Priority System",
      value: "Eisenhower",
      options: ["Simple", "Eisenhower", "MoSCoW", "Custom"],
    },
    contextFlow: "Context & Flow",
    contextPreservation: {
      label: "Context Preservation",
      description: "Resume seamlessly where you paused",
      enabled: true,
    },
  },
  notifications: {
    notifications: "Notifications",
    sessionReminders: {
      label: "Session Reminders",
      description: "Subtle prompts to enter flow",
      enabled: true,
    },
    breakNotifications: {
      label: "Break Notifications",
      description: "Gentle cues for pauses",
      enabled: false,
    },
    notificationVolume: {
      label: "Notification Volume",
      value: 60,
    },
  },
  dataPrivacy: {
    dataPrivacy: "Data & Privacy",
    localStorage: {
      label: "Local Data Storage",
      description: "Keep data on your device",
      enabled: true,
    },
    analytics: {
      label: "Analytics",
      description: "Help improve Pomotea",
      enabled: false,
    },
    backupSync: "Backup & Sync",
    autoBackup: {
      label: "Auto Backup",
      value: "Weekly",
      options: ["Never", "Daily", "Weekly", "Monthly"],
    },
    cloudSync: {
      label: "Cloud Sync",
      description: "Sync across devices",
      enabled: false,
    },
    dataExport: "Data Export",
    exportOptions: ["Export JSON", "Export CSV"],
  },
  analytics: {
    productivityInsights: "Productivity Insights",
    weeklyReports: {
      label: "Weekly Reports",
      description: "Receive flow summaries weekly",
      enabled: true,
    },
    reportDetail: {
      label: "Report Detail Level",
      value: "Detailed",
      options: ["Basic", "Standard", "Detailed", "Comprehensive"],
    },
    timeTracking: "Time Tracking",
    automaticTracking: {
      label: "Automatic Tracking",
      description: "Capture time effortlessly",
      enabled: true,
    },
    idleDetection: {
      label: "Idle Detection",
      description: "Pause when inactive",
      enabled: true,
    },
    goalAnalytics: "Goal Analytics",
    progressPredictions: {
      label: "Progress Predictions",
      description: "AI estimates for completion",
      enabled: true,
    },
  },
};

// Export all showcase data for easy access
export const showcaseData = {
  ai: aiShowcase,
  goals: goalsShowcase,
  tasks: tasksShowcase,
  settings: settingsShowcase,
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
  settings: {
    content: settingsContent,
  },
};

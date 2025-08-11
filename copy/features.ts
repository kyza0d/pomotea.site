/**
 * Centralized copy content for the Pomotea features page
 * Contains all text content, descriptions, and structured data for feature listings
 */

import { LucideIcon } from "lucide-react";

// Core types for feature content structure
export interface FeatureItem {
  name?: string;
  title?: string;
  description?: string;
  subtitle?: string;
  details?: string[];
}

export interface FeatureSection {
  title: string;
  items: FeatureItem[];
}

export interface FeaturesPageContent {
  pageTitle: string;
  pageDescription: string;
  navigation: {
    backText: string;
  };
  sections: {
    aiTools: FeatureSection;
    goalManagement: FeatureSection;
    progressTracking: FeatureSection;
    customization: FeatureSection;
  };
}

// AI Tools Section Copy
export const aiToolsData: FeatureItem[] = [
  {
    title: "Flow: Your AI Productivity Guide",
    subtitle: "Flow, your AI companion, simplifies task chaos by organizing, prioritizing, and suggesting tools to keep you in the zone with minimal effort.",
    details: [
      "Intelligently organizes tasks based on urgency and context.",
      "Suggests optimal tools for each task.",
      "Seamlessly handles scheduling and resource retrieval."
    ]
  },
  {
    title: "Smart Task Decomposition",
    subtitle: "Turn daunting goals into clear, actionable steps with Flow’s AI, which adapts to your work style and prioritizes what matters most.",
    details: [
      "Breaks down goals into manageable, bite-sized tasks.",
      "Prioritizes tasks based on your goals and deadlines.",
      "Adjusts dynamically to your evolving needs."
    ]
  },
  {
    title: "Conversational Goal Setting",
    subtitle: "Just tell Flow your aspirations in natural language, and it transforms them into structured, actionable plans tailored to your vision.",
    details: [
      "Creates plans from simple conversational input.",
      "Aligns tasks with your broader objectives.",
      "Adapts plans as your goals evolve."
    ]
  },
  {
    title: "Focus-Driven Insights",
    subtitle: "Flow analyzes your work patterns to offer personalized tips, helping you stay in flow and overcome productivity hurdles effortlessly."
  }
];

// Goal Management Section Copy
export const goalManagementData: FeatureItem[] = [
  {
    title: "Goal-Centric Workflows",
    subtitle: "Map out your ambitions with flexible goal hierarchies, ensuring every task connects to your bigger picture for meaningful progress.",
    details: [
      "Supports nested goals for complex projects.",
      "Links daily tasks to long-term objectives.",
      "Visualizes progress to keep you motivated."
    ]
  },
  {
    title: "Session-Based Focus",
    subtitle: "Dive into distraction-free work sessions that align with your goals, guiding you into flow for deeper, more intentional progress.",
    details: [
      "Focuses on one task per session.",
      "Minimizes distractions with smart notifications.",
      "Tracks session impact on your goals."
    ]
  },
  {
    title: "Dynamic Progress Updates",
    subtitle: "See your goals come to life with real-time progress tracking and milestone celebrations that keep you inspired and on track."
  }
];

// Progress Tracking Section Copy
export const progressTrackingData: FeatureItem[] = [
  {
    title: "Automatic Time Insights",
    subtitle: "Gain clarity on how you spend your time with automatic session tracking, offering insights to refine your focus and habits.",
    details: [
      "Logs time spent on tasks effortlessly.",
      "Highlights focus patterns and distractions.",
      "Provides actionable feedback for improvement."
    ]
  },
  {
    title: "Motivational Progress Visuals",
    subtitle: "Stay inspired with clear, visual dashboards that show your progress, goal velocity, and achievements in a glance.",
    details: [
      "Displays goal progress in real time.",
      "Tracks trends in your productivity.",
      "Celebrates milestones to boost motivation."
    ]
  },
  {
    title: "Reflective Performance Analytics",
    subtitle: "Understand your work habits over time with insights that help you optimize focus and build sustainable productivity routines."
  }
];

// Customization Section Copy
export const customizationData: FeatureItem[] = [
  {
    title: "Tailored Focus Sessions",
    subtitle: "Craft work sessions that fit your rhythm with adjustable timers, smart break prompts, and wellness tips to sustain flow without burnout.",
    details: [
      "Customizable session lengths and breaks.",
      "Smart prompts to prevent fatigue.",
      "Adapts to your preferred work cadence."
    ]
  },
  {
    title: "Personalized Work Environment",
    subtitle: "Design a workspace that feels like yours with custom themes, colors, and layouts that enhance focus and comfort.",
    details: [
      "Flexible theming and color options.",
      "Customizable layouts for your workflow.",
      "Personalized backgrounds for inspiration."
    ]
  },
  {
    title: "Adaptive Workflow Controls",
    subtitle: "Fine-tune Pomotea to match your unique style with customizable notifications, preferences, and behaviors that evolve with you."
  }
];

// Complete features page content
export const featuresPageContent: FeaturesPageContent = {
  pageTitle: "Pomotea Features",
  pageDescription: "Discover how Pomotea’s intelligent tools and deep customization guide you into flow, turning your ambitions into focused, meaningful progress.",
  navigation: {
    backText: "Back"
  },
  sections: {
    aiTools: {
      title: "Flow: AI-Powered Productivity",
      items: aiToolsData
    },
    goalManagement: {
      title: "Goal-Centric Planning",
      items: goalManagementData
    },
    progressTracking: {
      title: "Insightful Progress Tracking",
      items: progressTrackingData
    },
    customization: {
      title: "Deep Customization",
      items: customizationData
    }
  }
};

// Export individual sections for easy access
export const featureSections = {
  aiTools: aiToolsData,
  goalManagement: goalManagementData,
  progressTracking: progressTrackingData,
  customization: customizationData
} as const;

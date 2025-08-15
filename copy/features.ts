/**
 * Copy content for Pomotea features page
 */

import { LucideIcon } from "lucide-react";

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

// AI Tools
export const aiToolsData: FeatureItem[] = [
  {
    title: "Flow: Your AI Assistant",
    subtitle: "Flow helps organize your tasks, suggests the right tools, and keeps you focused without the hassle.",
    details: [
      "Sorts tasks by what's most important",
      "Recommends the best tools for each task",
      "Handles scheduling automatically"
    ]
  },
  {
    title: "Break Down Big Tasks",
    subtitle: "Turn overwhelming projects into simple steps. Flow learns how you work and focuses on what matters most.",
    details: [
      "Splits big goals into smaller, doable tasks",
      "Puts tasks in order of importance",
      "Changes as your needs change"
    ]
  },
  {
    title: "Talk to Set Goals",
    subtitle: "Just tell Flow what you want to accomplish, and it creates a clear plan to get there.",
    details: [
      "Makes plans from simple conversations",
      "Connects tasks to your main goals",
      "Updates plans when your goals change"
    ]
  },
  {
    title: "Get Better at Focus",
    subtitle: "Flow watches how you work and gives you tips to stay focused and get more done."
  }
];

// Goal Management
export const goalManagementData: FeatureItem[] = [
  {
    title: "Connect Everything to Your Goals",
    subtitle: "Set up your goals however works for you, and see how each task helps you get closer to what you want.",
    details: [
      "Break big goals into smaller ones",
      "Connect daily tasks to long-term goals",
      "See your progress to stay motivated"
    ]
  },
  {
    title: "Focus Sessions",
    subtitle: "Work on one thing at a time without distractions. Each session moves you closer to your goals.",
    details: [
      "Work on just one task per session",
      "Blocks distractions with smart alerts",
      "Shows how sessions help your goals"
    ]
  },
  {
    title: "See Progress Happen",
    subtitle: "Watch your goals come together in real-time and celebrate when you hit milestones."
  }
];

// Progress Tracking
export const progressTrackingData: FeatureItem[] = [
  {
    title: "Track Time Automatically",
    subtitle: "See where your time goes without any extra work. Get insights to help you focus better.",
    details: [
      "Tracks time on tasks automatically",
      "Shows when you focus best and what distracts you",
      "Gives tips to improve your focus"
    ]
  },
  {
    title: "Visual Progress",
    subtitle: "See your progress clearly with simple charts and dashboards that show how you're doing.",
    details: [
      "Shows goal progress in real-time",
      "Tracks your productivity trends",
      "Celebrates your wins"
    ]
  },
  {
    title: "Learn from Your Habits",
    subtitle: "Understand how you work best with insights that help you build better habits and stay productive."
  }
];

// Customization
export const customizationData: FeatureItem[] = [
  {
    title: "Work Sessions That Fit You",
    subtitle: "Set up work and break times that match your rhythm. Get reminders to rest and stay healthy.",
    details: [
      "Adjust session and break lengths",
      "Get smart reminders to take breaks",
      "Adapts to how you like to work"
    ]
  },
  {
    title: "Make It Your Own",
    subtitle: "Choose colors, themes, and layouts that help you focus and feel comfortable.",
    details: [
      "Pick from different themes and colors",
      "Arrange things the way you like",
      "Add backgrounds that inspire you"
    ]
  },
  {
    title: "Settings That Learn",
    subtitle: "Adjust how Pomotea works to match your style. It gets better at helping you over time."
  }
];

// Main content
export const featuresPageContent: FeaturesPageContent = {
  pageTitle: "What Pomotea Can Do",
  pageDescription: "See how Pomotea helps you stay focused and reach your goals with smart tools that work the way you do.",
  navigation: {
    backText: "Back"
  },
  sections: {
    aiTools: {
      title: "AI That Actually Helps",
      items: aiToolsData
    },
    goalManagement: {
      title: "Goal Planning Made Easy",
      items: goalManagementData
    },
    progressTracking: {
      title: "Track Your Progress",
      items: progressTrackingData
    },
    customization: {
      title: "Make It Yours",
      items: customizationData
    }
  }
};

// Individual sections
export const featureSections = {
  aiTools: aiToolsData,
  goalManagement: goalManagementData,
  progressTracking: progressTrackingData,
  customization: customizationData
} as const;

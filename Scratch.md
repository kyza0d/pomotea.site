We want to transform the copy  to more accuratly reflect the
direction in which I want pomotea to go.

Here is the core statment for pomotea:

```md
# Why I Built Pomotea: A Tool for Finding Flow

I’ve always struggled to stay focused. Like many of you, I’d start my day with ambitious plans, only to be derailed by notifications, scattered to-do lists, or overwhelming workloads. I tried countless productivity apps, but they felt rigid, like taskmasters that didn’t understand how I work. Frustrated, I built *Pomotea*—a tool designed not just to check boxes, but to help you find *flow*, that effortless state where work feels natural and time slips away.

## The Philosophy Behind Pomotea
Pomotea is built on a few core principles that reflect my vision for meaningful productivity:

- **Focus on Flow, Not Just Output**: Productivity for its own sake isn’t the goal. Flow—being fully immersed in your work, is where creativity and progress thrive. Pomotea is crafted to guide you into that state.
- **Minimize Context Switching**: Constantly jumping between tasks saps your energy. Pomotea streamlines your workflow to keep you in the zone, reducing distractions and mental clutter.
- **Deep Customization**: Everyone works differently. Pomotea is flexible, letting you tailor it to your unique style, so it feels like it was made just for you.

## Core Features of Pomotea
Pomotea’s features are designed to make these principles a reality, helping you work smarter and stay focused.

### Flow: Your AI Productivity Companion
At the heart of Pomotea is *Flow*, an AI companion that takes the chaos out of task management. Flow doesn’t wait for you to figure things out—it proactively organizes your tasks, prioritizes what’s urgent, and suggests the best tools to get things done efficiently. Need to schedule a meeting or pull up a document? Flow handles it seamlessly, letting you stay focused on what matters most.

### Session-Based Focus
Inspired by the Pomodoro technique, Pomotea centers around focused work sessions. When you start a session, Pomotea helps you zero in on one task, cutting out distractions and guiding you into flow. It’s not about cramming more into your day—it’s about making every moment count with intentional, distraction-free work.

### Goal-Centric Planning
Pomotea makes it easy to see the big picture without getting lost in the details. You can map out your goals—whether yearly, monthly, or weekly—and break them into manageable steps. Flow connects every task to your larger vision, ensuring that your daily work moves you closer to your dreams.

### Automatic Time Tracking
Understanding how you spend your time is key to improving focus. Pomotea automatically logs time during your sessions, giving you a clear picture of your day. Tell Flow what you worked on—or even admit to getting sidetracked watching videos—and it’ll provide insights to help you reflect and refine your habits. It’s like having a gentle accountability partner by your side.
```


Copy to alter:

```
/**
 * Centralized copy content for the features page
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
    title: "Intelligent Task Breakdown",
    subtitle: "Transform overwhelming goals into perfectly-sized, actionable tasks with AI-powered estimation and smart prioritization that adapts to your working style.",
    details: [
      "Breaks down complex goals into manageable tasks.",
      "Estimates effort for each task.",
      "Prioritizes tasks based on importance and dependencies."
    ]
  },
  {
    title: "Adaptive Daily Planning",
    subtitle: "Experience personalized scheduling that learns your peak productivity hours and creates optimal focus-break cycles tailored to your unique rhythm.",
    details: [
      "Schedules tasks based on your energy levels.",
      "Integrates smart breaks for optimal focus.",
      "Adapts to changes in your schedule automatically."
    ]
  },
  {
    title: "Natural Goal Creation",
    subtitle: "Simply describe what you want to achieve in conversation - our AI instantly transforms your ideas into structured, executable action plans."
  },
  {
    title: "Productivity Intelligence",
    subtitle: "Receive personalized insights and coaching based on your work patterns, with actionable recommendations to optimize your focus and eliminate productivity bottlenecks."
  }
];

// Goal Management Section Copy
export const goalManagementData: FeatureItem[] = [
  {
    title: "Hierarchical Goal Architecture",
    subtitle: "Create unlimited goal depth with intelligent task nesting, automatic progress propagation, and dependency mapping that keeps complex projects organized.",
    details: [
      "Nested goals for complex projects.",
      "Automatic progress updates.",
      "Visual dependency mapping."
    ]
  },
  {
    title: "Purpose-Driven Sessions",
    subtitle: "Every focus session connects to meaningful objectives, providing clear context and motivation while ensuring consistent progress toward your bigger vision.",
    details: [
      "Sessions linked to specific goals.",
      "Clear context for every work block.",
      "Boosts motivation and focus."
    ]
  },
  {
    title: "Intelligent Progress Synthesis",
    subtitle: "Watch goals evolve automatically as tasks complete, with visual progress indicators and milestone celebrations that maintain momentum and clarity."
  }
];

// Progress Tracking Section Copy
export const progressTrackingData: FeatureItem[] = [
  {
    title: "Deep Work Analytics",
    subtitle: "Understand your productivity patterns with comprehensive session tracking, focus quality metrics, and personalized insights into your most effective working rhythms."
  },
  {
    title: "Visual Progress Intelligence",
    subtitle: "Transform data into motivation with beautiful dashboards showing goal velocity, time investment trends, and achievement patterns that inspire continued progress."
  },
  {
    title: "Long-Term Performance Mastery",
    subtitle: "Unlock productivity optimization through historical analysis, identifying peak performance windows and success patterns to systematically improve your effectiveness."
  }
];

// Customization Section Copy
export const customizationData: FeatureItem[] = [
  {
    title: "Intelligent Timer Adaptation",
    subtitle: "Experience productivity sessions that evolve with you - customizable durations, wellness integration, and smart break suggestions that prevent burnout while maximizing flow."
  },
  {
    title: "Personal Environment Design",
    subtitle: "Create your perfect productivity sanctuary with extensive theming options, custom color palettes, typography choices, and background personalization."
  },
  {
    title: "Workflow Personalization Engine",
    subtitle: "Fine-tune every aspect of your productivity experience with granular preference controls, notification customization, and behavioral adaptations that match your unique style."
  }
];

// Complete features page content
export const featuresPageContent: FeaturesPageContent = {
  pageTitle: "Features",
  pageDescription: "Premium productivity capabilities that transform ambitious goals into systematic achievement through intelligent automation and deep personalization.",
  navigation: {
    backText: "Back"
  },
  sections: {
    aiTools: {
      title: "AI Tools",
      items: aiToolsData
    },
    goalManagement: {
      title: "Goal Management", 
      items: goalManagementData
    },
    progressTracking: {
      title: "Progress Tracking",
      items: progressTrackingData
    },
    customization: {
      title: "Customization",
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
```

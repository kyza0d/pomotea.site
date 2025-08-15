export interface HeroCopy {
  tagline: string;
  heading: {
    main: string;
    highlight: string;
  };
  description: string;
  emailPlaceholder: string;
  buttonText: string;
  buttonTextShort: string;
}

export interface OverviewCopy {
  heading: {
    main: string;
    highlight: string;
  };
  description: string;
  features: string[];
}

export interface CtaCopy {
  heading: string;
  description: string;
  buttonText: string;
}

export interface LandingCopy {
  hero: HeroCopy;
  overview: OverviewCopy;
  cta: CtaCopy;
}

export const landingCopy: LandingCopy = {
  hero: {
    tagline: "Find your flow, effortlessly",
    heading: {
      main: "Stop forcing discipline.",
      highlight: "Start building structure."
    },
    description: "Pomotea guides you into a state of flow with AI-driven task organization and focused work sessions, turning your goals into progress without the overwhelm.",
    emailPlaceholder: "your@email.com",
    buttonText: "Join waitlist",
    buttonTextShort: ""
  },
  overview: {
    heading: {
      main: "Simplify your workflow,",
      highlight: "amplify your focus."
    },
    description: "Pomotea’s AI companion, Flow, organizes your tasks, prioritizes what matters, and creates distraction-free work sessions tailored to your unique style.",
    features: [
      "AI-powered task prioritization and session planning",
      "Customizable, goal-driven workflows",
      "Automatic time tracking with actionable insights"
    ]
  },
  cta: {
    heading: "Unlock your best work with Pomotea",
    description: "Join our community for exclusive updates and early access to Pomotea’s flow-focused productivity revolution.",
    buttonText: "Get started now"
  }
};

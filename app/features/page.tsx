"use client";

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
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FeatureItemProps } from "@/components/landing/items";

interface FeatureListingProps extends FeatureItemProps {
  details?: string[];
}

const FeatureListing: React.FC<FeatureListingProps> = ({
  icon: Icon,
  title,
  subtitle,
  details,
  iconBgColor = "bg-landing-secondary/20",
  iconColor = "text-landing-secondary",
  borderColor = "border-landing-borders",
  padding = "p-5 px-7",
}) => {
  return (
    <div className="flex flex-col md:flex-row items-start space-x-3 sm:space-x-4">
      <div className={`${iconBgColor} ${padding} mb-4 md:mb-0 flex-shrink-0 items-center justify-center rounded-2xl sm:rounded-3xl border-2 ${borderColor}`}>
{Icon && <Icon size={24} className={`${iconColor} sm:w-8 sm:h-8`} />}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-base sm:text-lg font-medium mb-1 sm:mb-2">{title}</h4>
        <p className="text-sm sm:text-base text-landing-foreground/70 leading-relaxed">{subtitle}</p>
        {details && details.length > 0 && (
          <ul className="list-disc list-inside text-landing-foreground/60 mt-2 sm:mt-3 space-y-1 text-sm">
            {details.map((detail, i) => (
              <li key={i} className="leading-relaxed">{detail}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const aiTools = [
  {
    icon: Brain,
    name: "Intelligent Task Breakdown",
    description: "Transform overwhelming goals into perfectly-sized, actionable tasks with AI-powered estimation and smart prioritization that adapts to your working style.",
    details: [
      "Breaks down complex goals into manageable tasks.",
      "Estimates effort for each task.",
      "Prioritizes tasks based on importance and dependencies."
    ]
  },
  {
    icon: Calendar,
    name: "Adaptive Daily Planning",
    description: "Experience personalized scheduling that learns your peak productivity hours and creates optimal focus-break cycles tailored to your unique rhythm.",
    details: [
      "Schedules tasks based on your energy levels.",
      "Integrates smart breaks for optimal focus.",
      "Adapts to changes in your schedule automatically."
    ]
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

const goalWorkflowFeatures = [
  {
    icon: Target,
    title: "Hierarchical Goal Architecture",
    subtitle: "Create unlimited goal depth with intelligent task nesting, automatic progress propagation, and dependency mapping that keeps complex projects organized.",
    details: [
      "Nested goals for complex projects.",
      "Automatic progress updates.",
      "Visual dependency mapping."
    ]
  },
  {
    icon: Workflow,
    title: "Purpose-Driven Sessions",
    subtitle: "Every focus session connects to meaningful objectives, providing clear context and motivation while ensuring consistent progress toward your bigger vision.",
    details: [
      "Sessions linked to specific goals.",
      "Clear context for every work block.",
      "Boosts motivation and focus."
    ]
  },
  {
    icon: BarChart3,
    title: "Intelligent Progress Synthesis",
    subtitle: "Watch goals evolve automatically as tasks complete, with visual progress indicators and milestone celebrations that maintain momentum and clarity."
  }
];

const progressTrackingItems = [
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

const customizationItems = [
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

export default function FeaturesPage() {
  return (
    <div className="bg-landing-base-darker pt-28 md:pt-36 lg:pt-48">
      {/* Header */}
      <header className="border-b border-landing-borders">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-3 sm:py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-landing-foreground/60 hover:text-landing-foreground transition-colors text-sm"
          >
            <ArrowLeft size={16} />
            Back
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-6 sm:py-8">
        {/* Page Title */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl text-landing-headers mb-2">Features</h1>
          <p className="text-sm sm:text-base text-landing-foreground/70 leading-relaxed">
            Premium productivity capabilities that transform ambitious goals into systematic achievement through intelligent automation and deep personalization.
          </p>
        </div>

        <div className="space-y-10 sm:space-y-16">
          {/* AI-Powered Tools Section */}
          <section>
            <div className="flex items-center mb-4 sm:mb-6">
              <h2 className="text-lg text-landing-headers whitespace-nowrap">AI Tools</h2>
              <div className="flex-1 ml-4 sm:ml-6 h-px bg-landing-borders"></div>
            </div>
            <div className="space-y-6 sm:space-y-9">
              {aiTools.map((tool, index) => (
                <FeatureListing
                  key={index}
                  icon={tool.icon}
                  title={tool.name}
                  subtitle={tool.description}
                  iconBgColor="bg-none"
                  borderColor="border-none"
                  details={tool.details}
                  iconColor="text-landing-muted"
                  padding="p-2 sm:p-3"
                />
              ))}
            </div>
          </section>

          {/* Goal Management Section */}
          <section>
            <div className="flex items-center mb-4 sm:mb-6">
              <h2 className="text-lg text-landing-headers whitespace-nowrap">Goal Management</h2>
              <div className="flex-1 ml-4 sm:ml-6 h-px bg-landing-borders"></div>
            </div>
            <div className="space-y-6 sm:space-y-9">
              {goalWorkflowFeatures.map((feature, index) => (
                <FeatureListing
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  subtitle={feature.subtitle}
                  iconBgColor="bg-none"
                  borderColor="border-none"
                  details={feature.details}
                  iconColor="text-landing-muted"
                  padding="p-2 sm:p-3"
                />
              ))}
            </div>
          </section>

          {/* Progress Tracking Section */}
          <section>
            <div className="flex items-center mb-4 sm:mb-6">
              <h2 className="text-lg text-landing-headers whitespace-nowrap">Progress Tracking</h2>
              <div className="flex-1 ml-4 sm:ml-6 h-px bg-landing-borders"></div>
            </div>
            <div className="space-y-6 sm:space-y-9">
              {progressTrackingItems.map((item, index) => (
                <FeatureListing
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  subtitle={item.subtitle}
                  iconBgColor="bg-none"
                  borderColor="border-none"
                  iconColor="text-landing-muted"
                  padding="p-2 sm:p-3"
                />
              ))}
            </div>
          </section>

          {/* Customization Section */}
          <section>
            <div className="flex items-center mb-4 sm:mb-6">
              <h2 className="text-lg text-landing-headers whitespace-nowrap">Customization</h2>
              <div className="flex-1 ml-4 sm:ml-6 h-px bg-landing-borders"></div>
            </div>
            <div className="space-y-6 sm:space-y-9">
              {customizationItems.map((item, index) => (
                <FeatureListing
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  subtitle={item.subtitle}
                  iconBgColor="bg-none"
                  borderColor="border-none"
                  iconColor="text-landing-muted"
                  padding="p-2 sm:p-3"
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

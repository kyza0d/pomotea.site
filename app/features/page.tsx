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
  Sliders
} from "lucide-react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FeatureItemProps } from "@/components/landing/items";
import { featuresPageContent } from "@/copy/features";

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
    ...featuresPageContent.sections.aiTools.items[0],
    title: featuresPageContent.sections.aiTools.items[0].title || "Default AI Tool Title",
    subtitle: featuresPageContent.sections.aiTools.items[0].subtitle || "Default AI Tool Subtitle",
  },
  {
    icon: Calendar,
    ...featuresPageContent.sections.aiTools.items[1],
    title: featuresPageContent.sections.aiTools.items[1].title || "Default AI Tool Title",
    subtitle: featuresPageContent.sections.aiTools.items[1].subtitle || "Default AI Tool Subtitle",
  },
  {
    icon: MessageSquare,
    ...featuresPageContent.sections.aiTools.items[2],
    title: featuresPageContent.sections.aiTools.items[2].title || "Default AI Tool Title",
    subtitle: featuresPageContent.sections.aiTools.items[2].subtitle || "Default AI Tool Subtitle",
  },
  {
    icon: TrendingUp,
    ...featuresPageContent.sections.aiTools.items[3],
    title: featuresPageContent.sections.aiTools.items[3].title || "Default AI Tool Title",
    subtitle: featuresPageContent.sections.aiTools.items[3].subtitle || "Default AI Tool Subtitle",
  },
];

const goalWorkflowFeatures = [
  {
    icon: Target,
    ...featuresPageContent.sections.goalManagement.items[0],
    title: featuresPageContent.sections.goalManagement.items[0].title || "Default Goal Title",
    subtitle: featuresPageContent.sections.goalManagement.items[0].subtitle || "Default Goal Subtitle",
  },
  {
    icon: Workflow,
    ...featuresPageContent.sections.goalManagement.items[1],
    title: featuresPageContent.sections.goalManagement.items[1].title || "Default Goal Title",
    subtitle: featuresPageContent.sections.goalManagement.items[1].subtitle || "Default Goal Subtitle",
  },
  {
    icon: BarChart3,
    ...featuresPageContent.sections.goalManagement.items[2],
    title: featuresPageContent.sections.goalManagement.items[2].title || "Default Goal Title",
    subtitle: featuresPageContent.sections.goalManagement.items[2].subtitle || "Default Goal Subtitle",
  },
];

const progressTrackingItems = [
  {
    icon: Activity,
    ...featuresPageContent.sections.progressTracking.items[0],
    title: featuresPageContent.sections.progressTracking.items[0].title || "Default Progress Title",
    subtitle: featuresPageContent.sections.progressTracking.items[0].subtitle || "Default Progress Subtitle",
  },
  {
    icon: LineChart,
    ...featuresPageContent.sections.progressTracking.items[1],
    title: featuresPageContent.sections.progressTracking.items[1].title || "Default Progress Title",
    subtitle: featuresPageContent.sections.progressTracking.items[1].subtitle || "Default Progress Subtitle",
  },
  {
    icon: PieChart,
    ...featuresPageContent.sections.progressTracking.items[2],
    title: featuresPageContent.sections.progressTracking.items[2].title || "Default Progress Title",
    subtitle: featuresPageContent.sections.progressTracking.items[2].subtitle || "Default Progress Subtitle",
  },
];

const customizationItems = [
  {
    icon: Settings,
    ...featuresPageContent.sections.customization.items[0],
    title: featuresPageContent.sections.customization.items[0].title || "Default Customization Title",
    subtitle: featuresPageContent.sections.customization.items[0].subtitle || "Default Customization Subtitle",
  },
  {
    icon: Palette,
    ...featuresPageContent.sections.customization.items[1],
    title: featuresPageContent.sections.customization.items[1].title || "Default Customization Title",
    subtitle: featuresPageContent.sections.customization.items[1].subtitle || "Default Customization Subtitle",
  },
  {
    icon: Sliders,
    ...featuresPageContent.sections.customization.items[2],
    title: featuresPageContent.sections.customization.items[2].title || "Default Customization Title",
    subtitle: featuresPageContent.sections.customization.items[2].subtitle || "Default Customization Subtitle",
  },
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
            {featuresPageContent.navigation.backText}
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-6 sm:py-8">
        {/* Page Title */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl text-landing-headers mb-2">{featuresPageContent.pageTitle}</h1>
          <p className="text-sm sm:text-base text-landing-foreground/70 leading-relaxed">
            {featuresPageContent.pageDescription}
          </p>
        </div>

        <div className="space-y-10 sm:space-y-16">
          {/* AI-Powered Tools Section */}
          <section>
            <div className="flex items-center mb-4 sm:mb-6">
              <h2 className="text-lg text-landing-headers whitespace-nowrap">{featuresPageContent.sections.aiTools.title}</h2>
              <div className="flex-1 ml-4 sm:ml-6 h-px bg-landing-borders"></div>
            </div>
            <div className="space-y-6 sm:space-y-9">
              {aiTools.map((tool, index) => (
                <FeatureListing
                  key={index}
                  icon={tool.icon}
                  title={tool.title}
                  subtitle={tool.subtitle}
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
              <h2 className="text-lg text-landing-headers whitespace-nowrap">{featuresPageContent.sections.goalManagement.title}</h2>
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
              <h2 className="text-lg text-landing-headers whitespace-nowrap">{featuresPageContent.sections.progressTracking.title}</h2>
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
              <h2 className="text-lg text-landing-headers whitespace-nowrap">{featuresPageContent.sections.customization.title}</h2>
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

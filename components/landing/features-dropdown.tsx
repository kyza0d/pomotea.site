"use client";

import { Zap, Workflow, BarChart3 } from "lucide-react";
import { Mascot } from "../ui/mascot";
import Link from "next/link";

const coreFeatures = [
  {
    id: "productivity-agent",
    slug: "productivity-agent",
    icon: Mascot,
    title: "Productivity Agent",
    description: "Manage and plan your tasks hands-free with our agent"
  },
  {
    id: "optimized-flow",
    slug: "optimized-flow",
    icon: Zap,
    title: "Optimized for Flow",
    description: "Smart cycles promote deep focus and minimize distractions."
  },
  {
    id: "session-workflow",
    slug: "session-workflow",
    icon: Workflow,
    title: "Session-based Workflow",
    description: "Tasks align with goals through purpose-driven sessions."
  },
  {
    id: "progress-tracking",
    slug: "progress-tracking",
    icon: BarChart3,
    title: "Track Your Progress",
    description: "Analytics turn productivity data into actionable insights."
  }
];

export const FeaturesDropdown = () => {
  return (
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2 w-110">
      <div className="p-1 bg-landing-base-darker border-2 border-landing-borders/60 rounded-xl shadow-xl">
        <div className="space-y-2">
          {coreFeatures.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <Link key={feature.id} href={`/features/${feature.slug}`} className="block">
                <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-landing-borders/30 cursor-pointer group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-landing-borders/50 flex items-center justify-center group-hover:bg-landing-borders/70">
                    <IconComponent className="w-5 h-5 text-landing-muted" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-foreground mb-1 group-hover:text-landing-headers">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
          <div className="border-t border-landing-borders/30 pt-2 mt-2">
            <Link href="/features" className="block">
              <div className="p-2 rounded-lg hover:bg-landing-borders/30 cursor-pointer group text-center">
                <p className="text-xs text-landing-muted group-hover:text-landing-headers">
                  View All Features →
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

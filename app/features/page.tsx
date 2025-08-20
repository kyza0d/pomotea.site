"use client";

import { Zap, Workflow, BarChart3 } from "lucide-react";
import { Mascot } from "@/components/ui/mascot";
import Link from "next/link";

const featuresData = [
  {
    id: "productivity-agent",
    slug: "productivity-agent",
    icon: Mascot,
    title: "Productivity Agent",
    description: "Manage and plan your tasks hands-free with our intelligent agent"
  },
  {
    id: "optimized-flow",
    slug: "optimized-flow",
    icon: Zap,
    title: "Optimized for Flow",
    description: "Smart cycles promote deep focus and minimize distractions"
  },
  {
    id: "session-workflow",
    slug: "session-workflow",
    icon: Workflow,
    title: "Session-based Workflow",
    description: "Tasks align with goals through purpose-driven sessions"
  },
  {
    id: "progress-tracking",
    slug: "progress-tracking",
    icon: BarChart3,
    title: "Track Your Progress",
    description: "Analytics turn productivity data into actionable insights"
  }
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen text-landing-foreground">
      <div className="max-w-[1050px] mx-auto px-6 py-24">
        <article className="flex flex-col justify-between min-h-[calc(100vh-12rem)]">
          <div>
            {/* Header */}
            <header className="mb-16">
              <h1 className="text-3xl font-normal mb-4 text-landing-headers leading-tight">
                Features
              </h1>
              <p className="text-lg text-landing-foreground leading-relaxed">
                Discover how Pomotea's intelligent features work together to create a focused,
                productive workflow that adapts to your unique needs.
              </p>
            </header>

            {/* Features List */}
            <div className="gap-6 grid grid-cols-1 min-[600px]:grid-cols-2">
              {featuresData.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <article key={feature.id}>
                    <Link href={`/features/${feature.slug}`} className="block group h-full bg-landing-base/60 hover:bg-landing-base/90 rounded-xl p-2 border-2 border-landing-borders/70">
                      <div className="flex-shrink-0 mb-2 p-4 w-full h-32 bg-landing-borders/70 rounded-lg flex items-end justify-start group-hover:bg-landing-borders/90 transition-colors">
                        <IconComponent className="w-9 h-9 text-landing-muted" />
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <h2 className="text-lg font-medium text-landing-headers mb-1 transition-colors">
                            {feature.title}
                          </h2>
                          <p className="text-landing-foreground leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </article>
                );
              })}
            </div>
          </div >

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-landing-borders">
            <p className="text-landing-muted text-sm">
              Ready to get started? <Link href="/" className="underline hover:no-underline">Return to homepage</Link>
            </p>
          </footer>
        </article>
      </div>
    </div>
  );
}

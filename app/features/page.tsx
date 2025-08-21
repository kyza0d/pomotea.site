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
              <p className="text-landing-foreground leading-relaxed max-w-2xl">
                Pomotea transforms how you work by combining intelligent task management with focus-driven workflows. Each feature works together to create a seamless productivity experience that adapts to your rhythm and helps you accomplish what truly matters.
              </p>
            </header>

            {/* Features List */}
            <div className="gap-6 grid grid-cols-1 min-[600px]:grid-cols-2">
              {featuresData.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <article key={feature.id}>
                    <Link href={`/features/${feature.slug}`} className="block group h-full bg-landing-base/40 hover:bg-landing-base/90 rounded-xl p-2 border-2 border-landing-borders/70">
                      <div className="flex-shrink-0 mb-2 p-4 w-full h-32 bg-landing-borders/30 rounded-lg flex items-end justify-start group-hover:bg-landing-borders/50 transition-colors">
                        <IconComponent className="w-9 h-9 text-landing-muted opacity-30" />
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
          </div>

          <hr />

          <h2 className="text-xl font-medium text-landing-headers mb-4 mt-8">
            Focus-First Productivity
          </h2>
          <p>
            Productivity tools shouldn't splinter your attention. Pomotea brings everything into focus by putting a friendly <strong>Productivity Agent</strong> at the center of your workflow—creating, planning, completing, renaming, and moving tasks in a single, coherent interface. By minimizing micro-decisions and context switching, our <strong>Flow</strong>-first approach keeps you immersed in one task at a time while gently deflecting distractions.
          </p>

          <h2 className="text-xl font-medium text-landing-headers mb-4 mt-8">
            Meaningful Progress
          </h2>
          <p>
            Every action ladders up to what matters with a <strong>Goal‑Centric</strong> model that clarifies direction and shows how each task contributes to outcomes. Flexible <strong>Auto Sessions</strong>—Pomodoro-style but fully configurable—adapt to your rhythm, helping you maintain momentum without rigid rules. The result is less friction, fewer tabs, and more meaningful progress: a calmer, clearer productivity system that helps you focus deeply, move faster, and finish the work that counts.
          </p>

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

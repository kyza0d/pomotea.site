"use client";

import { Mascot } from "@/components/ui/mascot";
import Link from "next/link";

export default function ProductivityAgentPage() {
  return (
    <>
      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-landing-accent/10 rounded-lg flex items-center justify-center">
            <Mascot className="w-13 h-13 text-landing-muted" />
          </div>
          <div>
            <h1 className="text-3xl font-normal text-landing-foreground leading-tight">
              Productivity Agent
            </h1>
            <p className="text-landing-muted mt-1">
              Your AI-powered productivity companion
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <article className="prose prose-lg max-w-none">
        <p className="text-landing-foreground/90 leading-relaxed mb-8">
          Meet your personal productivity agent—an intelligent assistant that understands your workflow,
          learns from your patterns, and helps you achieve more with less stress.
        </p>

        <hr />

        <h2 className="font-medium text-landing-foreground mt-12 mb-6">How it works</h2>
        <p className="text-landing-foreground/90 leading-relaxed mb-6">
          Our AI agent analyzes your work patterns, task complexity, and productivity rhythms to provide
          personalized recommendations. It's like having a dedicated productivity coach that's available 24/7.
        </p>

        <hr />

        <h3 className="font-medium text-landing-foreground mt-8 mb-4">Intelligent Task Management</h3>
        <p className="text-landing-foreground/90 leading-relaxed mb-6">
          Simply describe your goals in natural language, and the agent breaks them down into manageable tasks.
          It understands context, priorities, and deadlines, automatically organizing your work in the most
          effective sequence.
        </p>

        <hr />

        <h3 className="font-medium text-landing-foreground mt-8 mb-4">Adaptive Planning</h3>
        <p className="text-landing-foreground/90 leading-relaxed mb-6">
          The agent learns from your completion patterns and adjusts future planning accordingly. If you
          consistently underestimate certain types of tasks, it will factor that into future suggestions.
        </p>

        <hr />

        <h3 className="font-medium text-landing-foreground mt-8 mb-4">Personalized Insights</h3>
        <p className="text-landing-foreground/90 leading-relaxed mb-6">
          Get detailed insights about your productivity patterns, energy levels, and optimal work times.
          The agent identifies trends and suggests improvements to help you work more efficiently.
        </p>

        <hr />

        <h2 className="font-medium text-landing-foreground mt-12 mb-6">Key Benefits</h2>
        <ul className="space-y-3 mb-8">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
            <span className="text-landing-foreground/90">Reduces decision fatigue by automating routine planning</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
            <span className="text-landing-foreground/90">Improves task prioritization based on your goals</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
            <span className="text-landing-foreground/90">Provides actionable insights to optimize your workflow</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
            <span className="text-landing-foreground/90">Adapts to your unique work style and preferences</span>
          </li>
        </ul>
      </article>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-landing-borders">
        <div className="flex items-center justify-between">
          <Link href="/features" className="text-landing-muted hover:text-landing-foreground underline hover:no-underline">
            ← Back to Features
          </Link>
          <Link href="/" className="text-landing-muted hover:text-landing-foreground underline hover:no-underline">
            Get Started
          </Link>
        </div>
      </footer>
    </>
  );
}

"use client";

import { BarChart3 } from "lucide-react";
import Link from "next/link";

export default function ProgressTrackingPage() {
  return (
    <article>
      {/* Header */}
      <header>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-landing-accent/10 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-12 h-12 text-landing-muted" aria-hidden="true" />
          </div>
          <div>
            <h1 className="font-normal text-landing-foreground leading-tight">
              Progress Tracking
            </h1>
            <p className="text-landing-muted mt-1">
              Analytics that turn focus into measurable progress
            </p>
          </div>
        </div>
      </header>

      <hr />

      {/* Content */}
      <article className="prose prose-lg max-w-none">
        <p className="text-landing-foreground/90 leading-relaxed mb-8">
          Transform activity into insight. See when you do your best work, what fuels momentum,
          and where to adjust—so every session moves your goals forward.
        </p>

        <h2 className="font-medium text-landing-foreground mt-12 mb-6">Comprehensive analytics</h2>
        <p className="text-landing-foreground/90 leading-relaxed mb-6">
          Beyond time spent, Pomotea measures focus quality, energy patterns, and goal progress
          across your day, week, and month. Get context-rich analytics that show effectiveness and impact.
        </p>

        <h3 className="font-medium text-landing-foreground mt-8 mb-4">Focus quality metrics</h3>
        <p className="text-landing-foreground/90 leading-relaxed mb-6">
          Track completion rate, distraction frequency, session consistency, and self-rated focus to
          understand how deeply you&rsquo;re working—not just how long.
        </p>

        <h3 className="font-medium text-landing-foreground mt-8 mb-4">Energy pattern analysis</h3>
        <p className="text-landing-foreground/90 leading-relaxed mb-6">
          Surface your natural rhythms by hour and day. Schedule deep work when your energy peaks, and
          save lighter tasks for low-energy windows.
        </p>

        <h3 className="font-medium text-landing-foreground mt-8 mb-4">Goal progress visualization</h3>
        <p className="text-landing-foreground/90 leading-relaxed mb-6">
          See contribution to goals over time with rollups by day, week, and month. Spot which activities
          create outsized progress—and double down on what works.
        </p>

        <h3 className="font-medium text-landing-foreground mt-8 mb-4">Productivity trends</h3>
        <p className="text-landing-foreground/90 leading-relaxed mb-6">
          Monitor how variables like sleep, session length, and environment influence your performance.
          Identify patterns, run small experiments, and improve with evidence.
        </p>

        <h2 className="font-medium text-landing-foreground mt-12 mb-6">Works with Pomotea’s core features</h2>
        <ul className="space-y-4 mb-2">
          <li className="text-landing-foreground/90">
            <strong>Productivity Agent.</strong> Your Agent keeps tasks organized and outcomes logged,
            giving analytics clean, structured data.{" "}
            <Link href="/features/productivity-agent" className="text-landing-accent underline hover:no-underline">
              Learn more
            </Link>
            .
          </li>
          <li className="text-landing-foreground/90">
            <strong>Flow.</strong> Single-task focus reduces context switching, so your metrics reflect
            true deep work.{" "}
            <Link href="/features/flow" className="text-landing-accent underline hover:no-underline">
              Explore Flow
            </Link>
            .
          </li>
          <li className="text-landing-foreground/90">
            <strong>Goal-centric.</strong> Every task rolls up to a goal, so dashboards show real movement
            toward what matters.{" "}
            <Link href="/features/goals" className="text-landing-accent underline hover:no-underline">
              See goals
            </Link>
            .
          </li>
          <li className="text-landing-foreground/90">
            <strong>Auto Sessions.</strong> Configurable sessions feed consistent, comparable metrics for
            accurate trend analysis.{" "}
            <Link href="/features/sessions" className="text-landing-accent underline hover:no-underline">
              Customize sessions
            </Link>
            .
          </li>
        </ul>

        <h2 className="font-medium text-landing-foreground mt-12 mb-6">Key insights</h2>
        <ul className="space-y-3 mb-8">
          <li className="text-landing-foreground/90">
            <strong>Peak performance windows:</strong> Discover the best times for deep work vs. admin based on completion and quality.
          </li>
          <li className="text-landing-foreground/90">
            <strong>Task complexity patterns:</strong> See how long different task types actually take to improve planning and estimates.
          </li>
          <li className="text-landing-foreground/90">
            <strong>Break effectiveness:</strong> Learn which recovery activities restore focus and energy the fastest.
          </li>
          <li className="text-landing-foreground/90">
            <strong>Goal achievement rate:</strong> Track success across goal types to refine how you set and pursue outcomes.
          </li>
        </ul>

        <h2 className="font-medium text-landing-foreground mt-12 mb-6">Privacy‑first by design</h2>
        <p className="text-landing-foreground/90 leading-relaxed mb-6">
          We analyze how you work—not what you work on. No content tracking, ever. Your activity and performance
          data stay private and are used solely to generate your personal insights.
        </p>

        <h2 className="font-medium text-landing-foreground mt-12 mb-6">Benefits</h2>
        <ul className="space-y-3 mb-8">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
            <span className="text-landing-foreground/90">Schedule around your peak energy and focus windows</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
            <span className="text-landing-foreground/90">Plan with confidence using accurate time and complexity patterns</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
            <span className="text-landing-foreground/90">Make evidence‑based adjustments to habits and routines</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
            <span className="text-landing-foreground/90">See clear progress toward goals—not just time spent</span>
          </li>
        </ul>
      </article>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-landing-borders">
        <div className="flex items-center justify-between">
          <Link
            href="/features"
            className="text-landing-muted hover:text-landing-foreground underline hover:no-underline"
          >
            ← Back to Features
          </Link>
          <Link
            href="/"
            className="text-landing-muted hover:text-landing-foreground underline hover:no-underline"
          >
            Start tracking with Pomotea
          </Link>
        </div>
      </footer>
    </article>
  );
}

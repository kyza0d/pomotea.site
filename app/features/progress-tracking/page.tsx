"use client";

import { BarChart3 } from "lucide-react";
import Link from "next/link";

export default function ProgressTrackingPage() {
  return (
    <article>
      {/* Header */}
      <header>
        <div className="flex items-center gap-2">
          <div
            className="w-16 h-16 pb-2 bg-landing-accent/10 rounded-lg flex items-center justify-center"
            aria-hidden="true"
          >
            <BarChart3 className="w-9 h-9 text-landing-muted" aria-hidden="true" />
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

      <p>
        Transform activity into insight. See when you do your best work, what fuels momentum,
        and where to adjust—so every session moves your goals forward.
      </p>

      <hr />

      <h2>Comprehensive analytics</h2>
      <p>
        Beyond time spent, Pomotea measures focus quality, energy patterns, and goal progress
        across your day, week, and month. Get context-rich analytics that show effectiveness and impact.
      </p>

      <h3>Focus quality metrics</h3>
      <p>
        Track completion rate, distraction frequency, session consistency, and self-rated focus to
        understand how deeply you&rsquo;re working—not just how long.
      </p>

      <h3>Energy pattern analysis</h3>
      <p>
        Surface your natural rhythms by hour and day. Schedule deep work when your energy peaks, and
        save lighter tasks for low-energy windows.
      </p>

      <h3>Goal progress visualization</h3>
      <p>
        See contribution to goals over time with rollups by day, week, and month. Spot which activities
        create outsized progress—and double down on what works.
      </p>

      <h3>Productivity trends</h3>
      <p>
        Monitor how variables like sleep, session length, and environment influence your performance.
        Identify patterns, run small experiments, and improve with evidence.
      </p>

      <h2>Works with Pomotea’s core features</h2>
      <ul>
        <li>
          <strong>Productivity Agent.</strong> Your Agent keeps tasks organized and outcomes logged,
          giving analytics clean, structured data.{" "}
          <Link href="/features/productivity-agent">
            Learn more
          </Link>
          .
        </li>
        <li>
          <strong>Flow.</strong> Single-task focus reduces context switching, so your metrics reflect
          true deep work.{" "}
          Explore Flow
          .
        </li>
        <li>
          <strong>Goal-centric.</strong> Every task rolls up to a goal, so dashboards show real movement
          toward what matters.{" "}
          See goals
          .
        </li>
        <li>
          <strong>Auto Sessions.</strong> Configurable sessions feed consistent, comparable metrics for
          accurate trend analysis.{" "}
          Customize sessions
          .
        </li>
      </ul>

      <h2>Key insights</h2>
      <ul>
        <li>
          <strong>Peak performance windows:</strong> Discover the best times for deep work vs. admin based on completion and quality.
        </li>
        <li>
          <strong>Task complexity patterns:</strong> See how long different task types actually take to improve planning and estimates.
        </li>
        <li>
          <strong>Break effectiveness:</strong> Learn which recovery activities restore focus and energy the fastest.
        </li>
        <li>
          <strong>Goal achievement rate:</strong> Track success across goal types to refine how you set and pursue outcomes.
        </li>
      </ul>

      <h2>Privacy‑first by design</h2>
      <p>
        We analyze how you work—not what you work on. No content tracking, ever. Your activity and performance
        data stay private and are used solely to generate your personal insights.
      </p>

      <h2>Benefits</h2>
      <ul>
        <li>

          <span>Schedule around your peak energy and focus windows</span>
        </li>
        <li>
          <span>Plan with confidence using accurate time and complexity patterns</span>
        </li>
        <li>
          <span>Make evidence‑based adjustments to habits and routines</span>
        </li>
        <li>
          <span>See clear progress toward goals—not just time spent</span>
        </li>
      </ul>

    </article>
  );
}

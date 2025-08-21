"use client";

import { Zap } from "lucide-react";
import Link from "next/link";

export default function OptimizedFlowPage() {
  return (
    <article>
      {/* Header */}
      <header>
        <div className="flex items-center gap-4 mb-6">
          <div
            className="w-16 h-16 bg-landing-accent/10 rounded-lg flex items-center justify-center"
            aria-hidden="true"
          >
            <Zap className="w-12 h-12 text-landing-muted" />
          </div>
          <div>
            <h1 className="font-normal text-landing-foreground leading-tight">
              Optimized for Flow
            </h1>
            <p className="text-landing-muted mt-1">
              Stay with one task. Everything else waits.
            </p>
          </div>
        </div>
      </header>

      <hr />

      {/* Content */}
      <article className="prose prose-lg max-w-none">
        <p className="text-landing-foreground/90 leading-relaxed mb-8">
          Flow is the core of Pomotea. The interface keeps you{" "}
          <strong>locked on a single task</strong>, discouraging context switches and minimizing
          noise. Smart <Link href="/features/sessions">Auto Sessions</Link> adapt to your work style,
          while the <Link href="/features/agent">Productivity Agent</Link> quietly handles capture,
          planning, and handoffs so you can focus on doing.
        </p>

        {/* The Flow Engine */}
        <section aria-labelledby="flow-engine">
          <h2 id="flow-engine" className="font-medium text-landing-foreground mt-12 mb-6">
            The Flow Engine
          </h2>
          <ul className="space-y-4 mb-8">
            <li>
              <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0" />
              <div>
                <strong>Single‑task workspace</strong> — Only one task is active at a time. All
                other lists, counters, and notifications take a back seat to preserve attention.
              </div>
            </li>
            <li>
              <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0" />
              <div>
                <strong>Quick Capture</strong> — Got an idea mid‑flow? Capture it instantly without
                leaving the task. It’s routed to your Inbox for the{" "}
                <Link href="/features/agent">Agent</Link> to process later.
              </div>
            </li>
            <li>
              <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0" />
              <div>
                <strong>Lightweight checkpoints</strong> — Break a task into mini‑steps and tick
                them off without changing context or opening new views.
              </div>
            </li>
            <li>
              <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0" />
              <div>
                <strong>Focus shield</strong> — During sessions, Pomotea mutes non‑essential UI and
                uses gentle, non‑intrusive indicators to keep you aware without pulling you out.
              </div>
            </li>
          </ul>
        </section>

        {/* Adaptive Sessions */}
        <section aria-labelledby="adaptive-sessions">
          <h2 id="adaptive-sessions" className="font-medium text-landing-foreground mt-12 mb-6">
            Adaptive Sessions (Auto Sessions)
          </h2>
          <p className="text-landing-foreground/90 leading-relaxed mb-6">
            Unlike rigid 25‑minute timers, <Link href="/features/sessions">Auto Sessions</Link>{" "}
            adjust to <strong>task type</strong>, <strong>energy level</strong>, and{" "}
            <strong>historical pace</strong>. Creative work often gets longer, uninterrupted blocks;
            administrative tasks benefit from tighter sprints.
          </p>
          <ul className="space-y-3 mb-8">
            <li>
              <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0" />
              <span>
                <strong>Short sprints</strong> — Quick cycles to clear small items without drag.
              </span>
            </li>
            <li>
              <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0" />
              <span>
                <strong>Deep‑work blocks</strong> — Fewer touches, longer runway for complex tasks.
              </span>
            </li>
            <li>
              <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0" />
              <span>
                <strong>Recovery windows</strong> — Smart breaks sized to your current workload and
                the next task’s demand.
              </span>
            </li>
          </ul>
        </section>

        {/* Energy-Aware Scheduling */}
        <section aria-labelledby="energy-aware">
          <h2 id="energy-aware" className="font-medium text-landing-foreground mt-12 mb-6">
            Energy‑Aware Scheduling
          </h2>
          <p className="text-landing-foreground/90 leading-relaxed mb-6">
            Pomotea learns your natural rhythm throughout the day and suggests the{" "}
            <strong>right work at the right time</strong>. Schedule deep work during peaks, and move
            lighter tasks into dips—without micromanaging a calendar.
          </p>
          <ul className="space-y-3 mb-8">
            <li>
              <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0" />
              <span>
                <strong>Peak hours</strong> — Prioritize demanding tasks when you’re sharpest.
              </span>
            </li>
            <li>
              <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0" />
              <span>
                <strong>Off‑peak</strong> — Reserve admin, reviews, or planning for low‑energy
                windows.
              </span>
            </li>
          </ul>
        </section>

        {/* Goal-Centric Alignment */}
        <section aria-labelledby="goal-centric">
          <h2 id="goal-centric" className="font-medium text-landing-foreground mt-12 mb-6">
            Goal‑Centric by Design
          </h2>
          <p className="text-landing-foreground/90 leading-relaxed mb-6">
            Everything rolls up to your current goal. Each session shows{" "}
            <strong>why this task matters</strong>, how it contributes, and what’s next. Switch
            goals intentionally—Pomotea makes the impact clear at a glance.
          </p>
          <ul className="space-y-3 mb-8">
            <li>
              <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0" />
              <span>
                <strong>Context ribbon</strong> — See goal, milestone, and success metric inline.
              </span>
            </li>
            <li>
              <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0" />
              <span>
                <strong>Up next</strong> — A focused queue curated by the{" "}
                <Link href="/features/agent">Productivity Agent</Link>.
              </span>
            </li>
          </ul>
          <p className="text-landing-foreground/90 leading-relaxed">
            Learn how Pomotea structures outcomes in{" "}
            <Link href="/features/goals">Goal Management</Link>.
          </p>
        </section>

        {/* Productivity Agent */}
        <section aria-labelledby="productivity-agent">
          <h2 id="productivity-agent" className="font-medium text-landing-foreground mt-12 mb-6">
            Your Productivity Agent
          </h2>
          <p className="text-landing-foreground/90 leading-relaxed mb-6">
            The <Link href="/features/agent">Agent</Link> manages the busywork so you don’t have to:
            creating, planning, completing, renaming, and moving tasks—all from a single place. It
            also preps the next session, suggests estimates, and keeps your workspace tidy without
            interruptions.
          </p>
          <ul className="space-y-3 mb-8">
            <li>
              <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0" />
              <span>
                <strong>Hands‑off organization</strong> — The Agent routes and batches work to
                protect your focus.
              </span>
            </li>
            <li>
              <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0" />
              <span>
                <strong>Smart renaming and moving</strong> — Keep everything consistent and in the
                right place without stopping your flow.
              </span>
            </li>
          </ul>
        </section>

        {/* Smart Breaks */}
        <section aria-labelledby="smart-breaks">
          <h2 id="smart-breaks" className="font-medium text-landing-foreground mt-12 mb-6">
            Smarter Breaks, Better Recovery
          </h2>
          <p className="text-landing-foreground/90 leading-relaxed mb-6">
            Not all breaks restore attention equally. Pomotea suggests break length and simple
            activities based on your current load, upcoming work, and recent pace—so you return
            sharp, not scattered.
          </p>
          <ul className="space-y-3 mb-8">
            <li>
              <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0" />
              <span>
                <strong>Micro resets</strong> — Short, frequent recoveries for rapid cycles.
              </span>
            </li>
            <li>
              <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0" />
              <span>
                <strong>Macro breaks</strong> — Longer pauses to protect deep‑work quality.
              </span>
            </li>
          </ul>
        </section>

        {/* Benefits */}
        <section aria-labelledby="benefits">
          <h2 id="benefits" className="font-medium text-landing-foreground mt-12 mb-6">
            Benefits
          </h2>
          <ul className="space-y-3 mb-8">
            <li>
              <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0" />
              <span className="text-landing-foreground/90">
                <strong>More time in flow</strong> leads to higher throughput and fewer re‑starts.
              </span>
            </li>
            <li>
              <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0" />
              <span className="text-landing-foreground/90">
                <strong>Less fatigue</strong> through optimized work‑rest cycles.
              </span>
            </li>
            <li>
              <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0" />
              <span className="text-landing-foreground/90">
                <strong>Higher quality</strong> from sustained, single‑task concentration.
              </span>
            </li>
            <li>
              <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0" />
              <span className="text-landing-foreground/90">
                <strong>Greater satisfaction</strong> as progress stays visible and purposeful.
              </span>
            </li>
          </ul>
        </section>
      </article>

      {/* Footer */}
      <footer className="mt-16 pt-8">
        <div className="flex items-center justify-between">
          <Link
            href="/features"
            className="text-landing-muted hover:text-landing-foreground underline hover:no-underline"
            aria-label="Back to all features"
          >
            ← Back to Features
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-landing-muted hover:text-landing-foreground underline hover:no-underline"
            >
              Get Started
            </Link>
          </div>
        </div>
      </footer>
    </article>
  );
}

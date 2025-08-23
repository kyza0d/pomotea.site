"use client";

import { Orbit, Zap } from "lucide-react";
import Link from "next/link";

export default function OptimizedFlowPage() {
  return (
    <article>
      {/* Header */}
      <header>
        <div className="flex items-center gap-2 mb-6">
          <div
            className="w-16 h-16 pb-2 bg-landing-accent/10 rounded-lg flex items-center justify-center"
            aria-hidden="true"
          >
            <Orbit className="w-9 h-9 text-landing-muted" />
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


      <p>
        Flow is the core of Pomotea. The interface keeps you{" "}
        <strong>locked on a single task</strong>, discouraging context switches and minimizing
        noise. Smart <Link href="/features/sessions">Auto Sessions</Link> adapt to your work style,
        while the <Link href="/features/agent">Productivity Agent</Link> quietly handles capture,
        planning, and handoffs so you can focus on doing.
      </p>

      <hr />

      <h2>
        The Flow Engine
      </h2>
      <ul>
        <li>
          <div>
            <strong>Single‑task workspace</strong> — Only one task is active at a time. All
            other lists, counters, and notifications take a back seat to preserve attention.
          </div>
        </li>
        <li>
          <div>
            <strong>Lightweight checkpoints</strong> — Break a task into mini‑steps and tick
            them off without changing context or opening new views.
          </div>
        </li>
        <li>
          <div>
            <strong>Focus shield</strong> — During sessions, Pomotea mutes non‑essential UI and
            uses gentle, non‑intrusive indicators to keep you aware without pulling you out.
          </div>
        </li>
      </ul>


      <hr />
      {/* Adaptive Sessions */}

      <h2>
        Adaptive Sessions (Auto Sessions)
      </h2>
      <p>
        Unlike rigid 25‑minute timers, <Link href="/features/sessions">Auto Sessions</Link>{" "}
        adjust to <strong>task type</strong>, <strong>energy level</strong>, and{" "}
        <strong>historical pace</strong>. Creative work often gets longer, uninterrupted blocks;
        administrative tasks benefit from tighter sprints.
      </p>
      <ul>
        <li>
          <span>
            <strong>Short sprints</strong> — Quick cycles to clear small items without drag.
          </span>
        </li>
        <li>
          <span>
            <strong>Deep‑work blocks</strong> — Fewer touches, longer runway for complex tasks.
          </span>
        </li>
        <li>
          <span>
            <strong>Recovery windows</strong> — Smart breaks sized to your current workload and
            the next task’s demand.
          </span>
        </li>
      </ul>


      <hr />
      {/* Energy-Aware Scheduling */}

      <h2>
        Energy‑Aware Scheduling
      </h2>
      <p>
        Pomotea learns your natural rhythm throughout the day and suggests the{" "}
        <strong>right work at the right time</strong>. Schedule deep work during peaks, and move
        lighter tasks into dips—without micromanaging a calendar.
      </p>
      <ul>
        <li>
          <span>
            <strong>Peak hours</strong> — Prioritize demanding tasks when you’re sharpest.
          </span>
        </li>
        <li>
          <span>
            <strong>Off‑peak</strong> — Reserve admin, reviews, or planning for low‑energy
            windows.
          </span>
        </li>
      </ul>


      {/* Goal-Centric Alignment */}
      <h2 id="goal-centric">
        Goal‑Centric by Design
      </h2>
      <p>
        Everything rolls up to your current goal. Each session shows{" "}
        <strong>why this task matters</strong>, how it contributes, and what’s next. Switch
        goals intentionally—Pomotea makes the impact clear at a glance.
      </p>
      <ul>
        <li>
          <span>
            <strong>Context ribbon</strong> — See goal, milestone, and success metric inline.
          </span>
        </li>
        <li>
          <span>
            <strong>Up next</strong> — A focused queue curated by the{" "}
            <Link href="/features/agent">Productivity Agent</Link>.
          </span>
        </li>
      </ul>
      <p>
        Learn how Pomotea structures outcomes in{" "}
        <Link href="/features/goals">Goal Management</Link>.
      </p>


      <h2 id="productivity-agent">
        Your Productivity Agent
      </h2>
      <p>
        The <Link href="/features/agent">Agent</Link> manages the busywork so you don’t have to:
        creating, planning, completing, renaming, and moving tasks—all from a single place. It
        also preps the next session, suggests estimates, and keeps your workspace tidy without
        interruptions.
      </p>
      <ul>
        <li>
          <span>
            <strong>Hands‑off organization</strong> — The Agent routes and batches work to
            protect your focus.
          </span>
        </li>
        <li>
          <span>
            <strong>Smart renaming and moving</strong> — Keep everything consistent and in the
            right place without stopping your flow.
          </span>
        </li>
      </ul>


      <h2 id="smart-breaks">
        Smarter Breaks, Better Recovery
      </h2>
      <p>
        Not all breaks restore attention equally. Pomotea suggests break length and simple
        activities based on your current load, upcoming work, and recent pace—so you return
        sharp, not scattered.
      </p>
      <ul>
        <li>
          <span>
            <strong>Micro resets</strong> — Short, frequent recoveries for rapid cycles.
          </span>
        </li>
        <li>
          <span>
            <strong>Macro breaks</strong> — Longer pauses to protect deep‑work quality.
          </span>
        </li>
      </ul>


      <h2>
        Benefits
      </h2>
      <ul>
        <li>
          <span>
            <strong>More time in flow</strong> leads to higher throughput and fewer re‑starts.
          </span>
        </li>
        <li>
          <span>
            <strong>Less fatigue</strong> through optimized work‑rest cycles.
          </span>
        </li>
        <li>
          <span>
            <strong>Higher quality</strong> from sustained, single‑task concentration.
          </span>
        </li>
        <li>
          <span>
            <strong>Greater satisfaction</strong> as progress stays visible and purposeful.
          </span>
        </li>
      </ul>
    </article>
  );
}

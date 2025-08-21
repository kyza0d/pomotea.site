"use client";

import { Workflow } from "lucide-react";
import Link from "next/link";

export default function SessionWorkflowPage() {
  return (
    <article>
      {/* Header */}
      <header>
        <div className="flex items-center gap-4 mb-6">
          <div
            className="w-16 h-16 rounded-lg flex items-center justify-center"
            aria-hidden="true"
          >
            <Workflow className="w-13 h-13 text-landing-muted" aria-hidden="true" focusable="false" />
          </div>
          <div>
            <h1 className="font-normal text-landing-foreground leading-tight">
              Session-based Workflow
            </h1>
            <p className="text-landing-muted mt-1">
              Turn focus time into measurable progress—every session tied to a clear purpose.
            </p>
          </div>
        </div>
      </header>

      <hr />

      {/* Content */}
      <article aria-labelledby="page-title" className="prose prose-lg max-w-none">
        {/* Overview */}
        <section id="overview" aria-label="Overview">
          <p className="text-landing-foreground/90 leading-relaxed mb-8">
            Transform scattered to‑dos into purposeful work sessions. With Pomotea, every pomodoro connects to your
            larger objectives so you’re always advancing what matters most—not just checking boxes.
          </p>

          <h2 className="font-medium text-landing-foreground mt-12 mb-6">Beyond Task Lists</h2>
          <p className="text-landing-foreground/90 leading-relaxed mb-6">
            Traditional productivity apps optimize for completion. Our session-based approach optimizes for{" "}
            <strong>meaningful progress</strong>. Each session is anchored to a goal, framed by intent, and closed
            with an outcome—so you can see how today’s effort compounds over time.
          </p>

          <div className="quote">
            <p className="text-landing-foreground/90 leading-relaxed m-0">
              Tip: Pair sessions with Flow to maintain single‑task focus and reduce context switching during your
              most important work.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" aria-label="How it works">
          <h2 className="font-medium text-landing-foreground mt-12 mb-6">How It Works</h2>
          <ol className="list-decimal pl-6 space-y-4 text-landing-foreground/90">
            <li>
              <strong>Plan with purpose.</strong> Before you start, define the session’s intent and what success
              looks like—finish a subtask, explore research, or reach a decision point.
            </li>
            <li>
              <strong>Focus without friction.</strong> Enter Flow to work on a single task. Distractions, context
              switching, and low‑value work are gently discouraged so your energy stays on the outcome.
            </li>
            <li>
              <strong>Reflect and record.</strong> Close the session by logging the result, noting blockers, and
              queuing next steps. Progress rolls up to your goal for clear momentum tracking.
            </li>
          </ol>

          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="rounded-lg border-2 border-landing-borders p-5">
              <h3 className="font-medium text-landing-foreground mb-2">Goal‑Aligned Sessions</h3>
              <p className="text-landing-foreground/90 m-0">
                Every session is linked to a larger goal so your daily work consistently advances your direction.
              </p>
            </div>
            <div className="rounded-lg border-2 border-landing-borders p-5">
              <h3 className="font-medium text-landing-foreground mb-2">Purpose‑Driven Planning</h3>
              <p className="text-landing-foreground/90 m-0">
                Define a clear intent and scope upfront to guide focus and set realistic expectations.
              </p>
            </div>
            <div className="rounded-lg border-2 border-landing-borders p-5">
              <h3 className="font-medium text-landing-foreground mb-2">Progress Visualization</h3>
              <p className="text-landing-foreground/90 m-0">
                See how each completed session contributes to goals with visual indicators and outcome logs.
              </p>
            </div>
          </div>

          <div className="quote">
            <h4 className="font-medium text-landing-foreground m-0 mb-2">Seamless Task Integration</h4>
            <p className="text-landing-foreground/90 m-0">
              Tasks are organized within relevant sessions and goals, keeping you focused on outcomes—not just
              completion. Subtasks and notes stay attached to their session context.
            </p>
          </div>
        </section>

        {/* Session Types */}
        <section id="session-types" aria-label="Session Types">
          <h2 className="font-medium text-landing-foreground mt-12 mb-6">Session Types</h2>

          <h3 className="font-medium text-landing-foreground mt-8 mb-2">Deep Work Sessions</h3>
          <p className="text-landing-foreground/90 leading-relaxed mb-4">
            Extended, distraction‑free focus for complex or creative work that requires sustained attention.
            Best for strategy, design, writing, or engineering problems. Common cadence: 45–90 minutes.
          </p>

          <h3 className="font-medium text-landing-foreground mt-8 mb-2">Sprint Sessions</h3>
          <p className="text-landing-foreground/90 leading-relaxed mb-4">
            Short, intensive bursts for urgent tasks or when energy is limited. Great for quick wins,
            triage, or time‑boxed exploration. Common cadence: 15–30 minutes.
          </p>

          <h3 className="font-medium text-landing-foreground mt-8 mb-2">Maintenance Sessions</h3>
          <p className="text-landing-foreground/90 leading-relaxed mb-4">
            Regular, routine blocks that keep projects moving—reviews, grooming, documentation, or cleanup.
            Common cadence: 20–45 minutes on a repeating schedule.
          </p>

          <div className="quote">
            <p className="text-landing-foreground/90 m-0">
              Prefer automation? Use Auto Sessions to set custom lengths and breaks so Pomotea adapts to your
              working rhythm—no micromanagement required.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits" aria-label="Benefits">
          <h2 className="font-medium text-landing-foreground mt-12 mb-6">Benefits</h2>
          <ul>
            <li>
              <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
              <span className="text-landing-foreground/90">Clear connection between daily work and long‑term goals</span>
            </li>
            <li>
              <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
              <span className="text-landing-foreground/90">Improved focus through purpose‑driven sessions</span>
            </li>
            <li>
              <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
              <span className="text-landing-foreground/90">Better prioritization based on goal alignment</span>
            </li>
            <li>
              <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
              <span className="text-landing-foreground/90">Increased motivation through visible progress</span>
            </li>
            <li>
              <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
              <span className="text-landing-foreground/90">Reduced context switching with single‑task Flow</span>
            </li>
            <li>
              <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
              <span className="text-landing-foreground/90">Data‑backed retrospectives via session outcomes</span>
            </li>
          </ul>
        </section>

        {/* FAQs */}
        <section id="faqs" aria-label="Frequently asked questions">
          <h2 className="font-medium text-landing-foreground mt-12 mb-6">FAQs</h2>

          <h3 className="font-medium text-landing-foreground mt-6 mb-2">How is this different from a basic Pomodoro timer?</h3>
          <p className="text-landing-foreground/90 leading-relaxed mb-4">
            Sessions in Pomotea are anchored to goals with clear intent and outcomes. You’re not just timing work—you’re
            capturing progress, learning, and next steps that roll up to your objectives.
          </p>

          <h3 className="font-medium text-landing-foreground mt-6 mb-2">Do I need to set a goal for every session?</h3>
          <p className="text-landing-foreground/90 leading-relaxed mb-4">
            You can run ad‑hoc sessions, but linking them to goals unlocks the full picture: better prioritization,
            cleaner progress tracking, and more meaningful retrospectives.
          </p>

          <h3 className="font-medium text-landing-foreground mt-6 mb-2">Can I customize session length and breaks?</h3>
          <p className="text-landing-foreground/90 leading-relaxed mb-0">
            Yes. Auto Sessions let you tailor durations, cycles, and breaks so your cadence matches the work at hand.
          </p>
        </section>
      </article>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-landing-borders">
        <div className="flex items-center justify-between">
          <Link href="/features" className="text-landing-muted hover:text-landing-foreground underline hover:no-underline">
            ← Back to Features
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-landing-muted hover:text-landing-foreground underline hover:no-underline">
              Get Started
            </Link>
          </div>
        </div>
      </footer>
    </article>
  );
}

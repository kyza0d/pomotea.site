"use client";

import { Workflow } from "lucide-react";
import Link from "next/link";

export default function SessionWorkflowPage() {
  return (
    <article>
      {/* Header */}
      <header>
        <div className="flex items-center gap-2 mb-6">
          <div
            className="w-16 h-16 pb-2 bg-landing-accent/10 rounded-lg flex items-center justify-center"
            aria-hidden="true"
          >
            <Workflow className="w-9 h-9 text-landing-muted" aria-hidden="true" focusable="false" />
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

      <p>
        Transform scattered to‑dos into purposeful work sessions. With Pomotea, every pomodoro connects to your
        larger objectives so you’re always advancing what matters most—not just checking boxes.
      </p>

      <hr />

      <h2>Beyond Task Lists</h2>
      <p>
        Traditional productivity apps optimize for completion. Our session-based approach optimizes for{" "}
        <strong>meaningful progress</strong>. Each session is anchored to a goal, framed by intent, and closed
        with an outcome—so you can see how today’s effort compounds over time.
      </p>

      <div>
        <p>
          Tip: Pair sessions with Flow to maintain single‑task focus and reduce context switching during your
          most important work.
        </p>
      </div>


      {/* How It Works */}
      <h3>How It Works</h3>
      <ol>
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

      <div>
        <div>
          <h3>Goal‑Aligned Sessions</h3>
          <p>
            Every session is linked to a larger goal so your daily work consistently advances your direction.
          </p>
        </div>
        <div>
          <h3>Purpose‑Driven Planning</h3>
          <p>
            Define a clear intent and scope upfront to guide focus and set realistic expectations.
          </p>
        </div>
        <div>
          <h3>Progress Visualization</h3>
          <p>
            See how each completed session contributes to goals with visual indicators and outcome logs.
          </p>
        </div>
      </div>

      <div>
        <h4>Seamless Task Integration</h4>
        <p>
          Tasks are organized within relevant sessions and goals, keeping you focused on outcomes—not just
          completion. Subtasks and notes stay attached to their session context.
        </p>
      </div>

      {/* Session Types */}

      <h2>Session Types</h2>

      <h3>Deep Work Sessions</h3>
      <p>
        Extended, distraction‑free focus for complex or creative work that requires sustained attention.
        Best for strategy, design, writing, or engineering problems. Common cadence: 45–90 minutes.
      </p>

      <h3>Sprint Sessions</h3>
      <p>
        Short, intensive bursts for urgent tasks or when energy is limited. Great for quick wins,
        triage, or time‑boxed exploration. Common cadence: 15–30 minutes.
      </p>

      <h3>Maintenance Sessions</h3>
      <p>
        Regular, routine blocks that keep projects moving—reviews, grooming, documentation, or cleanup.
        Common cadence: 20–45 minutes on a repeating schedule.
      </p>

      <div>
        <p>
          Prefer automation? Use Auto Sessions to set custom lengths and breaks so Pomotea adapts to your
          working rhythm—no micromanagement required.
        </p>
      </div>


      {/* Benefits */}

      <h2>Benefits</h2>
      <ul>
        <li>
          <div></div>
          <span>Clear connection between daily work and long‑term goals</span>
        </li>
        <li>
          <div></div>
          <span>Improved focus through purpose‑driven sessions</span>
        </li>
        <li>
          <div></div>
          <span>Better prioritization based on goal alignment</span>
        </li>
        <li>
          <div></div>
          <span>Increased motivation through visible progress</span>
        </li>
        <li>
          <div></div>
          <span>Reduced context switching with single‑task Flow</span>
        </li>
        <li>
          <div></div>
          <span>Data‑backed retrospectives via session outcomes</span>
        </li>
      </ul>


      {/* FAQs */}

      <h2>FAQs</h2>

      <h3>How is this different from a basic Pomodoro timer?</h3>
      <p>
        Sessions in Pomotea are anchored to goals with clear intent and outcomes. You’re not just timing work—you’re
        capturing progress, learning, and next steps that roll up to your objectives.
      </p>

      <h3>Do I need to set a goal for every session?</h3>
      <p>
        You can run ad‑hoc sessions, but linking them to goals unlocks the full picture: better prioritization,
        cleaner progress tracking, and more meaningful retrospectives.
      </p>

      <h3>Can I customize session length and breaks?</h3>
      <p>
        Yes. Auto Sessions let you tailor durations, cycles, and breaks so your cadence matches the work at hand.
      </p>
    </article>
  );
}

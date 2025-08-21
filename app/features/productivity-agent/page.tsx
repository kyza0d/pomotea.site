"use client";

import { Mascot } from "@/components/ui/mascot";
import Link from "next/link";

export default function ProductivityAgentPage() {
  return (
    <article>
      {/* Header */}
      <header>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-landing-accent/10 rounded-lg flex items-center justify-center">
            <Mascot className="w-13 h-13 text-landing-muted" />
          </div>
          <div>
            <h1 className="text-3xl font-normal text-landing-foreground leading-tight">
              Productivity Agent
            </h1>
            <p className="text-landing-muted mt-1">
              Your AI-powered companion for capturing, planning, and finishing work—without breaking focus.
            </p>
          </div>
        </div>
      </header>
      <hr />


      {/* Content */}
      <article className="prose prose-lg max-w-none">
        <p className="text-landing-foreground/90 leading-relaxed mb-8">
          Meet your friendly Productivity Agent—the heart of Pomotea. It manages your entire workflow in a single interface:
          <strong> creating</strong>, <strong>planning</strong>, <strong>completing</strong>, <strong>renaming</strong>, and <strong>moving</strong> tasks while keeping you oriented around your current goal and focused on one thing at a time.
        </p>

        <ul className="space-y-3 mb-10 list-disc">
          <li className="">
            <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
            <span className="text-landing-foreground/90">
              <strong>Single workspace:</strong> Manage everything without hopping between apps, views, or boards.
            </span>
          </li>
          <li className="">
            <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
            <span className="text-landing-foreground/90">
              <strong>Flow-first design:</strong> Stay on one task. Anything that forces context switching is gently deferred to protect focus. Learn more about{" "}
              <Link href="/features/flow" className="underline hover:no-underline text-landing-foreground">
                Flow
              </Link>.
            </span>
          </li>
          <li className="">
            <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
            <span className="text-landing-foreground/90">
              <strong>Goal-centric planning:</strong> Every task ladders up to your current goal so progress always feels meaningful. Explore{" "}
              <Link href="/features/goal-centric" className="underline hover:no-underline text-landing-foreground">
                Goal-Centric
              </Link>{" "}
              workflows.
            </span>
          </li>
          <li className="">
            <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
            <span className="text-landing-foreground/90">
              <strong>Auto Sessions:</strong> Timed focus sessions (Pomodoro-style) that adapt to how you work. Customize lengths and breaks in{" "}
              <Link href="/features/auto-sessions" className="underline hover:no-underline text-landing-foreground">
                Auto Sessions
              </Link>.
            </span>
          </li>
        </ul>

        <hr />

        <h2 className="font-medium text-landing-foreground mt-12 mb-6">How it works</h2>
        <p className="text-landing-foreground/90 leading-relaxed mb-6">
          The Agent watches your patterns, estimates effort, and orchestrates the next best step. It’s like a dedicated productivity coach that adapts to your pace and preferences.
        </p>
        <ol className="list-decimal pl-6 space-y-3 mb-8">
          <li>
            <strong>Clarify your goal:</strong> Tell the Agent what you’re aiming for. It frames your work so every task contributes to the bigger picture.
          </li>
          <li>
            <strong>Break it down:</strong> Describe the outcome in natural language. The Agent proposes milestones and tasks with priorities and suggested ordering.
          </li>
          <li>
            <strong>Focus with sessions:</strong> Start an{" "}
            <Link href="/features/auto-sessions" className="underline hover:no-underline text-landing-foreground">
              Auto Session
            </Link>
            . The Agent keeps you on a single task and quietly queues distractions for later review.
          </li>
        </ol>

        <hr />

        <h3 className="font-medium text-landing-foreground mt-8 mb-4">Intelligent Task Management</h3>
        <p className="text-landing-foreground/90 leading-relaxed mb-4">
          Capture work in your own words—no rigid forms required. The Agent understands context, deadlines, and dependencies, then organizes tasks into the most effective sequence.
        </p>
        <ul className="space-y-3 mb-8">
          <li>
            <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
            <span><strong>Create & plan:</strong> Draft tasks from goals, estimate effort, and auto-prioritize based on urgency and impact.</span>
          </li>
          <li>
            <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
            <span><strong>Rename & refine:</strong> Improve clarity with better task titles and descriptions as your understanding evolves.</span>
          </li>
          <li>
            <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
            <span><strong>Move & sequence:</strong> Reorder tasks or ask the Agent to shift items in line with dependencies and time constraints.</span>
          </li>
          <li>
            <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
            <span><strong>Complete with context:</strong> Mark done with notes and learnings so future planning gets smarter.</span>
          </li>
        </ul>

        <hr />

        <h3 className="font-medium text-landing-foreground mt-8 mb-4">Flow-first Guidance</h3>
        <p className="text-landing-foreground/90 leading-relaxed mb-6">
          Pomotea’s <Link href="/features/flow" className="underline hover:no-underline text-landing-foreground">Flow</Link> is the core experience:
          single-task focus that protects your attention. The Agent routes anything unrelated—new ideas, requests, or reminders—into a queue you can process after the current session.
        </p>

        <hr />

        <h3 className="font-medium text-landing-foreground mt-8 mb-4">Goal‑Centric by Design</h3>
        <p className="text-landing-foreground/90 leading-relaxed mb-6">
          Your current goal anchors everything. The Agent ties tasks to outcomes, surfaces progress, and shows how today’s effort advances what matters most. See details in{" "}
          <Link href="/features/goal-centric" className="underline hover:no-underline text-landing-foreground">Goal-Centric</Link>.
        </p>

        <hr />

        <h3 className="font-medium text-landing-foreground mt-8 mb-4">Auto Sessions that Adapt</h3>
        <p className="text-landing-foreground/90 leading-relaxed mb-4">
          Sessions work like Pomodoro—customize lengths to match your energy. The Agent suggests when to extend, switch, or break based on momentum and task complexity.
        </p>
        <ul className="space-y-3 mb-8">
          <li>
            <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
            <span><strong>Configurable durations:</strong> Set focus and break lengths that suit your rhythm.</span>
          </li>
          <li>
            <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
            <span><strong>Smart chaining:</strong> Auto-queue the next task in your flow so you never wonder what to do next.</span>
          </li>
          <li>
            <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
            <span><strong>Lightweight analytics:</strong> See streaks, focus time, and completion patterns at a glance.</span>
          </li>
        </ul>

        <hr />

        <h3 className="font-medium text-landing-foreground mt-8 mb-4">Learns As You Go</h3>
        <p className="text-landing-foreground/90 leading-relaxed mb-6">
          The Agent adapts to your timing and tendencies. If you underestimate certain work, it factors that into future plans. If you focus best at specific times, it will recommend sessions then.
        </p>

        <hr />

        <h2 className="font-medium text-landing-foreground mt-12 mb-6">Key Benefits</h2>
        <ul className="space-y-3 mb-8">
          <li>
            <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
            <span className="text-landing-foreground/90"><strong>Reduce decision fatigue:</strong> Routine planning and sequencing handled for you.</span>
          </li>
          <li>
            <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
            <span className="text-landing-foreground/90"><strong>Prioritize with purpose:</strong> Tasks align with your current goal, not just urgency.</span>
          </li>
          <li>
            <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
            <span className="text-landing-foreground/90"><strong>Protect focus:</strong> Flow discourages context switching and defers distractions.</span>
          </li>
          <li>
            <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
            <span className="text-landing-foreground/90"><strong>Work your way:</strong> Auto Sessions and adaptive planning fit your rhythm.</span>
          </li>
          <li>
            <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
            <span className="text-landing-foreground/90"><strong>Continuous improvement:</strong> Insights reveal patterns so you can refine your approach.</span>
          </li>
        </ul>

        <hr />

        <h2 className="font-medium text-landing-foreground mt-12 mb-4">Get started in minutes</h2>
        <ol className="list-decimal pl-6 space-y-3 mb-10">
          <li><strong>Set your goal:</strong> Tell the Agent what you’re working toward.</li>
          <li><strong>Break it down:</strong> Let it generate tasks and a suggested order.</li>
          <li><strong>Start a session:</strong> Enter Flow and finish your first task.</li>
        </ol>
      </article>

      {/* Footer */}
      <footer className="mt-16 pt-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <Link href="/features" className="text-landing-muted hover:text-landing-foreground underline hover:no-underline">
              ← Back to Features
            </Link>
            <Link href="/features/auto-sessions" className="text-landing-muted hover:text-landing-foreground underline hover:no-underline">
              Auto Sessions
            </Link>
          </div>
          <Link href="/" className="text-landing-muted hover:text-landing-foreground underline hover:no-underline">
            Get Started
          </Link>
        </div>
      </footer>
    </article>
  );
}

"use client";

import { Workflow } from "lucide-react";
import Link from "next/link";

export default function SessionWorkflowPage() {
  return (
    <>
      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-lg flex items-center justify-center">
            <Workflow className="w-13 h-13 text-landing-muted" />
          </div>
          <div>
            <h1 className="font-normal text-landing-foreground leading-tight">
              Session-based Workflow
            </h1>
            <p className="text-landing-muted mt-1">
              Purpose-driven work sessions
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <article className="prose prose-lg max-w-none">
        <p className="text-landing-foreground/90 leading-relaxed mb-8">
          Transform scattered tasks into meaningful work sessions. Every pomodoro connects to your
          larger objectives, ensuring you're always working on what matters most.
        </p>

        <h2 className="font-medium text-landing-foreground mt-12 mb-6">Beyond Task Lists</h2>
        <p className="text-landing-foreground/90 leading-relaxed mb-6">
          Traditional productivity apps focus on completing tasks. Our session-based approach focuses
          on meaningful progress toward your goals. Each work session has a clear purpose and
          measurable outcome.
        </p>

        <h3 className="font-medium text-landing-foreground mt-8 mb-4">Goal-Aligned Sessions</h3>
        <p className="text-landing-foreground/90 leading-relaxed mb-6">
          Every work session is connected to one of your larger goals. This ensures that your daily
          work consistently moves you toward your objectives, rather than just keeping you busy.
        </p>

        <h3 className="font-medium text-landing-foreground mt-8 mb-4">Purpose-Driven Planning</h3>
        <p className="text-landing-foreground/90 leading-relaxed mb-6">
          Before each session, you define what success looks like. This might be completing a
          specific subtask, making progress on research, or reaching a decision point. Clear
          intentions lead to focused work.
        </p>

        <h3 className="font-medium text-landing-foreground mt-8 mb-4">Progress Visualization</h3>
        <p className="text-landing-foreground/90 leading-relaxed mb-6">
          See how each completed session contributes to your goals. Visual progress indicators
          show not just what you've done, but how it connects to your bigger picture.
        </p>

        <h3 className="font-medium text-landing-foreground mt-8 mb-4">Seamless Task Integration</h3>
        <p className="text-landing-foreground/90 leading-relaxed mb-6">
          Tasks don't exist in isolation—they're automatically organized within relevant sessions
          and goals. This hierarchical structure keeps you focused on outcomes rather than just
          completion.
        </p>

        <h2 className="text-2xl font-medium text-landing-foreground mt-12 mb-6">Session Types</h2>

        <h3 className="font-medium text-landing-foreground mt-8 mb-4">Deep Work Sessions</h3>
        <p className="text-landing-foreground/90 leading-relaxed mb-4">
          Extended focus periods for complex, creative work that requires sustained attention.
        </p>

        <h3 className="font-medium text-landing-foreground mt-8 mb-4">Sprint Sessions</h3>
        <p className="text-landing-foreground/90 leading-relaxed mb-4">
          Short, intensive bursts for urgent tasks or when energy is limited.
        </p>

        <h3 className="font-medium text-landing-foreground mt-8 mb-4">Maintenance Sessions</h3>
        <p className="text-landing-foreground/90 leading-relaxed mb-4">
          Regular, routine work that keeps projects moving forward consistently.
        </p>

        <h2 className="font-medium text-landing-foreground mt-12 mb-6">Benefits</h2>
        <ul className="space-y-3 mb-8">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
            <span className="text-landing-foreground/90">Clear connection between daily work and long-term goals</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
            <span className="text-landing-foreground/90">Improved focus through purpose-driven sessions</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
            <span className="text-landing-foreground/90">Better prioritization based on goal alignment</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
            <span className="text-landing-foreground/90">Increased motivation through visible progress</span>
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

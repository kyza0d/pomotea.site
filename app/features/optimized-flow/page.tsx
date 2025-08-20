"use client";

import { Zap } from "lucide-react";
import Link from "next/link";

export default function OptimizedFlowPage() {
  return (
    <>
      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-landing-accent/10 rounded-lg flex items-center justify-center">
            <Zap className="w-13 h-13 text-landing-muted" />
          </div>
          <div>
            <h1 className="font-normal text-landing-foreground leading-tight">
              Optimized for Flow
            </h1>
            <p className="text-landing-muted mt-1">
              Smart cycles that promote deep focus
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <article className="prose prose-lg max-w-none">
        <p className="text-landing-foreground/90 leading-relaxed mb-8">
          Enter flow states effortlessly with our scientifically-backed timing algorithms that adapt
          to your energy levels, task complexity, and natural rhythms.
        </p>

        <h2 className="font-medium text-landing-foreground mt-12 mb-6">The Science of Flow</h2>
        <p className="text-landing-foreground/90 leading-relaxed mb-6">
          Flow states occur when you're completely immersed in a task, experiencing peak performance
          and satisfaction. Our system is designed to create and maintain these optimal conditions
          through intelligent timing and minimal distractions.
        </p>

        <h3 className="font-medium text-landing-foreground mt-8 mb-4">Adaptive Timing</h3>
        <p className="text-landing-foreground/90 leading-relaxed mb-6">
          Unlike rigid 25-minute intervals, our system adjusts session lengths based on task type,
          your current energy level, and historical performance data. Creative tasks might get longer
          sessions, while administrative work might benefit from shorter bursts.
        </p>

        <h3 className="font-medium text-landing-foreground mt-8 mb-4">Energy-Aware Scheduling</h3>
        <p className="text-landing-foreground/90 leading-relaxed mb-6">
          The system learns your natural energy patterns throughout the day and suggests the best
          times for different types of work. Schedule deep work during your peak hours and lighter
          tasks when your energy naturally dips.
        </p>

        <h3 className="font-medium text-landing-foreground mt-8 mb-4">Distraction Minimization</h3>
        <p className="text-landing-foreground/90 leading-relaxed mb-6">
          During focus sessions, the app creates a distraction-free environment by blocking
          non-essential notifications and providing gentle, non-intrusive progress indicators
          that keep you aware without breaking concentration.
        </p>

        <h3 className="font-medium text-landing-foreground mt-8 mb-4">Smart Break Recommendations</h3>
        <p className="text-landing-foreground/90 leading-relaxed mb-6">
          Not all breaks are created equal. The system suggests the optimal break activities based
          on your next task, current stress level, and time remaining in your work block.
        </p>

        <h2 className="font-medium text-landing-foreground mt-12 mb-6">Benefits</h2>
        <ul className="space-y-3 mb-8">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
            <span className="text-landing-foreground/90">Increased time in flow states leads to higher productivity</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
            <span className="text-landing-foreground/90">Reduced mental fatigue through optimal work-rest cycles</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
            <span className="text-landing-foreground/90">Better work quality through sustained concentration</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
            <span className="text-landing-foreground/90">Greater satisfaction and engagement with your work</span>
          </li>
        </ul>
      </article>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-landing-border">
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

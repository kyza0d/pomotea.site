"use client";

import { BarChart3 } from "lucide-react";
import Link from "next/link";

export default function ProgressTrackingPage() {
  return (
    <>
      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-landing-accent/10 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-13 h-13 text-landing-muted" />
          </div>
          <div>
            <h1 className="font-normal text-landing-foreground leading-tight">
              Progress Tracking
            </h1>
            <p className="text-landing-muted mt-1">
              Analytics that drive productivity insights
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <article className="prose prose-lg max-w-none">
        <p className="text-landing-foreground/90 leading-relaxed mb-8">
          Turn your productivity data into actionable insights. Understand your patterns,
          identify peak performance times, and optimize your workflow based on real evidence.
        </p>

        <h2 className="font-medium text-landing-foreground mt-12 mb-6">Comprehensive Analytics</h2>
        <p className="text-landing-foreground/90 leading-relaxed mb-6">
          Our tracking system captures detailed data about your work patterns, focus quality,
          and goal progress. Unlike simple time trackers, we measure the effectiveness and
          impact of your work sessions.
        </p>

        <h3 className="font-medium text-landing-foreground mt-8 mb-4">Focus Quality Metrics</h3>
        <p className="text-landing-foreground/90 leading-relaxed mb-6">
          Track not just time spent, but quality of focus. Metrics include session completion
          rates, distraction frequency, and subjective focus ratings to give you a complete
          picture of your concentration patterns.
        </p>

        <h3 className="font-medium text-landing-foreground mt-8 mb-4">Energy Pattern Analysis</h3>
        <p className="text-landing-foreground/90 leading-relaxed mb-6">
          Identify your natural energy rhythms throughout the day and week. Discover when
          you're most productive for different types of work and schedule accordingly.
        </p>

        <h3 className="font-medium text-landing-foreground mt-8 mb-4">Goal Progress Visualization</h3>
        <p className="text-landing-foreground/90 leading-relaxed mb-6">
          See your progress toward long-term goals broken down by daily, weekly, and monthly
          contributions. Understand which activities drive the most meaningful progress.
        </p>

        <h3 className="font-medium text-landing-foreground mt-8 mb-4">Productivity Trends</h3>
        <p className="text-landing-foreground/90 leading-relaxed mb-6">
          Track how your productivity changes over time. Identify factors that improve or
          hinder your performance, from sleep patterns to work environment changes.
        </p>

        <h2 className="font-medium text-landing-foreground mt-12 mb-6">Key Insights</h2>

        <h3 className="font-medium text-landing-foreground mt-8 mb-4">Peak Performance Windows</h3>
        <p className="text-landing-foreground/90 leading-relaxed mb-4">
          Discover your optimal times for different types of work based on completion rates
          and quality metrics.
        </p>

        <h3 className="font-medium text-landing-foreground mt-8 mb-4">Task Complexity Patterns</h3>
        <p className="text-landing-foreground/90 leading-relaxed mb-4">
          Learn how long different types of tasks actually take you, improving future planning
          and estimation accuracy.
        </p>

        <h3 className="font-medium text-landing-foreground mt-8 mb-4">Break Effectiveness</h3>
        <p className="text-landing-foreground/90 leading-relaxed mb-4">
          Understand which break activities best restore your focus and energy for optimal
          work-rest balance.
        </p>

        <h3 className="font-medium text-landing-foreground mt-8 mb-4">Goal Achievement Rate</h3>
        <p className="text-landing-foreground/90 leading-relaxed mb-4">
          Track your success rate with different types of goals to refine your goal-setting
          and achievement strategies.
        </p>

        <h2 className="font-medium text-landing-foreground mt-12 mb-6">Privacy First</h2>
        <p className="text-landing-foreground/90 leading-relaxed mb-6">
          All analytics are generated from your activity patterns and performance data.
          We don't track the content of your work—only how you work. Your productivity
          insights remain private and are used solely to help you improve.
        </p>

        <h2 className="font-medium text-landing-foreground mt-12 mb-6">Benefits</h2>
        <ul className="space-y-3 mb-8">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
            <span className="text-landing-foreground/90">Data-driven workflow optimization</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
            <span className="text-landing-foreground/90">Better understanding of personal productivity patterns</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
            <span className="text-landing-foreground/90">Improved planning and time estimation</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-landing-accent mt-3 flex-shrink-0"></div>
            <span className="text-landing-foreground/90">Evidence-based adjustments to work habits</span>
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

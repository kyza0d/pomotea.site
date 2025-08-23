"use client";

import { Mascot } from "@/components/ui/mascot";
import Link from "next/link";

export default function ProductivityAgentPage() {
  return (
    <article>
      {/* Header */}
      <header>
        <div className="flex items-center gap-2 mb-6">
          <div
            className="w-16 h-16 pb-2 bg-landing-accent/10 rounded-lg flex items-center justify-center"
            aria-hidden="true"
          >
            <Mascot className="w-9 h-9 text-landing-muted" />
          </div>
          <div>
            <h1 className="text-3xl font-normal text-landing-foreground leading-tight">
              Productivity Agent
            </h1>
            <p className="text-landing-muted mt-1">
              Your AI-powered productivity companion
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <p>
        Meet your personal productivity agent—an intelligent assistant that understands your workflow,
        learns from your patterns, and helps you achieve more with less stress.
      </p>

      <hr />

      <h3>How it works</h3>
      <p>
        Our AI agent analyzes your work patterns, task complexity, and productivity rhythms to provide
        personalized recommendations. It's like having a dedicated productivity coach that's available 24/7.
      </p>

      <h3>Intelligent Task Management</h3>
      <p>
        Simply describe your goals in natural language, and the agent breaks them down into manageable tasks.
        It understands context, priorities, and deadlines, automatically organizing your work in the most
        effective sequence.
      </p>

      <h3>Adaptive Planning</h3>
      <p>
        The agent learns from your completion patterns and adjusts future planning accordingly. If you
        consistently underestimate certain types of tasks, it will factor that into future suggestions.
      </p>

      <h3>Personalized Insights</h3>
      <p>
        Get detailed insights about your productivity patterns, energy levels, and optimal work times.
        The agent identifies trends and suggests improvements to help you work more efficiently.
      </p>

      <h2>Key Benefits</h2>
      <ul>
        <li>
          <span>Reduces decision fatigue by automating routine planning</span>
        </li>
        <li>
          <span>Improves task prioritization based on your goals</span>
        </li>
        <li>
          <span>Provides actionable insights to optimize your workflow</span>
        </li>
        <li>
          <span>Adapts to your unique work style and preferences</span>
        </li>
      </ul>
    </article>
  );
}

// File: components/landing/features/ai.showcase.tsx
import { Sparkles, Target, Calendar, TrendingUp, Clock, ListTodo } from "lucide-react";
import { DisplaySection, type FeatureData, type WorkflowState, type PhaseContent } from "./display-section";
import { aiTools } from "./data";
import {
  ChatBubble,
  ContextualToolChip,
  TaskCreationPreview,
  ToolUsageIndicator,
  GoalProgressBar,
  SessionTimeline
} from "../items";
import React from "react";

const workflowStates: WorkflowState[] = [
  {
    phase: "goal-planning",
    elements: [
      <ChatBubble key="user" sender="user">I need to prepare for the Johnson client presentation next week. I'm feeling overwhelmed with everything I need to do.</ChatBubble>,
      <ToolUsageIndicator key="tool" icon={Target}>Analyzing your goal and breaking it down...</ToolUsageIndicator>,
    ],
  },
  {
    phase: "task-generation",
    elements: [
      <ChatBubble key="user" sender="user">I need to prepare for the Johnson client presentation next week. I'm feeling overwhelmed with everything I need to do.</ChatBubble>,
      <ToolUsageIndicator key="tool" icon={ListTodo}>Using <strong>Task Generation</strong> to create actionable steps...</ToolUsageIndicator>,
      <ChatBubble key="ai" sender="ai">I've broken down your presentation prep into 4 focused tasks. Each is sized for a 25-minute focus session. Would you like me to schedule these for optimal timing?</ChatBubble>,
    ],
  },
  {
    phase: "smart-scheduling",
    elements: [
      <ChatBubble key="ai" sender="ai">Perfect! I've created an optimized schedule with 4 focus sessions, including strategic breaks for maximum retention.</ChatBubble>,
      <ToolUsageIndicator key="tool" icon={Calendar}>Using <strong>Smart Scheduling</strong> to optimize your timeline...</ToolUsageIndicator>,
      <TaskCreationPreview key="tasks" tasks={[
        { name: "Research Johnson Company background", estimatedTime: 25, priority: "high" },
        { name: "Create presentation outline", estimatedTime: 25, priority: "high" },
        { name: "Design key slides and visuals", estimatedTime: 25, priority: "medium" },
        { name: "Practice delivery and timing", estimatedTime: 25, priority: "medium" }
      ]} />,
    ],
  },
  {
    phase: "progress-tracking",
    elements: [
      <ChatBubble key="ai" sender="ai">Your presentation prep is now organized and ready. I'll track your progress and maintain context across all sessions.</ChatBubble>,
      <div key="progress-visual" className="space-y-4">
        <GoalProgressBar
          goalName="Johnson Client Presentation"
          progress={25}
          totalTasks={4}
        />
        <SessionTimeline sessions={[
          { name: "Research Johnson Company", duration: 25, type: "focus" },
          { name: "Strategic break", duration: 5, type: "break" },
          { name: "Create presentation outline", duration: 25, type: "focus" },
          { name: "Strategic break", duration: 5, type: "break" },
          { name: "Design slides", duration: 25, type: "focus" }
        ]} />
      </div>
    ],
  },
];

const phaseContent: Record<string, PhaseContent> = {
  "goal-planning": {
    heading: "From Overwhelm to Clarity in Seconds",
    description: "Instead of spending 15 minutes planning your approach, simply describe your goal. Our AI instantly understands context and begins structuring your path forward.",
    listItems: ["Natural language goal processing", "Instant context understanding", "Automatic complexity assessment", "Smart goal decomposition"],
  },
  "task-generation": {
    heading: "Intelligent Task Creation That Actually Makes Sense",
    description: "Watch as your overwhelming goal transforms into perfectly-sized, actionable tasks. Each task is automatically optimized for 25-minute focus sessions with clear priorities.",
    listItems: ["AI-powered task breakdown", "Optimal task sizing (25-minute focus blocks)", "Intelligent priority assignment", "Dependency-aware sequencing"],
  },
  "smart-scheduling": {
    heading: "Your Personal Schedule Optimizer",
    description: "From tasks to timeline in 30 seconds. Our AI creates an optimized schedule that maximizes focus while preventing burnout through strategic break placement.",
    listItems: ["Automatic session scheduling", "Strategic break optimization", "Timeline visualization", "Context-aware time blocking"],
  },
  "progress-tracking": {
    heading: "Never Lose Context Again",
    description: "Unlike generic timers, every session connects to your bigger picture. Track progress visually, maintain context across work sessions, and always know exactly why you're focusing on something.",
    listItems: ["Visual progress tracking", "Context retention across sessions", "Goal-to-task connection", "Intelligent next-step suggestions"],
  },
};

const AIAssistantVisual = ({ workflowStates }: { workflowStates: WorkflowState[] }) => (
  <div className="absolute top-1/2 left-1/2 -translate-1/2 w-full max-w-[700px] scale-90 -skew-x-6 skew-y-3 fade-bottom">
    <div className="grid grid-cols-5 gap-6 h-[600px]">
      <div className="col-span-3 overflow-hidden rounded-3xl border-3 border-landing-borders bg-landing-base">
        <div className="flex items-center space-x-2 border-b-3 border-landing-borders p-4 bg-landing-secondary-shaded/20">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-landing-primary to-landing-secondary"></div>
          <div><p className="font-semibold text-landing-foreground">AI Assistant</p></div>
        </div>
        <div className="relative p-4 h-full">
          {workflowStates.map((state, stateIndex) => (
            <div key={stateIndex} className="workflow-phase absolute inset-0 top-4 px-4">
              <div className="space-y-4 h-full overflow-y-auto">
                {state.elements.map((element, elementIndex) => (
                  <div key={`${stateIndex}-${elementIndex}`} className={`workflow-child-${stateIndex}`}>
                    {element}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-2 space-y-4">
        <div className="rounded-2xl border-landing-borders/40">
          <div className="grid grid-cols-1 gap-3">
            {aiTools.slice(0, 4).map((tool, index) => (
              <ContextualToolChip
                key={tool.name}
                {...tool}
                className={`tool-chip-${index} anim-copy-item text-xs`}
                isActive={false}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const featureData: FeatureData = {
  icon: Sparkles,
  title: "AI-Powered",
  subtitle: "Productivity",
  heading: "From Overwhelm to Clarity in Seconds",
  description: "Instead of spending 15 minutes planning your approach, simply describe your goal. Our AI instantly understands context and begins structuring your path forward.",
  animation: {
    order: "visual-first",
    visual: { y: 30, stagger: 0.3 },
    copy: { scale: 0.95, stagger: 0.2 },
    end: "+=1200%",
  },
  children: (
    <></>
  ),
  visual: <AIAssistantVisual workflowStates={workflowStates} />,
  hasWorkflow: true,
  workflowType: "ai",
  workflowStates: workflowStates,
  phaseContent: phaseContent,
};

export const AiFeaturesScroll = ({ index, onActivate }: { index: number; onActivate: (i: number) => void }) => (
  <DisplaySection data={featureData} index={index} onActivate={onActivate} />
);

import React from "react";
import { Target, Calendar, CheckCircle, TrendingUp, Award, Clock, Plus } from "lucide-react";
import { clsx } from "clsx";
import { ChatBubble } from "../items";
import { DisplaySection, type FeatureData, type WorkflowState, type PhaseContent } from "./display-section";
import { goalExamples } from "./data";

const GoalCard = ({ goal, className = "", isActive = false }: { goal: typeof goalExamples[0]; className?: string; isActive?: boolean }) => {
  return (
    <div className={clsx(
      "goal-card p-4 rounded-xl border-2 bg-landing-base w-80",
      isActive ? "border-landing-primary/60 shadow-lg scale-80" : "border-landing-borders/40",
      className
    )}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <Target className="w-4 h-4 text-landing-primary" />
          <span className="text-xs font-medium text-landing-foreground/70">{goal.type}</span>
        </div>
      </div>

      <h3 className="text-lg font-bold text-landing-headers mb-2">{goal.title}</h3>
      <p className="text-sm text-landing-foreground/80 mb-4">{goal.description}</p>

      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-landing-foreground/70">Progress</span>
          <span className="font-medium">{goal.progress}%</span>
        </div>

        <div className="w-full bg-landing-borders/30 rounded-full h-2">
          <div
            className="bg-landing-primary h-2 rounded-full transition-all duration-500"
            style={{ width: `${goal.progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-xs text-landing-foreground/60">
          <span>{goal.tasksCompleted}/{goal.totalTasks} tasks</span>
          <span>{goal.timeInvested} invested</span>
        </div>

        <div className="flex items-center gap-2 pt-2 border-t border-landing-borders/30">
          <Clock className="w-3 h-3 text-landing-primary" />
          <span className="text-xs text-landing-foreground/80">Next: {goal.nextSession}</span>
        </div>
      </div>
    </div>
  );
};

const YearlyGoalView = ({ className = "" }: { className?: string }) => (
  <div className={clsx("yearly-view p-6 rounded-2xl border-2 border-landing-borders bg-landing-base", className)}>
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <Calendar className="w-5 h-5 text-landing-primary" />
        <h3 className="text-md font-bold text-landing-headers">2024 Goals</h3>
      </div>
      <div className="flex items-center gap-2 text-sm text-landing-foreground/70">
        <Award className="w-4 h-4" />
        <span>8/12 completed</span>
      </div>
    </div>

    <div className="grid gap-4">
      {goalExamples.slice(0, 2).map((goal, index) => (
        <div key={goal.id} className="flex items-center gap-4 p-3 rounded-lg bg-landing-secondary-shaded/10">
          <div className="flex-1">
            <span className="text-sm font-medium text-landing-foreground">{goal.title}</span>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-20 bg-landing-borders/30 rounded-full h-1">
                <div
                  className="bg-landing-primary h-1 rounded-full"
                  style={{ width: `${goal.progress}%` }}
                />
              </div>
              <span className="text-xs text-landing-foreground/60">{goal.progress}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const MonthlyGoalView = ({ className = "" }: { className?: string }) => (
  <div className={clsx("monthly-view p-6 rounded-2xl border-2 border-landing-borders bg-landing-base", className)}>
    <div className="flex items-center gap-3 mb-6">
      <TrendingUp className="w-5 h-5 text-landing-primary" />
      <h2 className="text-xl font-bold text-landing-headers">January 2024</h2>
    </div>

    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-3 rounded-lg bg-landing-primary/10">
          <div className="text-2xl font-bold text-landing-primary">15</div>
          <div className="text-xs text-landing-foreground/70">Sessions This Month</div>
        </div>
        <div className="text-center p-3 rounded-lg bg-green-500/10">
          <div className="text-2xl font-bold text-green-400">8.5h</div>
          <div className="text-xs text-landing-foreground/70">Focus Time</div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-landing-foreground">Active This Month</h3>
        {goalExamples.slice(0, 2).map((goal) => (
          <div key={goal.id} className="flex items-center justify-between p-2 rounded-lg bg-landing-secondary-shaded/10">
            <span className="text-sm text-landing-foreground">{goal.title}</span>
            <span className="text-xs text-landing-primary font-medium">{goal.progress}%</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const workflowStates: WorkflowState[] = [
  {
    phase: "goal-input",
    elements: [
      <ChatBubble key="user-goal" sender="user">I want to launch a new product feature by the end of March</ChatBubble>,
      <div key="ai-processing" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-landing-accent/10 border border-landing-accent/20">
        <Target size={12} className="text-landing-accent animate-pulse" />
        <span className="text-xs font-medium text-landing-accent">Analyzing goal context...</span>
      </div>
    ]
  },
  {
    phase: "goal-breakdown",
    elements: [
      <ChatBubble key="ai-breakdown" sender="ai">I'll help you break this down into manageable tasks and schedule focused work sessions.</ChatBubble>,
      <div key="goal-creation" className="px-3 py-2 rounded-lg bg-landing-primary/10 border border-landing-primary/20">
        <span className="text-xs font-medium text-landing-primary">Goal Created: Product Feature Launch</span>
      </div>
    ]
  },
  {
    phase: "task-generation",
    elements: [
      <div key="tasks-header" className="px-3 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
        <span className="text-xs font-medium text-purple-400">Generated 8 tasks with priorities</span>
      </div>,
      <div key="task-list" className="space-y-1">
        <div className="flex items-center gap-2 px-2 py-1 text-xs">
          <CheckCircle size={10} className="text-green-400" />
          <span className="text-landing-foreground">Research competitor features</span>
        </div>
        <div className="flex items-center gap-2 px-2 py-1 text-xs">
          <div className="w-2.5 h-2.5 rounded-full border border-landing-primary animate-pulse" />
          <span className="text-landing-foreground font-medium">Create user flow diagrams</span>
        </div>
      </div>
    ]
  },
];

const phaseContent: Record<string, PhaseContent> = {
  "goal-input": {
    heading: "Start with Natural Goal Setting",
    description: "Simply describe your goal in conversation. Pomotea understands context, deadlines, and scope to create meaningful objectives.",
    listItems: ["Natural language goal creation", "Intelligent deadline detection", "Automatic scope analysis", "Context-aware goal structuring"]
  },
  "goal-breakdown": {
    heading: "Watch Goals Transform Into Action",
    description: "Your goal becomes a structured plan with clear milestones, realistic timelines, and measurable outcomes.",
    listItems: ["Smart goal decomposition", "Milestone identification", "Realistic timeline creation", "Measurable outcome setting"]
  },
  "task-generation": {
    heading: "Tasks Generate Automatically",
    description: "From your goal, Pomotea creates prioritized tasks with estimated durations and optimal sequencing for maximum productivity.",
    listItems: ["AI-powered task creation", "Intelligent prioritization", "Duration estimation", "Optimal task sequencing"]
  }
};

const GoalsFeatureVisual = ({ workflowStates }: { workflowStates: WorkflowState[] }) => (
  <>
    <div className="absolute top-8 left-8">
      <WorkflowDisplay workflowStates={workflowStates} />
    </div>

    <div className="absolute right-20 -bottom-2/5 -skew-x-12 skew-y-6 scale-80">
      <div className="goals-showcase-container space-y-6">
        <div id="goals-grid" className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <YearlyGoalView className="yearly-view-card" />
            <MonthlyGoalView className="monthly-view-card" />
          </div>
          <div className="space-y-4 -translate-y-40">
            <div className="space-y-3">
              {goalExamples.map((goal, index) => (
                <GoalCard key={goal.id} goal={goal} className={`goal-card-${index}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

const WorkflowDisplay = ({ workflowStates }: { workflowStates: WorkflowState[] }) => (
  <div className="w-80 space-y-3 workflow-container relative h-[300px]">
    {workflowStates.map((state, stateIndex) => (
      <div key={stateIndex} className="workflow-phase absolute inset-0">
        <div className="space-y-3">
          {state.elements.map((element, elementIndex) => (
            <div key={`${stateIndex}-${elementIndex}`} className={`workflow-child-${stateIndex} workflow-element`}>
              {element}
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const featureData: FeatureData = {
  icon: Target,
  title: "Goal-Centric",
  subtitle: "Design",
  heading: "Everything Connects to Your Bigger Picture",
  description: "Transform vague aspirations into structured achievements. Pomotea's goal-centric approach ensures every focus session, every task, and every moment of work drives you toward meaningful outcomes.",
  animation: { order: "interleave", visual: { autoAlpha: 0, x: 30 }, copy: { autoAlpha: 0, x: -30 }, end: "+=600%" },
  visual: <GoalsFeatureVisual workflowStates={workflowStates} />,
  hasWorkflow: true,
  workflowType: "goals",
  workflowStates,
  phaseContent,
};

export const GoalsScroll = ({ index, onActivate }: { index: number; onActivate: (i: number) => void }) => (
  <DisplaySection data={featureData} index={index} onActivate={onActivate} />
);

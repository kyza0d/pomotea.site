import React from "react";
import { Calendar, TrendingUp, Clock } from "lucide-react";
import { clsx } from "clsx";
import { ChatBubble } from "../items";
import { DisplaySection, type FeatureData, type WorkflowState, type PhaseContent } from "./display-section";
import { goalExamples } from "./data";
import { FaFlag } from "react-icons/fa";
import { showcaseData, workflowMessages, showcaseExtras } from "@/copy/showcase";

const GoalCard = ({ goal, className = "", isActive = false }: { goal: typeof goalExamples[0]; className?: string; isActive?: boolean }) => {
  return (
    <div className={clsx(
      "goal-card border-3 p-4 rounded-xl bg-landing-base",
      isActive ? "border-landing-primary/60 shadow-lg scale-120" : "border-landing-borders/70",
      className
    )}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="bg-landing-borders/30 border-2 border-landing-borders/50 py-1 px-2 text-xs rounded-md">{goal.type}</span>
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
  <div className={clsx("yearly-view p-6 rounded-2xl border-3 border-landing-borders/70 bg-landing-base", className)}>
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <Calendar className="w-5 h-5 text-landing-primary" />
        <h3 className="text-md font-bold text-landing-headers">{showcaseExtras.goals.viewLabels.yearlyView.title}</h3>
      </div>
      <div className="flex items-center gap-2 text-sm text-landing-foreground/70">
        <span>{showcaseExtras.goals.viewLabels.yearlyView.completedStatus}</span>
      </div>
    </div>

    <div className="grid gap-4">
      {goalExamples.slice(0, 2).map((goal, index) => (
        <div key={goal.id} className="flex items-center gap-4 p-3 rounded-lg bg-landing-secondary-shaded/10">
          <div className="flex-1">
            <span className="text-sm font-medium text-landing-foreground">{goal.title}</span>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-full bg-landing-borders/30 rounded-full h-2">
                <div
                  className="bg-landing-primary h-2 rounded-full"
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
  <div className={clsx("monthly-view p-6 rounded-2xl border-3 border-landing-borders/70 bg-landing-base", className)}>
    <div className="flex items-center gap-3 mb-6">
      <TrendingUp className="w-5 h-5 text-landing-primary" />
      <h2 className="text-xl font-bold text-landing-headers">{showcaseExtras.goals.viewLabels.monthlyView.title}</h2>
    </div>

    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="p-3 rounded-lg">
          <div className="text-2xl font-bold">15</div>
          <div className="text-xs">{showcaseExtras.goals.viewLabels.monthlyView.sessionsLabel}</div>
        </div>
        <div className="p-3 rounded-lg">
          <div className="text-2xl font-bold">8.5h</div>
          <div className="text-xs">{showcaseExtras.goals.viewLabels.monthlyView.focusTimeLabel}</div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-landing-foreground">{showcaseExtras.goals.viewLabels.monthlyView.activeLabel}</h3>
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
      <ChatBubble key="user-goal" sender="user">{workflowMessages.goals.userGoal}</ChatBubble>,
      <div key="ai-processing" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-landing-accent/10 border-2 border-landing-accent/20">
        <span className="text-xs font-medium text-landing-accent">{workflowMessages.goals.aiProcessing}</span>
      </div>
    ]
  },
];

const phaseContent: Record<string, PhaseContent> = showcaseData.goals.phaseContent;

const GoalsFeatureVisual = () => (
  <div className="absolute top-1/2 left-1/2 -translate-1/2 mt-25 w-180 scale-40 md:scale-50 lg:scale-80  -skew-x-6 skew-y-3">
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
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
);

const featureData: FeatureData = {
  icon: FaFlag,
  title: showcaseData.goals.title,
  subtitle: showcaseData.goals.subtitle,
  heading: showcaseData.goals.heading,
  description: showcaseData.goals.description,
  animation: { order: "interleave", visual: { autoAlpha: 0, x: 30 }, copy: { autoAlpha: 0, x: -30 }, end: "+=200%" },
  visual: <GoalsFeatureVisual />,
  hasWorkflow: true,
  workflowType: "goals",
  workflowStates,
  phaseContent,
};

export const GoalsScroll = ({ index, onActivate }: { index: number; onActivate: (i: number) => void }) => (
  <DisplaySection data={featureData} index={index} onActivate={onActivate} />
);

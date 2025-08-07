import { Sparkles, Target, CheckCircle } from "lucide-react";
import { Mascot } from "@/components/ui/mascot";
import { DisplaySection, type FeatureData, type WorkflowState, type PhaseContent } from "./display-section";
import { aiTools, aiPhaseTools } from "./data";
import {
  ContextualToolChip,
} from "../items";
import React from "react";
import {
  MessageRow,
  MessageBubble,
  MultiLevelTaskListCard,
  type MultiLevelTask,
  MonthlySummaryCard,
  FileAttachmentChip
} from "./shared/workflow-components";
import { Button } from "@/components/ui/button";
import { HiArrowUturnRight, HiPaperClip } from "react-icons/hi2";
import { FaMicrophone } from "react-icons/fa";

const GoalPlanningCard = () => (
  <div className="p-3 rounded-xl bg-landing-base border-2 border-landing-borders/50">
    <div className="text-xs font-semibold text-landing-foreground mb-2">
      Analyzing Your Document
    </div>
    <div className="space-y-1">
      <div className="flex items-center gap-2 text-xs text-landing-foreground/80">
        <div className="w-1.5 h-1.5 bg-landing-primary rounded-full animate-pulse"></div>
        Breaking down complex goal into manageable tasks
      </div>
      <div className="flex items-center gap-2 text-xs text-landing-foreground/80">
        <div className="w-1.5 h-1.5 bg-landing-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        Identifying key milestones from PRD
      </div>
      <div className="flex items-center gap-2 text-xs text-landing-foreground/80">
        <div className="w-1.5 h-1.5 bg-landing-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        Structuring project phases
      </div>
    </div>
  </div>
);

const appDevelopmentTasks: MultiLevelTask[] = [
  {
    title: "Phase 1: Project Setup & Core Features",
    subtasks: [
      { title: "Initialize new repository" },
      { title: "Setup authentication (email/password)" },
    ],
  },
  {
    title: "Phase 2: UI/UX Development",
    subtasks: [
      { title: "Design dashboard layout" },
      { title: "Create reusable component library" },
    ],
  },
  { title: "Phase 3: Deployment" },
];

const workflowStates: WorkflowState[] = [
  // Showcase 1: Accountability Partner
  {
    phase: "accountability-partner",
    elements: [
      <MessageRow key="ai-hello" avatarIcon={Mascot} showTimeline={true}>
        Hey, what's up! How are things going with your projects?
      </MessageRow>,
      <MessageRow key="user-overwhelmed" isUser={true}>
        Feeling a bit overwhelmed... feels like there's just too much to do.
      </MessageRow>,
      <MessageRow key="ai-reassurance" avatarIcon={Mascot} showTimeline={true} isJsx={true}>
        <MessageBubble isUser={false}>
          I hear you. But you've been busy this past week—you completed <strong className="text-landing-primary">93 tasks!</strong> That's amazing progress. You've been on a roll, maybe take some time for yourself and come back recharged. You got this!
        </MessageBubble>
      </MessageRow>,
    ],
  },
  // Showcase 2: Task Recall
  {
    phase: "task-recall",
    elements: [
      <MessageRow key="user-recall" isUser={true}>
        So, what have I actually done this past month?
      </MessageRow>,
      <MessageRow key="ai-recall-intro" avatarIcon={Mascot} showTimeline={true}>
        You've been hard at work on your courses and building that new app. Here's a quick overview of where your time went:
      </MessageRow>,
      <MessageRow key="ai-summary-card" avatarIcon={CheckCircle} isJsx={true} showTimeline={true}>
        <MonthlySummaryCard />
      </MessageRow>,
    ],
  },
  // Showcase 3: Document Analysis Phase
  {
    phase: "document-analysis",
    elements: [
      <MessageRow key="user-goal" isUser={true} isJsx={true}>
        <div className="flex flex-col items-end gap-2">
          <MessageBubble isUser={true}>Can you create a new goal for <br />working on this new idea?</MessageBubble>
          <FileAttachmentChip fileName="PRD.txt" />
        </div>
      </MessageRow>,
      <MessageRow key="ai-confirm" avatarIcon={Mascot} showTimeline={true}>
        Sure! I'll put together a goal <br />with tasks that match your PRD.
      </MessageRow>,
      <MessageRow key="analyzing-card" avatarIcon={Target} showTimeline={true} isJsx={true}>
        <GoalPlanningCard />
      </MessageRow>,
    ],
  },
  // Showcase 4: Task Completion Phase
  {
    phase: "task-completion",
    elements: [
      <MessageRow key="ai-tasks-done" avatarIcon={Mascot} showTimeline={true}>
        All set! Here's the plan I've drafted for you.
      </MessageRow>,
      <MessageRow key="tasks-created" avatarIcon={CheckCircle} showTimeline={true} isJsx={true}>
        <MultiLevelTaskListCard
          title="Build New 'Sidekick' App"
          tasks={appDevelopmentTasks}
        />
      </MessageRow>,
    ],
  },
];

const phaseContent: Record<string, PhaseContent> = {
  "accountability-partner": {
    heading: "Your Personal <br/>Accountability Partner",
    description: "Stay motivated with an AI that understands your progress and provides timely encouragement when you need it most. It's more than a tool—it's a partner in your success.",
    listItems: ["Contextual check-ins", "Progress-based motivation", "Reduces burnout", "Fosters consistency"],
  },
  "task-recall": {
    heading: "Instant Recall <br/>of All Your Hard Work",
    description: "Lose the 'what did I even do?' feeling. Your AI remembers every task and session, giving you a clear picture of your accomplishments and time allocation over any period.",
    listItems: ["Monthly & weekly reviews", "Time allocation summaries", "Cross-goal progress tracking", "Effort visualization"],
  },
  "document-analysis": {
    heading: "From Complex Docs to Actionable Plans",
    description: "Drag in a document, and watch as your AI instantly analyzes it to create a comprehensive, multi-level task list. It understands your goals and structures the work for you.",
    listItems: ["AI-powered document analysis", "Multi-level task generation", "Intelligent project structuring", "Handles unstructured data"],
  },
};

const AIAssistantVisual = ({ workflowStates }: { workflowStates: WorkflowState[] }) => (
  <div className="pointer-events-none absolute top-3/4 md:top-1/2 left-1/2 -translate-1/2 mt-15 w-full max-w-[700px] scale-70 md:scale-120 -skew-x-6 skew-y-3">
    <div className="grid grid-cols-5 gap-6 h-[600px]">
      <div className="col-span-3 overflow-hidden rounded-3xl border-3 border-landing-borders bg-landing-base">
        <div className="relative flex h-full">
          {workflowStates.map((state, stateIndex) => (
            <div key={stateIndex} className="workflow-phase mb-40 absolute inset-0 top-4 px-4">
              <div className="space-y-4 h-full overflow-y-auto">
                {state.elements.map((element, elementIndex) => (
                  <div key={`${stateIndex}-${elementIndex}`} className={`workflow-child-${stateIndex}`}>
                    {element}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="mt-auto m-3 z-10 flex min-h-14 border-landing-borders/50 bg-landing-base p-2 w-full rounded-2xl flex-col border-3">
            <textarea
              className="min-h-14 flex-1 px-3 py-2 focus:outline-none resize-none"
            />
            <div>
              <div className="flex justify-between">
                <Button>
                  <HiPaperClip size={18} />
                </Button>
                <div>
                  <Button>
                    <FaMicrophone />
                  </Button>
                  <Button
                    variant="primary"
                    className="w-32 py-3 rounded-xl"
                  >
                    <HiArrowUturnRight className="mr-2" />
                    Send
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 space-y-4">
        <div className="rounded-2xl border-landing-borders/40 relative">
          <div className="grid grid-cols-1 gap-3">
            {workflowStates.map((state, stateIndex) => (
              <div key={stateIndex} className={`phase-tools-${state.phase} absolute inset-0`}>
                {aiPhaseTools[state.phase as keyof typeof aiPhaseTools]?.map((tool, toolIndex) => (
                  <ContextualToolChip
                    key={`${state.phase}-${tool.name}`}
                    {...tool}
                    className={`tool-chip-${stateIndex}-${toolIndex} anim-copy-item text-xs mb-3`}
                    isActive={false}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  </div>
);

const featureData: FeatureData = {
  icon: Mascot,
  title: "AI-Powered",
  subtitle: "Productivity",
  heading: "Your Personal Accountability Partner",
  description: "Stay motivated with an AI that understands your progress and provides timely encouragement when you need it most. It's more than a tool—it's a partner in your success.",
  animation: {
    order: "visual-first",
    visual: { y: 30, stagger: 0.3 },
    copy: { scale: 0.95, stagger: 0.2 },
    end: "+=900%",
  },
  children: (
    <></>
  ),
  visual: <AIAssistantVisual workflowStates={workflowStates} />,
  hasWorkflow: true,
  workflowType: "ai",
  workflowStates: workflowStates,
  phaseContent: phaseContent,
  sharedCopyPhases: [["document-analysis", "task-completion"]],
};

export const AiFeaturesScroll = ({ index, onActivate }: { index: number; onActivate: (i: number) => void }) => (
  <DisplaySection data={featureData} index={index} onActivate={onActivate} />
);

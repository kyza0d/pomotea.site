import { Target, CheckCircle, SearchIcon } from "lucide-react";
import { Mascot } from "@/components/ui/mascot";
import { DisplaySection, type FeatureData, type WorkflowState, type PhaseContent } from "./display-section";
import { showcaseData, workflowMessages, showcaseExtras } from "@/copy/showcase";

import React from "react";

import {
  MessageRow,
  MessageBubble,
  MultiLevelTaskListCard,
  type MultiLevelTask,
  MonthlySummaryCard,
  FileAttachmentChip
} from "./shared/workflow-components";
import { FaList } from "react-icons/fa";

const GoalPlanningCard = () => (
  <div className="p-3 rounded-xl bg-landing-base border-2 border-landing-borders/50">
    <div className="text-xs font-semibold text-landing-foreground mb-2">
      Analyzing Your Document
    </div>
    <div className="space-y-1">
      <div className="flex items-center gap-2 text-xs text-landing-foreground/80">
        {workflowMessages.ai["document-analysis"].analysisPhases.breakdown}
      </div>
      <div className="flex items-center gap-2 text-xs text-landing-foreground/80">
        {workflowMessages.ai["document-analysis"].analysisPhases.milestones}
      </div>
      <div className="flex items-center gap-2 text-xs text-landing-foreground/80">
        {workflowMessages.ai["document-analysis"].analysisPhases.structuring}
      </div>
    </div>
  </div>
);

const appDevelopmentTasks: MultiLevelTask[] = showcaseExtras.ai.taskExample.phases;

const workflowStates: WorkflowState[] = [
  {
    phase: "accountability-partner",
    elements: [
      <MessageRow key="ai-hello" avatarIcon={Mascot} showTimeline={true}>
        {workflowMessages.ai["accountability-partner"].aiGreeting}
      </MessageRow>,
      <MessageRow key="user-overwhelmed" isUser={true}>
        {workflowMessages.ai["accountability-partner"].userOverwhelmed}
      </MessageRow>,
      <MessageRow key="ai-reassurance" avatarIcon={Mascot} showTimeline={true} isJsx={true}>
        <MessageBubble isUser={false}>
          <span dangerouslySetInnerHTML={{ __html: workflowMessages.ai["accountability-partner"].aiReassurance }} />
        </MessageBubble>
      </MessageRow>,
    ],
  },
  // Showcase 2: Task Recall
  {
    phase: "task-recall",
    elements: [
      <MessageRow key="user-recall" isUser={true}>
        {workflowMessages.ai["task-recall"].userQuery}
      </MessageRow>,
      <MessageRow key="ai-recall-intro" avatarIcon={Mascot} showTimeline={true}>
        {workflowMessages.ai["task-recall"].aiResponse}
      </MessageRow>,
      <MessageRow key="ai-summary-card" avatarIcon={SearchIcon} isJsx={true} showTimeline={true}>
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
          <MessageBubble isUser={true}>
            <span dangerouslySetInnerHTML={{ __html: workflowMessages.ai["document-analysis"].userRequest }} />
          </MessageBubble>
          <FileAttachmentChip fileName="PRD.txt" />
        </div>
      </MessageRow>,
      <MessageRow key="ai-confirm" avatarIcon={Mascot} showTimeline={true}>
        <span dangerouslySetInnerHTML={{ __html: workflowMessages.ai["document-analysis"].aiConfirmation }} />
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
        {workflowMessages.ai["task-completion"].aiCompletion}
      </MessageRow>,
      <MessageRow key="tasks-created" avatarIcon={FaList} showTimeline={true} isJsx={true}>
        <MultiLevelTaskListCard
          title={workflowMessages.ai["task-completion"].goalTitle}
          tasks={appDevelopmentTasks}
        />
      </MessageRow>,
    ],
  },
];

const phaseContent: Record<string, PhaseContent> = showcaseData.ai.phaseContent;

const AIAssistantVisual = ({ workflowStates }: { workflowStates: WorkflowState[] }) => (
  <div className="w-full pointer-events-none min-[1100px]:scale-100 flex p-5 pt-12">
    <div className="grid w-full">
      <div>
        <div className="relative flex h-full">
          {workflowStates.map((state, stateIndex) => (
            <div key={stateIndex} className="workflow-phase absolute inset-0 top-4 px-4">
              <div className="space-y-4 h-full">
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
    </div>
  </div>
);

const featureData: FeatureData = {
  icon: Mascot,
  title: showcaseData.ai.title,
  subtitle: showcaseData.ai.subtitle,
  heading: showcaseData.ai.heading,
  description: showcaseData.ai.description,
  animation: {
    order: "visual-first",
    visual: { y: 30, stagger: 0.3 },
    copy: { scale: 0.95, stagger: 0.2 },
    end: "+=900%",
  },
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

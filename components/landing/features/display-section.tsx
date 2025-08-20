import React, { FC, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FeatureItem } from "../items";
import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
import { tasksWorkflow } from "./tasks.workflow";
import { aiWorkflow } from "./ai.workflow";
import { goalsWorkflow } from "./goals.workflow";
import { cn } from "@/lib/utils";
import { MascotProps } from "@/components/ui/mascot";

gsap.registerPlugin(ScrollTrigger);

// Animation configuration types
type AnimationConfig = {
  order: "visual-first" | "copy-first" | "interleave" | "simultaneous";
  visual: gsap.TweenVars;
  copy: gsap.TweenVars;
  start?: string;
  end?: string;
};

export type WorkflowState = {
  elements: React.ReactNode[];
  phase: string;
};

export type PhaseContent = {
  heading: string;
  description: string;
  listItems?: string[];
};

export type FeatureData = {
  icon?: LucideIcon | IconType | FC<MascotProps>;
  title: string;
  subtitle: string;
  heading: string;
  description: string;
  listItems?: string[];
  animation?: AnimationConfig;
  visual: React.ReactNode;
  children?: React.ReactNode;
  visualChildren?: React.ReactNode;
  workflowStates?: WorkflowState[];
  hasWorkflow?: boolean;
  workflowType?: "tasks" | "ai" | "goals";
  phaseContent?: Record<string, PhaseContent>;
  sharedCopyPhases?: string[][];
};

type DisplaySectionProps = {
  data: FeatureData;
  index: number;
  onActivate: (index: number) => void;
};

/**
 * Renders phase content for workflow sections
 */
const PhaseContentRenderer: FC<{
  phaseContent: Record<string, PhaseContent>;
}> = ({ phaseContent }) => (
  <>
    {Object.entries(phaseContent).map(([phase, content], idx) => (
      <div
        key={phase}
        className={cn(
          "copy-phase",
          `copy-phase-${phase}`,
          "absolute top-0 left-0 w-full"
        )}
      >
        <div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
            dangerouslySetInnerHTML={{
              __html: content.heading.replace(
                /optimize your workflow|gets things done/g,
                "<span class='text-landing-primary'>$&</span>",
              ),
            }}
          />
          <p className="mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed">
            {content.description}
          </p>
        </div>
        {content.listItems && (
          <ul className="list-disc space-y-2 sm:space-y-4 pl-4 sm:pl-6 mt-3 sm:mt-4">
            {content.listItems.map((item) => (
              <li key={item} className="text-sm sm:text-base leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </>
);

/**
 * Renders static content for non-workflow sections
 */
const StaticContentRenderer: FC<{
  heading: string;
  description: string;
}> = ({ heading, description }) => (
  <>
    <h2
      className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
      dangerouslySetInnerHTML={{
        __html: heading.replace(
          "Everything revolves around your goals",
          "<span>Everything revolves around your goals</span>",
        ),
      }}
    />
    <p className="anim-copy-desc mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed">
      {description}
    </p>
  </>
);

/**
 * Sets up GSAP animations for the section
 */
const useDisplayAnimation = (
  data: FeatureData,
  index: number,
  onActivate: (index: number) => void,
  sectionRef: React.RefObject<HTMLElement | null>,
) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: data.animation?.end ?? "+=1400%",
          onEnter: () => onActivate(index),
          onEnterBack: () => onActivate(index),
        },
      });

      if (data.hasWorkflow && data.workflowStates && data.phaseContent) {
        setupWorkflowAnimation(tl, data);
      } else {
        setupStaticAnimation(tl, data);
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [data, index, onActivate]);
};

/**
 * Sets up workflow-specific animations
 */
const setupWorkflowAnimation = (tl: gsap.core.Timeline, data: FeatureData) => {
  const copyPhases = gsap.utils.toArray<HTMLElement>(".copy-phase");

  gsap.set(copyPhases, { autoAlpha: 0, y: 15 });
  gsap.set(copyPhases[0], { autoAlpha: 1, y: 0 });

  const workflowMap = {
    tasks: tasksWorkflow,
    ai: aiWorkflow,
    goals: goalsWorkflow,
  } as const;

  const workflowHandler = data.workflowType && workflowMap[data.workflowType];
  if (workflowHandler) {
    workflowHandler(tl, data);
  }
};

/**
 * Sets up static content animations
 */
const setupStaticAnimation = (tl: gsap.core.Timeline, data: FeatureData) => {
  tl.from(".anim-copy-feature-item", { autoAlpha: 0, y: 30 })
    .from(".anim-copy-desc", { autoAlpha: 0, y: 30 }, "-=0.3")
    .from(".anim-copy-item", { autoAlpha: 0, y: 20, stagger: 0.2 }, "-=0.2");

  const visualItems = gsap.utils.toArray<HTMLElement>(".anim-visual-item");

  if (data.animation && visualItems.length > 0) {
    const { order, visual: visualVars } = data.animation;
    const position = order === "simultaneous" ? "<" : undefined;
    tl.from(visualItems, visualVars, position);
  }
};

export const DisplaySection: FC<DisplaySectionProps> = ({
  data,
  index,
  onActivate,
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useDisplayAnimation(data, index, onActivate, sectionRef);

  const hasWorkflow = data.hasWorkflow && data.phaseContent;
  const initialContent = {
    heading: data.heading,
    description: data.description,
    listItems: data.listItems,
    children: data.children,
  };

  return (
    <section
      ref={sectionRef}
      className="mx-auto flex flex-col h-screen items-center min-[1100px]:items-auto px-0 min-[1100px]:px-10 max-w-[1950px] min-[1100px]:grid min-[1100px]:grid-cols-2 min-[1100px]:gap-8"
    >
      {/* Visual Section - 4/7 of viewport height on mobile, positioned first */}
      <div className="relative order-1 mx-0 min-[1100px]:order-2 h-[57.14vh] min-[1100px]:h-[60vh] lg:max-h-[70vh] w-full pointer-events-none rounded-none">
        {data.hasWorkflow ? (
          <div className="workflow-container h-full">
            {data.visual}
          </div>
        ) : (
          <div className="h-full">{data.visual}</div>
        )}

        {data.visualChildren && (
          <div className="absolute inset-0 pointer-events-none p-4 sm:p-6 md:p-8">
            {data.visualChildren}
          </div>
        )}
      </div>

      {/* Content Section - 3/7 of viewport height on mobile, positioned at bottom */}
      <div className="flex items-start justify-center order-2 min-[1100px]:order-1 h-[42.86vh] min-[1100px]:h-[36vh] w-full">
        <div className="w-full px-4 sm:pl-4 sm:pr-8 md:pr-16 h-full flex flex-col justify-start">
          <div className="space-y-4 sm:space-y-6 w-full">
            {/* Feature Item */}
            <div>
              <FeatureItem
                {...data}
                icon={data.icon}
                borderColor="border-none"
                iconBgColor="bg-landing-secondary/10"
                iconColor="text-landing-secondary"
                iconSize="w-7 h-7"
                padding="p-3 px-4 sm:p-4 sm:px-5"
              />
            </div>

            {/* Dynamic Content */}
            <div className="relative">
              {hasWorkflow ? (
                <PhaseContentRenderer phaseContent={data.phaseContent!} />
              ) : (
                <StaticContentRenderer
                  heading={initialContent.heading}
                  description={initialContent.description}
                />
              )}
            </div>
          </div>

          {/* Additional Children */}
          {initialContent.children && (
            <div className="mt-4 sm:mt-6">
              {initialContent.children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

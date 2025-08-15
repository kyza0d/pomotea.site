// File: components/landing/features/display-section.tsx
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

// Constants for consistent styling
const ANIMATION_CLASSES = {
  copyFeatureItem: "anim-copy-feature-item",
  copyDescription: "anim-copy-desc",
  copyItem: "anim-copy-item",
  visualItem: "anim-visual-item",
  copyPhase: "copy-phase",
  workflowContainer: "workflow-container"
} as const;

const SECTION_CLASSES = {
  section: cn(
    "mx-auto grid h-screen items-center px-0 min-[1100px]:px-10 min-[1100px]:max-h-screen",
    "max-w-[1950px] gap-8 md:gap-0",
    "min-[1100px]:grid-cols-2"
  ),
  contentWrapper: cn(
    "flex items-start",
    "justify-start",
    "order-2 min-[1100px]:order-1"
  ),
  contentInner: cn(
    "w-full sm:flex md:flex-col",
    "px-4 sm:pl-4 sm:pr-8 md:pr-16"
  ),
  contentSpacing: "space-y-4 sm:space-y-6 h-110 w-full",
  visualWrapper: cn(
    "relative order-1 mx-0",
    "min-[1100px]:order-2",
    "h-[40vh] min-[1100px]:h-[60vh] lg:max-h-[70vh]",
    "pointer-events-none rounded-none"
  ),
  visualOverlay: cn(
    "absolute inset-0 pointer-events-none",
    "p-4 sm:p-6 md:p-8"
  )
} as const;

const TEXT_CLASSES = {
  heading: cn(
    "max-w-none sm:max-w-[24ch]",
    "text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
  ),
  description: cn(
    "max-w-none sm:max-w-[60ch]",
    "mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed"
  ),
  listContainer: cn(
    "list-disc space-y-2 sm:space-y-4",
    "pl-4 sm:pl-6 mt-3 sm:mt-4"
  ),
  listItem: "text-sm sm:text-base leading-relaxed",
  childrenContainer: "mt-4 sm:mt-6"
} as const;

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
          ANIMATION_CLASSES.copyPhase,
          `copy-phase-${phase}`,
          "absolute top-0 left-0 w-full gap-6 items-center grid grid-cols-2 min-[1100px]:block"
        )}
      >
        <div>
          <h2
            className={TEXT_CLASSES.heading}
            dangerouslySetInnerHTML={{
              __html: content.heading.replace(
                /optimize your workflow|gets things done/g,
                "<span class='text-landing-primary'>$&</span>"
              ),
            }}
          />
          <p className={TEXT_CLASSES.description}>
            {content.description}
          </p>
        </div>
        {content.listItems && (
          <ul className={TEXT_CLASSES.listContainer}>
            {content.listItems.map((item) => (
              <li key={item} className={TEXT_CLASSES.listItem}>
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
      className={TEXT_CLASSES.heading}
      dangerouslySetInnerHTML={{
        __html: heading.replace(
          "Everything revolves around your goals",
          "<span>Everything revolves around your goals</span>"
        ),
      }}
    />
    <p className={cn(TEXT_CLASSES.description, ANIMATION_CLASSES.copyDescription)}>
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
  sectionRef: React.RefObject<HTMLElement | null>
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
  const copyPhases = gsap.utils.toArray<HTMLElement>(`.${ANIMATION_CLASSES.copyPhase}`);

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
  tl.from(`.${ANIMATION_CLASSES.copyFeatureItem}`, { autoAlpha: 0, y: 30 })
    .from(`.${ANIMATION_CLASSES.copyDescription}`, { autoAlpha: 0, y: 30 }, "-=0.3")
    .from(`.${ANIMATION_CLASSES.copyItem}`, { autoAlpha: 0, y: 20, stagger: 0.2 }, "-=0.2");

  const visualItems = gsap.utils.toArray<HTMLElement>(`.${ANIMATION_CLASSES.visualItem}`);

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
    <section ref={sectionRef} className={SECTION_CLASSES.section}>
      {/* Content Section */}
      <div className={SECTION_CLASSES.contentWrapper}>
        <div className={SECTION_CLASSES.contentInner}>
          <div className={SECTION_CLASSES.contentSpacing}>
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
            <div className={TEXT_CLASSES.childrenContainer}>
              {initialContent.children}
            </div>
          )}
        </div>
      </div>

      {/* Visual Section */}
      <div className={SECTION_CLASSES.visualWrapper}>
        {data.hasWorkflow ? (
          <div className={cn(ANIMATION_CLASSES.workflowContainer, "h-full")}>
            {data.visual}
          </div>
        ) : (
          <div className="h-full">
            {data.visual}
          </div>
        )}

        {data.visualChildren && (
          <div className={SECTION_CLASSES.visualOverlay}>
            {data.visualChildren}
          </div>
        )}
      </div>
    </section>
  );
};

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
import { settingsWorkflow } from "./settings.workflow";
import { cn } from "@/lib/utils";
import { MascotProps } from "@/components/ui/mascot";

gsap.registerPlugin(ScrollTrigger);

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
  workflowType?: "tasks" | "ai" | "goals" | "settings";
  phaseContent?: Record<string, PhaseContent>;
  sharedCopyPhases?: string[][];
};

export const DisplaySection: React.FC<{ data: FeatureData; index: number; onActivate: (i: number) => void }> = ({
  data,
  index,
  onActivate,
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: data.animation && data.animation.start || "center center",
          end: data.animation && data.animation.end || "+=1400%", // Keep original scroll distance
          onEnter: () => onActivate(index),
          onEnterBack: () => onActivate(index),
        },
      });

      if (data.hasWorkflow && data.workflowStates && data.phaseContent) {
        // Initial setup for workflow text
        const copyPhases = gsap.utils.toArray<HTMLElement>(".copy-phase");

        gsap.set(copyPhases, { autoAlpha: 0, y: 15 }); // Keep original animation values
        gsap.set(copyPhases[0], { autoAlpha: 1, y: 0 });

        // Updated workflow routing logic
        if (data.workflowType === "tasks") {
          tasksWorkflow(tl, data);
        } else if (data.workflowType === "ai") {
          aiWorkflow(tl, data);
        } else if (data.workflowType === "goals") {
          goalsWorkflow(tl, data);
        } else if (data.workflowType === "settings") {
          settingsWorkflow(tl, data);
        }
      } else {
        // Non-workflow animations - keep original values
        tl.from(".anim-copy-feature-item", { autoAlpha: 0, y: 30 })
          .from(".anim-copy-desc", { autoAlpha: 0, y: 30 }, "-=0.3")
          .from(".anim-copy-item", { autoAlpha: 0, y: 20, stagger: 0.2 }, "-=0.2");

        const visualItems = gsap.utils.toArray<HTMLElement>(".anim-visual-item");
        if (data?.animation) {
          const { order, visual: visualVars } = data.animation;
          if (visualItems.length > 0) {
            const position = order === "simultaneous" ? "<" : undefined;
            tl.from(visualItems, visualVars, position);
          }
        }
      }
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, [data, index, onActivate]);

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
      className="mx-auto top-16! md:top:1/2 md:-translate-y-1/2 pt-8 sm:pt-12 mt-10 sm:mt-20 grid max-w-[1950px] gap-8 md:gap-0 md:grid-cols-2"
    >
      {/* Content Section */}
      <div className="flex items-start md:items-center justify-start md:justify-end order-2 md:order-1">
        <div className="w-full max-w-none sm:max-w-[580px] px-4 sm:pl-4 sm:pr-8 md:pr-16">
          <div className="space-y-4 sm:space-y-6">
            <div>
              <FeatureItem
                {...data}
                icon={data.icon}
                borderColor="border-none"
                iconBgColor="bg-landing-secondary/10"
                iconColor="text-landing-secondary"
                padding="p-3 px-4 sm:p-4 sm:px-5"
              />
            </div>
            <div className="relative">
              {hasWorkflow ? (
                Object.entries(data.phaseContent || {}).map(([phase, content], idx) => (
                  <div
                    key={phase}
                    className={cn(
                      "copy-phase",
                      `copy-phase-${phase}`,
                      idx !== 0 && "absolute top-0 left-0 w-full"
                    )}
                  >
                    <h2
                      className="max-w-none sm:max-w-[24ch] text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
                      dangerouslySetInnerHTML={{
                        __html: content.heading.replace(
                          /optimize your workflow|gets things done/g,
                          "<span class='text-landing-primary'>$&</span>"
                        ),
                      }}
                    />
                    <p className="max-w-none sm:max-w-[60ch] mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed">
                      {content.description}
                    </p>
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
                ))
              ) : (
                <>
                  <h2
                    className="max-w-none sm:max-w-[24ch] text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
                    dangerouslySetInnerHTML={{
                      __html: initialContent.heading.replace(
                        "Everything revolves around your goals",
                        "<span>Everything revolves around your goals</span>"
                      ),
                    }}
                  />
                  <p className="max-w-none sm:max-w-[60ch] mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed anim-copy-desc">
                    {initialContent.description}
                  </p>
                </>
              )}
            </div>
          </div>
          {initialContent.children && (
            <div className="mt-4 sm:mt-6">{initialContent.children}</div>
          )}
        </div>
      </div>

      {/* Visual Section */}
      <div className="relative order-1 mx-3 md:mx-0 md:order-2 h-64 sm:h-80 md:h-225 max-h-[50vh] sm:max-h-[60vh] md:max-h-[90vh] pointer-events-none overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-l-4xl border-2 sm:border-4 md:border-r-0 border-landing-borders">
        {data.hasWorkflow ? (
          <div className="workflow-container h-full">{data.visual}</div>
        ) : (
          <div className="h-full">{data.visual}</div>
        )}
        {data.visualChildren && (
          <div className="absolute inset-0 pointer-events-none p-4 sm:p-6 md:p-8">
            {data.visualChildren}
          </div>
        )}
        <div className="-z-10 absolute landing-bg-grid-texture right-0 top-0 w-full h-full">
          <div className="absolute landing-dual-inner-shadow-pseudo scale-y-150 sm:scale-y-200 origin-bottom right-0 top-0 w-full h-full" />
        </div>
      </div>
    </section>
  );
};

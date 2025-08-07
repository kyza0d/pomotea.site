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
          end: data.animation && data.animation.end || "+=1400%",
          onEnter: () => onActivate(index),
          onEnterBack: () => onActivate(index),
        },
      });

      if (data.hasWorkflow && data.workflowStates && data.phaseContent) {
        // Initial setup for workflow text
        const copyPhases = gsap.utils.toArray<HTMLElement>(".copy-phase");

        gsap.set(copyPhases, { autoAlpha: 0, y: 15 });

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
        // Non-workflow animations (no changes here)
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
    <section ref={sectionRef} className="mx-auto pt-12 mt-40 grid max-w-[1950px] md:grid-cols-2">
      <div className="flex items-center justify-end">
        <div className="w-full max-w-[580px] pl-4 pr-8 md:pr-16">
          <div className="space-y-6">
            <div>
              <FeatureItem
                {...data}
                icon={data.icon}
                borderColor="border-none"
                iconBgColor="bg-landing-secondary/10"
                iconColor="text-landing-secondary"
                padding="p-4 px-5"
              />
            </div>
            <div className="relative">
              {hasWorkflow ? (
                Object.entries(data.phaseContent || {}).map(([phase, content], idx) => (
                  <div key={phase} className={cn("copy-phase", `copy-phase-${phase}`, idx !== 0 && "absolute top-0 left-0 w-full")}>
                    <h2
                      className="max-w-[24ch] text-3xl font-bold"
                      dangerouslySetInnerHTML={{
                        __html: content.heading.replace(
                          /optimize your workflow|gets things done/g,
                          "<span class='text-landing-primary'>$&</span>"
                        ),
                      }}
                    />
                    <p className="max-w-[60ch] mt-3">{content.description}</p>
                    {content.listItems && (
                      <ul className="list-disc space-y-4 pl-6 mt-4">
                        {content.listItems.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))
              ) : (
                <>
                  <h2
                    className="max-w-[24ch] text-3xl font-bold"
                    dangerouslySetInnerHTML={{
                      __html: initialContent.heading.replace(
                        "Everything revolves around your goals",
                        "<span>Everything revolves around your goals</span>"
                      ),
                    }}
                  />
                  <p className="max-w-[60ch] mt-3 anim-copy-desc">{initialContent.description}</p>
                </>
              )}
            </div>
          </div>
          {initialContent.children && <div>{initialContent.children}</div>}
        </div>
      </div>
      <div className="relative h-225 pointer-events-none  max-h-[90vh] overflow-hidden rounded-l-4xl border-4 border-r-0 border-landing-borders">
        {data.hasWorkflow ? <div className="workflow-container">{data.visual}</div> : data.visual}
        {data.visualChildren && (
          <div className="absolute inset-0 pointer-events-none p-8">{data.visualChildren}</div>
        )}
        <div className='-z-10 absolute landing-bg-grid-texture right-0 top-0 w-full h-[45vh] min-h-200 h-full'>
          <div className='absolute landing-dual-inner-shadow-pseudo scale-y-200 origin-bottom right-0 top-0 w-full h-[45vh] min-h-200 h-full'>
          </div>
        </div>
      </div>
    </section>
  );
};

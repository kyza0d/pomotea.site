// File: components/landing.tsx

"use client";

import { HeroSection } from "./landing/hero";
import { Overview } from "./landing/overview";
import { CtaSection } from "./landing/cta";
import { FooterSection } from "./landing/footer";
import { TasksScroll } from "./landing/features/tasks.showcase";
import { AiFeaturesScroll } from "./landing/features/ai.showcase";
import { GoalsScroll } from "./landing/features/goals.showcase";
import { useState, useLayoutEffect, useEffect, useRef, forwardRef } from "react";
import { ScrollProgressIndicator } from "./landing/scroll-progress";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FeatureItemProps } from "./landing/items";
import { HelpCircle } from "lucide-react";
import { Mascot } from "@/components/ui/mascot";
import { cn } from "@/lib/utils";
import { FaRegFlag, FaStream } from "react-icons/fa";

export const CoreFeature: React.FC<FeatureItemProps> = ({
  icon: Icon = HelpCircle,
  title,
  iconBgColor = "bg-landing-secondary/10",
  iconColor = "text-landing-secondary",
  borderColor = "lg:border-landing-borders",
  iconSize = "w-5 h-5", // New prop for configuring icon size
}) => (
  <div className="flex flex-col space-y-3">
    <div className="flex flex-row h-full items-center justify-center space-x-3">
      <div className={`${iconBgColor} p-3 h-full aspect-square my-auto md:w-auto sm:flex-0 flex items-center justify-center rounded-xl border-2 ${borderColor}`}>
        {Icon && <Icon className={`${iconColor} ${iconSize}`} />}
      </div>
      <div className="text-sm">
        {title}
      </div>
    </div>
  </div>
);

gsap.registerPlugin(ScrollTrigger);

export const Feature = forwardRef<HTMLDivElement, { active?: boolean, children: React.ReactNode, className?: string }>(({ active, children, className }, ref) => (
  <div ref={ref} className={cn(
    `relative lg:bg-landing-base/60 mb-4 rounded-xl flex border-landing-borders border-3 mx-2 p-2 z-10`,
    className
  )}>
    {children}
    {/* {active && <div className="absolute hidden lg:flex w-full bottom-[-1px] left-0 bg-landing-secondary h-1" />} */}
  </div>
));

Feature.displayName = "Feature";

const LandingHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const featuresRef = useRef(null);
  const featuresContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const indicatorRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(indicatorRef.current, { autoAlpha: 0 });

      ScrollTrigger.create({
        trigger: featuresRef.current,
        start: "top center",
        end: "bottom 80%",
        onEnter: () => gsap.to(indicatorRef.current, { autoAlpha: 1, duration: 0.6 }),
        onLeave: () => gsap.to(indicatorRef.current, { autoAlpha: 0, duration: 0.6 }),
        onEnterBack: () => gsap.to(indicatorRef.current, { autoAlpha: 1, duration: 0.6 }),
        onLeaveBack: () => gsap.to(indicatorRef.current, { autoAlpha: 0, duration: 0.6 }),
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main id="landing-page" className="max-w-[1140px] mx-auto border-landing-borders/30 border-x-4">

      <div className="px-2 sm:px-6 lg:px-8 pt-0">
        <article className="w-full mx-auto">
          <HeroSection />

          <section className="z-10 flex flex-col items-center -mt-40">
            <div className="w-full flex flex-col-reverse lg:flex-col">

              <div ref={featuresContainerRef} className="w-full mt-10 lg:mt-0 lg:px-2 mx-auto w-auto relative grid md:grid-cols-1 lg:grid-cols-3 -mb-0.5 lg:overflow-hidden">
                {/* <SpotlightEffect targetPosition={spotlightPos} /> */}
                <Feature ref={el => { itemRefs.current[0] = el; }} active={true}>
                  <CoreFeature
                    icon={Mascot}
                    iconSize="w-6 h-6"
                    title="AI Powered Productivity"
                    borderColor="border-none"
                  />
                </Feature>

                <Feature ref={el => { itemRefs.current[1] = el; }}>
                  <CoreFeature
                    icon={FaStream}
                    title="Structured Sessions"
                    borderColor="border-none"
                  />
                </Feature>

                <Feature ref={el => { itemRefs.current[2] = el; }}>
                  <CoreFeature
                    icon={FaRegFlag}
                    title="Goal-Centric Workflow"
                    borderColor="border-none"
                  />
                </Feature>
              </div>

              <div className="landing-preview-image z-20 z-0 border-3 rounded-xl border-landing-borders bg-landing-base aspect-video overflow-hidden">
                <video
                  className="w-full h-full object-cover [html[data-theme='dark']_&]:hidden"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/demo-light.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <video
                  className="w-full h-full object-cover hidden [html[data-theme='dark']_&]:block"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/demo-dark.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

            </div>
          </section>
        </article>
      </div>

      <section ref={featuresRef} className="relative w-full border-landing-borders/50">
        <Overview />
        <TasksScroll index={0} onActivate={setActiveIndex} />
        {/* <div className="h-screen flex items-center ">hello</div> */}
        <AiFeaturesScroll index={1} onActivate={setActiveIndex} />
        <GoalsScroll index={2} onActivate={setActiveIndex} />
      </section>

      <CtaSection />
      <FooterSection />

      <div ref={indicatorRef} className="fixed top-1/2 left-1/2 -translate-x-1/2 w-screen max-w-[95vw] sm:max-w-[1340px] h-30 z-[101]">
        <ScrollProgressIndicator activeIndex={activeIndex} totalSections={4} />
      </div>
    </main>
  );
};

export default LandingHero;

// File: components/landing.tsx

"use client";
import { LandingHeader } from "./landing-header";
import { HeroSection } from "./landing/hero";
import { Overview } from "./landing/overview";
import { CtaSection } from "./landing/cta";
import { FooterSection } from "./landing/footer";
import { TasksScroll } from "./landing/features/tasks.showcase";
import { AiFeaturesScroll } from "./landing/features/ai.showcase";
import { GoalsScroll } from "./landing/features/goals.showcase";
import { SettingsScroll } from "./landing/features/settings.showcase";
import { useState, useLayoutEffect, useEffect, useRef, forwardRef } from "react";
import { ScrollProgressIndicator } from "./landing/scroll-progress";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FeatureItem } from "./landing/items";
import { Target } from "lucide-react";
import { Mascot } from "@/components/ui/mascot";
import { cn } from "@/lib/utils";
import { FaBars } from "react-icons/fa";
import { SpotlightEffect } from "./landing/SpotlightEffect";

gsap.registerPlugin(ScrollTrigger);

export const Feature = forwardRef<HTMLDivElement, { children: React.ReactNode, className?: string }>(({ children, className }, ref) => (
  <div ref={ref} className={cn("relative backdrop-blur-xl border-landing-borders border-2 p-3 rounded-3xl z-10", className)}>
    {children}
  </div>
));

Feature.displayName = "Feature";

const LandingHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [spotlightIndex, setSpotlightIndex] = useState(0);

  const featuresRef = useRef(null);
  const featuresContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [spotlightPos, setSpotlightPos] = useState({ x: 0.33, y: 0.8 });

  const indicatorRef = useRef(null);

  useLayoutEffect(() => {
    const container = featuresContainerRef.current;
    const activeItem = itemRefs.current[spotlightIndex];

    if (container && activeItem) {
      const containerRect = container.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();

      const x = (itemRect.left - containerRect.left + itemRect.width / 2) / containerRect.width;
      const y = (itemRect.top - containerRect.top + itemRect.height * 0.85) / containerRect.height;

      setSpotlightPos({ x, y });
    }
  }, [spotlightIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpotlightIndex(prev => (prev + 1) % 3);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

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
    <main id="landing-page">
      <div className="mx-auto w-full max-w-[1340px] px-8 pt-0">
        <article>
          <HeroSection />

          <section className="z-10 sticky flex flex-col items-center -mt-60 mx-20">
            <div ref={featuresContainerRef} className="relative mb-3 grid w-5/6 grid-cols-3 gap-8 py-4 px-5">
              {/* <SpotlightEffect targetPosition={spotlightPos} /> */}
              <Feature ref={el => { itemRefs.current[0] = el; }}>
                <FeatureItem
                  iconBgColor="bg-landing-secondary/10"
                  icon={Mascot}
                  title="AI Powered"
                  subtitle="Productivity"
                  borderColor="border-none"
                />
              </Feature>

              <Feature ref={el => { itemRefs.current[1] = el; }}>
                <FeatureItem
                  iconBgColor="bg-landing-secondary/10"
                  icon={FaBars}
                  title="Smart Time"
                  subtitle="Blocking"
                  borderColor="border-none"
                />
              </Feature>

              <Feature ref={el => { itemRefs.current[2] = el; }}>
                <FeatureItem
                  iconBgColor="bg-landing-secondary/10"
                  icon={Target}
                  title="Goal-Centric"
                  subtitle="Workflow"
                  borderColor="border-none"
                />
              </Feature>
            </div>

            <div className="landing-preview-image shadow-[0_0_35px_rgba(var(--color-landing-glow)/0.1))] z-20 sticky z-0 mx-auto rounded-[1rem] border-3 border-landing-borders bg-landing-base max-[1545px]:max-w-[85vw] w-full aspect-[16/9]">
            </div>
          </section>

          <Overview />
        </article>
      </div>

      <div ref={featuresRef} className="relative">
        <TasksScroll index={0} onActivate={setActiveIndex} />
        <AiFeaturesScroll index={1} onActivate={setActiveIndex} />
        <GoalsScroll index={2} onActivate={setActiveIndex} />
        <SettingsScroll index={3} onActivate={setActiveIndex} />
      </div>

      <div ref={indicatorRef} className="fixed top-1/2 left-1/2 -translate-x-1/2 w-screen max-w-[1340px] h-30 z-[101]">
        <ScrollProgressIndicator activeIndex={activeIndex} totalSections={4} />
      </div>

      <CtaSection />
      <FooterSection />
    </main>
  );
};

export default LandingHero;

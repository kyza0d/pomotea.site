"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LandingThemeToggle } from "./landing/theme-toggle";
import { Logo } from "./ui/logo";
import { FeaturesDropdown } from "./landing/features-dropdown";
import { ResourcesDropdown } from "./landing/resources-dropdown";
import { ChevronDown } from "lucide-react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const LandingHeader = () => {
  const headerBackgroundRef = useRef<HTMLDivElement>(null);
  const [isFeatureDropdownOpen, setIsFeatureDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);

  useEffect(() => {
    if (!headerBackgroundRef.current) return;

    // Create scroll-triggered animation for header background
    const scrollTrigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "100px top",
      scrub: 0.3, // Slight smoothing for more natural feel
      onUpdate: (self) => {
        const progress = Math.min(self.progress, 1);

        gsap.set(headerBackgroundRef.current, {
          opacity: progress,
        });
      }
    });

    // Cleanup function
    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <>
      {/* Original gradient overlay */}
      <div className="pointer-events-none fixed z-100 w-full h-12" />

      {/* Animated header background with border */}
      <div
        ref={headerBackgroundRef}
        className="pointer-events-none fixed z-150 top-0 left-0 right-0 w-full h-16 bg-landing-base-darker border-b-3 border-landing-borders/40 opacity-0"
      />

      <header className="fixed z-200 top-0 left-0 right-0 w-full max-w-[1050px] mx-auto h-16 flex items-center justify-end px-4 md:px-8">
        <Link href="/" className="transition-opacity hover:opacity-80">
          <Logo />
        </Link>
        <nav className="space-x-10 flex text-sm ml-auto">
          <div
            className="relative z-50"
            onMouseEnter={() => setIsFeatureDropdownOpen(true)}
            onMouseLeave={() => setIsFeatureDropdownOpen(false)}
          >
            <div className="cursor-default">
              Features
              <ChevronDown size={16} className="inline ml-4 transition-transform duration-200" style={{ rotate: isFeatureDropdownOpen ? "180deg" : "0deg" }} />
            </div>
            {isFeatureDropdownOpen && <FeaturesDropdown />}
          </div>
          <div
            className="hidden relative z-50"
            onMouseEnter={() => setIsResourcesDropdownOpen(true)}
            onMouseLeave={() => setIsResourcesDropdownOpen(false)}
          >
            <div className="cursor-default">
              Resources
              <ChevronDown size={16} className="inline ml-4 transition-transform duration-200" style={{ rotate: isResourcesDropdownOpen ? "180deg" : "0deg" }} />
            </div>
            {isResourcesDropdownOpen && <ResourcesDropdown />}
          </div>
          <LandingThemeToggle />
        </nav>
      </header>
    </>
  );
};

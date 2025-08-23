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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!headerBackgroundRef.current) return;

    // Create scroll-triggered animation for header background
    const scrollTrigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "100px top",
      scrub: 0.3,
      onUpdate: (self) => {
        const progress = Math.min(self.progress, 1);
        gsap.set(headerBackgroundRef.current, {
          opacity: progress,
        });
      }
    });

    // Detect mobile vs desktop
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => {
      scrollTrigger.kill();
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const toggleFeatureDropdown = () => {
    setIsFeatureDropdownOpen(!isFeatureDropdownOpen);
    setIsResourcesDropdownOpen(false);
  };

  const toggleResourcesDropdown = () => {
    setIsResourcesDropdownOpen(!isResourcesDropdownOpen);
    setIsFeatureDropdownOpen(false);
  };

  const handleFeatureMouseEnter = () => {
    if (!isMobile) {
      setIsFeatureDropdownOpen(true);
      setIsResourcesDropdownOpen(false);
    }
  };

  const handleFeatureMouseLeave = () => {
    if (!isMobile) {
      setIsFeatureDropdownOpen(false);
    }
  };

  const handleResourcesMouseEnter = () => {
    if (!isMobile) {
      setIsResourcesDropdownOpen(true);
      setIsFeatureDropdownOpen(false);
    }
  };

  const handleResourcesMouseLeave = () => {
    if (!isMobile) {
      setIsResourcesDropdownOpen(false);
    }
  };

  return (
    <>
      <div className="pointer-events-none fixed z-100 w-full h-12" />
      <div
        ref={headerBackgroundRef}
        className="pointer-events-none fixed z-150 top-0 left-0 right-0 w-full h-16 bg-landing-base-darker border-b-3 border-landing-borders/40 opacity-0"
      />
      <header className="fixed z-200 top-0 left-0 right-0 w-full max-w-[1050px] mx-auto h-16 flex items-center justify-between px-4 md:px-8">
        <Link href="/" className="transition-opacity hover:opacity-80">
          <Logo />
        </Link>
        <nav className="flex items-center space-x-4 md:space-x-10 text-sm">
          <div
            className="relative z-50"
            onMouseEnter={handleFeatureMouseEnter}
            onMouseLeave={handleFeatureMouseLeave}
            onClick={isMobile ? toggleFeatureDropdown : undefined}
          >
            <div className="cursor-pointer flex items-center">
              Features
              <ChevronDown
                size={16}
                className="inline ml-2 md:ml-4 transition-transform duration-200"
                style={{ rotate: isFeatureDropdownOpen ? "180deg" : "0deg" }}
              />
            </div>
            <FeaturesDropdown isOpen={isFeatureDropdownOpen} onToggle={toggleFeatureDropdown} />
          </div>
          <div
            className="hidden relative z-50"
            onMouseEnter={handleResourcesMouseEnter}
            onMouseLeave={handleResourcesMouseLeave}
            onClick={isMobile ? toggleResourcesDropdown : undefined}
          >
            <div className="cursor-pointer flex items-center">
              Resources
              <ChevronDown
                size={16}
                className="inline ml-2 md:ml-4 transition-transform duration-200"
                style={{ rotate: isResourcesDropdownOpen ? "180deg" : "0deg" }}
              />
            </div>
            <ResourcesDropdown />
          </div>
          <LandingThemeToggle />
        </nav>
      </header>
    </>
  );
};

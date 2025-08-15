"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LandingThemeToggle } from "./landing/theme-toggle";
import { Logo } from "./ui/logo";
import { FaDiscord } from "react-icons/fa";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const LandingHeader = () => {
  const headerBackgroundRef = useRef<HTMLDivElement>(null);

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

      <header className="fixed z-200 top-0 left-0 right-0 w-full max-w-[1450px] mx-auto h-16 flex items-center justify-end px-4 md:px-8">
        <Link href="/" className="transition-opacity hover:opacity-80">
          <Logo />
        </Link>
        <nav className="space-x-10 flex text-sm ml-auto">
          <Link
            href="/features"
            className="hover:underline transition-all duration-200 hover:text-foreground/80"
          >
            Features
          </Link>
          <a
            href="https://discord.gg/W8vrKhVJba"
            className="hover:underline transition-all duration-200 hover:text-foreground/80 flex items-center"
          >
            <FaDiscord className="inline mr-2" /> Discord
          </a>
          <LandingThemeToggle />
        </nav>
      </header>
    </>
  );
};

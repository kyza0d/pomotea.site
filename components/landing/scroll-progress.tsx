// File: components/landing/scroll-progress.tsx
"use client";

import { cn } from "@/lib/utils";

interface ScrollProgressIndicatorProps {
  activeIndex: number;
  totalSections: number;
}

export const ScrollProgressIndicator = ({ activeIndex, totalSections }: ScrollProgressIndicatorProps) => {
  return (
    <div className="absolute left-4 flex flex-col gap-y-2">
      {Array.from({ length: totalSections }).map((_, index) => (
        <div
          key={index}
          className={cn(
            "w-1 rounded-full transition-all duration-300",
            activeIndex === index ? "bg-landing-primary h-6" : "bg-landing-borders/50 h-4"
          )}
        />
      ))}
    </div>
  );
};

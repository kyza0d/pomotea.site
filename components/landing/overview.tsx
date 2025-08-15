import React from "react";
import { Clock, Coffee } from "lucide-react";
import {
  ChatWindow,
  TimerDisplay,
  SessionList,
  ChecklistItem,
  type Session,
} from "./shared/ui-components";
import { landingCopy } from "@/copy/landing";

// Local session data
const sessions: Session[] = [
  {
    id: 1,
    type: "Focus",
    duration: "25:00",
    task: "Clean workspace & organize",
    icon: Clock,
    active: true,
  },
  {
    id: 2,
    type: "Break",
    duration: "05:00",
    task: "Rest and recharge",
    icon: Coffee,
    active: false,
  },
  {
    id: 4,
    type: "Focus",
    duration: "25:00",
    task: "Respond to emails",
    icon: Clock,
    active: false,
  },
];

// Main Component
export const Overview = () => {
  return (
    <section className="pt-35">
      <div className="mx-auto flex w-full max-w-7xl min-h-[300px] flex-col justify-center gap-4 sm:gap-6 md:gap-8 rounded-xl sm:rounded-2xl md:rounded-[2rem] border-landing-borders p-4 sm:p-6 md:p-8">
        {/* Content Section */}
        <div className="flex space-x-8 flex-col min-[920px]:flex-row justify-center py-2 sm:py-4 md:py-6">
          <div>
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                {landingCopy.overview.heading.main}
                <br />
                <span className="text-landing-primary">
                  {landingCopy.overview.heading.highlight}
                </span>
              </h2>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base max-w-full w-[45ch]">
                {landingCopy.overview.description}
              </p>
            </div>
          </div>
          <div className="mt-4 sm:mt-6 flex flex-col gap-3">
            {landingCopy.overview.features.map((feature, index) => (
              <ChecklistItem key={index}>{feature}</ChecklistItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

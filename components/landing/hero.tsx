import { useState } from "react";
import { Orbit, Rocket, User, Users2 } from "lucide-react";
import { Button } from "../ui/button";
import { WaitlistModal } from "./modals";
import { Input } from "../ui/input";
import { MiniAvatarStack } from "../ui/mini-avatar-stack";
import { FaEnvelope } from "react-icons/fa";
import { HiArrowTurnRightDown, HiArrowUturnRight } from "react-icons/hi2";
import { landingCopy } from "@/copy/landing";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export const HeroSection = () => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  const waitlistData = useQuery(api.waitlist.queries.getWaitlistCount);
  const waitlistCount = waitlistData?.totalCount ?? 0; // Fallback to 28 while loading

  return (
    <>
      <section className="w-full px-4 relative flex items-center justify-center relative lg:top-0 lg:px-0 isolate overflow-hidden max-h-190 h-[80vh] lg:h-[93vh] rounded-b-[1rem] lg:rounded-b-[2rem] border-4 border-t-0 border-landing-borders/30">
        <div className="flex h-full flex-col items-center justify-center -mt-30">
          <div className="space-y-4 z-10">
            <div className="rounded-xl border-landing-borders w-fit border-2 flex items-center space-x-2 h-fit py-1 px-1.5">
              <Orbit size={16} className="text-landing-primary mr-2" />
              <div className="mx-2 text-sm">{landingCopy.hero.tagline}</div>
            </div>
            <h1 className="tracking-[-0.01em]">
              <span>{landingCopy.hero.heading.main}</span> <br />
              <span className="text-landing-primary whitespace-nowrap">
                {landingCopy.hero.heading.highlight}
              </span>
            </h1>
            <p className="max-w-[52ch] mb-10">{landingCopy.hero.description}</p>
            <MiniAvatarStack count={waitlistCount} className="mb-4" />
            <div className="flex-col relative md:flex-row flex">
              <FaEnvelope className="absolute top-1/2 -translate-y-1/2 left-6 text-landing-muted/60" />
              <Input
                placeholder={landingCopy.hero.emailPlaceholder}
                className="w-full py-5 pl-14 pr-16 lg:pr-43 rounded-xl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
              <Button
                onClick={() => setIsWaitlistModalOpen(true)}
                className="absolute top-1/2 -translate-y-1/2 right-2 py-4 px-4 md:py-6 md:px-6 whitespace-nowrap active:border-none flex-1 bg-landing-primary text-landing-base"
              >
                <HiArrowUturnRight />{" "}
                <span className="hidden md:flex ml-4">
                  {landingCopy.hero.buttonText}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
        initialEmail={email}
      />
    </>
  );
};

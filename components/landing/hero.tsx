import { useState } from "react";
import { Orbit } from "lucide-react";
import { Button } from "../ui/button";
import { WaitlistModal } from "./modals";
import { Input } from "../ui/input";
import { FaEnvelope } from "react-icons/fa";
import { HiArrowUturnRight } from "react-icons/hi2";
import { landingCopy } from "@/copy/landing";

export const HeroSection = () => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <>
      <section className="relative flex items-center justify-center px-10 relative -top-20 lg:top-0 lg:px-0 isolate overflow-hidden mb-[-50px] mx-auto min-h-[85vh] lg:min-h-[90vh] w-full rounded-b-[1rem] lg:rounded-b-[2rem] border-4 border-t-0 border-landing-borders">

        <div className="-mt-0 lg:-mt-20 sm:-mt-30 md:-mt-20 flex h-full flex-col items-center justify-center ">
          <div className="space-y-4 z-10">
            <div className="rounded-xl border-landing-borders w-fit border-2 flex items-center space-x-2 h-fit py-1 px-1.5">
              <Orbit size={16} className="text-landing-primary mr-2" />
              <div className="mx-2 text-sm">
                {landingCopy.hero.tagline}
              </div>
            </div>
            <h1 className="tracking-[-0.01em]">
              <span>{landingCopy.hero.heading.main}</span> <br />
              <span className="text-landing-primary whitespace-nowrap">{landingCopy.hero.heading.highlight}</span>
            </h1>
            <p className="max-w-[52ch]">
              {landingCopy.hero.description}
            </p>
            <div className="flex-col relative md:flex-row flex mt-8">
              <FaEnvelope className="absolute top-1/2 -translate-y-1/2 left-5 text-landing-muted" />
              <Input
                placeholder={landingCopy.hero.emailPlaceholder}
                className="w-full py-5 pl-14 pr-16 lg:pr-43 rounded-xl placeholder:text-landing-muted"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
              <Button
                onClick={() => setIsWaitlistModalOpen(true)}
                className="absolute top-1/2 -translate-y-1/2 right-2 py-4 px-4 md:py-6 md:px-6 whitespace-nowrap active:border-none flex-1 bg-landing-primary text-landing-base"
              >
                <HiArrowUturnRight /> <span className="hidden md:flex ml-4">{landingCopy.hero.buttonText}</span>
              </Button>
            </div>
          </div>
          <div className='-z-10 -mt-40 absolute bottom-0 landing-bg-grid-texture w-full h-full'>
            <div className='absolute landing-dual-inner-shadow-pseudo scale-y-200 origin-bottom w-full h-[45vh] h-full'>
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
}

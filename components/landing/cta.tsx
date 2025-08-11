import { useState } from "react";
import { Button } from "../ui/button";
import { Logo } from "../ui/logo";
import { WaitlistModal } from "./modals";
import { landingCopy } from "@/copy/landing";

export const CtaSection = () => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  return (
    <section className="mt-80 md:mx-0 min-h-screen">
      <div className="relative p-4 isolate overflow-hidden mx-auto flex w-5/6 max-w-340 space-x-12 rounded-[2rem] md:rounded-[4rem] border-4 border-landing-borders">
        <div className='-z-10 m-0 absolute landing-bg-grid-texture right-0 top-0 w-full h-[45vh] min-h-200 h-full'>
          <div className='absolute landing-dual-inner-shadow-pseudo scale-y-200 origin-bottom right-0 top-0 w-full h-[45vh] min-h-200 h-full'>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center w-full h-full justify-center m-3">
          <div className="flex h-60 md:h-90 w-full md:w-120 mr-4 items-center justify-center rounded-[2rem] md:rounded-[3rem]  border-4 border-landing-borders bg-landing-base-darker">
            <div className="scale-125 flex items-center">
              <Logo />
            </div>
          </div>

          <div className="py-6 mx-auto pb-0 md:pb-2">
            <div className="mb-8 space-y-4">
              <h2 className="max-w-[24ch] text-3xl font-bold">{landingCopy.cta.heading}</h2>
              <p className="max-w-[38ch]">
                {landingCopy.cta.description}
              </p>
            </div>
            <Button
              onClick={() => setIsWaitlistModalOpen(true)}
              className="w-full md:w-auto bg-landing-primary py-6 px-16 text-landing-base"
            >
              {landingCopy.cta.buttonText}
            </Button>
          </div>
        </div>
      </div>

      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
      />
    </section>
  );
};

import { useState } from "react";
import { Button } from "../ui/button";
import { Logo } from "../ui/logo";
import { WaitlistModal } from "./modals";
import { landingCopy } from "@/copy/landing";

export const CtaSection = () => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  return (
    <>
      <section className="pt-20">
        <div className="relative p-4 isolate overflow-hidden mx-auto flex w-full space-x-12 border-y-4 border-landing-borders/30">
          <div className="flex flex-col md:flex-row items-center w-full h-full justify-center m-3">
            <div className="flex h-60 md:h-90 w-full md:w-120 md:mr-4 lg:mr-10 items-center justify-center rounded-[2rem] md:rounded-[3rem]  border-4 border-landing-borders bg-landing-base-darker">
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
    </>
  );
};

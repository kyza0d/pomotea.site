import { useState } from "react";
import { Button } from "../ui/button";
import { Logo } from "../ui/logo";
import { WaitlistModal } from "./modals";

export const CtaSection = () => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  return (
    <section className="mt-80">

      <div className="relative isolate overflow-hidden mx-auto flex w-5/6 max-w-340 flex-row items-center space-x-12 rounded-[4rem] border-4 border-landing-borders">
        <div className='-z-10 m-0 absolute landing-bg-grid-texture right-0 top-0 w-full h-[45vh] min-h-200 h-full'>
          <div className='absolute landing-dual-inner-shadow-pseudo scale-y-200 origin-bottom right-0 top-0 w-full h-[45vh] min-h-200 h-full'>
          </div>
        </div>

        <div className="flex w-full h-full justify-center items-center m-3">
          <div className="flex h-90 w-140 items-center justify-center rounded-[3rem] border-4 border-landing-borders bg-landing-base-darker">
            <div className="scale-125 flex items-center">
              <Logo />
            </div>
          </div>

          <div className="py-6 mx-auto">
            <div className="mb-8 space-y-4">
              <h2 className="max-w-[24ch] text-3xl font-bold">Master your flow, make the most out of your time</h2>
              <p className="max-w-[47ch]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna
              </p>
            </div>
            <Button
              onClick={() => setIsWaitlistModalOpen(true)}
              className="bg-landing-primary py-6 px-16 text-landing-base"
            >
              Get started
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

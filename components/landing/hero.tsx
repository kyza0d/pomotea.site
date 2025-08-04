import { useState } from "react";
import { Clipboard, Orbit } from "lucide-react";
import { Button } from "../ui/button";
import { WaitlistModal, BetaTesterModal } from "./modals";

export const HeroSection = () => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [isBetaTesterModalOpen, setIsBetaTesterModalOpen] = useState(false);

  return (
    <>
      <section className="relative isolate overflow-hidden mb-[-50px] mx-auto h-[90vh] max-h-240 w-full rounded-b-[2rem] border-4 border-t-0 border-landing-borders">
        <div className="-mt-20  flex h-full flex-col items-center justify-center">
          <div className="space-y-4 z-10">
            <div className="rounded-xl border-landing-borders w-fit border-2 flex items-center space-x-2 h-fit py-1 px-1.5">
              <Orbit size={16} className="text-landing-primary mr-2" />
              <div className="mx-2 text-sm">
                Where structure meets flow
              </div>
            </div>
            <h1>
              <span>Stop forcing discipline.</span> <br />
              <span className="text-landing-primary">Start building structure.</span>
            </h1>
            <p className="max-w-[52ch]">
              Transform your goals into structured focus sessions. Pomotea automatically generates timer sessions from your
              tasks, helping you stay focused and make consistent progress.
            </p>
            <div className="flex pt-8">
              <Button
                onClick={() => setIsWaitlistModalOpen(true)}
                className="rounded-xl active:border-none bg-landing-primary py-6 px-12 text-landing-base"
              >
                Join waitlist
              </Button>
              <Button
                onClick={() => setIsBetaTesterModalOpen(true)}
                className="flex hover:underline items-center border border-transparent mx-6 space-x-4 bg-transparent py-6 px-4 text-landing-foreground"
              >
                <Clipboard size={20} className="mr-2" />
                Sign up as beta-tester
              </Button>
            </div>
          </div>
        </div>
        <div className='-z-10 absolute landing-bg-grid-texture right-0 top-0 w-full h-[45vh] min-h-200 h-full'>
          <div className='absolute landing-dual-inner-shadow-pseudo scale-y-200 origin-bottom right-0 top-0 w-full h-[45vh] min-h-200 h-full'>
          </div>
        </div>
        {/* <div className="-z-10 absolute -translate-y-1/2 -bottom-1/2 left-1/2 scale-x-90 -translate-x-1/2 rounded-full blur-[10rem] bg-landing-secondary-saturated/50 h-80 w-full"></div> */}
        {/* <div className="-z-10 absolute opacity-8 rounded-full bottom-0 left-80 blur-3xl bg-landing-primary h-130 w-130"></div> */}
      </section>

      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
      />
      <BetaTesterModal
        isOpen={isBetaTesterModalOpen}
        onClose={() => setIsBetaTesterModalOpen(false)}
      />
    </>
  );
}

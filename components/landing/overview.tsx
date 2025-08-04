import { ChecklistItem } from "./items";
import { UIPreview } from "./Preview";

export const Overview = () => (
  <section className="mt-30">
    <div className="mx-auto flex w-full h-100 space-x-6 flex-row items-stretch gap-4 rounded-[2rem] border-3 border-landing-borders bg-landing-base p-4">
      <div className="relative isolate overflow-hidden flex w-2/5 items-center justify-center rounded-[1.4rem] border-3 border-landing-borders p-8">
        <div className='-z-10 absolute landing-bg-grid-texture right-0 top-0 w-full h-[45vh] min-h-200 h-full'>
          <div className='absolute landing-dual-inner-shadow-pseudo origin-bottom right-0 top-0 w-full h-[45vh] min-h-200 h-full'>
          </div>
        </div>
        <UIPreview />
      </div>

      <div className="flex flex-col justify-center py-6 pr-6">
        <h2 className="text-3xl font-bold">
          Zero setup friction.
          <br /> <span className="text-landing-primary">Maximum productivity</span> output.
        </h2>
        <p className="mt-3 max-w-[60ch]">
          Unlike traditional Pomodoro apps that require manual session planning, Pomotea automatically generates your timer
          sessions from your goals and tasks.
        </p>
        <div className="mt-6 flex flex-col gap-2">
          <ChecklistItem>Automatic timer generation from your task list</ChecklistItem>
          <ChecklistItem>Goal-centric approach with integrated deadlines</ChecklistItem>
          <ChecklistItem>Real-time sync across all your devices</ChecklistItem>
        </div>
      </div>
    </div>
  </section>
);

import React from 'react';
import { Clock, Coffee } from 'lucide-react';
import {
  ChatWindow,
  TimerDisplay,
  SessionList,
  ChecklistItem,
  type Session
} from './shared/ui-components';

// Local session data
const sessions: Session[] = [
  { id: 1, type: 'Focus', duration: '25:00', task: 'Clean workspace & organize', icon: Clock, active: true },
  { id: 2, type: 'Break', duration: '05:00', task: 'Rest and recharge', icon: Coffee, active: false },
  { id: 4, type: 'Focus', duration: '25:00', task: 'Respond to emails', icon: Clock, active: false },
];

// Main Component
export const Overview = () => {
  return (
    <section className="mt-8 sm:mt-16 md:mt-24 lg:mt-30 px-0 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[500px] flex-col lg:flex-row items-stretch gap-4 sm:gap-6 md:gap-8 rounded-xl sm:rounded-2xl md:rounded-[2rem] lg:bg-landing-base lg:border-3 border-landing-borders p-4 sm:p-6 md:p-8">

        {/* Desktop UI Preview Container */}
        <div className="hidden lg:flex relative isolate overflow-hidden w-full lg:w-2/5 min-h-[300px] items-center justify-center rounded-xl sm:rounded-[1.4rem] border-2 sm:border-3 border-landing-borders">
          <div className="scale-60 w-[170%] pointer-events-none absolute top-1/2 -translate-y-1/2 skew-x-6 sm:skew-x-12 -skew-y-3 sm:-skew-y-6 flex space-x-2 sm:space-x-3">
            <ChatWindow />
            <div className="flex flex-col gap-y-2 sm:gap-y-3 fade-bottom">
              <TimerDisplay title="Website Project" progress={30} />
              <SessionList sessions={sessions} />
            </div>
          </div>

          <div className='-z-10 absolute landing-bg-grid-texture right-0 top-0 w-full h-full'>
            <div className='absolute landing-dual-inner-shadow-pseudo origin-bottom right-0 top-0 w-full h-full'>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center py-2 sm:py-4 md:py-6 px-0 sm:px-2 md:px-4 lg:pr-6 lg:pl-0 lg:flex-1">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Zero setup friction.
            <br />
            <span className="text-landing-primary">Maximum productivity</span> output.
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base max-w-full w-[45ch]">
            Unlike traditional Pomodoro apps that require manual session planning, Pomotea automatically generates your timer
            sessions from your goals and tasks.
          </p>
          <div className="mt-4 sm:mt-6 flex flex-col gap-3">
            <ChecklistItem>Automatic timer generation from your task list</ChecklistItem>
            <ChecklistItem>Goal-centric approach with integrated deadlines</ChecklistItem>
            <ChecklistItem>Real-time sync across all your devices</ChecklistItem>
          </div>
        </div>

        {/* Mobile/Tablet UI Preview */}
        <div className="flex lg:hidden relative isolate overflow-hidden w-full min-h-[250px] sm:min-h-[350px] md:min-h-[400px] items-center justify-center rounded-xl sm:rounded-[1.4rem] border-2 sm:border-3 border-landing-borders mt-4 sm:mt-6">
          <div className="scale-70 pointer-events-none absolute top-1/2 -translate-y-1/2 skew-x-6 sm:skew-x-12 -skew-y-3 sm:-skew-y-6 flex space-x-2 sm:space-x-3">
            <ChatWindow />
            <div className="flex flex-col gap-y-2 sm:gap-y-3 fade-bottom">
              <TimerDisplay title="Website Project" progress={30} />
              <SessionList sessions={sessions} />
            </div>
          </div>

          <div className='-z-10 absolute landing-bg-grid-texture right-0 top-0 w-full h-full'>
            <div className='absolute landing-dual-inner-shadow-pseudo origin-bottom right-0 top-0 w-full h-full'>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

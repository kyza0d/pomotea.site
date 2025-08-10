import { Palette, Clock, Flower, Image, Type, Brain, Target, Bell, Shield, Zap, BarChart3 } from 'lucide-react';
import { DisplaySection, type FeatureData } from "./display-section";
import { customizationItemsLanding } from "./data";
import { FeatureItem } from "../items";
import { clsx } from "clsx";
import { FaPaintBrush } from 'react-icons/fa';

const SettingsWindow = ({ children, className = "" }: {
  children?: React.ReactNode;
  className?: string;
}) => (
  <div className={clsx(
    "settings-window border-3 p-4 rounded-xl bg-landing-base border-landing-borders/70",
    className
  )}>
    {children}
  </div>
);

const MiniSlider = ({ label, value, max = 100 }: { label: string; value: number; max?: number }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-xs">
      <span className="text-landing-muted">{label}</span>
      <span className="text-landing-primary">{value}{max === 100 ? '%' : max === 18 ? 'px' : max === 120 ? 'm' : max === 10 ? '/10' : ''}</span>
    </div>
    <div className="w-full bg-landing-borders rounded-full h-1.5">
      <div
        className="bg-landing-primary h-1.5 rounded-full transition-all duration-300"
        style={{ width: `${(value / max) * 100}%` }}
      />
    </div>
  </div>
);

const MiniToggle = ({ checked }: { checked: boolean }) => (
  <div className={`relative inline-flex h-3 w-6 items-center rounded-full transition-colors ${checked ? 'bg-landing-primary' : 'bg-landing-borders'}`}>
    <span className={`inline-block h-2 w-2 transform rounded-full bg-white transition-transform ${checked ? 'translate-x-3.5' : 'translate-x-0.5'}`} />
  </div>
);

const MiniDropdown = ({ value, options, onChange }: { value: string; options: string[]; onChange?: (value: string) => void }) => (
  <select
    className="text-xs bg-landing-base-darker border border-landing-borders rounded px-2 py-1 text-landing-headers"
    value={value}
    onChange={(e) => onChange?.(e.target.value)}
  >
    {options.map(option => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);

const SessionsContent = () => (
  <div className="space-y-3 text-xs">
    <div className="space-y-2">
      <h4 className="text-xs font-medium text-landing-headers flex items-center space-x-1">
        <Clock className="w-3 h-3" />
        <span>Session Timing</span>
      </h4>
      <div className="space-y-2 pl-4">
        <MiniSlider label="Focus Duration" value={25} max={120} />
        <MiniSlider label="Break Duration" value={5} max={30} />
      </div>
    </div>
    <div className="space-y-2">
      <h4 className="text-xs font-medium text-landing-headers flex items-center space-x-1">
        <Flower className="w-3 h-3" />
        <span>Wellness Features</span>
      </h4>
      <div className="pl-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <span className="text-xs text-landing-headers">Healthy Habits</span>
            <p className="text-xs text-landing-muted opacity-80 mt-0.5">Enable wellness breaks after cycles</p>
          </div>
          <MiniToggle checked={true} />
        </div>
      </div>
    </div>
  </div>
);

const AppearanceContent = () => (
  <div className="space-y-3 text-xs">
    <div className="space-y-2">
      <h4 className="text-xs font-medium text-landing-headers">UI Scale</h4>
      <div className="pl-4">
        <MiniSlider label="Font Size" value={16} max={18} />
      </div>
    </div>
    <div className="space-y-2">
      <h4 className="text-xs font-medium text-landing-headers flex items-center space-x-1">
        <span>Background</span>
      </h4>
      <div className="space-y-2 pl-4 flex">
        <div className='p-3 bg-landing-borders/40'>
          <Image className="w-7 h-7" />
        </div>
        <div className='w-full'>
          <MiniSlider label="Opacity" value={75} />
          <MiniSlider label="Blur" value={2} max={5} />
        </div>
      </div>
    </div>
    <div className="space-y-2">
      <h4 className="text-xs font-medium text-landing-headers flex items-center space-x-1">
        <Type className="w-3 h-3" />
        <span>Typography</span>
      </h4>
      <div className="pl-4">
        <div className="grid grid-cols-2 gap-1 pt-2">
          <div className="p-1.5 bg-landing-primary/10 border border-landing-primary rounded text-center">
            <span className="text-xs font-medium" style={{ fontFamily: 'Inter' }}>Inter</span>
          </div>
          <div className="p-1.5 bg-landing-base-darker border border-landing-borders rounded text-center">
            <span className="text-xs" style={{ fontFamily: 'Roboto' }}>Roboto</span>
          </div>
          <div className="p-1.5 bg-landing-base-darker border border-landing-borders rounded text-center">
            <span className="text-xs" style={{ fontFamily: 'Poppins' }}>Poppins</span>
          </div>
          <div className="p-1.5 bg-landing-base-darker border border-landing-borders rounded text-center">
            <span className="text-xs" style={{ fontFamily: 'Custom' }}>+ Add</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ColorsContent = () => (
  <div className="space-y-3 text-xs">
    <div className="space-y-2">
      <h4 className="text-xs font-medium text-landing-headers flex items-center space-x-1">
        <Palette className="w-3 h-3" />
        <span>Color Themes</span>
      </h4>
      <div className="pl-4">
        <div className="grid grid-cols-2 gap-1.5">
          <div className="relative group">
            <div className="absolute flex opacity-0 transition-opacity space-x-0.5 top-1/2 -translate-y-1/2 right-1 pointer-events-none z-10">
              <div className="rounded-sm w-1 h-2 bg-green-400" />
              <div className="rounded-sm w-1 h-2 bg-gray-200" />
              <div className="rounded-sm w-1 h-2 bg-gray-400" />
            </div>
            <div className="w-full text-xs py-1.5 px-2 relative bg-landing-primary/10 border border-landing-primary rounded text-center">
              <span className="text-landing-primary font-medium">Ivy</span>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute flex opacity-0 transition-opacity space-x-0.5 top-1/2 -translate-y-1/2 right-1 pointer-events-none z-10">
              <div className="rounded-sm w-1 h-2 bg-orange-400" />
              <div className="rounded-sm w-1 h-2 bg-orange-100" />
              <div className="rounded-sm w-1 h-2 bg-orange-200" />
            </div>
            <div className="w-full text-xs py-1.5 px-2 relative bg-landing-base-darker border border-landing-borders rounded text-center">
              <span className="text-landing-muted">Fall</span>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute flex opacity-0 transition-opacity space-x-0.5 top-1/2 -translate-y-1/2 right-1 pointer-events-none z-10">
              <div className="rounded-sm w-1 h-2 bg-cyan-300" />
              <div className="rounded-sm w-1 h-2 bg-white" />
              <div className="rounded-sm w-1 h-2 bg-blue-200" />
            </div>
            <div className="w-full text-xs py-1.5 px-2 relative bg-landing-base-darker border border-landing-borders rounded text-center">
              <span className="text-landing-muted">Deep Space</span>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute flex opacity-0 transition-opacity space-x-0.5 top-1/2 -translate-y-1/2 right-1 pointer-events-none z-10">
              <div className="rounded-sm w-1 h-2 bg-indigo-400" />
              <div className="rounded-sm w-1 h-2 bg-gray-300" />
              <div className="rounded-sm w-1 h-2 bg-gray-400" />
            </div>
            <div className="w-full text-xs py-1.5 px-2 relative bg-landing-base-darker border border-landing-borders rounded text-center">
              <span className="text-landing-muted">Obsidian</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="space-y-2">
      <h4 className="text-xs font-medium text-landing-headers">Background Colors</h4>
      <div className="pl-4 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs text-landing-muted">Background</span>
          <div className="flex items-center space-x-1">
            <input
              type="text"
              value="#181e1d"
              className="w-16 h-4 text-xs bg-landing-base-darker border border-landing-borders rounded px-1"
              readOnly
            />
            <div className="w-4 h-4 rounded border border-landing-borders" style={{ backgroundColor: '#181e1d' }} />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-landing-muted">Background - Darker</span>
          <div className="flex items-center space-x-1">
            <input
              type="text"
              value="#0b0f0e"
              className="w-16 h-4 text-xs bg-landing-base-darker border border-landing-borders rounded px-1"
              readOnly
            />
            <div className="w-4 h-4 rounded border border-landing-borders" style={{ backgroundColor: '#0b0f0e' }} />
          </div>
        </div>
      </div>
    </div>
    <div className="space-y-2">
      <h4 className="text-xs font-medium text-landing-headers">Text Colors</h4>
      <div className="pl-4 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs text-landing-muted">Headers</span>
          <div className="flex items-center space-x-1">
            <input
              type="text"
              value="#e4e8e7"
              className="w-16 h-4 text-xs bg-landing-base-darker border border-landing-borders rounded px-1"
              readOnly
            />
            <div className="w-4 h-4 rounded border border-landing-borders" style={{ backgroundColor: '#e4e8e7' }} />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-landing-muted">Accent</span>
          <div className="flex items-center space-x-1">
            <input
              type="text"
              value="#bcc661"
              className="w-16 h-4 text-xs bg-landing-base-darker border border-landing-borders rounded px-1"
              readOnly
            />
            <div className="w-4 h-4 rounded border border-landing-borders" style={{ backgroundColor: '#bcc661' }} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AICompanionContent = () => (
  <div className="space-y-3 text-xs">
    <div className="space-y-2">
      <h4 className="text-xs font-medium text-landing-headers flex items-center space-x-1">
        <Brain className="w-3 h-3" />
        <span>AI Personality</span>
      </h4>
      <div className="space-y-2 pl-4">
        <div className="flex items-center justify-between">
          <span className="text-xs text-landing-muted">Coaching Style</span>
          <MiniDropdown value="Supportive" options={["Supportive", "Direct", "Motivational", "Gentle"]} />
        </div>
        <MiniSlider label="Proactivity Level" value={7} max={10} />
      </div>
    </div>
    <div className="space-y-2">
      <h4 className="text-xs font-medium text-landing-headers">Task Generation</h4>
      <div className="pl-4 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <span className="text-xs text-landing-headers">Auto-breakdown</span>
            <p className="text-xs text-landing-muted opacity-80 mt-0.5">Automatically break down large goals</p>
          </div>
          <MiniToggle checked={true} />
        </div>
        <MiniSlider label="Task Granularity" value={6} max={10} />
      </div>
    </div>
    <div className="space-y-2">
      <h4 className="text-xs font-medium text-landing-headers">Learning & Adaptation</h4>
      <div className="pl-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <span className="text-xs text-landing-headers">Learn from Patterns</span>
            <p className="text-xs text-landing-muted opacity-80 mt-0.5">Adapt suggestions based on your habits</p>
          </div>
          <MiniToggle checked={true} />
        </div>
      </div>
    </div>
  </div>
);

const GoalsTasksContent = () => (
  <div className="space-y-3 text-xs">
    <div className="space-y-2">
      <h4 className="text-xs font-medium text-landing-headers flex items-center space-x-1">
        <Target className="w-3 h-3" />
        <span>Goal Management</span>
      </h4>
      <div className="space-y-2 pl-4">
        <div className="flex items-center justify-between">
          <span className="text-xs text-landing-muted">Default Goal Duration</span>
          <MiniDropdown value="1 Week" options={["1 Day", "3 Days", "1 Week", "2 Weeks", "1 Month"]} />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <span className="text-xs text-landing-headers">Progress Tracking</span>
            <p className="text-xs text-landing-muted opacity-80 mt-0.5">Show progress indicators</p>
          </div>
          <MiniToggle checked={true} />
        </div>
      </div>
    </div>
    <div className="space-y-2">
      <h4 className="text-xs font-medium text-landing-headers">Task Preferences</h4>
      <div className="pl-4 space-y-2">
        <MiniSlider label="Default Task Duration" value={25} max={120} />
        <div className="flex items-center justify-between">
          <span className="text-xs text-landing-muted">Task Priority System</span>
          <MiniDropdown value="Eisenhower" options={["Simple", "Eisenhower", "MoSCoW", "Custom"]} />
        </div>
      </div>
    </div>
    <div className="space-y-2">
      <h4 className="text-xs font-medium text-landing-headers">Context & Flow</h4>
      <div className="pl-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <span className="text-xs text-landing-headers">Context Preservation</span>
            <p className="text-xs text-landing-muted opacity-80 mt-0.5">Remember where you left off</p>
          </div>
          <MiniToggle checked={true} />
        </div>
      </div>
    </div>
  </div>
);

const NotificationsFocusContent = () => (
  <div className="space-y-3 text-xs">
    <div className="space-y-2">
      <h4 className="text-xs font-medium text-landing-headers flex items-center space-x-1">
        <Bell className="w-3 h-3" />
        <span>Notifications</span>
      </h4>
      <div className="pl-4 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <span className="text-xs text-landing-headers">Session Reminders</span>
            <p className="text-xs text-landing-muted opacity-80 mt-0.5">Gentle nudges to start sessions</p>
          </div>
          <MiniToggle checked={true} />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <span className="text-xs text-landing-headers">Break Notifications</span>
            <p className="text-xs text-landing-muted opacity-80 mt-0.5">Remind you to take breaks</p>
          </div>
          <MiniToggle checked={false} />
        </div>
        <MiniSlider label="Notification Volume" value={60} />
      </div>
    </div>
  </div>
);

const DataPrivacyContent = () => (
  <div className="space-y-3 text-xs">
    <div className="space-y-2">
      <h4 className="text-xs font-medium text-landing-headers flex items-center space-x-1">
        <Shield className="w-3 h-3" />
        <span>Data & Privacy</span>
      </h4>
      <div className="space-y-2 pl-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <span className="text-xs text-landing-headers">Local Data Storage</span>
            <p className="text-xs text-landing-muted opacity-80 mt-0.5">Keep data on your device</p>
          </div>
          <MiniToggle checked={true} />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <span className="text-xs text-landing-headers">Analytics</span>
            <p className="text-xs text-landing-muted opacity-80 mt-0.5">Help improve Pomtea</p>
          </div>
          <MiniToggle checked={false} />
        </div>
      </div>
    </div>
    <div className="space-y-2">
      <h4 className="text-xs font-medium text-landing-headers">Backup & Sync</h4>
      <div className="pl-4 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs text-landing-muted">Auto Backup</span>
          <MiniDropdown value="Weekly" options={["Never", "Daily", "Weekly", "Monthly"]} />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <span className="text-xs text-landing-headers">Cloud Sync</span>
            <p className="text-xs text-landing-muted opacity-80 mt-0.5">Sync across devices</p>
          </div>
          <MiniToggle checked={false} />
        </div>
      </div>
    </div>
    <div className="space-y-2">
      <h4 className="text-xs font-medium text-landing-headers">Data Export</h4>
      <div className="pl-4">
        <div className="grid grid-cols-2 gap-1">
          <button className="p-1.5 bg-landing-base-darker border border-landing-borders rounded text-center transition-colors">
            <span className="text-xs text-landing-muted">Export JSON</span>
          </button>
          <button className="p-1.5 bg-landing-base-darker border border-landing-borders rounded text-center transition-colors">
            <span className="text-xs text-landing-muted">Export CSV</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

const AnalyticsContent = () => (
  <div className="space-y-3 text-xs">
    <div className="space-y-2">
      <h4 className="text-xs font-medium text-landing-headers flex items-center space-x-1">
        <BarChart3 className="w-3 h-3" />
        <span>Productivity Insights</span>
      </h4>
      <div className="space-y-2 pl-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <span className="text-xs text-landing-headers">Weekly Reports</span>
            <p className="text-xs text-landing-muted opacity-80 mt-0.5">Get weekly productivity summaries</p>
          </div>
          <MiniToggle checked={true} />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-landing-muted">Report Detail Level</span>
          <MiniDropdown value="Detailed" options={["Basic", "Standard", "Detailed", "Comprehensive"]} />
        </div>
      </div>
    </div>
    <div className="space-y-2">
      <h4 className="text-xs font-medium text-landing-headers">Time Tracking</h4>
      <div className="pl-4 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <span className="text-xs text-landing-headers">Automatic Tracking</span>
            <p className="text-xs text-landing-muted opacity-80 mt-0.5">Track time without manual input</p>
          </div>
          <MiniToggle checked={true} />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <span className="text-xs text-landing-headers">Idle Detection</span>
            <p className="text-xs text-landing-muted opacity-80 mt-0.5">Pause timer when away</p>
          </div>
          <MiniToggle checked={true} />
        </div>
      </div>
    </div>
    <div className="space-y-2">
      <h4 className="text-xs font-medium text-landing-headers">Goal Analytics</h4>
      <div className="pl-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <span className="text-xs text-landing-headers">Progress Predictions</span>
            <p className="text-xs text-landing-muted opacity-80 mt-0.5">AI-powered completion estimates</p>
          </div>
          <MiniToggle checked={true} />
        </div>
      </div>
    </div>
  </div>
);

const SettingsPreview = () => (
  <div className="absolute top-1/2 left-1/2 -translate-1/2 mt-15 w-300 scale-30 sm:scale-50 md:scale-70 -skew-x-6 skew-y-3">
    <div className="grid grid-cols-3 gap-3">
      <div className='flex flex-col space-y-3 -translate-y-10'>
        <SettingsWindow className="settings-window-0">
          <SessionsContent />
        </SettingsWindow>
        <SettingsWindow className="settings-window-1">
          <DataPrivacyContent />
        </SettingsWindow>
        <SettingsWindow className="settings-window-2">
          <AppearanceContent />
        </SettingsWindow>
      </div>
      <div className='flex flex-col space-y-3 -translate-y-20'>
        <SettingsWindow className="settings-window-3">
          <GoalsTasksContent />
        </SettingsWindow>
        <SettingsWindow className="settings-window-4">
          <AICompanionContent />
        </SettingsWindow>
        <SettingsWindow className="settings-window-5">
          <ColorsContent />
        </SettingsWindow>
      </div>
      <div className='flex flex-col space-y-3 translate-y-35'>
        <SettingsWindow className="settings-window-6">
          <NotificationsFocusContent />
        </SettingsWindow>
        <SettingsWindow className="settings-window-7">
          <AnalyticsContent />
        </SettingsWindow>
      </div>
    </div>
  </div>
);

const featureData: FeatureData = {
  icon: FaPaintBrush,
  title: "Beautiful",
  subtitle: "Customization",
  heading: "Craft Your Perfect Workspace",
  description:
    "Every detail crafted for extended focus sessions. From AI companion personality to deep focus modes, customize your perfect productivity environment.",
  hasWorkflow: true,
  workflowType: "settings",
  workflowStates: [
    {
      phase: "settings-core",
      elements: [
        <div key="sessions" className="settings-window settings-window-0"><SessionsContent /></div>,
        <div key="data-privacy" className="settings-window settings-window-1"><DataPrivacyContent /></div>,
      ],
    },
    {
      phase: "settings-personalization",
      elements: [
        <div key="appearance" className="settings-window settings-window-2"><AppearanceContent /></div>,
        <div key="goals-tasks" className="settings-window settings-window-3"><GoalsTasksContent /></div>,
        <div key="ai-companion" className="settings-window settings-window-4"><AICompanionContent /></div>,
      ],
    },
    {
      phase: "settings-advanced",
      elements: [
        <div key="colors" className="settings-window settings-window-5"><ColorsContent /></div>,
        <div key="notifications" className="settings-window settings-window-6"><NotificationsFocusContent /></div>,
        <div key="analytics" className="settings-window settings-window-7"><AnalyticsContent /></div>,
      ],
    },
  ],
  phaseContent: {
    "settings-core": {
      heading: "Core Settings",
      description: "Configure essential settings like session timing and data privacy to get started.",
      listItems: ["Session timing adjustments", "Privacy controls", "Basic customization"],
    },
    "settings-personalization": {
      heading: "Personalize Your Experience",
      description: "Tailor the appearance, goal management, and AI companion to suit your workflow.",
      listItems: ["UI customization", "Goal and task settings", "AI personality tuning"],
    },
    "settings-advanced": {
      heading: "Advanced Customization",
      description: "Fine-tune colors, notifications, and analytics for a fully optimized workspace.",
      listItems: ["Color theme selection", "Notification preferences", "Productivity insights"],
    },
  },
  animation: {
    order: "interleave",
    visual: { autoAlpha: 0, y: 30 },
    copy: { autoAlpha: 0, y: -30 },
    end: "+=200%",
  },
  children: (
    <div className="mt-12  grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 grid gap-4">
      {customizationItemsLanding.map((item) => (
        <FeatureItem key={item.title} {...item} padding="p-4 px-5" />
      ))}
    </div>
  ),
  visual: <SettingsPreview />,
};

export const SettingsScroll = ({ index, onActivate }: { index: number; onActivate: (i: number) => void }) =>
  <DisplaySection data={featureData} index={index} onActivate={onActivate} />;

import { Palette, Settings, Volume2, Paintbrush2, ImageIcon, Type, Clock, Bell, CheckSquare } from "lucide-react";
import { DisplaySection, type FeatureData } from "./display-section";
import { customizationItems } from "./data";
import { FeatureItem } from "../items";

const SettingsWindow = ({ title, icon: Icon, children, className = "", isDimmed = false }: {
  title: string;
  icon: any;
  children: React.ReactNode;
  className?: string;
  isDimmed?: boolean;
}) => (
  <div className={`
    relative aspect-video max-h-120 bg-landing-base border-2 border-landing-borders rounded-xl p-4 settings-window
    ${isDimmed ? 'opacity-60' : 'opacity-100'}
    ${className}
  `}>
    <div className="flex items-center gap-2 mb-3">
      <Icon className="w-4 h-4 text-landing-primary" />
      <span className="text-sm font-medium text-landing-headers">{title}</span>
    </div>
    {children}
  </div>
);

const MiniSlider = ({ label, value, max = 100 }: { label: string; value: number; max?: number }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-xs">
      <span className="text-landing-muted">{label}</span>
      <span className="text-landing-primary">{value}{max === 100 ? '%' : 'm'}</span>
    </div>
    <div className="w-full bg-landing-borders rounded-full h-1.5">
      <div
        className="bg-landing-primary h-1.5 rounded-full transition-all duration-300"
        style={{ width: `${(value / max) * 100}%` }}
      />
    </div>
  </div>
);

const MiniColorSwatch = ({ colors }: { colors: string[] }) => (
  <div className="flex gap-1">
    {colors.map((color, i) => (
      <div
        key={i}
        className="w-3 h-3 rounded-full border border-landing-borders"
        style={{ backgroundColor: color }}
      />
    ))}
  </div>
);

const MiniCheckbox = ({ label, checked }: { label: string; checked: boolean }) => (
  <div className="flex items-center gap-2">
    <div className={`w-3 h-3 rounded border border-landing-borders flex items-center justify-center ${checked ? 'bg-landing-primary' : 'bg-landing-base'}`}>
      {checked && <CheckSquare className="w-2 h-2 text-landing-base" />}
    </div>
    <span className="text-xs text-landing-muted">{label}</span>
  </div>
);

const MiniThemeButton = ({ name, isActive }: { name: string; isActive: boolean }) => (
  <div className={`px-2 py-1 text-xs rounded border ${isActive ? 'bg-landing-primary text-landing-base border-landing-primary' : 'bg-landing-base border-landing-borders text-landing-muted'}`}>
    {name}
  </div>
);

const SettingsPreview = () => (
  <div className="absolute left-1/2 top-1/2 -translate-1/2 w-full p-4 scale-80 -skew-x-26 skew-y-12 ">
    <div className="grid grid-cols-2 grid-rows-1 gap-3 settings-grid">

      <div className="flex flex-col space-y-4">
        <SettingsWindow title="Sessions" icon={Clock}>
          <div className="space-y-3">
            <MiniSlider label="Focus" value={25} max={120} />
            <MiniSlider label="Break" value={5} max={30} />
          </div>
        </SettingsWindow>

        <SettingsWindow title="Appearance" icon={Paintbrush2}>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-landing-muted">Background</span>
              <div className="w-6 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded border border-landing-borders" />
            </div>
            <MiniSlider label="Opacity" value={85} />
            <MiniSlider label="Blur" value={2} max={5} />
          </div>
        </SettingsWindow>

        <SettingsWindow title="Typography" icon={Type}>
          <div className="space-y-2">
            <div className="flex gap-1">
              <div className="px-2 py-1 text-xs bg-landing-primary text-landing-base rounded">Inter</div>
              <div className="px-2 py-1 text-xs border border-landing-borders text-landing-muted rounded">Roboto</div>
            </div>
            <MiniSlider label="Size" value={16} max={18} />
          </div>
        </SettingsWindow>
      </div>

      <div className="flex flex-col space-y-4 -translate-y-20">
        <SettingsWindow title="Notifications" icon={Bell}>
          <div className="space-y-3">
            <MiniCheckbox label="Break alerts" checked={true} />
            <MiniCheckbox label="Focus alerts" checked={false} />
            <MiniCheckbox label="Sound effects" checked={true} />
          </div>
        </SettingsWindow>
        <SettingsWindow title="Color Themes" icon={Palette}>
          <div className="grid grid-cols-2 gap-1">
            <MiniThemeButton name="Ivy" isActive={true} />
            <MiniThemeButton name="Fall" isActive={false} />
            <MiniThemeButton name="Space" isActive={false} />
            <MiniThemeButton name="Light" isActive={false} />
          </div>
        </SettingsWindow>
        <SettingsWindow title="Custom Colors" icon={Palette}>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs text-landing-muted">Accent</span>
              <div className="w-4 h-4 bg-landing-primary rounded border border-landing-borders" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-landing-muted">Background</span>
              <div className="w-4 h-4 bg-landing-base rounded border border-landing-borders" />
            </div>
          </div>
        </SettingsWindow>
      </div>
    </div>
  </div>
);

const featureData: FeatureData = {
  icon: Palette,
  title: "Beautiful",
  subtitle: "Customization",
  heading: "Craft Your Perfect Workspace",
  description:
    "Every detail crafted for extended focus sessions. From themes to typography, customize your perfect productivity environment.",
  animation: {
    order: "simultaneous",
    copy: { autoAlpha: 0, y: 20, stagger: 0.1 },
    visual: { autoAlpha: 0, scale: 0.5, stagger: { each: 0.05, from: "random" } },
    end: "+=200%",
  },
  children: (
    <div className="mt-6 grid grid-cols-2 gap-4">
      {customizationItems.map((item) => (
        <FeatureItem key={item.title} {...item} padding="p-4 px-5" />
      ))}
    </div>
  ),
  visual: <SettingsPreview />,
};

export const SettingsScroll = ({ index, onActivate }: { index: number; onActivate: (i: number) => void }) => <DisplaySection data={featureData} index={index} onActivate={onActivate} />;

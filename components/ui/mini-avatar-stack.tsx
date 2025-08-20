import { User, Users2 } from "lucide-react";

interface MiniAvatarStackProps {
  count: number;
  className?: string;
}

export const MiniAvatarStack = ({ count, className = "" }: MiniAvatarStackProps) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="flex -space-x-2">
        {/* Avatar 1 */}
        <div className="w-6 h-6 rounded-full bg-landing-primary flex items-center justify-center">
          <span className="text-landing-base font-bold">C</span>
        </div>
        {/* Avatar 2 */}
        <div className="w-6 h-6 rounded-full ring-3 ring-landing-base-darker bg-landing-primary flex items-center justify-center">
          <span className="text-landing-base font-bold">A</span>
        </div>
        {/* Avatar 3 */}
        <div className="w-6 h-6 rounded-full ring-3 ring-landing-base-darker bg-landing-primary flex items-center justify-center">
          <span className="text-landing-base font-bold">E</span>
        </div>
      </div>
      <span className="text-sm text-landing-muted font-medium">
        {count}+ People signed-up
      </span>
    </div>
  );
};

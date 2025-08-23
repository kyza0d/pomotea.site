import { User, Users2 } from "lucide-react";

interface MiniAvatarStackProps {
  count: number | null | undefined;
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
        {count === null || count === undefined ? (
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-landing-muted/30 border-t-landing-primary rounded-full animate-spin"></div>
            <span>People signed-up</span>
          </div>
        ) : (
          `${count}+ People signed-up`
        )}
      </span>
    </div>
  );
};

"use client";

import { useEffect, useState } from "react";
import { Clock, Users } from "lucide-react";
import { Text } from "@/components/ui/text";
import { useWaitlist } from "@/lib/hooks/useWaitlist";

interface WaitlistStatusProps {
  sessionId: string;
  onAccessGranted?: () => void;
}

export const WaitlistStatus = ({ sessionId, onAccessGranted }: WaitlistStatusProps) => {
  const { sessionStatus, waitlistStats } = useWaitlist(sessionId);
  const [timeWaiting, setTimeWaiting] = useState("");

  useEffect(() => {
    if (!sessionStatus) return;

    const updateTimeWaiting = () => {
      const now = Date.now();
      const waitTime = now - sessionStatus.lastActive;
      const minutes = Math.floor(waitTime / 60000);
      const hours = Math.floor(minutes / 60);

      if (hours > 0) {
        setTimeWaiting(`${hours}h ${minutes % 60}m`);
      } else {
        setTimeWaiting(`${minutes}m`);
      }
    };

    updateTimeWaiting();
    const interval = setInterval(updateTimeWaiting, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [sessionStatus]);

  useEffect(() => {
    if (sessionStatus?.status === "active" && onAccessGranted) {
      onAccessGranted();
    }
  }, [sessionStatus, onAccessGranted]);

  if (!sessionStatus) {
    return (
      <div className="text-center space-y-4">
        <div className="animate-pulse">
          <div className="h-4 bg-landing-borders rounded w-3/4 mx-auto mb-2"></div>
          <div className="h-3 bg-landing-borders rounded w-1/2 mx-auto"></div>
        </div>
      </div>
    );
  }

  if (sessionStatus.status === "active") {
    return (
      <div className="text-start space-y-4">
        <div>
          <div className="bg-landing-borders/50 w-full h-45 rounded-xl">
          </div>
          <Text variant="h2" size="xl" className="text-landing-foreground">
            You're on the waitlist!
          </Text>
          <Text variant="body" size="sm" className="text-landing-foreground/70 mt-1">
            We'll notify you when we launch!
          </Text>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center space-y-6">
      <div>
        <Clock size={48} className="mx-auto text-landing-primary mb-4" />
        <Text variant="subtitle" size="lg" className="text-landing-foreground">
          You're in the waitlist
        </Text>
        <Text size="xs" variant="h1" className="text-landing-foreground/70 mt-1">
          Thanks for joining! We'll notify you when it's your turn.
        </Text>
      </div>

      <div className="bg-landing-borders/20 rounded-xl p-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-landing-foreground/70">Position in queue</span>
          <span className="text-lg font-semibold text-landing-primary">
            #{sessionStatus.position}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-landing-foreground/70">Time waiting</span>
          <span className="text-sm font-medium text-landing-foreground">
            {timeWaiting}
          </span>
        </div>

        {waitlistStats && (
          <div className="flex items-center justify-between">
            <span className="text-sm text-landing-foreground/70">Active users</span>
            <div className="flex items-center gap-1">
              <Users size={14} className="text-landing-foreground/70" />
              <span className="text-sm font-medium text-landing-foreground">
                {waitlistStats.activeCount}
              </span>
            </div>
          </div>
        )}
      </div>

      <Text variant="subtitle" className="text-landing-foreground/50">
        Keep this page open to maintain your position
      </Text>
    </div>
  );
};

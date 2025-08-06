import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { WaitlistForm, WaitlistStatus } from "../waitlist";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    // Check if user already has a session
    const existingSessionId = localStorage.getItem("waitlist_session_id");
    if (existingSessionId) {
      setSessionId(existingSessionId);
    }
  }, []);

  const handleWaitlistSuccess = (newSessionId: string) => {
    setSessionId(newSessionId);
  };

  const handleAccessGranted = () => {
    // This could redirect to the app or show next steps
    console.log("Access granted - redirect to app");
    // Don't automatically close - let user close manually
  };

  const resetModal = () => {
    setSessionId(null);
    localStorage.removeItem("waitlist_session_id");
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed left-0 top-0 w-screen h-screen z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      <div className="w-full max-w-md bg-landing-base border-4 border-landing-borders rounded-3xl overflow-hidden shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-landing-borders">
          <div>
            <Text size="xl" className="text-landing-headers!">
              Join the Waitlist
            </Text>
            <Text size="sm" className="mt-1 text-landing-foreground!">
              Be first to experience structured focus
            </Text>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-landing-borders/30 rounded-xl transition-colors"
          >
            <X size={20} className="text-landing-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {sessionId ? (
            <div className="space-y-4">
              <WaitlistStatus
                sessionId={sessionId}
                onAccessGranted={handleAccessGranted}
              />
            </div>
          ) : (
            <>
              <WaitlistForm onSuccess={handleWaitlistSuccess} />

              {/* Discord Button */}
              <div className="mt-4 pt-4 border-t border-landing-borders">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full hover:bg-[#5865F2] hover:border-[#5865F2] hover:text-white rounded-xl border-landing-borders text-landing-foreground py-3 px-4 flex items-center justify-center gap-2 transition-colors"
                  onClick={() => window.open('https://discord.gg/W8vrKhVJba', '_blank')}
                >
                  <FaDiscord size={20} />
                  <span>Join our Discord</span>
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

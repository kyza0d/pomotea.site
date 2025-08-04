"use client";

import { useState } from "react";
import { X, CheckCircle } from "lucide-react";
// Import FaDiscord icon
import { FaEnvelope, FaUser, FaDiscord } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Auto close after success
    setTimeout(() => {
      onClose();
      setIsSuccess(false);
      setEmail("");
    }, 2000);
  };

  const resetModal = () => {
    setEmail("");
    setIsSuccess(false);
    setIsSubmitting(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed left-0 top-0 w-screen h-screen z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
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
            onClick={resetModal}
            className="p-2 hover:bg-landing-borders/30 rounded-xl transition-colors"
          >
            <X size={20} className="text-landing-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center space-y-4">
              <CheckCircle size={48} className="mx-auto text-landing-primary" />
              <Text variant="header" size="lg" className="text-landing-foreground">You're on the list!</Text>
              <Text variant="subtitle" size="sm" className="text-landing-foreground/70">
                We'll notify you when Pomotea launches.
              </Text>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <FaEnvelope size={14} className="inline mx-2 mb-0.5" />
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full mt-1 bg-landing-base border border-landing-borders"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Button Container: Two-column grid layout */}
                <div className="mt-6 grid grid-cols-2 gap-2">
                  {/* Apply/Join Waitlist Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting || !email || !name}
                    className="w-full rounded-xl bg-landing-primary transition-colors duration-300 border-2 py-6 px-4 text-landing-base"
                  >
                    {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                  </Button>

                  {/* Discord Button */}
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full hover:bg-[#5865F2] hover:border-[#5865F2] hover:text-white rounded-xl border-landing-borders text-landing-foreground py-6 px-4 flex items-center justify-center gap-2 transition-colors"
                    onClick={() => window.open('https://discord.gg/your-invite-link', '_blank')}
                  >
                    <FaDiscord size={20} />
                    <span className="hidden sm:inline">Discord</span>
                  </Button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

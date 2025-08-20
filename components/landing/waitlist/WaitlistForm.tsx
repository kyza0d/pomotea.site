import { useState } from "react";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { useWaitlist } from "@/lib/hooks/useWaitlist";

interface WaitlistFormProps {
  onSuccess: (sessionId: string) => void;
}

export const WaitlistForm = ({ onSuccess }: WaitlistFormProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const { joinWaitlist } = useWaitlist();

  const generateSessionId = () => {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const sessionId = generateSessionId();
      const result = await joinWaitlist({
        sessionId,
        email: email.trim(),
        name: name.trim(),
      });

      if (result.success) {
        // Store session ID in localStorage for persistence
        localStorage.setItem("waitlist_session_id", sessionId);
        // Store signup status with timestamp
        localStorage.setItem("waitlist_signup_completed", JSON.stringify({
          timestamp: Date.now(),
          email: email.trim(),
          name: name.trim()
        }));

        // Store success and call onSuccess immediately for smoother UX
        onSuccess(sessionId);
      } else {
        setError(result.error || "Failed to join waitlist");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <FaUser size={14} className="inline mx-2 mb-0.5" />
        <label className="text-sm font-medium">Name</label>
        <Input
          type="text"
          placeholder="Your name"
          className="w-full mt-1 bg-landing-base border border-landing-borders"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={isSubmitting}
        />
      </div>

      <div>
        <FaEnvelope size={14} className="inline mx-2 mb-0.5" />
        <label className="text-sm font-medium">Email</label>
        <Input
          type="email"
          placeholder="your@email.com"
          className="w-full placeholder-opacity-50 mt-1 bg-landing-base border border-landing-borders"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isSubmitting}
        />
      </div>

      {error && (
        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
          <Text size="sm" className="text-red-400">
            {error}
          </Text>
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        disabled={isSubmitting || !email.trim() || !name.trim()}
        className="w-full rounded-xl bg-landing-primary transition-colors duration-300 border-2 py-6 px-4 text-landing-base"
      >
        {isSubmitting ? 'Joining...' : 'Join Waitlist'}
      </Button>
    </form>
  );
};

import { useState } from "react";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { WaitlistFormData } from "../modals/WaitlistModal";

interface WaitlistStep1Props {
  onSuccess: (sessionId: string, data: { name: string; email: string }) => void;
  formData: WaitlistFormData;
  isSubmitting: boolean;
  setIsSubmitting: (value: boolean) => void;
}

export const WaitlistStep1 = ({ onSuccess, formData, isSubmitting, setIsSubmitting }: WaitlistStep1Props) => {
  const [email, setEmail] = useState(formData.email || "");
  const [name, setName] = useState(formData.name || "");
  const [error, setError] = useState("");

  const generateSessionId = () => {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Generate a session ID for local storage
      const sessionId = generateSessionId();

      // Store form data locally instead of sending to backend
      const formData = {
        sessionId,
        email: email.trim(),
        name: name.trim(),
        timestamp: Date.now(),
        step: 1
      };

      localStorage.setItem("waitlist_form_data", JSON.stringify(formData));
      localStorage.setItem("waitlist_session_id", sessionId);

      // Proceed to next step without backend call
      onSuccess(sessionId, { name: name.trim(), email: email.trim() });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="current-step-form space-y-4">
      <div className="mb-4">
        <Text size="sm" className="text-landing-foreground">
          Let's start with your basic information
        </Text>
      </div>

      <div>
        <FaUser size={14} className="inline mx-2 mb-0.5" />
        <label className="text-sm font-medium">Name</label>
        <Input
          type="text"
          placeholder="Your name"
          className="w-full"
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
          className="w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
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

    </form>
  );
};

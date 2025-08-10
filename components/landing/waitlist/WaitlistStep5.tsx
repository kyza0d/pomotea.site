import { useState } from "react";
import { Text } from "@/components/ui/text";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { WaitlistFormData } from "../modals/WaitlistModal";
import { RadioItem } from "../features/shared/workflow-components";

interface WaitlistStep5Props {
  onComplete: (data: Partial<WaitlistFormData>) => void;
  formData: WaitlistFormData;
  sessionId: string;
  isSubmitting: boolean;
  setIsSubmitting: (value: boolean) => void;
}

const USER_ROLES = [
  { id: "student", label: "Student" },
  { id: "developer", label: "Developer" },
  { id: "freelancer", label: "Freelancer" },
  { id: "manager", label: "Manager" },
  { id: "designer", label: "Designer" },
  { id: "other", label: "Other" },
];

const SOURCES = [
  { id: "twitter", label: "X/Twitter" },
  { id: "linkedin", label: "LinkedIn" },
  { id: "reddit", label: "Reddit" },
  { id: "friend", label: "Friend/Colleague" },
  { id: "google", label: "Google Search" },
  { id: "other", label: "Other" },
];

export const WaitlistStep5 = ({ onComplete, formData, sessionId, isSubmitting, setIsSubmitting }: WaitlistStep5Props) => {
  const [userRole, setUserRole] = useState(formData.userRole || "");
  const [source, setSource] = useState(formData.source || "");
  const [error, setError] = useState("");

  const completeWaitlistSignup = useMutation(api.waitlist.mutations.completeWaitlistSignup);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userRole || !source) {
      setError("Please answer both questions to complete your profile");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      // Get all form data from local storage
      const formData = JSON.parse(localStorage.getItem("waitlist_form_data") || "{}");

      // Submit complete data to backend
      const result = await completeWaitlistSignup({
        sessionId: formData.sessionId,
        email: formData.email,
        name: formData.name,
        productivityChallenge: formData.productivityChallenge,
        currentTools: formData.currentTools || [],
        excitedFeature: formData.excitedFeature,
        pricingPreference: formData.pricingPreference,
        userRole,
        source,
      });

      if (result.success) {
        // Clear local storage after successful submission
        localStorage.removeItem("waitlist_form_data");
        localStorage.setItem("waitlist_signup_completed", JSON.stringify({
          timestamp: Date.now(),
          email: formData.email,
          name: formData.name
        }));

        onComplete({ userRole, source });
      } else {
        setError(result.error || "Failed to complete signup");
      }
    } catch (err) {
      setError("Failed to complete your profile. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="current-step-form space-y-6">
      <div>
        <Text size="sm" className="text-landing-foreground mb-4">
          Final step - help us understand you better
        </Text>
      </div>

      <div>
        <Text size="sm" className="font-medium mb-3">
          What best describes your role?
        </Text>
        <div className="space-y-2">
          {USER_ROLES.map((role) => (
            <RadioItem
              key={role.id}
              name="userRole"
              value={role.id}
              checked={userRole === role.id}
              onChange={setUserRole}
            >
              {role.label}
            </RadioItem>
          ))}
        </div>
      </div>

      <div>
        <Text size="sm" className="font-medium mb-3">
          How did you hear about us?
        </Text>
        <div className="space-y-2">
          {SOURCES.map((src) => (
            <RadioItem
              key={src.id}
              name="source"
              value={src.id}
              checked={source === src.id}
              onChange={setSource}
            >
              {src.label}
            </RadioItem>
          ))}
        </div>
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

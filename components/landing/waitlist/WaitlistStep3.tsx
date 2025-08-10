import { useState } from "react";
import { Text } from "@/components/ui/text";
import { WaitlistFormData } from "../modals/WaitlistModal";
import { RadioItem } from "../features/shared/workflow-components";

interface WaitlistStep3Props {
  onComplete: (data: Partial<WaitlistFormData>) => void;
  formData: WaitlistFormData;
  sessionId: string;
  isSubmitting: boolean;
  setIsSubmitting: (value: boolean) => void;
}

const EXCITED_FEATURES = [
  { id: "ai-task-breakdown", label: "AI Task Breakdown", description: "Intelligent task decomposition" },
  { id: "goal-centric-workflow", label: "Goal-Centric Workflow", description: "Focus on what matters most" },
  { id: "intelligent-timers", label: "Intelligent Timers", description: "Adaptive time management" },
  { id: "deep-customization", label: "Deep Customization", description: "Personalize your experience" },
];

export const WaitlistStep3 = ({ onComplete, formData, sessionId, isSubmitting, setIsSubmitting }: WaitlistStep3Props) => {
  const [excitedFeature, setExcitedFeature] = useState(formData.excitedFeature || "");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!excitedFeature) {
      setError("Please select the feature you're most excited about");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      // Update local storage instead of backend
      const existingData = JSON.parse(localStorage.getItem("waitlist_form_data") || "{}");
      const updatedData = {
        ...existingData,
        excitedFeature,
        step: 3
      };
      localStorage.setItem("waitlist_form_data", JSON.stringify(updatedData));

      onComplete({ excitedFeature });
    } catch (err) {
      setError("Failed to save your preference. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="current-step-form space-y-6">
      <div>
        <Text size="sm" className="text-landing-foreground mb-4">
          Which feature excites you the most?
        </Text>
      </div>

      <div className="space-y-3">
        {EXCITED_FEATURES.map((feature) => (
          <RadioItem
            key={feature.id}
            name="excitedFeature"
            value={feature.id}
            checked={excitedFeature === feature.id}
            onChange={setExcitedFeature}
            description={feature.description}
            className="p-4"
          >
            {feature.label}
          </RadioItem>
        ))}
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

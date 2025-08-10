import { useState } from "react";
import { Text } from "@/components/ui/text";
import { WaitlistFormData } from "../modals/WaitlistModal";
import { RadioItem } from "../features/shared/workflow-components";

interface WaitlistStep4Props {
  onComplete: (data: Partial<WaitlistFormData>) => void;
  formData: WaitlistFormData;
  sessionId: string;
  isSubmitting: boolean;
  setIsSubmitting: (value: boolean) => void;
}

const PRICING_OPTIONS = [
  { id: "free", label: "Free", description: "Basic productivity features" },
  { id: "5-10", label: "$5-10/month", description: "Essential AI-powered tools" },
  { id: "10-20", label: "$10-20/month", description: "Advanced features & integrations" },
  { id: "20-30", label: "$20-30/month", description: "Premium AI & unlimited usage" },
  { id: "30plus", label: "$30+/month", description: "Enterprise-level capabilities" },
];

export const WaitlistStep4 = ({ onComplete, formData, sessionId, isSubmitting, setIsSubmitting }: WaitlistStep4Props) => {
  const [pricingPreference, setPricingPreference] = useState(formData.pricingPreference || "");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!pricingPreference) {
      setError("Please select your preferred pricing range");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      // Update local storage instead of backend
      const existingData = JSON.parse(localStorage.getItem("waitlist_form_data") || "{}");
      const updatedData = {
        ...existingData,
        pricingPreference,
        step: 4
      };
      localStorage.setItem("waitlist_form_data", JSON.stringify(updatedData));

      onComplete({ pricingPreference });
    } catch (err) {
      setError("Failed to save your pricing preference. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="current-step-form space-y-6">
      <div>
        <Text size="sm" className="text-landing-foreground mb-4">
          What would you be willing to pay for a productivity app that significantly improves your focus?
        </Text>
      </div>

      <div className="space-y-3">
        {PRICING_OPTIONS.map((option) => (
          <RadioItem
            key={option.id}
            name="pricingPreference"
            value={option.id}
            checked={pricingPreference === option.id}
            onChange={setPricingPreference}
            description={option.description}
            className="p-4"
          >
            {option.label}
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

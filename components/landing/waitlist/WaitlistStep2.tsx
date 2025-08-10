import { useState } from "react";
import { Text } from "@/components/ui/text";
import { WaitlistFormData } from "../modals/WaitlistModal";
import { RadioItem, CheckboxItem } from "../features/shared/workflow-components";

interface WaitlistStep2Props {
  onComplete: (data: Partial<WaitlistFormData>) => void;
  formData: WaitlistFormData;
  sessionId: string;
  isSubmitting: boolean;
  setIsSubmitting: (value: boolean) => void;
}

const PRODUCTIVITY_CHALLENGES = [
  { id: "procrastination", label: "Procrastination" },
  { id: "planning", label: "Planning" },
  { id: "focus", label: "Focus" },
  { id: "distractions", label: "Distractions" },
];

const PRODUCTIVITY_TOOLS = [
  { id: "todoist", label: "Todoist" },
  { id: "obsidian", label: "Obsidian" },
  { id: "notion", label: "Notion" },
  { id: "asana", label: "Asana" },
  { id: "jira", label: "Jira" },
  { id: "paper", label: "Paper" },
  { id: "none", label: "None" },
];

export const WaitlistStep2 = ({ onComplete, formData, setIsSubmitting }: WaitlistStep2Props) => {
  const [productivityChallenge, setProductivityChallenge] = useState(formData.productivityChallenge || "");
  const [currentTools, setCurrentTools] = useState<string[]>(formData.currentTools || []);
  const [error, setError] = useState("");

  const handleToolToggle = (toolId: string) => {
    setCurrentTools(prev =>
      prev.includes(toolId)
        ? prev.filter(id => id !== toolId)
        : [...prev, toolId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!productivityChallenge) {
      setError("Please select your biggest productivity challenge");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      // Update local storage instead of backend
      const existingData = JSON.parse(localStorage.getItem("waitlist_form_data") || "{}");
      const updatedData = {
        ...existingData,
        productivityChallenge,
        currentTools,
        step: 2
      };
      localStorage.setItem("waitlist_form_data", JSON.stringify(updatedData));

      onComplete({ productivityChallenge, currentTools });
    } catch (err) {
      setError("Failed to save your preferences. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="current-step-form space-y-6">
      <div>
        <Text size="sm" className="text-landing-foreground mb-4">
          Help us understand your productivity profile
        </Text>
      </div>

      <div>
        <Text size="sm" className="font-medium mb-3">
          What is your biggest productivity challenge?
        </Text>
        <div className="space-y-2">
          {PRODUCTIVITY_CHALLENGES.map((challenge) => (
            <RadioItem
              key={challenge.id}
              name="productivityChallenge"
              value={challenge.id}
              checked={productivityChallenge === challenge.id}
              onChange={setProductivityChallenge}
            >
              {challenge.label}
            </RadioItem>
          ))}
        </div>
      </div>

      <div>
        <Text size="sm" className="font-medium mb-3">
          What tools do you currently use for productivity?
        </Text>
        <Text size="xs" className="text-landing-foreground/70 mb-3">
          Select all that apply
        </Text>
        <div className="space-y-2">
          {PRODUCTIVITY_TOOLS.map((tool) => (
            <CheckboxItem
              key={tool.id}
              checked={currentTools.includes(tool.id)}
              onChange={() => handleToolToggle(tool.id)}
            >
              {tool.label}
            </CheckboxItem>
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

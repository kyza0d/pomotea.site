import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { WaitlistStatus } from "../waitlist";
import { WaitlistStep1 } from "../waitlist/WaitlistStep1";
import { WaitlistStep2 } from "../waitlist/WaitlistStep2";
import { WaitlistStep3 } from "../waitlist/WaitlistStep3";
import { WaitlistStep4 } from "../waitlist/WaitlistStep4";
import { WaitlistStep5 } from "../waitlist/WaitlistStep5";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialEmail?: string;
}

export interface WaitlistFormData {
  name: string;
  email: string;
  productivityChallenge?: string;
  currentTools?: string[];
  excitedFeature?: string;
  pricingPreference?: string;
  userRole?: string;
  source?: string;
}

export const WaitlistModal = ({ isOpen, onClose, initialEmail = "" }: WaitlistModalProps) => {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<WaitlistFormData>({
    name: "",
    email: initialEmail,
  });
  const [isCompleted, setIsCompleted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle body scroll lock when modal is open
  useEffect(() => {
    if (isOpen) {
      // Save current body overflow style
      const originalStyle = window.getComputedStyle(document.body).overflow;

      // Prevent scrolling
      document.body.style.overflow = 'hidden';

      // Cleanup function to restore scroll when modal closes
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  useEffect(() => {
    // Check if user already has a completed session
    const completedSignup = localStorage.getItem("waitlist_signup_completed");
    if (completedSignup) {
      const existingSessionId = localStorage.getItem("waitlist_session_id");
      if (existingSessionId) {
        setSessionId(existingSessionId);
        setIsCompleted(true);
        return;
      }
    }

    // Check if user has incomplete form data and resume from that step
    const incompleteFormData = localStorage.getItem("waitlist_form_data");
    if (incompleteFormData) {
      try {
        const parsedData = JSON.parse(incompleteFormData);
        setSessionId(parsedData.sessionId);
        setFormData({
          name: parsedData.name || "",
          email: parsedData.email || initialEmail,
          productivityChallenge: parsedData.productivityChallenge,
          currentTools: parsedData.currentTools,
          excitedFeature: parsedData.excitedFeature,
          pricingPreference: parsedData.pricingPreference,
          userRole: parsedData.userRole,
          source: parsedData.source,
        });
        // Resume from next step after the last completed step
        setStep((parsedData.step || 0) + 1);
      } catch (error) {
        // If parsing fails, start fresh
        localStorage.removeItem("waitlist_form_data");
      }
    }
  }, [initialEmail]);

  useEffect(() => {
    // Update email when initialEmail changes
    if (initialEmail && initialEmail !== formData.email) {
      setFormData(prev => ({ ...prev, email: initialEmail }));
    }
  }, [initialEmail]);

  const handleStep1Success = (newSessionId: string, data: { name: string; email: string }) => {
    setSessionId(newSessionId);
    setFormData(prev => ({ ...prev, ...data }));
    setStep(2);
  };

  const handleStepComplete = (stepData: Partial<WaitlistFormData>) => {
    setFormData(prev => ({ ...prev, ...stepData }));
    if (step < 5) {
      setStep(step + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleContinue = () => {
    // Trigger form submission for current step
    const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
    const form = document.querySelector('.current-step-form') as HTMLFormElement;
    if (form) {
      form.dispatchEvent(submitEvent);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const renderStepContent = () => {
    if (isCompleted && sessionId) {
      return (
        <div className="space-y-4">
          <WaitlistStatus sessionId={sessionId} />
        </div>
      );
    }

    const commonProps = {
      formData,
      isSubmitting,
      setIsSubmitting
    };

    switch (step) {
      case 1:
        return <WaitlistStep1 onSuccess={handleStep1Success} {...commonProps} />;
      case 2:
        return <WaitlistStep2 onComplete={handleStepComplete} sessionId={sessionId!} {...commonProps} />;
      case 3:
        return <WaitlistStep3 onComplete={handleStepComplete} sessionId={sessionId!} {...commonProps} />;
      case 4:
        return <WaitlistStep4 onComplete={handleStepComplete} sessionId={sessionId!} {...commonProps} />;
      case 5:
        return <WaitlistStep5 onComplete={handleStepComplete} sessionId={sessionId!} {...commonProps} />;
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-auto"
      onClick={handleBackdropClick}
    >
      <div className="w-full max-w-md bg-landing-base border-4 border-landing-borders rounded-3xl overflow-hidden shadow-2xl mx-auto my-8 h-[calc(85vh-4rem)] flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b-2 border-landing-borders/50">
          <div>
            <Text size="xl" className="font-bold text-landing-headers mb-0!">
              Join the Waitlist
            </Text>
            <Text size="sm" className="text-landing-muted">
              {isCompleted
                ? "Welcome to the waitlist!"
                : "Be first to experience structured focus"
              }
            </Text>
          </div>
          <button
            onClick={onClose}
            className="p-2 mb-auto hover:bg-landing-borders/30 rounded-xl transition-colors"
          >
            <X size={20} className="text-landing-foreground" />
          </button>
        </div>

        {/* Progress Indicator */}
        {!isCompleted && (
          <div className="px-6 py-3 bg-landing-base border-b border-landing-borders">
            <div className="flex items-center justify-between">
              <Text size="sm" className="text-landing-foreground">
                Step {step} of 5
              </Text>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-colors ${i <= step ? 'bg-landing-primary' : 'bg-landing-borders'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {renderStepContent()}
        </div>

        {/* Fixed Footer for Navigation */}
        <div className="border-t-2 border-landing-borders/50 bg-landing-base px-3 py-2 flex-shrink-0">
          <div className="flex justify-between items-center">
            {/* Previous Button */}
            {!isCompleted && step > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={handlePreviousStep}
                className="flex items-center gap-2 hover:bg-landing-borders/30 rounded-xl border-landing-borders text-landing-foreground transition-colors"
              >
                <ChevronLeft size={16} />
                Previous
              </Button>
            )}

            {/* Continue Button */}
            {!isCompleted && (
              <Button
                type="button"
                variant="primary"
                onClick={handleContinue}
                disabled={isSubmitting}
                className="flex items-center gap-2 rounded-xl bg-landing-primary transition-colors duration-300 border-2 py-3 px-4 text-landing-base ml-auto"
              >
                {step === 5 ? (isSubmitting ? 'Completing...' : 'Complete Signup') : (isSubmitting ? 'Saving...' : 'Continue')}
                {step < 5 && <ChevronRight size={16} />}
              </Button>
            )}
            {isCompleted && (
              <>
                {/* <Discord /> */}
                <Button
                  onClick={onClose}
                  className="flex items-center gap-2 rounded-xl bg-landing-primary transition-colors duration-300 py-3 px-4 text-landing-base ml-auto" >
                  Close
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

"use client";

import { useState } from "react";
import { X, CheckCircle } from "lucide-react";
import { FaEnvelope, FaUser, FaBriefcase, FaCommentDots, FaDiscord } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";

interface BetaTesterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BetaTesterModal = ({ isOpen, onClose }: BetaTesterModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    motivation: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Auto close after success
    setTimeout(() => {
      onClose();
      resetForm();
    }, 2500);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      role: "",
      motivation: ""
    });
    setIsSuccess(false);
    setIsSubmitting(false);
  };

  const resetModal = () => {
    resetForm();
    onClose();
  };

  const updateFormData = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isFormValid = formData.name && formData.email && formData.role && formData.motivation;

  if (!isOpen) return null;

  return (
    <div className="fixed left-0 top-0 w-screen h-screen z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg bg-landing-base border-4 border-landing-borders rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-landing-borders">
          <div>
            <Text size="xl" className="text-landing-headers!">
              Join Beta Testing
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
              <Text variant="header" size="lg" className="text-landing-foreground">Application submitted!</Text>
              <Text variant="subtitle" size="sm" className="text-landing-foreground/70">
                We'll review your application and get back to you within 48 hours with beta access details.
              </Text>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <FaUser size={14} className="inline mx-2 mb-0.5" />
                    <label className="text-sm font-medium">Name *</label>
                    <Input
                      type="text"
                      placeholder="Your name"
                      className="w-full mt-1 bg-landing-base border border-landing-borders"
                      value={formData.name}
                      onChange={(e) => updateFormData("name", e.target.value)}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <FaEnvelope size={14} className="inline mx-2 mb-0.5" />
                    <label className="text-sm font-medium">Email *</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full mt-1 bg-landing-base border border-landing-borders"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <FaBriefcase size={14} className="inline mx-2 mb-0.5" />
                  <label className="text-sm font-medium">Role/Profession *</label>
                  <Input
                    type="text"
                    placeholder="e.g., Developer, Designer, Student"
                    className="w-full mt-1 bg-landing-base border border-landing-borders"
                    value={formData.role}
                    onChange={(e) => updateFormData("role", e.target.value)}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <FaCommentDots size={14} className="inline mx-2 mb-0.5" />
                  <label className="text-sm font-medium">Why do you want to beta test? *</label>
                  <textarea
                    value={formData.motivation}
                    onChange={(e) => updateFormData("motivation", e.target.value)}
                    className="w-full mt-1 p-2.5 px-4 bg-landing-base border border-landing-borders rounded-lg text-sm text-landing-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-landing-borders resize-none"
                    placeholder="Tell us about your productivity challenges and how you'd help improve Pomotea..."
                    rows={4}
                    required
                    disabled={isSubmitting}
                  />
                </div>


                {/* Button Container: Two-column grid layout */}
                <div className="mt-6 grid grid-cols-2 gap-2">
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting || !isFormValid}
                    className="w-full rounded-xl bg-landing-primary py-6 px-12 text-landing-base"
                  >
                    {isSubmitting ? 'Submitting...' : 'Apply'}
                  </Button>
                  {/* Discord Button */}
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full hover:bg-[#5865F2] hover:border-[#5865F2] hover:text-white rounded-xl border-landing-borders text-landing-foreground py-6 px-4 flex items-center justify-center gap-2 transition-colors"
                    onClick={() => window.open('https://discord.gg/W8vrKhVJba', '_blank')}
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

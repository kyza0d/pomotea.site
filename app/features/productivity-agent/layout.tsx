import { Metadata } from 'next';
import { SharedLayout } from '@/components/features/shared-layout';

export const metadata: Metadata = {
  title: "Productivity Agent - Pomotea AI Productivity Timer",
  description: "Manage and plan your tasks hands-free with our intelligent AI agent that understands your workflow and optimizes your productivity.",
  keywords: "AI productivity agent, task management, intelligent planning, hands-free productivity, AI assistant",
  openGraph: {
    title: "Productivity Agent - Pomotea AI Productivity Timer",
    description: "Manage and plan your tasks hands-free with our intelligent AI agent that understands your workflow and optimizes your productivity.",
    url: "https://pomotea.com/features/productivity-agent",
    type: "website"
  },
  twitter: {
    title: "Productivity Agent - Pomotea AI Productivity Timer",
    description: "Manage and plan your tasks hands-free with our intelligent AI agent that understands your workflow and optimizes your productivity."
  },
  alternates: {
    canonical: "https://pomotea.com/features/productivity-agent"
  }
};

export default function ProductivityAgentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SharedLayout>{children}</SharedLayout>;
}
import { Metadata } from 'next';
import { SharedLayout } from '@/components/features/shared-layout';

export const metadata: Metadata = {
  title: "Session-based Workflow - Pomotea AI Productivity Timer",
  description: "Tasks align with goals through purpose-driven sessions that create meaningful connections between your daily work and long-term objectives.",
  keywords: "session-based workflow, goal alignment, purpose-driven productivity, workflow optimization, task organization",
  openGraph: {
    title: "Session-based Workflow - Pomotea AI Productivity Timer",
    description: "Tasks align with goals through purpose-driven sessions that create meaningful connections between your daily work and long-term objectives.",
    url: "https://pomotea.com/features/session-workflow",
    type: "website"
  },
  twitter: {
    title: "Session-based Workflow - Pomotea AI Productivity Timer",
    description: "Tasks align with goals through purpose-driven sessions that create meaningful connections between your daily work and long-term objectives."
  },
  alternates: {
    canonical: "https://pomotea.com/features/session-workflow"
  }
};

export default function SessionWorkflowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SharedLayout>{children}</SharedLayout>;
}
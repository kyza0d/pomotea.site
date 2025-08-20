import { Metadata } from 'next';
import { SharedLayout } from '@/components/features/shared-layout';

export const metadata: Metadata = {
  title: "Progress Tracking - Pomotea AI Productivity Timer",
  description: "Track your productivity with intelligent analytics that turn your work data into actionable insights for continuous improvement.",
  keywords: "progress tracking, productivity analytics, work insights, performance metrics, productivity data",
  openGraph: {
    title: "Progress Tracking - Pomotea AI Productivity Timer",
    description: "Track your productivity with intelligent analytics that turn your work data into actionable insights for continuous improvement.",
    url: "https://pomotea.com/features/progress-tracking",
    type: "website"
  },
  twitter: {
    title: "Progress Tracking - Pomotea AI Productivity Timer",
    description: "Track your productivity with intelligent analytics that turn your work data into actionable insights for continuous improvement."
  },
  alternates: {
    canonical: "https://pomotea.com/features/progress-tracking"
  }
};

export default function ProgressTrackingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SharedLayout>{children}</SharedLayout>;
}
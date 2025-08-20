import { Metadata } from 'next';
import { SharedLayout } from '@/components/features/shared-layout';

export const metadata: Metadata = {
  title: "Optimized for Flow - Pomotea AI Productivity Timer",
  description: "Smart cycles promote deep focus and minimize distractions, creating optimal conditions for sustained productivity and flow states.",
  keywords: "flow state, deep focus, smart cycles, distraction-free productivity, focus optimization",
  openGraph: {
    title: "Optimized for Flow - Pomotea AI Productivity Timer",
    description: "Smart cycles promote deep focus and minimize distractions, creating optimal conditions for sustained productivity and flow states.",
    url: "https://pomotea.com/features/optimized-flow",
    type: "website"
  },
  twitter: {
    title: "Optimized for Flow - Pomotea AI Productivity Timer",
    description: "Smart cycles promote deep focus and minimize distractions, creating optimal conditions for sustained productivity and flow states."
  },
  alternates: {
    canonical: "https://pomotea.com/features/optimized-flow"
  }
};

export default function OptimizedFlowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SharedLayout>{children}</SharedLayout>;
}
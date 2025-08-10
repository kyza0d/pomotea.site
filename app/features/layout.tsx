import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Features - Pomotea AI Productivity Timer",
  description: "Discover Pomotea's advanced features: AI-powered task breakdown, adaptive daily planning, intelligent goal management, deep work analytics, and extensive customization options for optimal productivity.",
  keywords: "AI task breakdown, productivity features, goal management, focus analytics, pomodoro customization, intelligent planning, work tracking",
  openGraph: {
    title: "Features - Pomotea AI Productivity Timer",
    description: "Discover Pomotea's advanced features: AI-powered task breakdown, adaptive daily planning, intelligent goal management, and deep work analytics.",
    url: "https://pomotea.com/features",
    type: "website"
  },
  twitter: {
    title: "Features - Pomotea AI Productivity Timer",
    description: "Discover Pomotea's advanced features: AI-powered task breakdown, adaptive daily planning, and intelligent goal management."
  },
  alternates: {
    canonical: "https://pomotea.com/features"
  }
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
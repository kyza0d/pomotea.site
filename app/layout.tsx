import "./globals.css";
import "./fonts";
import { ConvexClientProvider } from "@/lib/convex";
import { LandingHeader } from "@/components/landing-header";

export const metadata = {
  title: "Pomotea - AI-Powered Productivity Timer",
  description: "Transform your productivity with an intelligent pomodoro timer that uses AI to break down goals, adapt to your workflow, and provide personalized insights. Experience smart task management, adaptive daily planning, and deep work analytics that evolve with your unique productivity patterns.",
  keywords: "productivity, pomodoro timer, AI productivity, task management, goal tracking, focus timer, time management, work-life balance",
  authors: [{ name: "Pomotea" }],
  creator: "Pomotea",
  publisher: "Pomotea",
  robots: "index, follow",
  openGraph: {
    title: "Pomotea - AI-Powered Productivity Timer",
    description: "Transform your productivity with an intelligent pomodoro timer that uses AI to break down goals, adapt to your workflow, and provide personalized insights.",
    url: "https://pomotea.com",
    siteName: "Pomotea",
    type: "website",
    images: [
      {
        url: "/logo.svg",
        width: 200,
        height: 200,
        alt: "Pomotea Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pomotea - AI-Powered Productivity Timer",
    description: "Transform your productivity with an intelligent pomodoro timer that uses AI to break down goals and adapt to your workflow.",
    images: ["/logo.svg"]
  },
  alternates: {
    canonical: "https://pomotea.com"
  },
  other: {
    "features-page": "https://pomotea.com/features"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body className="font-['Karla',sans-serif] text-landing-foreground bg-landing-base-darker" >
        <ConvexClientProvider>
          <LandingHeader />

          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}

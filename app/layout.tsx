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
        width: 142,
        height: 142,
        alt: "Pomotea Logo",
        type: "image/svg+xml"
      }
    ]
  },
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml", sizes: "any" },
      { url: "/logo.svg", type: "image/svg+xml", sizes: "16x16" },
      { url: "/logo.svg", type: "image/svg+xml", sizes: "32x32" },
      { url: "/logo.svg", type: "image/svg+xml", sizes: "48x48" },
      { url: "/logo.svg", type: "image/svg+xml", sizes: "64x64" }
    ],
    apple: { url: "/logo.svg", sizes: "180x180" },
    shortcut: "/logo.svg"
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
        <link rel="icon" href="/logo.svg" type="image/svg+xml" sizes="any" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" sizes="16x16" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" sizes="32x32" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" sizes="48x48" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" sizes="64x64" />
        <link rel="apple-touch-icon" href="/logo.svg" sizes="180x180" />
        <link rel="shortcut icon" href="/logo.svg" />
        <meta name="msapplication-TileImage" content="/logo.svg" />
        <meta name="msapplication-TileColor" content="#2C2C2C" />
        <link rel="manifest" href="/manifest.json" />
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

import "./globals.css";
import "./fonts";
import { ConvexClientProvider } from "@/lib/convex";
import { LandingHeader } from "@/components/landing-header";

export const metadata = {
  title: "pomotea - AI-Powered Focus Timer",
  description: "Transform your productivity with an AI-powered pomodoro timer that adapts to your workflow",
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

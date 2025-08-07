import { Logo } from "@/components/ui/logo";

export const FooterSection = () => (
  <div className="p-9">
    <footer className="sticky z-10 mx-auto mt-80 max-w-[1700px] rounded-2xl border-4 border-landing-borders bg-landing-base/90 p-12">
      <div className="flex items-center space-x-12">
        <div className="space-y-4">
          <Logo size={32} />
          <div className="space-y-1">
            <p className="text-landing-foreground/80 text-sm">
              Built for focused productivity
            </p>
            <p className="text-landing-foreground/60 text-xs">
              © 2024 Pomotea. All rights reserved.
            </p>
          </div>
        </div>

        <div className="flex space-x-12">
          <div className="space-y-3">
            <h4 className="text-landing-foreground font-medium text-sm">Product</h4>
            <div className="space-y-2">
              <a href="/features" className="block text-landing-foreground/70 hover:text-landing-primary text-sm transition-colors">
                Features
              </a>
              <a href="/sign-in" className="block text-landing-foreground/70 hover:text-landing-primary text-sm transition-colors">
                Sign In
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-landing-foreground font-medium text-sm">Support</h4>
            <div className="space-y-2">
              <a href="https://x.com/kyza_dev" className="block text-landing-foreground/70 hover:text-landing-primary text-sm transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

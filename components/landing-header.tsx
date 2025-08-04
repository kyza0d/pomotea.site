import { ChevronDown } from "lucide-react";
import { LandingThemeToggle } from "./landing/theme-toggle";
import { Logo } from "./ui/logo";

export const LandingHeader = () => {
  return (
    <>
      <div className="fixed z-100 w-full h-30 bg-gradient-to-b from-landing-base from-0% from-landing-base via-80% to-transparent" />
      <div className='z-200 fixed left-4 top-4 h-16 left-28'>
        <Logo />
      </div>
      <header className="fixed z-200 top-1 left-1/2 -translate-x-1/2 w-full max-w-[1250px] h-16 flex items-center justify-end px-8">
        <nav className="space-x-10 flex text-sm">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <div className="space-x-2">
            <ChevronDown size={18} className="inline mb-0.5" />
            <a href="#resources" className="">Resources</a>
          </div>
        </nav>
      </header>
      <LandingThemeToggle />
    </>
  );
}

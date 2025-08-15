import Link from "next/link";
import { LandingThemeToggle } from "./landing/theme-toggle";
import { Logo } from "./ui/logo";
import { FaDiscord } from "react-icons/fa";

export const LandingHeader = () => {
  return (
    <>
      <div className="pointer-events-none fixed z-100 w-full h-12 bg-gradient-to-b from-landing-base from-0% from-landing-base via-80% to-transparent" />
      <header className="fixed z-200 top-0 left-0 right-0 w-full max-w-[1450px] mx-auto h-16 flex items-center justify-end px-4 md:px-8">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="space-x-10 flex text-sm ml-auto">
          <Link href="/features" className="hover:underline">Features</Link>
          <a href="https://discord.gg/W8vrKhVJba" className="hover:underline"><FaDiscord className="inline mr-2" /> Discord</a>

          {/* <a href="#pricing" className="hover:underline">Pricing</a> */}
          <LandingThemeToggle />
        </nav>
      </header>
    </>
  );
}

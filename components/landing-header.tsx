import Link from "next/link";
import { LandingThemeToggle } from "./landing/theme-toggle";
import { Logo } from "./ui/logo";
import { FaDiscord } from "react-icons/fa";

export const LandingHeader = () => {
  return (
    <>
      <div className="pointer-events-none fixed z-100 w-full h-30 bg-gradient-to-b from-landing-base from-0% from-landing-base via-80% to-transparent" />
      <div className='z-200 fixed left-4 top-4 h-16 left-28'>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <header className="fixed z-200 top-1 left-1/2 -translate-x-1/2 w-full max-w-[1450px] h-16 flex items-center justify-end px-8">
        <nav className="space-x-10 flex text-sm">
          <Link href="/features" className="hover:underline">Features</Link>
          <a href="https://discord.gg/W8vrKhVJba" className="hover:underline"><FaDiscord className="inline mr-2" /> Discord</a>

          {/* <a href="#pricing" className="hover:underline">Pricing</a> */}
          <LandingThemeToggle />
        </nav>
      </header>
    </>
  );
}

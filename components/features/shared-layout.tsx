"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowLeft, MoveLeft } from "lucide-react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface SharedLayoutProps {
  children: React.ReactNode;
}

export function SharedLayout({ children }: SharedLayoutProps) {
  const pathname = usePathname();
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Extract headings from the page content
    const headings = document.querySelectorAll('article h2, article h3');
    const items: TocItem[] = [];

    headings.forEach((heading, index) => {
      const id = heading.id || `heading-${index}`;
      if (!heading.id) {
        heading.id = id;
      }

      items.push({
        id,
        text: heading.textContent || '',
        level: parseInt(heading.tagName.charAt(1))
      });
    });

    setTocItems(items);
  }, [pathname, children]);

  useEffect(() => {
    // Set up intersection observer for active section highlighting
    if (tocItems.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -80% 0px',
        threshold: 0
      }
    );

    tocItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [tocItems]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div id="article" className="min-h-screen text-landing-foreground">
      <div className="max-w-[1050px] mx-auto px-6 py-24">
        {/* Back to Features Link */}
        <div className="mb-12">
          <Link
            href="/features"
          >
            <MoveLeft size={16} className="inline mr-2" />  Features Overview
          </Link>
        </div>

        <div className="lg:grid lg:grid-cols-[1fr_200px] lg:gap-16">
          {/* Main Content */}
          <main className="min-w-0">
            {children}
          </main>

          {/* Table of Contents Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start mt-12 lg:mt-0">
            {tocItems.length > 0 && (
              <nav className="border-l border-landing-borders pl-4">
                <h3 className="text-xs font-medium uppercase tracking-wider mb-3">
                  Contents
                </h3>
                <ul className="space-y-1">
                  {tocItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={cn(
                          "block w-full text-left text-xs transition-colors py-1",
                          item.level === 3 && "pl-3",
                          activeId === item.id
                            ? "text-landing-headers font-medium"
                            : "text-landing-muted/50 hover:text-landing-foreground"
                        )}
                      >
                        {item.text}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}

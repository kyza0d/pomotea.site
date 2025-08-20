"use client";

import { FileText, Lightbulb, Calendar, Target, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";

const resourceCategories = [
  {
    id: "blog",
    slug: "blog",
    icon: FileText,
    title: "Blog",
    description: "Latest updates, tips, and productivity insights"
  },
  {
    id: "tutorials",
    slug: "tutorials",
    icon: Lightbulb,
    title: "Tutorials",
    description: "Step-by-step guides to master your productivity workflow"
  }
];

const quickLinks = [
  {
    icon: Calendar,
    title: "Daily Planning Guide",
    description: "Learn how to structure your days for maximum productivity",
    slug: "daily-planning"
  },
  {
    icon: Target,
    title: "Goal Setting Framework",
    description: "Master the art of setting and achieving meaningful goals",
    slug: "goal-setting"
  },
  {
    icon: Clock,
    title: "Time Management Mastery",
    description: "Advanced techniques for optimizing your time usage",
    slug: "time-management"
  },
  {
    icon: TrendingUp,
    title: "Analytics Deep Dive",
    description: "Understanding and leveraging your productivity data",
    slug: "analytics"
  }
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-landing-base-darker">
      <div className="max-w-[900px] mx-auto px-6 py-24">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-3xl font-normal mb-4 text-landing-headers leading-tight">
            Resources
          </h1>
          <p className="text-lg text-landing-foreground leading-relaxed">
            Everything you need to master your productivity workflow. From quick tips to
            comprehensive guides, find the resources that will help you achieve your goals.
          </p>
        </header>

        {/* Main Resource Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-medium text-landing-headers mb-8">Main Categories</h2>
          <div className="space-y-8">
            {resourceCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <article key={category.id} className="border-b border-landing-borders pb-8 last:border-b-0">
                  <Link href={`/resources/${category.slug}`} className="block group">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-landing-base-darker rounded-lg flex items-center justify-center group-hover:bg-landing-base-secondary transition-colors">
                        <IconComponent className="w-6 h-6 text-landing-muted" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-medium text-landing-headers mb-2 group-hover:text-landing-foreground transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-landing-muted leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>

        {/* Popular Guides */}
        <div className="mb-16">
          <h2 className="text-2xl font-medium text-landing-headers mb-8">Popular Guides</h2>
          <div className="grid grid-cols-1 gap-6">
            {quickLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.title}
                  href={`/resources/guides/${link.slug}`}
                  className="group block p-6 border border-landing-borders rounded-lg hover:border-landing-secondary transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-landing-base-darker rounded-lg flex items-center justify-center group-hover:bg-landing-base-secondary transition-colors">
                      <IconComponent className="w-5 h-5 text-landing-muted" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-landing-headers mb-2 group-hover:text-landing-foreground transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-sm text-landing-muted leading-relaxed">
                        {link.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-8 border-t border-landing-borders">
          <p className="text-landing-muted text-sm">
            Ready to get started? <Link href="/" className="underline hover:no-underline">Return to homepage</Link>
          </p>
        </footer>
      </div>
    </div>
  );
}

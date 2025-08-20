"use client";

import { BookOpen, FileText, Lightbulb, Users } from "lucide-react";
import Link from "next/link";

const resources = [
  {
    id: "blog",
    icon: FileText,
    title: "Blog",
    description: "Latest updates, tips, and productivity insights"
  },
  {
    id: "tutorials",
    icon: Lightbulb,
    title: "Tutorials",
    description: "Step-by-step guides to master your productivity workflow"
  },
];

export const ResourcesDropdown = () => {
  return (
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2 w-107">
      <div className="p-1 bg-landing-base-darker border-2 border-landing-borders/60 rounded-xl shadow-xl">
        <div className="space-y-2">
          {resources.map((resource) => {
            const IconComponent = resource.icon;
            return (
              <Link key={resource.id} href="/resources" className="block">
                <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-landing-borders/30 cursor-pointer group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-landing-borders/50 flex items-center justify-center group-hover:bg-landing-borders/70">
                    <IconComponent className="w-5 h-5 text-landing-muted" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-foreground mb-1 group-hover:text-landing-headers">
                      {resource.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {resource.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

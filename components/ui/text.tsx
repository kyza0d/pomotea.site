// File: components/ui/text.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle" | "body" | "label";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "label";
}

const Text: React.FC<TextProps> = ({
  children,
  className,
  size = "md",
  variant = "body",
  as = "p",
  ...props
}) => {
  const sizeStyles: Record<string, string> = {
    xs: "text-xs leading-4",
    sm: "text-sm leading-5",
    md: "text-base leading-6",
    lg: "text-lg leading-7",
    xl: "text-xl leading-8",
    "2xl": "text-2xl leading-9",
  };

  const variantStyles: Record<string, string> = {
    h1: "font-bold text-3xl leading-10 tracking-tight",
    h2: "font-bold text-2xl leading-9 tracking-tight",
    h3: "font-bold text-xl leading-8 tracking-tight",
    h4: "font-semibold text-lg leading-7 tracking-tight",
    h5: "font-semibold text-base leading-6 tracking-tight",
    h6: "font-semibold text-sm leading-5 tracking-tight",
    subtitle: "font-medium text-lg leading-7 text-muted-foreground",
    body: "font-normal text-base leading-6",
    label: "font-semibold text-sm leading-5 tracking-wide uppercase",
  };

  const baseStyles = "max-w-prose";

  // Use the specified 'as' prop for the HTML element, falling back to variant-to-tag mapping
  const Tag = as ||
    (["h1", "h2", "h3", "h4", "h5", "h6"].includes(variant) ? variant : "p");

  const classes = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  return React.createElement(Tag, { className: classes, ...props }, children);
};

export { Text };

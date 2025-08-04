// File: components/ui/text.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  variant?: "header" | "subtitle" | "label" | "body" | "default";
  style?: React.CSSProperties;
}

const Text: React.FC<TextProps> = ({ children, className, size = "md", variant = "default", style, ...props }) => {

  const sizeClass = `custom-text-${size}`;

  const variantMap = {
    header: "h1",
    subtitle: "h2",
    label: "label",
    default: "p",
  };

  const variantStyles: { [key: string]: string } = {
    header: "font-semibold text-theme-header",
    subtitle: "font-medium text-theme-subtitle",
    label: "font-semibold tracking-[0.015em]",
    body: "default-text",
    default: "default-text",
  };

  const variantClass = variantStyles[variant] || "default";

  const tag = variantMap[variant] || variantMap["default"];

  return React.createElement(
    tag,
    {
      className: cn(sizeClass, className, "max-w-[50ch]", variantClass),
      style,
      ...props,
    },
    children
  );
};

export { Text };

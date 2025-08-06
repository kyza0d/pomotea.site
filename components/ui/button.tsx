import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center rounded-xl focus:border focus:border-theme-accent ease-in-out focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-theme-800 text-theme-200",
        primary: "bg-landing-primary text-white hover:bg-theme-accent-darker focus:ring-theme-accent",
        ghost: "bg-transparent hover:bg-theme-base dark:hover:bg-theme-800 focus:ring-theme-500",
        outline: "border-2 border-theme-border/70 text-theme-foreground hover:bg-theme-border/60 hover:text-theme-header focus:ring-theme-accent font-medium tracking-[0.015em]",
      },
      size: {
        default: "h-10 px-4 py-2 text-sm",
        sm: "h-9 px-3 text-xs ",
        lg: "h-11 px-8 text-base",
        icon: "h-10 w-10 ",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }

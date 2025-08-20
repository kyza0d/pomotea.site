import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex border-file:text-theme-foreground focus-visible:outline-none focus-visible:border-landing-borders bg-landing-base-darker rounded-lg p-2.5 px-4 text-sm file:hover:cursor-pointer file:hover:text-landing-base file:px-4 file:py-2 file:mr-4 file:rounded-md file:border-none file:bg-landing-base file:text-sm file:font-medium placeholder-landing-muted/70 disabled:cursor-not-allowed disabled:opacity-50 border-2 border-landing-borders/60 file:ring-1 file:-ring-offset-1 file:ring-landing-borders file:hover:bg-landing-accent file:transition-colors file:duration-200",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }

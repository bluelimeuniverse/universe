import * as React from "react"
import { Slot } from "@radix-ui/react-slot" // Ops, we don't have radix installed probably. Let's make it standard HTML button for now.

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
    size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
        // Basic Tailwind mapping based on Shadcn
        const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

        let variantStyles = ""
        switch (variant) {
            case "default": variantStyles = "bg-primary text-primary-foreground hover:bg-primary/90"; break;
            case "outline": variantStyles = "border border-input bg-background hover:bg-accent hover:text-accent-foreground"; break;
            case "ghost": variantStyles = "hover:bg-accent hover:text-accent-foreground"; break;
            case "link": variantStyles = "text-primary underline-offset-4 hover:underline"; break;
            // fallback
            default: variantStyles = "bg-blue-600 text-white hover:bg-blue-700"; break;
        }

        // Overriding defaults for the specific design requested
        if (variant === 'outline') variantStyles = "border border-white/20 bg-transparent hover:bg-white/10 text-white";
        if (variant === 'link') variantStyles = "text-blue-400 underline-offset-4 hover:underline";

        let sizeStyles = "h-10 px-4 py-2"
        if (size === 'lg') sizeStyles = "h-11 rounded-md px-8"

        const combinedClassName = `${baseStyles} ${variantStyles} ${sizeStyles} ${className || ""}`

        return (
            <button
                className={combinedClassName}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }

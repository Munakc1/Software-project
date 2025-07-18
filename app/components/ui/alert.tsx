"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { AlertCircle, CheckCircle, Bell, Stethoscope, Syringe } from "lucide-react"

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid grid-cols-[auto_1fr] gap-3 items-start",
  {
    variants: {
      variant: {
        default: "bg-white border-[#CDEDDB] text-gray-800",
        success: "bg-green-50 border-green-200 text-green-800 [&>svg]:text-green-500",
        warning: "bg-yellow-50 border-yellow-200 text-yellow-800 [&>svg]:text-yellow-500",
        error: "bg-red-50 border-red-200 text-red-800 [&>svg]:text-red-500",
        medical: "bg-[#CDEDDB] border-[#808000] text-[#808000] [&>svg]:text-[#808000]",
        vaccine: "bg-blue-50 border-blue-200 text-blue-800 [&>svg]:text-blue-500"
      },
      size: {
        sm: "text-xs py-2",
        md: "text-sm py-3",
        lg: "text-base py-4"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
)

interface AlertProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  icon?: React.ReactNode
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, size, icon, children, ...props }, ref) => {
    
    const defaultIcons = {
      default: <Bell className="h-4 w-4" />,
      success: <CheckCircle className="h-4 w-4" />,
      warning: <AlertCircle className="h-4 w-4" />,
      error: <AlertCircle className="h-4 w-4" />,
      medical: <Stethoscope className="h-4 w-4" />,
      vaccine: <Syringe className="h-4 w-4" />
    }

    const alertIcon = icon || defaultIcons[variant || "default"]

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant, size }), className)}
        {...props}
      >
        {alertIcon}
        <div className="space-y-1">
          {children}
        </div>
      </div>
    )
  }
)
Alert.displayName = "Alert"

interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const AlertTitle = React.forwardRef<HTMLHeadingElement, AlertTitleProps>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn("font-medium leading-none tracking-tight", className)}
      {...props}
    />
  )
)
AlertTitle.displayName = "AlertTitle"

interface AlertDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const AlertDescription = React.forwardRef<HTMLParagraphElement, AlertDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm [&_p]:leading-relaxed", className)}
      {...props}
    />
  )
)
AlertDescription.displayName = "AlertDescription"

export { 
  Alert,
  AlertTitle,
  AlertDescription,
  AlertCircle,
  CheckCircle,
  Bell,
  Stethoscope,
  Syringe 
}
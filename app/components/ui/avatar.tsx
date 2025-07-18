"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {
    size?: "sm" | "md" | "lg" | "xl"
    status?: "online" | "offline" | "busy" | "medical" | null
  }
>(({ className, size = "md", status = null, ...props }, ref) => (
  <div className="relative inline-block">
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex shrink-0 overflow-hidden rounded-full",
        {
          "h-8 w-8": size === "sm",
          "h-10 w-10": size === "md",
          "h-12 w-12": size === "lg",
          "h-16 w-16": size === "xl",
        },
        className
      )}
      {...props}
    />
    {status && (
      <span
        className={cn(
          "absolute bottom-0 right-0 block rounded-full border-2 border-white",
          {
            "h-2 w-2": size === "sm",
            "h-2.5 w-2.5": size === "md",
            "h-3 w-3": size === "lg",
            "h-3.5 w-3.5": size === "xl",
          },
          {
            "bg-green-500": status === "online",
            "bg-gray-400": status === "offline",
            "bg-yellow-500": status === "busy",
            "bg-[#808000]": status === "medical", // Olive color for medical status
          }
        )}
      />
    )}
  </div>
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full object-cover", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-[#CDEDDB] text-[#808000] font-medium",
      className
    )}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

export { Avatar, AvatarImage, AvatarFallback }
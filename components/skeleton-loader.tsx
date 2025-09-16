"use client"

import { motion } from "framer-motion"

interface SkeletonProps {
  className?: string
  variant?: "text" | "circular" | "rectangular"
  width?: string | number
  height?: string | number
}

export function Skeleton({ className = "", variant = "rectangular", width = "100%", height = "1rem" }: SkeletonProps) {
  const baseClasses = "animate-pulse bg-muted rounded"

  const variantClasses = {
    text: "h-4 w-full",
    circular: "rounded-full",
    rectangular: "rounded",
  }

  const style = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
  }

  return (
    <motion.div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={style}
      initial={{ opacity: 0.6 }}
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
    />
  )
}

export function SkeletonCard() {
  return (
    <div className="p-6 border border-border rounded-lg bg-card">
      <div className="flex items-center space-x-4 mb-4">
        <Skeleton variant="circular" width={40} height={40} />
        <div className="space-y-2 flex-1">
          <Skeleton height="1rem" width="60%" />
          <Skeleton height="0.75rem" width="40%" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton height="0.75rem" />
        <Skeleton height="0.75rem" />
        <Skeleton height="0.75rem" width="80%" />
      </div>
    </div>
  )
}

export function SkeletonProject() {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <Skeleton height="200px" className="rounded-none" />
      <div className="p-6 space-y-4">
        <Skeleton height="1.5rem" width="70%" />
        <div className="space-y-2">
          <Skeleton height="0.875rem" />
          <Skeleton height="0.875rem" width="90%" />
        </div>
        <div className="flex gap-2">
          <Skeleton height="1.5rem" width="60px" className="rounded-full" />
          <Skeleton height="1.5rem" width="80px" className="rounded-full" />
          <Skeleton height="1.5rem" width="70px" className="rounded-full" />
        </div>
      </div>
    </div>
  )
}

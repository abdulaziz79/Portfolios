"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Skeleton, SkeletonCard } from "@/components/skeleton-loader"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Skeleton width="40px" height="24px" />
            <div className="hidden md:flex space-x-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} width="60px" height="16px" />
              ))}
            </div>
            <div className="flex space-x-4">
              <Skeleton variant="circular" width="40px" height="40px" />
              <Skeleton variant="circular" width="40px" height="40px" className="md:hidden" />
            </div>
          </div>
        </div>

        <div className="pt-16 container mx-auto px-4 space-y-16">
          {/* Hero skeleton */}
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center space-y-6">
              <Skeleton height="4rem" width="400px" className="mx-auto" />
              <Skeleton height="1.5rem" width="600px" className="mx-auto" />
              <div className="flex gap-4 justify-center">
                <Skeleton height="3rem" width="150px" className="rounded-full" />
                <Skeleton height="3rem" width="150px" className="rounded-full" />
              </div>
            </div>
          </div>

          {/* Content skeletons */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

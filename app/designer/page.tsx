"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Palette, Layers, Sparkles, Brush, Monitor, Smartphone } from "lucide-react"
import Link from "next/link"

export default function DesignerPage() {
  const features = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Creative Showcase",
      description: "Display your design process, concepts, and final creations beautifully",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Multi-Format Support",
      description: "Showcase graphics, UI/UX designs, branding, and digital art",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Interactive Elements",
      description: "Engaging hover effects and smooth animations for your work",
    },
    {
      icon: <Brush className="w-6 h-6" />,
      title: "Brand Identity",
      description: "Reflect your unique design style and creative personality",
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Case Studies",
      description: "Tell the story behind your designs with detailed project breakdowns",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Optimized",
      description: "Perfect viewing experience across all devices and screen sizes",
    },
  ]

  const designTypes = [
    "UI/UX Design",
    "Graphic Design",
    "Brand Identity",
    "Web Design",
    "Logo Design",
    "Print Design",
    "Digital Art",
    "Illustration",
    "Motion Graphics",
    "Package Design",
    "Typography",
    "App Design",
    "Social Media Design",
    "Marketing Materials",
    "Editorial Design",
    "3D Design",
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-indigo-900/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link href="/categories">
            <Button variant="ghost" className="mb-6 glass-effect hover:scale-105 transition-all duration-300">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Categories
            </Button>
          </Link>

          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6 text-sm font-medium"
            >
              <Palette className="w-4 h-4 text-purple-400" />
              <span>Design Portfolio</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Express Your{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Creative Genius
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
              Build a stunning design portfolio that showcases your creativity, process, and professional work. Perfect
              for UI/UX designers, graphic designers, and creative professionals.
            </p>

            <Link href="/templates/designer">
              <Button size="lg" className="animate-glow hover:scale-105 transition-all duration-300 px-8 py-6 text-lg">
                <Brush className="w-5 h-5 mr-2" />
                Choose Template
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
            >
              <Card className="p-6 glass-effect hover:scale-105 transition-all duration-300 border-purple-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">{feature.icon}</div>
                  <h3 className="font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Design Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold mb-6">Perfect for All Design Disciplines</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {designTypes.map((type, index) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.05, duration: 0.4 }}
              >
                <Badge
                  variant="secondary"
                  className="glass-effect hover:scale-110 transition-all duration-300 bg-purple-500/10 text-purple-300 border-purple-500/30"
                >
                  {type}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
}

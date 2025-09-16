"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Camera, ImageIcon, Palette, Eye, Aperture, Film } from "lucide-react"
import Link from "next/link"

export default function PhotographerPage() {
  const features = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Stunning Gallery",
      description: "Beautiful image galleries with lightbox effects and smooth transitions",
    },
    {
      icon: <ImageIcon className="w-6 h-6" />,
      title: "High-Quality Display",
      description: "Optimized for high-resolution images and retina displays",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Visual Storytelling",
      description: "Showcase your artistic vision and creative process",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Client Focused",
      description: "Designed to attract and convert potential clients",
    },
    {
      icon: <Aperture className="w-6 h-6" />,
      title: "Portfolio Categories",
      description: "Organize work by wedding, portrait, landscape, and more",
    },
    {
      icon: <Film className="w-6 h-6" />,
      title: "Video Integration",
      description: "Seamlessly integrate video content and reels",
    },
  ]

  const categories = [
    "Wedding Photography",
    "Portrait Photography",
    "Landscape Photography",
    "Street Photography",
    "Fashion Photography",
    "Product Photography",
    "Event Photography",
    "Nature Photography",
    "Architecture Photography",
    "Fine Art Photography",
    "Commercial Photography",
    "Travel Photography",
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-900/20 via-purple-900/20 to-orange-900/20">
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
              <Camera className="w-4 h-4 text-pink-400" />
              <span>Photography Portfolio</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Capture Your{" "}
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                Creative Vision
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
              Create a breathtaking photography portfolio that showcases your artistic eye and professional work.
              Perfect for wedding, portrait, landscape, and commercial photographers.
            </p>

            <Link href="/templates/photographer">
              <Button size="lg" className="animate-glow hover:scale-105 transition-all duration-300 px-8 py-6 text-lg">
                <Camera className="w-5 h-5 mr-2" />
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
              <Card className="p-6 glass-effect hover:scale-105 transition-all duration-300 border-pink-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-pink-500/20 text-pink-400">{feature.icon}</div>
                  <h3 className="font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Photography Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold mb-6">Perfect for All Photography Styles</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.05, duration: 0.4 }}
              >
                <Badge
                  variant="secondary"
                  className="glass-effect hover:scale-110 transition-all duration-300 bg-pink-500/10 text-pink-300 border-pink-500/30"
                >
                  {category}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
}

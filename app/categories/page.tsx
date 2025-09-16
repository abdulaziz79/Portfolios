"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Code,
  Camera,
  Palette,
  PenTool,
  Brush,
  Video,
  Music,
  Briefcase,
  Megaphone,
  ChefHat,
  Stethoscope,
} from "lucide-react"
import Link from "next/link"

const categories = [
  {
    id: "web-developer",
    name: "Web Developer",
    description: "Showcase your coding projects and technical skills",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    templateCount: 12,
    popular: true,
  },
  {
    id: "photographer",
    name: "Photographer",
    description: "Display your stunning photography portfolio",
    icon: Camera,
    color: "from-purple-500 to-pink-500",
    templateCount: 8,
    popular: true,
  },
  {
    id: "designer",
    name: "Designer",
    description: "Present your creative design work beautifully",
    icon: Palette,
    color: "from-orange-500 to-red-500",
    templateCount: 10,
    popular: true,
  },
  {
    id: "writer",
    name: "Writer",
    description: "Share your articles, stories, and written work",
    icon: PenTool,
    color: "from-green-500 to-emerald-500",
    templateCount: 6,
    popular: false,
  },
  {
    id: "artist",
    name: "Artist",
    description: "Exhibit your artwork and creative expressions",
    icon: Brush,
    color: "from-indigo-500 to-purple-500",
    templateCount: 9,
    popular: false,
  },
  {
    id: "videographer",
    name: "Videographer",
    description: "Showcase your video production and cinematography",
    icon: Video,
    color: "from-teal-500 to-blue-500",
    templateCount: 7,
    popular: false,
  },
  {
    id: "musician",
    name: "Musician",
    description: "Present your music, albums, and performances",
    icon: Music,
    color: "from-pink-500 to-rose-500",
    templateCount: 5,
    popular: false,
  },
  {
    id: "business",
    name: "Business Professional",
    description: "Create a professional business presence",
    icon: Briefcase,
    color: "from-slate-500 to-gray-500",
    templateCount: 8,
    popular: false,
  },
  {
    id: "marketer",
    name: "Digital Marketer",
    description: "Highlight your marketing campaigns and results",
    icon: Megaphone,
    color: "from-yellow-500 to-orange-500",
    templateCount: 6,
    popular: false,
  },
  {
    id: "chef",
    name: "Chef",
    description: "Display your culinary creations and recipes",
    icon: ChefHat,
    color: "from-amber-500 to-yellow-500",
    templateCount: 4,
    popular: false,
  },
  {
    id: "healthcare",
    name: "Healthcare Professional",
    description: "Build trust with your medical expertise",
    icon: Stethoscope,
    color: "from-emerald-500 to-teal-500",
    templateCount: 5,
    popular: false,
  },
  {
    id: "restaurant",
    name: "Restaurant",
    description: "Showcase your menu, ambiance, and culinary excellence",
    icon: ChefHat,
    color: "from-orange-500 to-amber-500",
    templateCount: 6,
    popular: true,
  },
]

export default function CategoriesPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link href="/">
            <Button variant="ghost" className="mb-6 glass-effect hover:scale-105 transition-all duration-300">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Profession
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Select your profession to see templates designed specifically for your industry and showcase your work
              perfectly.
            </p>
          </div>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Link href={`/templates/${category.id}`}>
                  <Card className="group relative overflow-hidden glass-effect hover:scale-105 transition-all duration-300 cursor-pointer h-full">
                    {/* Gradient background overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />

                    {/* Popular badge */}
                    {category.popular && (
                      <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground animate-glow">
                        Popular
                      </Badge>
                    )}

                    <div className="p-6 relative z-10">
                      {/* Icon */}
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="w-full h-full text-white" />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{category.description}</p>

                      {/* Template count */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{category.templateCount} templates</span>
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                          <ArrowLeft className="w-3 h-3 rotate-180" />
                        </div>
                      </div>
                    </div>

                    {/* Hover glow effect */}
                    <div
                      className={`absolute inset-0 rounded-lg bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`}
                    />
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Don't see your profession? We're constantly adding new categories.
          </p>
          <Button variant="outline" className="glass-effect hover:scale-105 transition-all duration-300 bg-transparent">
            Request New Category
          </Button>
        </motion.div>
      </div>
    </main>
  )
}

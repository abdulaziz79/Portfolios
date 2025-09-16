"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Eye, Heart, Star } from "lucide-react"

const templates = [
  {
    id: 1,
    name: "Neon Developer",
    category: "Web Developer",
    image: "/futuristic-developer-portfolio-with-neon-accents.png",
    likes: 1247,
    views: 8934,
    rating: 4.9,
    featured: true,
  },
  {
    id: 2,
    name: "Glass Photographer",
    category: "Photographer",
    image: "/glassmorphism-photography-portfolio-with-elegant-l.png",
    likes: 892,
    views: 5621,
    rating: 4.8,
    featured: false,
  },
  {
    id: 3,
    name: "Cyber Designer",
    category: "Designer",
    image: "/cyberpunk-design-portfolio-with-purple-gradients.png",
    likes: 1456,
    views: 12043,
    rating: 4.9,
    featured: true,
  },
  {
    id: 4,
    name: "Minimal Artist",
    category: "Artist",
    image: "/minimal-artist-portfolio-with-clean-layout.png",
    likes: 734,
    views: 4287,
    rating: 4.7,
    featured: false,
  },
]

export function TemplateCarousel() {
  return (
    <section className="py-24 px-4 theme-transition">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Choose from{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Premium Templates
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Professionally designed templates for every profession, ready to customize and deploy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="group relative overflow-hidden glass-effect hover:scale-105 transition-all duration-300 cursor-pointer theme-transition">
                <div className="relative">
                  <img
                    src={template.image || "/placeholder.svg"}
                    alt={template.name}
                    className="w-full h-48 object-cover"
                  />
                  {template.featured && (
                    <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">Featured</Badge>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-between text-white text-sm">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {template.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {template.views}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        {template.rating}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{template.name}</h3>
                  <p className="text-muted-foreground text-sm">{template.category}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

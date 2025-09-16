"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Star, Users, Clock, ExternalLink } from "lucide-react"
import Link from "next/link"

const templates = [
  {
    id: "modern-restaurant",
    name: "Modern Bistro",
    description: "Clean, contemporary design perfect for upscale dining establishments",
    image: "/modern-design-portfolio-creative-studio.png",
    features: ["Interactive Menu", "Reservation System", "Gallery Showcase", "Contact Forms"],
    difficulty: "Beginner",
    rating: 4.9,
    users: "2.1k",
    buildTime: "15 min",
    category: "Modern",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "elegant-restaurant",
    name: "Elegant Fine Dining",
    description: "Sophisticated design with luxury aesthetics for high-end restaurants",
    image: "/glassmorphism-photography-portfolio-with-elegant-l.png",
    features: ["Premium Menu Display", "Chef's Story", "Wine Pairing", "Event Booking"],
    difficulty: "Intermediate",
    rating: 4.8,
    users: "1.8k",
    buildTime: "20 min",
    category: "Luxury",
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "rustic-restaurant",
    name: "Rustic Tavern",
    description: "Warm, cozy design perfect for family restaurants and local eateries",
    image: "/cyberpunk-design-portfolio-with-purple-gradients.png",
    features: ["Family Menu", "Story Section", "Local Ingredients", "Community Events"],
    difficulty: "Beginner",
    rating: 4.7,
    users: "1.5k",
    buildTime: "12 min",
    category: "Cozy",
    color: "from-amber-600 to-yellow-500",
  },
  {
    id: "fast-casual",
    name: "Fast Casual",
    description: "Quick, vibrant design for fast-casual and takeout restaurants",
    image: "/futuristic-developer-portfolio-with-neon-accents.png",
    features: ["Quick Order Menu", "Delivery Info", "Nutritional Facts", "Mobile Optimized"],
    difficulty: "Beginner",
    rating: 4.6,
    users: "2.3k",
    buildTime: "10 min",
    category: "Casual",
    color: "from-green-500 to-teal-500",
  },
  {
    id: "cafe-restaurant",
    name: "Cozy Café",
    description: "Warm, inviting design perfect for cafés and coffee shops",
    image: "/minimal-developer-portfolio-clean-layout.png",
    features: ["Coffee Menu", "Daily Specials", "Atmosphere Gallery", "WiFi Info"],
    difficulty: "Beginner",
    rating: 4.8,
    users: "1.9k",
    buildTime: "8 min",
    category: "Café",
    color: "from-brown-500 to-amber-500",
  },
  {
    id: "food-truck",
    name: "Food Truck",
    description: "Mobile-first design for food trucks and street food vendors",
    image: "/cyberpunk-tech-portfolio-with-animations.png",
    features: ["Location Tracker", "Simple Menu", "Social Media", "Contact Info"],
    difficulty: "Beginner",
    rating: 4.5,
    users: "1.2k",
    buildTime: "6 min",
    category: "Mobile",
    color: "from-red-500 to-pink-500",
  },
]

const categories = ["All", "Modern", "Luxury", "Cozy", "Casual", "Café", "Mobile"]

export default function RestaurantTemplatesPage() {
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
          <Link href="/categories">
            <Button variant="ghost" className="mb-6 glass-effect hover:scale-105 transition-all duration-300">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Categories
            </Button>
          </Link>

          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Restaurant{" "}
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 bg-clip-text text-transparent">
                Templates
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Showcase your culinary excellence with stunning restaurant templates. From fine dining to casual eateries,
              find the perfect design for your establishment.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="glass-effect"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="group overflow-hidden glass-effect hover:scale-105 transition-all duration-300 cursor-pointer">
                {/* Template Preview */}
                <div className="relative">
                  <img
                    src={template.image || "/placeholder.svg"}
                    alt={template.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Overlay Buttons */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <Link href={`/customize/${template.id}`} className="flex-1">
                        <Button size="sm" className="w-full bg-white/90 text-gray-900 hover:bg-white">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Customize
                        </Button>
                      </Link>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                      >
                        Preview
                      </Button>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <Badge className={`absolute top-4 right-4 bg-gradient-to-r ${template.color} text-white border-0`}>
                    {template.category}
                  </Badge>
                </div>

                {/* Template Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-accent transition-colors duration-300">
                      {template.name}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {template.difficulty}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{template.description}</p>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {template.features.slice(0, 2).map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {template.features.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{template.features.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span>{template.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>{template.users}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{template.buildTime}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Need a custom restaurant template? We can create something unique for your brand.
          </p>
          <Button variant="outline" className="glass-effect hover:scale-105 transition-all duration-300 bg-transparent">
            Request Custom Template
          </Button>
        </motion.div>
      </div>
    </main>
  )
}

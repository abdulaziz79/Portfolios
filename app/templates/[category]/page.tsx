"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search, Star, Heart, Eye, Zap, Filter } from "lucide-react";
import Link from "next/link";
import { useState, useMemo } from "react";
import { useParams } from "next/navigation";

const templateData = {
  "web-developer": [
    {
      id: "premium-dev",
      name: "Premium Developer",
      style: "Futuristic",
      image: "/futuristic-developer-portfolio-with-premium-accents.png",
      previewUrl: "/preview/premium-dev",
      rating: 4.9,
      likes: 1247,
      views: 8934,
      featured: true,
      tags: ["Dark", "premium", "Modern", "Interactive"],
      description:
        "A cutting-edge portfolio with premium accents and dark theme",
    },
    {
      id: "neon-dev",
      name: "Neon Developer",
      style: "Futuristic",
      image: "/futuristic-developer-portfolio-with-neon-accents.png",
      previewUrl: "/preview/neon-dev",
      rating: 4.9,
      likes: 1247,
      views: 8934,
      featured: true,
      tags: ["Dark", "Neon", "Modern", "Interactive"],
      description: "A cutting-edge portfolio with neon accents and dark theme",
    },
    {
      id: "new-dev",
      name: "New Developer",
      style: "Futuristic",
      image: "/futuristic-developer-portfolio-with-new-accents.png",
      previewUrl: "/preview/new-dev",
      rating: 4.9,
      likes: 1247,
      views: 8934,
      featured: true,
      tags: ["Dark", "new", "Modern", "Interactive"],
      description: "A cutting-edge portfolio with new accents and dark theme",
    },
    {
      id: "minimal-code",
      name: "Minimal Code",
      style: "Minimal",
      image: "/minimal-developer-portfolio-clean-layout.png",
      previewUrl: "/preview/minimal-code",
      rating: 4.8,
      likes: 892,
      views: 5621,
      featured: false,
      tags: ["Light", "Clean", "Simple", "Professional"],
      description: "Clean and professional layout focusing on your code",
    },
    {
      id: "cyber-tech",
      name: "Cyber Tech",
      style: "Bold",
      image: "/cyberpunk-tech-portfolio-with-animations.png",
      previewUrl: "/preview/cyber-tech",
      rating: 4.9,
      likes: 1456,
      views: 12043,
      featured: true,
      tags: ["Cyberpunk", "Animated", "Bold", "Tech"],
      description: "Bold cyberpunk design with smooth animations",
    },
    {
      id: "glass-dev",
      name: "Glass Developer",
      style: "Modern",
      image: "/glassmorphism-developer-portfolio-modern.png",
      previewUrl: "/preview/glass-dev",
      rating: 4.7,
      likes: 734,
      views: 4287,
      featured: false,
      tags: ["Glassmorphism", "Modern", "Elegant", "Responsive"],
      description: "Modern glassmorphism design with elegant transitions",
    },
  ],
  photographer: [
    {
      id: "glass-photo",
      name: "Glass Photographer",
      style: "Modern",
      image: "/glassmorphism-photography-portfolio-with-elegant-l.png",
      previewUrl: "/preview/glass-photo",
      rating: 4.8,
      likes: 892,
      views: 5621,
      featured: true,
      tags: ["Glassmorphism", "Gallery", "Elegant", "Responsive"],
      description: "Elegant glassmorphism design perfect for showcasing photos",
    },
    {
      id: "minimal-gallery",
      name: "Minimal Gallery",
      style: "Minimal",
      image: "/minimal-photography-portfolio-gallery.png",
      previewUrl: "/preview/minimal-gallery",
      rating: 4.7,
      likes: 645,
      views: 3892,
      featured: false,
      tags: ["Minimal", "Gallery", "Clean", "Focus"],
      description: "Clean minimal design that puts your photos first",
    },
    {
      id: "dark-lens",
      name: "Dark Lens",
      style: "Bold",
      image: "/dark-photography-portfolio-dramatic.png",
      previewUrl: "/preview/dark-lens",
      rating: 4.9,
      likes: 1123,
      views: 7456,
      featured: true,
      tags: ["Dark", "Dramatic", "Professional", "Gallery"],
      description: "Dramatic dark theme perfect for professional photography",
    },
  ],
  designer: [
    {
      id: "cyber-design",
      name: "Cyber Designer",
      style: "Futuristic",
      image: "/cyberpunk-design-portfolio-with-purple-gradients.png",
      previewUrl: "/preview/cyber-design",
      rating: 4.9,
      likes: 1456,
      views: 12043,
      featured: true,
      tags: ["Cyberpunk", "Purple", "Gradients", "Creative"],
      description: "Futuristic cyberpunk design with stunning purple gradients",
    },
    {
      id: "creative-studio",
      name: "Creative Studio",
      style: "Modern",
      image: "/modern-design-portfolio-creative-studio.png",
      previewUrl: "/preview/creative-studio",
      rating: 4.8,
      likes: 987,
      views: 6234,
      featured: false,
      tags: ["Modern", "Creative", "Colorful", "Interactive"],
      description: "Modern creative studio layout with interactive elements",
    },
  ],
};

const categoryNames = {
  "web-developer": "Web Developer",
  photographer: "Photographer",
  designer: "Designer",
  writer: "Writer",
  artist: "Artist",
  videographer: "Videographer",
  musician: "Musician",
  business: "Business Professional",
  marketer: "Digital Marketer",
  chef: "Chef",
  healthcare: "Healthcare Professional",
};

const styleFilters = ["All", "Modern", "Minimal", "Futuristic", "Bold"];

export default function TemplateGalleryPage() {
  const params = useParams();
  const category = params.category as string;
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("All");
  const [hoveredTemplate, setHoveredTemplate] = useState<string | null>(null);

  const templates = templateData[category as keyof typeof templateData] || [];
  const categoryName =
    categoryNames[category as keyof typeof categoryNames] || "Templates";

  const filteredTemplates = useMemo(() => {
    return templates.filter((template) => {
      const matchesSearch =
        template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      const matchesStyle =
        selectedStyle === "All" || template.style === selectedStyle;
      return matchesSearch && matchesStyle;
    });
  }, [templates, searchQuery, selectedStyle]);

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
            <Button
              variant="ghost"
              className="mb-6 glass-effect hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Categories
            </Button>
          </Link>

          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              {categoryName}{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Templates
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Choose from professionally designed templates crafted specifically
              for {categoryName.toLowerCase()}s.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between max-w-4xl mx-auto">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 glass-effect"
              />
            </div>

            <div className="flex gap-2 flex-wrap">
              {styleFilters.map((style) => (
                <Button
                  key={style}
                  variant={selectedStyle === style ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedStyle(style)}
                  className="glass-effect hover:scale-105 transition-all duration-300"
                >
                  {style}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              // transition={{ delay: index * 0.1, duration: 0.6 }}
              onHoverStart={() => setHoveredTemplate(template.id)}
              onHoverEnd={() => setHoveredTemplate(null)}
            >
              <Card className="group relative overflow-hidden glass-effect cursor-pointer">
                {/* Template Preview */}
                <div className="relative">
                  <img
                    src={template.image || "/placeholder.svg"}
                    alt={template.name}
                    className="w-full h-64 object-cover"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Featured badge */}
                  {template.featured && (
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground animate-glow">
                      Featured
                    </Badge>
                  )}

                  {/* Style badge */}
                  <Badge
                    variant="outline"
                    className="absolute top-4 right-4 glass-effect"
                  >
                    {template.style}
                  </Badge>

                  {/* Hover content */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white">
                      <Link
                        href={`/customize/${template.id}`}
                        className="flex-1"
                      >
                        <Button
                          size="lg"
                          className="mb-4 animate-glow cursor-pointer"
                        >
                          <Zap className="w-4 h-4 mr-2" />
                          Use This Template
                        </Button>
                      </Link>
                      <div className="flex items-center justify-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {template.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {template.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          {template.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Template Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                    {template.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {template.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {template.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2">
                    <Link href={`/customize/${template.id}`} className="flex-1">
                      <Button className="w-full group-hover:animate-glow transition-all duration-300 cursor-pointer">
                        Customize
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      size="icon"
                      className="glass-effect bg-transparent"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300 -z-10" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Empty state */}
        {filteredTemplates.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <Filter className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">No templates found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or filter criteria.
            </p>
            <Button
              onClick={() => {
                setSearchQuery("");
                setSelectedStyle("All");
              }}
            >
              Clear Filters
            </Button>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Can't find the perfect template? We're constantly adding new
            designs.
          </p>
          <Button
            variant="outline"
            className="glass-effect hover:scale-105 transition-all duration-300 bg-transparent"
          >
            Request Custom Template
          </Button>
        </motion.div>
      </div>
    </main>
  );
}

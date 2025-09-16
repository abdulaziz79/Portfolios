"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Code, Rocket, Zap, Globe, Database, Server } from "lucide-react"
import Link from "next/link"

export default function WebDeveloperPage() {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Modern Tech Stack",
      description: "Built with React, Next.js, TypeScript, and cutting-edge technologies",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Performance Optimized",
      description: "Lightning-fast loading times and smooth user experiences",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Responsive Design",
      description: "Perfect on desktop, tablet, and mobile devices",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Full-Stack Ready",
      description: "Showcase both frontend and backend development skills",
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "API Integration",
      description: "Display your experience with REST APIs and GraphQL",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Interactive Elements",
      description: "Engaging animations and interactive components",
    },
  ]

  const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "JavaScript",
    "Vue.js",
    "Angular",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Docker",
    "GraphQL",
    "REST APIs",
    "Git",
    "CI/CD",
    "Testing",
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20">
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
              <Code className="w-4 h-4 text-blue-400" />
              <span>Web Developer Portfolio</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Showcase Your{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Development Skills
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
              Create a stunning portfolio that highlights your coding expertise, projects, and technical achievements.
              Perfect for frontend, backend, and full-stack developers.
            </p>

            <Link href="/templates/web-developer">
              <Button size="lg" className="animate-glow hover:scale-105 transition-all duration-300 px-8 py-6 text-lg">
                <Rocket className="w-5 h-5 mr-2" />
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
              <Card className="p-6 glass-effect hover:scale-105 transition-all duration-300 border-blue-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">{feature.icon}</div>
                  <h3 className="font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold mb-6">Perfect for These Technologies</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.05, duration: 0.4 }}
              >
                <Badge
                  variant="secondary"
                  className="glass-effect hover:scale-110 transition-all duration-300 bg-blue-500/10 text-blue-300 border-blue-500/30"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
}

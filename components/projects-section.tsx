"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export function ProjectsSection() {
  const projects = [
    {
      title: "Takyeem",
      description:
        "A SaaS platform for managing assessments with multi-role access. Features include assessment builder, live assessments, integrations, chatbot support, automated reporting, and more. Currently collaborating on development while preparing to take on project management responsibilities as the platform nears launch.",
      image: "/takyeem.png",
      tech: ["Next.js", "TypeScript", "Prisma", "Supabase"],
      github: "#",
      status: "In Progress",
      demo: "#",
    },
    {
      title: "Talent M",
      description:
        "Designed and developed a performance management app covering authentication, goal and task management, collaboration, ratings, and progress tracking. Built from scratch with user roles, notifications, privacy features, and a structured sprint plan to ensure scalable delivery.",
      image: "/talentm.png",
      tech: ["React Native", "Frappe"],
      github: "#",
      status: "In Progress",
      demo: "/",
    },

    {
      title: "Embassy of Lebanon in Saudi Arabia",
      description:
        "Part of the team that worked on the embassy’s official platform, focusing on building and improving web features to support services and information delivery.",
      image: "/embassy.png",
      tech: ["React", "Node.js", "MongoDB"],
      github: "#",
      status: "Launched",
      demo: "https://lebanon.org.sa",
    },
    {
      title: "Phoenix Consulting Website ",
      description:
        "Collaborated in building the company’s portfolio website to showcase services and projects with a modern, responsive design.",
      image: "/phoenix.png",
      tech: ["React", "Typescript", "NodeJs"],
      github: "#",
      status: "Launched",

      demo: "https://phoenix.holdco.tech",
    },
    {
      title: "Monla-LLC",
      description:
        "A dynamic automotive platform developed by a team of 5. Offering a seamless experience for buying car products and accessing reliable vehicle maintenance services. Built with expertise in React and Node.js to ensure optimal performance and user satisfaction.",
      image: "/monla.png",
      tech: ["React", "JavaScript", "NodeJs", "MongoDb", "Express"],
      github: "#",
      status: "Launched",

      demo: "https://monla-llc.vercel.app",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for
            development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-xl min-h-[540px] transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm group flex flex-col">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={400}
                    className="w-full h-56 object-top object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-accent/10 text-primary rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* 🔑 Push buttons to bottom */}
                  <div className="flex gap-2 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full bg-transparent cursor-pointer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        size="sm"
                        className="w-full cursor-pointer"
                        disabled={project.status !== "Launched"}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {project.status === "Launched"
                          ? "Demo"
                          : "To be launched soon"}
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

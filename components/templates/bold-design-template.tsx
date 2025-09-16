"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface PortfolioData {
  name: string;
  title: string;
  about: string;
  email?: string;
  phone?: string;
  location?: string;
  profileImage: string;
  skills: string[];
  experience: Array<{
    id: string;
    company: string;
    position: string;
    duration: string;
    description: string;
  }>;
  projects: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
  }>;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    website?: string;
    [key: string]: string | undefined;
  };

  contact?: {
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
    instagram: string;
    website: string;
  };
}

interface BoldDesignTemplateProps {
  data: PortfolioData;
}

export function BoldDesignTemplate({ data }: BoldDesignTemplateProps) {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-yellow-500/30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-black text-yellow-400"
            >
              {data.name.toUpperCase()}
            </motion.h1>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-white hover:text-yellow-400 transition-colors font-bold"
              >
                ABOUT
              </a>
              <a
                href="#projects"
                className="text-white hover:text-yellow-400 transition-colors font-bold"
              >
                WORK
              </a>
              <a
                href="#experience"
                className="text-white hover:text-yellow-400 transition-colors font-bold"
              >
                EXPERIENCE
              </a>
              <a
                href="#contact"
                className="text-white hover:text-yellow-400 transition-colors font-bold"
              >
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-red-500/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="relative w-40 h-40 mx-auto mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full blur-2xl opacity-50"></div>
                <img
                  src={data.profileImage || "/placeholder.svg"}
                  alt={data.name}
                  className="relative z-10 w-full h-full object-cover rounded-full border-4 border-yellow-400 shadow-2xl"
                />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl lg:text-8xl font-black mb-6"
            >
              <span className="text-white">BOLD</span>
              <br />
              <span className="text-yellow-400">CREATIVE</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              {data.about}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-red-500 text-black font-bold hover:from-yellow-500 hover:to-red-600 transform hover:scale-105 transition-all"
              >
                <Zap className="mr-2 h-5 w-5" />
                SEE MY WORK
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold bg-transparent"
              >
                GET IN TOUCH
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-black text-center mb-16 text-yellow-400"
          >
            SKILLS
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {data.skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-yellow-500/20 to-red-500/20 p-6 rounded-lg text-center hover:scale-110 transition-transform border border-yellow-500/30"
              >
                <p className="font-black text-white text-lg">
                  {skill.toUpperCase()}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-black text-center mb-16 text-yellow-400"
          >
            FEATURED WORK
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            {data.projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <Card className="bg-gray-900 border-2 border-yellow-500/30 hover:border-yellow-400 transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-black text-white mb-2">
                        {project.title.toUpperCase()}
                      </h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-300 mb-4 text-lg">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-red-500/20 text-yellow-400 rounded border border-yellow-500/30 font-bold text-sm"
                        >
                          {tech.toUpperCase()}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {project.liveUrl && (
                        <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          LIVE SITE
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold bg-transparent"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          CODE
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 bg-gradient-to-r from-yellow-500 to-red-500"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-black mb-8 text-black"
          >
            LET'S CREATE SOMETHING BOLD
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-black/80 mb-12 font-bold"
          >
            Ready to make a statement? Let's discuss your next big project.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-8">
            <div className="flex items-center gap-3 text-black font-bold">
              <Mail className="h-6 w-6" />
              <span className="text-lg">{data.email}</span>
            </div>
            <div className="flex items-center gap-3 text-black font-bold">
              <Phone className="h-6 w-6" />
              <span className="text-lg">{data.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-black font-bold">
              <MapPin className="h-6 w-6" />
              <span className="text-lg">{data.location}</span>
            </div>
          </div>
          <div className="flex justify-center gap-6">
            {data.socialLinks?.linkedin && (
              <Button
                size="lg"
                className="bg-black text-yellow-400 hover:bg-gray-900 font-bold"
              >
                <Linkedin className="h-6 w-6" />
              </Button>
            )}
            {data.socialLinks?.github && (
              <Button
                size="lg"
                className="bg-black text-yellow-400 hover:bg-gray-900 font-bold"
              >
                <Github className="h-6 w-6" />
              </Button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

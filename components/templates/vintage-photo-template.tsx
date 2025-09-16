"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Twitter,
  Globe,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Camera,
  Film,
  Aperture,
} from "lucide-react";
import { useRef } from "react";

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

interface VintagePhotoTemplateProps {
  data: PortfolioData;
}

export function VintagePhotoTemplate({ data }: VintagePhotoTemplateProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    website: Globe,
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50"
    >
      {/* Vintage Paper Texture Overlay */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #8B4513 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, #A0522D 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px, 30px 30px",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="container mx-auto text-center max-w-6xl">
            <motion.div
              style={{ y }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Vintage Camera Icons */}
              <motion.div
                className="flex justify-center gap-8 mb-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="w-20 h-20 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg flex items-center justify-center shadow-xl border-4 border-amber-200"
                >
                  <Camera className="w-10 h-10 text-white" />
                </motion.div>
                <motion.div
                  animate={{ y: [-8, 8, -8] }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="w-20 h-20 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center shadow-xl border-4 border-orange-200"
                >
                  <Film className="w-10 h-10 text-white" />
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="w-20 h-20 bg-gradient-to-br from-red-600 to-amber-600 rounded-lg flex items-center justify-center shadow-xl border-4 border-red-200"
                >
                  <Aperture className="w-10 h-10 text-white" />
                </motion.div>
              </motion.div>

              {/* Profile Image with Vintage Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mb-8"
              >
                <div className="relative w-56 h-56 mx-auto">
                  {/* Vintage Frame */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 rounded-lg transform rotate-2 shadow-2xl"></div>
                  <div className="absolute inset-2 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-lg transform -rotate-1"></div>
                  <div className="absolute inset-4 bg-white rounded-lg overflow-hidden shadow-inner">
                    <img
                      src={data.profileImage || "/professional-headshot.png"}
                      alt={data.name}
                      className="w-full h-full object-cover sepia-[0.3] contrast-110 brightness-105"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Name and Title with Vintage Typography */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold mb-6 text-amber-900 font-serif"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.1)" }}
              >
                {data.name}
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-2xl md:text-4xl mb-8 text-orange-800 font-serif italic"
              >
                {data.title}
              </motion.h2>

              {/* Decorative Vintage Divider */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex items-center justify-center mb-8"
              >
                <div className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent w-32"></div>
                <div className="mx-4 w-3 h-3 bg-amber-600 rounded-full"></div>
                <div className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent w-32"></div>
              </motion.div>

              {/* Location */}
              {data.location && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="flex items-center justify-center gap-2 mb-12 text-amber-800"
                >
                  <MapPin className="w-5 h-5" />
                  <span className="text-lg font-serif">{data.location}</span>
                </motion.div>
              )}

              {/* Vintage Style Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 text-lg font-serif border-2 border-amber-700 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Commission a Shoot
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-amber-600 text-amber-800 hover:bg-amber-50 px-8 py-4 text-lg font-serif bg-white/80 backdrop-blur-sm"
                >
                  <Download className="w-5 h-5 mr-2" />
                  View Gallery
                </Button>
              </motion.div>

              {/* Social Links with Vintage Style */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                className="flex justify-center gap-6"
              >
                {Object.entries(data.socialLinks ?? {}).map(
                  ([platform, url]) => {
                    if (!url) return null;
                    const Icon =
                      socialIcons[platform as keyof typeof socialIcons];
                    if (!Icon) return null;

                    return (
                      <motion.a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-16 h-16 rounded-lg bg-gradient-to-br from-amber-100 to-orange-100 border-2 border-amber-300 flex items-center justify-center text-amber-800 hover:text-orange-800 transition-colors duration-300 shadow-lg"
                      >
                        <Icon className="w-7 h-7" />
                      </motion.a>
                    );
                  }
                )}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-32 px-4 bg-white/60 backdrop-blur-sm border-y-4 border-amber-200">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-amber-900 font-serif">
                About <span className="text-orange-700 italic">Me</span>
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl text-amber-800 leading-relaxed font-serif">
                  {data.about}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-32 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-amber-900 font-serif">
                <span className="text-orange-700 italic">Portfolio</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, rotate: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="group overflow-hidden bg-white/80 backdrop-blur-sm border-4 border-amber-200 hover:border-orange-300 transition-all duration-300 shadow-xl">
                    <div className="relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-64 object-cover sepia-[0.2] contrast-110 group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex gap-3">
                          {project.liveUrl && (
                            <Button
                              size="sm"
                              className="bg-white/90 text-amber-900 hover:bg-white font-serif"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              View Collection
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50">
                      <h3 className="text-xl font-bold mb-3 text-amber-900 font-serif">
                        {project.title}
                      </h3>
                      <p className="text-amber-800 mb-4 leading-relaxed font-serif">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-amber-200 text-amber-800 border-amber-300 font-serif"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-32 px-4 bg-white/60 backdrop-blur-sm border-y-4 border-amber-200">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-amber-900 font-serif">
                <span className="text-orange-700 italic">Services</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {data.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 text-center bg-gradient-to-br from-amber-100 to-orange-100 border-2 border-amber-300 hover:border-orange-400 hover:shadow-lg transition-all duration-300">
                    <Badge className="w-full py-3 text-base bg-gradient-to-r from-amber-600 to-orange-600 text-white border-0 font-serif">
                      {skill}
                    </Badge>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-32 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-amber-900 font-serif">
                <span className="text-orange-700 italic">Experience</span>
              </h2>
            </motion.div>

            <div className="space-y-8">
              {data.experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-8 bg-gradient-to-br from-amber-50 to-orange-50 border-4 border-amber-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-amber-900 mb-2 font-serif">
                          {exp.position}
                        </h3>
                        <p className="text-xl text-orange-700 font-semibold font-serif italic">
                          {exp.company}
                        </p>
                      </div>
                      <Badge className="bg-gradient-to-r from-amber-600 to-orange-600 text-white border-0 mt-2 md:mt-0 px-4 py-2 font-serif">
                        {exp.duration}
                      </Badge>
                    </div>
                    <p className="text-amber-800 leading-relaxed text-lg font-serif">
                      {exp.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32 px-4 bg-gradient-to-br from-amber-100 to-orange-200 border-t-4 border-amber-300">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-amber-900 font-serif">
                Let's <span className="text-orange-700 italic">Connect</span>
              </h2>
              <p className="text-xl md:text-2xl text-amber-800 mb-12 max-w-3xl mx-auto leading-relaxed font-serif">
                Ready to capture timeless memories? Let's create something
                beautiful together.
              </p>

              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
                {data.email && (
                  <motion.a
                    href={`mailto:${data.email}`}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 text-amber-800 hover:text-orange-800 transition-colors duration-300 text-lg font-serif"
                  >
                    <Mail className="w-6 h-6" />
                    {data.email}
                  </motion.a>
                )}
                {data.phone && (
                  <motion.a
                    href={`tel:${data.phone}`}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 text-amber-800 hover:text-orange-800 transition-colors duration-300 text-lg font-serif"
                  >
                    <Phone className="w-6 h-6" />
                    {data.phone}
                  </motion.a>
                )}
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 text-lg font-serif border-2 border-amber-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Book Your Session
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 bg-amber-900 text-amber-100">
          <div className="container mx-auto text-center">
            <p className="font-serif">
              © 2024 {data.name}. Built with PortfolioForge.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

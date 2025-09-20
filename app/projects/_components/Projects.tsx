"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, Github, ExternalLink, Heart, Star } from "lucide-react";
import Link from "next/link";

// Adapted type from your fetched data
interface Portfolios {
  id: string;
  name: string;
  title: string | null;
  about: string | null;
  profileImage: string | null;
  templateId: string;
  contactInfo?: {
    github?: string;
    website?: string;
  };
  createdAt: string;
  updatedAt: string;
  featured?: boolean;
}

interface PortfolioProps {
  projects: Portfolios[];
}

export default function ProjectsPage({ projects }: PortfolioProps) {
  console.log(projects);
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "featured", label: "Featured" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "ai", label: "AI/ML" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : activeFilter === "featured"
      ? projects.filter((project) => project.featured)
      : projects.filter(
          (project) =>
            project.title?.toLowerCase().includes(activeFilter) ||
            project.about?.toLowerCase().includes(activeFilter)
        );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-pretty">
            A collection of my work showcasing various technologies and
            solutions I've built.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.id
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 dark:text-slate-400">
              No projects found matching this filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Portfolios;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Wrap the whole card with a Link */}
      <Link href={`/portfolio/${project.name}/${project.templateId}`}>
        <div className="relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col">
          <div className="relative overflow-hidden">
            <img
              src={project.profileImage || "/placeholder.png"}
              alt={project.name}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {project.featured && (
              <div className="absolute top-3 left-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                Featured
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Action buttons (stop propagation so they don't trigger link) */}
            <div
              className={`absolute top-3 right-3 flex gap-2 transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              {project.contactInfo?.github && (
                <a
                  href={project.contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 rounded-full text-slate-800 hover:bg-slate-100 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={16} />
                </a>
              )}
              {project.contactInfo?.website && (
                <a
                  href={project.contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 rounded-full text-slate-800 hover:bg-slate-100 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>

          <div className="p-5 flex-grow flex flex-col">
            <h3 className="font-semibold text-lg mb-1 text-slate-800 dark:text-white">
              {project.name}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
              {project.title}
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 flex-grow">
              {project.about}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

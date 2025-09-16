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
  Code,
  Zap,
  Calendar,
  Users,
  Star,
  GitBranch,
  Plus,
  Terminal,
} from "lucide-react";
import { useState, useRef } from "react";

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
    stars?: number;
    forks?: number;
    category?: string;
    status?: "completed" | "in-progress" | "planned";
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

interface NeonDevTemplateProps {
  data: PortfolioData;
}

export default function NewDevTemplate({ data }: NeonDevTemplateProps) {
  const [activeSection, setActiveSection] = useState("projects");
  const [showAddProject, setShowAddProject] = useState(false);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    technologies: "",
    githubUrl: "",
    liveUrl: "",
    category: "Full Stack",
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    website: Globe,
  };

  const addProject = () => {
    if (newProject.title && newProject.description) {
      // This would typically update your data source
      console.log("Adding project:", newProject);
      setNewProject({
        title: "",
        description: "",
        technologies: "",
        githubUrl: "",
        liveUrl: "",
        category: "Full Stack",
      });
      setShowAddProject(false);
    }
  };

  const skillLevels = [
    { name: "JavaScript", level: 95, category: "Frontend" },
    { name: "React", level: 90, category: "Frontend" },
    { name: "Node.js", level: 88, category: "Backend" },
    { name: "Python", level: 85, category: "Backend" },
    { name: "PostgreSQL", level: 82, category: "Database" },
    { name: "Docker", level: 78, category: "DevOps" },
    { name: "AWS", level: 75, category: "Cloud" },
    { name: "GraphQL", level: 70, category: "API" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-60"></div>
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-float opacity-40"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-pink-400 rounded-full animate-float opacity-50"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float opacity-70"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Parallax Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
            alt="Developer Workspace"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Floating Code Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-cyan-400/20 font-mono text-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            >
              {`<${
                ["div", "span", "p", "h1", "section"][
                  Math.floor(Math.random() * 5)
                ]
              }>`}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-20 text-center max-w-4xl mx-auto px-6"
        >
          <motion.div
            className="mb-8"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            style={{
              background:
                "linear-gradient(90deg, #3B82F6, #8B5CF6, #06B6D4, #3B82F6)",
              backgroundSize: "300% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-4">{data.name}</h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-2xl text-gray-300 mb-8"
          >
            {data.title}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {data.skills.slice(0, 5).map((tech) => (
              <Badge
                key={tech}
                className="bg-blue-600/20 text-blue-300 border-blue-500/30 px-4 py-2 text-lg"
              >
                {tech}
              </Badge>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-4 text-lg"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Code className="mr-2 h-5 w-5" />
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 px-8 py-4 text-lg"
              onClick={() => window.open(data.socialLinks?.github, "_blank")}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub Profile
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Navigation */}
      <nav className="sticky top-0 z-30 bg-black/80 backdrop-blur-lg border-b border-gray-700/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-center space-x-8">
            {[
              { id: "projects", label: "Projects", icon: Code },
              { id: "skills", label: "Skills", icon: Zap },
              { id: "experience", label: "Experience", icon: Calendar },
              { id: "contact", label: "Contact", icon: Users },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === id
                    ? "bg-blue-600/20 text-blue-300 border border-blue-500/30"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              About{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {data.about}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-gray-300 text-lg">
                Building the future, one line of code at a time
              </p>
            </motion.div>

            <Button
              onClick={() => setShowAddProject(true)}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Project
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <Badge
                        className={`${
                          project.status === "completed"
                            ? "bg-green-600/20 text-green-300 border-green-500/30"
                            : project.status === "in-progress"
                            ? "bg-yellow-600/20 text-yellow-300 border-yellow-500/30"
                            : "bg-gray-600/20 text-gray-300 border-gray-500/30"
                        }`}
                      >
                        {(project.status || "completed").replace("-", " ")}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 right-4 flex space-x-2">
                      <div className="flex items-center space-x-1 text-white text-sm">
                        <Star className="h-4 w-4" />
                        <span>{project.stars || 0}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-white text-sm">
                        <GitBranch className="h-4 w-4" />
                        <span>{project.forks || 0}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <Badge variant="secondary" className="mt-2">
                          {project.category || "Project"}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          className="bg-blue-600/20 text-blue-300 border-blue-500/30 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge className="bg-gray-600/20 text-gray-300 border-gray-500/30 text-xs">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-blue-600 hover:bg-blue-700"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Add Project Modal */}
          {showAddProject && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
              <Card className="bg-gray-800 border-gray-700 w-full max-w-md">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    Add New Project
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-300 mb-2 block">
                        Project Title
                      </label>
                      <input
                        type="text"
                        value={newProject.title}
                        onChange={(e) =>
                          setNewProject({
                            ...newProject,
                            title: e.target.value,
                          })
                        }
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                        placeholder="Enter project title"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-300 mb-2 block">
                        Description
                      </label>
                      <textarea
                        value={newProject.description}
                        onChange={(e) =>
                          setNewProject({
                            ...newProject,
                            description: e.target.value,
                          })
                        }
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white h-24"
                        placeholder="Project description"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-300 mb-2 block">
                        Technologies (comma separated)
                      </label>
                      <input
                        type="text"
                        value={newProject.technologies}
                        onChange={(e) =>
                          setNewProject({
                            ...newProject,
                            technologies: e.target.value,
                          })
                        }
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                        placeholder="React, Node.js, MongoDB"
                      />
                    </div>
                    <div className="flex space-x-4">
                      <Button
                        onClick={addProject}
                        className="flex-1 bg-green-600 hover:bg-green-700"
                      >
                        Add Project
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setShowAddProject(false)}
                        className="flex-1 border-gray-600 text-gray-300"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-gray-300 text-lg">
              Expertise across the full development stack
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillLevels.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-medium">{skill.name}</span>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30 text-xs">
                      {skill.category}
                    </Badge>
                    <span className="text-cyan-400 font-mono">
                      {skill.level}%
                    </span>
                  </div>
                </div>
                <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terminal Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black/80 backdrop-blur-sm rounded-lg border border-gray-700/50 overflow-hidden"
          >
            <div className="flex items-center justify-between px-6 py-3 border-b border-gray-700/50">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Terminal className="h-4 w-4" />
                <span className="text-sm font-mono">terminal</span>
              </div>
            </div>
            <div className="p-6 font-mono text-sm">
              <div className="text-green-400">$ whoami</div>
              <div className="text-white">{data.name}</div>
              <div className="text-green-400 mt-4">$ cat about.txt</div>
              <div className="text-gray-300 mt-2">
                {data.about.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </div>
              <div className="text-green-400 mt-4">$ ls skills/</div>
              <div className="text-blue-400 mt-2">
                {data.skills.join(" ").toLowerCase()}/
              </div>
              <div className="text-green-400 mt-4">$ git status</div>
              <div className="text-white mt-2">
                On branch main
                <br />
                Your branch is up to date with 'origin/main'.
                <br />
                <span className="text-green-400">
                  Ready to create amazing things!
                </span>
              </div>
              <div className="text-green-400 mt-4 flex items-center">
                $ <span className="animate-pulse ml-2">█</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Work{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Experience
              </span>
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
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10 p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {exp.position}
                      </h3>
                      <p className="text-cyan-400 font-medium">{exp.company}</p>
                    </div>
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 mt-2 md:mt-0">
                      {exp.duration}
                    </Badge>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Let's{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Ready to bring your next project to life? Let's discuss how we can
              work together.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              {data.email && (
                <a
                  href={`mailto:${data.email}`}
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5" />
                  {data.email}
                </a>
              )}
              {data.phone && (
                <a
                  href={`tel:${data.phone}`}
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  <Phone className="w-5 h-5" />
                  {data.phone}
                </a>
              )}
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 animate-glow"
            >
              <Mail className="w-4 h-4 mr-2" />
              Start a Conversation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2024 {data.name}. Built with PortfolioForge.
          </p>
        </div>
      </footer>
    </div>
  );
}

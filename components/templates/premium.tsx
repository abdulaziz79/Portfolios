"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  Sun,
  Moon,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

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

interface PremiumPortfolioTemplateProps {
  data: PortfolioData;
}

export function PremiumPortfolioTemplate({
  data,
}: PremiumPortfolioTemplateProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showParticles, setShowParticles] = useState(true);

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

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Handle scroll for section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "home";

      sections.forEach((section) => {
        const sectionEl = section as HTMLElement;
        const sectionTop = sectionEl.offsetTop;
        const sectionHeight = sectionEl.offsetHeight;

        if (
          window.scrollY >= sectionTop - 200 &&
          window.scrollY < sectionTop + sectionHeight - 200
        ) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Floating particles component
  const FloatingParticles = () => {
    if (!showParticles) return null;

    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              background: darkMode
                ? `rgba(${
                    Math.random() > 0.5 ? "96, 165, 250" : "168, 85, 247"
                  }, ${Math.random() * 0.4 + 0.1})`
                : `rgba(${
                    Math.random() > 0.5 ? "59, 130, 246" : "139, 92, 246"
                  }, ${Math.random() * 0.3 + 0.1})`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() > 0.5 ? 10 : -10, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    );
  };

  // Animated background gradient
  const AnimatedGradient = () => (
    <div className="absolute inset-0 overflow-hidden z-0">
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-30"
        animate={{
          background: darkMode
            ? [
                "radial-gradient(circle at 10% 20%, rgba(96, 165, 250, 0.2) 0%, transparent 20%)",
                "radial-gradient(circle at 90% 80%, rgba(168, 85, 247, 0.2) 0%, transparent 20%)",
                "radial-gradient(circle at 50% 50%, rgba(96, 165, 250, 0.2) 0%, transparent 20%)",
                "radial-gradient(circle at 10% 20%, rgba(96, 165, 250, 0.2) 0%, transparent 20%)",
              ]
            : [
                "radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 20%)",
                "radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 20%)",
                "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 20%)",
                "radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 20%)",
              ],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
    </div>
  );

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"
          : "bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50"
      }`}
    >
      <AnimatedGradient />
      <FloatingParticles />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md border-b transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center"
            >
              <button
                onClick={() => scrollToSection("home")}
                className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                {data.name}
              </button>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "projects", label: "Projects" },
                { id: "skills", label: "Skills" },
                { id: "experience", label: "Experience" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? darkMode
                        ? "bg-blue-600/20 text-blue-300 border border-blue-500/30"
                        : "bg-blue-600/10 text-blue-700 border border-blue-500/20"
                      : darkMode
                      ? "text-gray-300 hover:text-white hover:bg-gray-800/50"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-200/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Theme Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`ml-4 p-2 rounded-full ${
                  darkMode
                    ? "bg-gray-800 text-yellow-200"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {darkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`mr-4 p-2 rounded-full ${
                  darkMode
                    ? "bg-gray-800 text-yellow-200"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {darkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-md ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden border-t ${
                darkMode ? "border-gray-800" : "border-gray-200"
              }`}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {[
                  { id: "home", label: "Home" },
                  { id: "about", label: "About" },
                  { id: "projects", label: "Projects" },
                  { id: "skills", label: "Skills" },
                  { id: "experience", label: "Experience" },
                  { id: "contact", label: "Contact" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                      activeSection === item.id
                        ? darkMode
                          ? "bg-blue-600/20 text-blue-300"
                          : "bg-blue-600/10 text-blue-700"
                        : darkMode
                        ? "text-gray-300 hover:text-white hover:bg-gray-800/50"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-200/50"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden pt-16"
      >
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div
            className={`absolute inset-0 z-10 ${
              darkMode
                ? "bg-gradient-to-r from-blue-900/40 to-purple-900/40"
                : "bg-gradient-to-r from-blue-400/20 to-purple-400/20"
            }`}
          ></div>
          <img
            src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
            alt="Developer Workspace"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute font-mono text-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                color: darkMode
                  ? "rgba(103, 232, 249, 0.2)"
                  : "rgba(14, 165, 233, 0.15)",
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
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
              {data.name}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className={`text-xl md:text-2xl mb-8 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
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
                className={`px-4 py-2 text-lg ${
                  darkMode
                    ? "bg-blue-600/20 text-blue-300 border-blue-500/30"
                    : "bg-blue-500/20 text-blue-700 border-blue-400/30"
                }`}
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
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 px-8 py-4 text-lg"
              onClick={() => scrollToSection("projects")}
            >
              <Code className="mr-2 h-5 w-5" />
              View Projects
            </Button>
            <Button
              variant={darkMode ? "outline" : "secondary"}
              size="lg"
              className={`px-8 py-4 text-lg ${
                darkMode
                  ? "border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10"
                  : "border-blue-300 text-blue-700 hover:bg-blue-100"
              }`}
              onClick={() => window.open(data.socialLinks?.github, "_blank")}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div
            className={`w-6 h-10 border-2 rounded-full flex justify-center ${
              darkMode ? "border-cyan-400/50" : "border-blue-400/50"
            }`}
          >
            <div
              className={`w-1 h-3 rounded-full mt-2 ${
                darkMode ? "bg-cyan-400" : "bg-blue-400"
              }`}
            ></div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p
              className={`text-xl leading-relaxed max-w-3xl mx-auto ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {data.about}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12"
          >
            <h2
              className={`text-4xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Featured{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p
              className={`text-lg ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Building the future, one line of code at a time
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -10 }}
              >
                <Card
                  className={`group overflow-hidden transition-all duration-300 ${
                    darkMode
                      ? "bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:border-blue-500/50"
                      : "bg-white/80 backdrop-blur-sm border-gray-200/50 hover:border-blue-400/50"
                  }`}
                >
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
                            ? darkMode
                              ? "bg-green-600/20 text-green-300 border-green-500/30"
                              : "bg-green-500/20 text-green-700 border-green-400/30"
                            : project.status === "in-progress"
                            ? darkMode
                              ? "bg-yellow-600/20 text-yellow-300 border-yellow-500/30"
                              : "bg-yellow-500/20 text-yellow-700 border-yellow-400/30"
                            : darkMode
                            ? "bg-gray-600/20 text-gray-300 border-gray-500/30"
                            : "bg-gray-500/20 text-gray-700 border-gray-400/30"
                        }`}
                      >
                        {(project.status || "completed").replace("-", " ")}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 right-4 flex space-x-2">
                      <div
                        className={`flex items-center space-x-1 text-sm ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        <Star className="h-4 w-4" />
                        <span>{project.stars || 0}</span>
                      </div>
                      <div
                        className={`flex items-center space-x-1 text-sm ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        <GitBranch className="h-4 w-4" />
                        <span>{project.forks || 0}</span>
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle
                          className={`group-hover:text-blue-400 transition-colors ${
                            darkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {project.title}
                        </CardTitle>
                        <Badge variant="secondary" className="mt-2">
                          {project.category || "Project"}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p
                      className={`mb-4 line-clamp-3 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          className={`text-xs ${
                            darkMode
                              ? "bg-blue-600/20 text-blue-300 border-blue-500/30"
                              : "bg-blue-500/20 text-blue-700 border-blue-400/30"
                          }`}
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge
                          className={`text-xs ${
                            darkMode
                              ? "bg-gray-600/20 text-gray-300 border-gray-500/30"
                              : "bg-gray-500/20 text-gray-700 border-gray-400/30"
                          }`}
                        >
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant={darkMode ? "outline" : "secondary"}
                        className={`flex-1 ${
                          darkMode
                            ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                            : "border-gray-300 text-gray-700 hover:bg-gray-100"
                        }`}
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
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`py-20 px-6 ${
          darkMode ? "bg-gray-900/30" : "bg-gray-100/50"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2
              className={`text-4xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Technical{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <p
              className={`text-lg ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Expertise across the full development stack
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {data.skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`rounded-lg p-6 backdrop-blur-sm border ${
                  darkMode
                    ? "bg-gray-800/50 border-gray-700/50"
                    : "bg-white/80 border-gray-200/50"
                }`}
              >
                <div className="flex justify-between items-center mb-3">
                  <span
                    className={`font-medium ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {skill}
                  </span>
                  <span
                    className={`font-mono ${
                      darkMode ? "text-cyan-400" : "text-blue-600"
                    }`}
                  >
                    {Math.floor(Math.random() * 20) + 80}%
                  </span>
                </div>
                <div
                  className={`relative h-3 rounded-full overflow-hidden ${
                    darkMode ? "bg-gray-700" : "bg-gray-300"
                  }`}
                >
                  <motion.div
                    className={`absolute left-0 top-0 h-full rounded-full ${
                      darkMode
                        ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                        : "bg-gradient-to-r from-blue-400 to-cyan-400"
                    }`}
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${Math.floor(Math.random() * 20) + 80}%`,
                    }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
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
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card
                  className={`backdrop-blur-sm p-6 ${
                    darkMode
                      ? "bg-gray-800/50 border-gray-700/50"
                      : "bg-white/80 border-gray-200/50"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3
                        className={`text-xl font-semibold mb-1 ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {exp.position}
                      </h3>
                      <p
                        className={`font-medium ${
                          darkMode ? "text-cyan-400" : "text-blue-600"
                        }`}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <Badge
                      className={`mt-2 md:mt-0 ${
                        darkMode
                          ? "bg-purple-500/20 text-purple-300 border-purple-500/30"
                          : "bg-purple-500/10 text-purple-700 border-purple-400/30"
                      }`}
                    >
                      {exp.duration}
                    </Badge>
                  </div>
                  <p
                    className={`leading-relaxed ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
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
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Let's{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <p
              className={`text-xl mb-12 max-w-2xl mx-auto ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Ready to bring your next project to life? Let's discuss how we can
              work together.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              {data.email && (
                <a
                  href={`mailto:${data.email}`}
                  className={`flex items-center gap-3 transition-colors duration-300 ${
                    darkMode
                      ? "text-gray-300 hover:text-cyan-400"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  <Mail className="w-5 h-5" />
                  {data.email}
                </a>
              )}
              {data.phone && (
                <a
                  href={`tel:${data.phone}`}
                  className={`flex items-center gap-3 transition-colors duration-300 ${
                    darkMode
                      ? "text-gray-300 hover:text-cyan-400"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  <Phone className="w-5 h-5" />
                  {data.phone}
                </a>
              )}
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0"
            >
              <Mail className="w-4 h-4 mr-2" />
              Start a Conversation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-12 px-4 border-t ${
          darkMode ? "border-gray-800" : "border-gray-200"
        }`}
      >
        <div className="container mx-auto text-center">
          <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            © 2024 {data.name}. Built with PortfolioForge.
          </p>
        </div>
      </footer>
    </div>
  );
}

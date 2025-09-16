"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Upload,
  Plus,
  X,
  Eye,
  Rocket,
  Github,
  Linkedin,
  Twitter,
  Globe,
  UtensilsCrossed,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
}

interface PortfolioData {
  name: string;
  title: string;
  about: string;
  email: string;
  phone: string;
  location: string;
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
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
    instagram: string;
    website: string;
  };
  restaurantInfo?: {
    cuisine: string;
    hours: string;
    address: string;
    menu: MenuItem[];
  };
}

const getDummyData = (templateId: string): PortfolioData => {
  const isRestaurant =
    templateId.includes("restaurant") ||
    templateId.includes("bistro") ||
    templateId.includes("cafe");

  if (isRestaurant) {
    return {
      name: "Bella Vista Restaurant",
      title: "Fine Italian Dining Experience",
      about:
        "Welcome to Bella Vista, where authentic Italian flavors meet modern culinary artistry. Our passionate chefs create memorable dining experiences using the finest ingredients and traditional recipes passed down through generations.",
      email: "info@bellavista.com",
      phone: "+1 (555) 123-4567",
      location: "123 Main Street, Downtown",
      profileImage: "/elegant-restaurant-interior.jpg",
      skills: [
        "Italian Cuisine",
        "Wine Pairing",
        "Fresh Ingredients",
        "Traditional Recipes",
      ],
      experience: [],
      projects: [],
      socialLinks: {
        github: "",
        linkedin: "",
        twitter: "https://twitter.com/bellavista",
        instagram: "https://instagram.com/bellavista",
        website: "https://bellavista.com",
      },
      restaurantInfo: {
        cuisine: "Italian",
        hours: "Mon-Thu: 5PM-10PM, Fri-Sat: 5PM-11PM, Sun: 4PM-9PM",
        address: "123 Main Street, Downtown",
        menu: [
          {
            id: "1",
            name: "Margherita Pizza",
            description:
              "Fresh mozzarella, tomato sauce, basil, extra virgin olive oil",
            price: "$18",
            category: "Pizza",
          },
          {
            id: "2",
            name: "Spaghetti Carbonara",
            description:
              "Traditional Roman pasta with eggs, pecorino cheese, pancetta",
            price: "$22",
            category: "Pasta",
          },
          {
            id: "3",
            name: "Osso Buco",
            description:
              "Braised veal shanks with vegetables, white wine, and broth",
            price: "$32",
            category: "Main Course",
          },
          {
            id: "4",
            name: "Tiramisu",
            description:
              "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone",
            price: "$12",
            category: "Dessert",
          },
        ],
      },
    };
  }

  // Developer dummy data
  if (templateId.includes("dev") || templateId.includes("code")) {
    return {
      name: "Alex Johnson",
      title: "Full Stack Developer",
      about:
        "Passionate full-stack developer with 5+ years of experience building scalable web applications. I love creating elegant solutions to complex problems and staying up-to-date with the latest technologies.",
      email: "alex@example.com",
      phone: "+1 (555) 987-6543",
      location: "San Francisco, CA",
      profileImage: "/professional-developer-headshot.png",
      skills: [
        "React",
        "Node.js",
        "TypeScript",
        "Python",
        "AWS",
        "Docker",
        "PostgreSQL",
        "GraphQL",
      ],
      experience: [
        {
          id: "1",
          company: "TechCorp Inc.",
          position: "Senior Full Stack Developer",
          duration: "2022 - Present",
          description:
            "Lead development of microservices architecture serving 1M+ users. Built React applications with Node.js backends, implemented CI/CD pipelines, and mentored junior developers.",
        },
        {
          id: "2",
          company: "StartupXYZ",
          position: "Frontend Developer",
          duration: "2020 - 2022",
          description:
            "Developed responsive web applications using React and TypeScript. Collaborated with design team to implement pixel-perfect UIs and improved application performance by 40%.",
        },
      ],
      projects: [
        {
          id: "1",
          title: "E-commerce Platform",
          description:
            "Full-stack e-commerce solution with React frontend, Node.js backend, and Stripe integration. Features include user authentication, product catalog, shopping cart, and order management.",
          image: "/ecommerce-website-homepage.png",
          technologies: ["React", "Node.js", "MongoDB", "Stripe"],
          liveUrl: "https://ecommerce-demo.com",
          githubUrl: "https://github.com/alex/ecommerce",
        },
        {
          id: "2",
          title: "Task Management App",
          description:
            "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
          image: "/task-management-app-interface.png",
          technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
          liveUrl: "https://taskapp-demo.com",
          githubUrl: "https://github.com/alex/taskapp",
        },
      ],
      socialLinks: {
        github: "https://github.com/alexjohnson",
        linkedin: "https://linkedin.com/in/alexjohnson",
        twitter: "https://twitter.com/alexjohnson",
        instagram: "",
        website: "https://alexjohnson.dev",
      },
    };
  }

  // Photographer dummy data
  if (templateId.includes("photo") || templateId.includes("gallery")) {
    return {
      name: "Sarah Chen",
      title: "Professional Photographer",
      about:
        "Award-winning photographer specializing in portrait, wedding, and landscape photography. With over 8 years of experience, I capture moments that tell stories and create lasting memories.",
      email: "sarah@sarahchen.photo",
      phone: "+1 (555) 456-7890",
      location: "Los Angeles, CA",
      profileImage: "/professional-photographer-portrait.png",
      skills: [
        "Portrait Photography",
        "Wedding Photography",
        "Landscape",
        "Photo Editing",
        "Lightroom",
        "Photoshop",
        "Studio Lighting",
      ],
      experience: [
        {
          id: "1",
          company: "Freelance Photographer",
          position: "Professional Photographer",
          duration: "2018 - Present",
          description:
            "Specialized in wedding and portrait photography, serving 200+ clients. Featured in Wedding Magazine and received Best Portrait Photographer award in 2023.",
        },
      ],
      projects: [
        {
          id: "1",
          title: "Wedding Portfolio",
          description:
            "Collection of wedding photography showcasing intimate moments and beautiful ceremonies across California.",
          image: "/elegant-outdoor-wedding.png",
          technologies: ["Canon 5D Mark IV", "Lightroom", "Photoshop"],
          liveUrl: "https://sarahchen.photo/weddings",
          githubUrl: "",
        },
        {
          id: "2",
          title: "Portrait Series",
          description:
            "Professional headshots and creative portraits for actors, executives, and artists.",
          image: "/professional-portraits.jpg",
          technologies: ["Studio Lighting", "Canon 85mm", "Profoto"],
          liveUrl: "https://sarahchen.photo/portraits",
          githubUrl: "",
        },
      ],
      socialLinks: {
        github: "",
        linkedin: "https://linkedin.com/in/sarahchen",
        twitter: "",
        instagram: "https://instagram.com/sarahchen_photo",
        website: "https://sarahchen.photo",
      },
    };
  }

  // Designer dummy data
  return {
    name: "Marcus Rivera",
    title: "UI/UX Designer",
    about:
      "Creative UI/UX designer with a passion for crafting intuitive digital experiences. I combine user research, design thinking, and modern aesthetics to create products that users love.",
    email: "marcus@marcusdesign.co",
    phone: "+1 (555) 321-0987",
    location: "New York, NY",
    profileImage: "/creative-designer-portrait.png",
    skills: [
      "UI Design",
      "UX Research",
      "Figma",
      "Adobe Creative Suite",
      "Prototyping",
      "User Testing",
      "Design Systems",
    ],
    experience: [
      {
        id: "1",
        company: "Design Studio Pro",
        position: "Senior UI/UX Designer",
        duration: "2021 - Present",
        description:
          "Lead designer for mobile and web applications. Conducted user research, created design systems, and improved user engagement by 60% through redesigned interfaces.",
      },
    ],
    projects: [
      {
        id: "1",
        title: "Banking App Redesign",
        description:
          "Complete redesign of mobile banking application focusing on accessibility and user experience. Reduced task completion time by 40%.",
        image: "/mobile-banking-app-design.jpg",
        technologies: ["Figma", "Principle", "User Research"],
        liveUrl: "https://dribbble.com/marcus/banking",
        githubUrl: "",
      },
    ],
    socialLinks: {
      github: "",
      linkedin: "https://linkedin.com/in/marcusrivera",
      twitter: "https://twitter.com/marcusdesigns",
      instagram: "https://instagram.com/marcus_designs",
      website: "https://marcusdesign.co",
    },
  };
};

export default function CustomizePage() {
  const params = useParams();
  const templateId = params.templateId as string;
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(() =>
    getDummyData(templateId)
  );
  const [activeSection, setActiveSection] = useState("basic");
  const [newSkill, setNewSkill] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const [newMenuItem, setNewMenuItem] = useState<Partial<MenuItem>>({
    name: "",
    description: "",
    price: "",
    category: "",
  });

  const isRestaurant =
    templateId.includes("restaurant") ||
    templateId.includes("bistro") ||
    templateId.includes("cafe");

  const sections = isRestaurant
    ? [
        { id: "basic", label: "Restaurant Info", icon: "🏪" },
        { id: "about", label: "About Us", icon: "📝" },
        { id: "menu", label: "Menu", icon: "🍽️" },
        { id: "contact", label: "Contact & Social", icon: "📞" },
      ]
    : [
        { id: "basic", label: "Basic Info", icon: "👤" },
        { id: "about", label: "About Me", icon: "📝" },
        { id: "skills", label: "Skills", icon: "⚡" },
        { id: "experience", label: "Experience", icon: "💼" },
        { id: "projects", label: "Projects", icon: "🚀" },
        { id: "contact", label: "Contact & Social", icon: "📞" },
      ];

  const addSkill = () => {
    if (newSkill.trim() && !portfolioData.skills.includes(newSkill.trim())) {
      setPortfolioData((prev) => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()],
      }));
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setPortfolioData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }));
  };

  const addExperience = () => {
    const newExp = {
      id: Date.now().toString(),
      company: "",
      position: "",
      duration: "",
      description: "",
    };
    setPortfolioData((prev) => ({
      ...prev,
      experience: [...prev.experience, newExp],
    }));
  };

  const updateExperience = (id: string, field: string, value: string) => {
    setPortfolioData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    }));
  };

  const removeExperience = (id: string) => {
    setPortfolioData((prev) => ({
      ...prev,
      experience: prev.experience.filter((exp) => exp.id !== id),
    }));
  };

  const addProject = () => {
    const newProject = {
      id: Date.now().toString(),
      title: "",
      description: "",
      image: "",
      technologies: [],
      liveUrl: "",
      githubUrl: "",
    };
    setPortfolioData((prev) => ({
      ...prev,
      projects: [...prev.projects, newProject],
    }));
  };

  const updateProject = (
    id: string,
    field: string,
    value: string | string[]
  ) => {
    setPortfolioData((prev) => ({
      ...prev,
      projects: prev.projects.map((project) =>
        project.id === id ? { ...project, [field]: value } : project
      ),
    }));
  };

  const removeProject = (id: string) => {
    setPortfolioData((prev) => ({
      ...prev,
      projects: prev.projects.filter((project) => project.id !== id),
    }));
  };

  const addMenuItem = () => {
    if (newMenuItem.name && newMenuItem.price && portfolioData.restaurantInfo) {
      const menuItem: MenuItem = {
        id: Date.now().toString(),
        name: newMenuItem.name,
        description: newMenuItem.description || "",
        price: newMenuItem.price,
        category: newMenuItem.category || "Main Course",
      };

      setPortfolioData((prev) => ({
        ...prev,
        restaurantInfo: {
          ...prev.restaurantInfo!,
          menu: [...prev.restaurantInfo!.menu, menuItem],
        },
      }));

      setNewMenuItem({ name: "", description: "", price: "", category: "" });
    }
  };

  const removeMenuItem = (id: string) => {
    if (portfolioData.restaurantInfo) {
      setPortfolioData((prev) => ({
        ...prev,
        restaurantInfo: {
          ...prev.restaurantInfo!,
          menu: prev.restaurantInfo!.menu.filter((item) => item.id !== id),
        },
      }));
    }
  };

  const updateMenuItem = (id: string, field: keyof MenuItem, value: string) => {
    if (portfolioData.restaurantInfo) {
      setPortfolioData((prev) => ({
        ...prev,
        restaurantInfo: {
          ...prev.restaurantInfo!,
          menu: prev.restaurantInfo!.menu.map((item) =>
            item.id === id ? { ...item, [field]: value } : item
          ),
        },
      }));
    }
  };

  const generatePortfolio = async () => {
    setIsGenerating(true);
    // Simulate portfolio generation
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const username = portfolioData.name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

    localStorage.setItem(
      `portfolio-${username}-${templateId}`,
      JSON.stringify(portfolioData)
    );

    const portfolioUrl = `/portfolio/${username}/${templateId}`;
    window.location.href = portfolioUrl;
    setIsGenerating(false);
  };

  const renderBasicInfo = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            value={portfolioData.name}
            onChange={(e) =>
              setPortfolioData((prev) => ({ ...prev, name: e.target.value }))
            }
            placeholder="John Doe"
            className="glass-effect"
          />
        </div>
        <div>
          <Label htmlFor="title">Professional Title *</Label>
          <Input
            id="title"
            value={portfolioData.title}
            onChange={(e) =>
              setPortfolioData((prev) => ({ ...prev, title: e.target.value }))
            }
            placeholder="Full Stack Developer"
            className="glass-effect"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          value={portfolioData.location}
          onChange={(e) =>
            setPortfolioData((prev) => ({ ...prev, location: e.target.value }))
          }
          placeholder="San Francisco, CA"
          className="glass-effect"
        />
      </div>

      <div>
        <Label htmlFor="profileImage">Profile Image</Label>
        <div className="flex items-center gap-4">
          <Input
            id="profileImage"
            value={portfolioData.profileImage}
            onChange={(e) =>
              setPortfolioData((prev) => ({
                ...prev,
                profileImage: e.target.value,
              }))
            }
            placeholder="Image URL or upload"
            className="glass-effect"
          />
          <Button
            variant="outline"
            size="icon"
            className="glass-effect bg-transparent"
          >
            <Upload className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );

  const renderAbout = () => (
    <div className="space-y-6">
      <div>
        <Label htmlFor="about">About Me *</Label>
        <Textarea
          id="about"
          value={portfolioData.about}
          onChange={(e) =>
            setPortfolioData((prev) => ({ ...prev, about: e.target.value }))
          }
          placeholder="Tell your story, highlight your passion, and what makes you unique..."
          rows={6}
          className="glass-effect resize-none"
        />
      </div>
    </div>
  );

  const renderSkills = () => (
    <div className="space-y-6">
      <div>
        <Label>Add Skills</Label>
        <div className="flex gap-2">
          <Input
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="e.g., React, Node.js, Python"
            className="glass-effect"
            onKeyPress={(e) => e.key === "Enter" && addSkill()}
          />
          <Button onClick={addSkill} className="glass-effect">
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {portfolioData.skills.map((skill) => (
          <Badge
            key={skill}
            variant="secondary"
            className="glass-effect group cursor-pointer"
          >
            {skill}
            <X
              className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => removeSkill(skill)}
            />
          </Badge>
        ))}
      </div>
    </div>
  );

  const renderExperience = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Label>Work Experience</Label>
        <Button
          onClick={addExperience}
          variant="outline"
          size="sm"
          className="glass-effect bg-transparent"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Experience
        </Button>
      </div>

      {portfolioData.experience.map((exp) => (
        <Card key={exp.id} className="p-4 glass-effect">
          <div className="flex justify-between items-start mb-4">
            <h4 className="font-medium">Experience Entry</h4>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => removeExperience(exp.id)}
              className="text-destructive hover:text-destructive"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Input
              value={exp.company}
              onChange={(e) =>
                updateExperience(exp.id, "company", e.target.value)
              }
              placeholder="Company Name"
              className="glass-effect"
            />
            <Input
              value={exp.position}
              onChange={(e) =>
                updateExperience(exp.id, "position", e.target.value)
              }
              placeholder="Job Title"
              className="glass-effect"
            />
          </div>

          <Input
            value={exp.duration}
            onChange={(e) =>
              updateExperience(exp.id, "duration", e.target.value)
            }
            placeholder="Jan 2020 - Present"
            className="glass-effect mb-4"
          />

          <Textarea
            value={exp.description}
            onChange={(e) =>
              updateExperience(exp.id, "description", e.target.value)
            }
            placeholder="Describe your role and achievements..."
            rows={3}
            className="glass-effect resize-none"
          />
        </Card>
      ))}
    </div>
  );

  const renderProjects = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Label>Projects</Label>
        <Button
          onClick={addProject}
          variant="outline"
          size="sm"
          className="glass-effect bg-transparent"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Project
        </Button>
      </div>

      {portfolioData.projects.map((project) => (
        <Card key={project.id} className="p-4 glass-effect">
          <div className="flex justify-between items-start mb-4">
            <h4 className="font-medium">Project Entry</h4>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => removeProject(project.id)}
              className="text-destructive hover:text-destructive"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-4">
            <Input
              value={project.title}
              onChange={(e) =>
                updateProject(project.id, "title", e.target.value)
              }
              placeholder="Project Title"
              className="glass-effect"
            />

            <Textarea
              value={project.description}
              onChange={(e) =>
                updateProject(project.id, "description", e.target.value)
              }
              placeholder="Project description..."
              rows={3}
              className="glass-effect resize-none"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                value={project.liveUrl}
                onChange={(e) =>
                  updateProject(project.id, "liveUrl", e.target.value)
                }
                placeholder="Live URL"
                className="glass-effect"
              />
              <Input
                value={project.githubUrl}
                onChange={(e) =>
                  updateProject(project.id, "githubUrl", e.target.value)
                }
                placeholder="GitHub URL"
                className="glass-effect"
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  const renderContact = () => (
    <div className="space-y-6">
      <div>
        <Label>Contact Information</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <Input
            value={portfolioData.email}
            onChange={(e) =>
              setPortfolioData((prev) => ({ ...prev, email: e.target.value }))
            }
            placeholder="your@email.com"
            className="glass-effect"
          />
          <Input
            value={portfolioData.phone}
            onChange={(e) =>
              setPortfolioData((prev) => ({ ...prev, phone: e.target.value }))
            }
            placeholder="+1 (555) 123-4567"
            className="glass-effect"
          />
        </div>
      </div>

      <Separator />

      <div>
        <Label>Social Links</Label>
        <div className="space-y-3 mt-2">
          <div className="flex items-center gap-3">
            <Github className="w-5 h-5 text-muted-foreground" />
            <Input
              value={portfolioData.socialLinks.github}
              onChange={(e) =>
                setPortfolioData((prev) => ({
                  ...prev,
                  socialLinks: { ...prev.socialLinks, github: e.target.value },
                }))
              }
              placeholder="https://github.com/username"
              className="glass-effect"
            />
          </div>

          <div className="flex items-center gap-3">
            <Linkedin className="w-5 h-5 text-muted-foreground" />
            <Input
              value={portfolioData.socialLinks.linkedin}
              onChange={(e) =>
                setPortfolioData((prev) => ({
                  ...prev,
                  socialLinks: {
                    ...prev.socialLinks,
                    linkedin: e.target.value,
                  },
                }))
              }
              placeholder="https://linkedin.com/in/username"
              className="glass-effect"
            />
          </div>

          <div className="flex items-center gap-3">
            <Twitter className="w-5 h-5 text-muted-foreground" />
            <Input
              value={portfolioData.socialLinks.twitter}
              onChange={(e) =>
                setPortfolioData((prev) => ({
                  ...prev,
                  socialLinks: { ...prev.socialLinks, twitter: e.target.value },
                }))
              }
              placeholder="https://twitter.com/username"
              className="glass-effect"
            />
          </div>

          <div className="flex items-center gap-3">
            <Globe className="w-5 h-5 text-muted-foreground" />
            <Input
              value={portfolioData.socialLinks.website}
              onChange={(e) =>
                setPortfolioData((prev) => ({
                  ...prev,
                  socialLinks: { ...prev.socialLinks, website: e.target.value },
                }))
              }
              placeholder="https://yourwebsite.com"
              className="glass-effect"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderMenu = () => (
    <div className="space-y-6">
      <div>
        <Label>Restaurant Details</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <Input
            value={portfolioData.restaurantInfo?.cuisine || ""}
            onChange={(e) =>
              setPortfolioData((prev) => ({
                ...prev,
                restaurantInfo: {
                  ...prev.restaurantInfo!,
                  cuisine: e.target.value,
                },
              }))
            }
            placeholder="Cuisine Type (e.g., Italian, Mexican)"
            className="glass-effect"
          />
          <Input
            value={portfolioData.restaurantInfo?.hours || ""}
            onChange={(e) =>
              setPortfolioData((prev) => ({
                ...prev,
                restaurantInfo: {
                  ...prev.restaurantInfo!,
                  hours: e.target.value,
                },
              }))
            }
            placeholder="Operating Hours"
            className="glass-effect"
          />
        </div>
      </div>

      <Separator />

      <div>
        <Label>Add Menu Item</Label>
        <div className="space-y-3 mt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Input
              value={newMenuItem.name || ""}
              onChange={(e) =>
                setNewMenuItem((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="Dish Name"
              className="glass-effect"
            />
            <Input
              value={newMenuItem.price || ""}
              onChange={(e) =>
                setNewMenuItem((prev) => ({ ...prev, price: e.target.value }))
              }
              placeholder="Price (e.g., $15)"
              className="glass-effect"
            />
          </div>
          <Input
            value={newMenuItem.category || ""}
            onChange={(e) =>
              setNewMenuItem((prev) => ({ ...prev, category: e.target.value }))
            }
            placeholder="Category (e.g., Appetizer, Main Course)"
            className="glass-effect"
          />
          <Textarea
            value={newMenuItem.description || ""}
            onChange={(e) =>
              setNewMenuItem((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
            placeholder="Description of the dish..."
            rows={2}
            className="glass-effect resize-none"
          />
          <Button onClick={addMenuItem} className="glass-effect w-full">
            <Plus className="w-4 h-4 mr-2" />
            Add Menu Item
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <Label>Current Menu Items</Label>
        {portfolioData.restaurantInfo?.menu.map((item) => (
          <Card key={item.id} className="p-4 glass-effect">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                <UtensilsCrossed className="w-4 h-4 text-muted-foreground" />
                <Badge variant="outline">{item.category}</Badge>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeMenuItem(item.id)}
                className="text-destructive hover:text-destructive"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Input
                  value={item.name}
                  onChange={(e) =>
                    updateMenuItem(item.id, "name", e.target.value)
                  }
                  placeholder="Dish Name"
                  className="glass-effect"
                />
                <Input
                  value={item.price}
                  onChange={(e) =>
                    updateMenuItem(item.id, "price", e.target.value)
                  }
                  placeholder="Price"
                  className="glass-effect"
                />
              </div>
              <Input
                value={item.category}
                onChange={(e) =>
                  updateMenuItem(item.id, "category", e.target.value)
                }
                placeholder="Category"
                className="glass-effect"
              />
              <Textarea
                value={item.description}
                onChange={(e) =>
                  updateMenuItem(item.id, "description", e.target.value)
                }
                placeholder="Description"
                rows={2}
                className="glass-effect resize-none"
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderSectionContent = () => {
    switch (activeSection) {
      case "basic":
        return renderBasicInfo();
      case "about":
        return renderAbout();
      case "skills":
        return renderSkills();
      case "experience":
        return renderExperience();
      case "projects":
        return renderProjects();
      case "contact":
        return renderContact();
      case "menu":
        return renderMenu();
      default:
        return renderBasicInfo();
    }
  };

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link href="/templates/web-developer">
            <Button
              variant="ghost"
              className="mb-6 glass-effect hover:scale-105 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Templates
            </Button>
          </Link>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Customize Your{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Portfolio
                </span>
              </h1>
              <p className="text-muted-foreground">
                Fill in your details and watch your portfolio come to life in
                real-time.
              </p>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" className="glass-effect bg-transparent">
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
              <Button
                onClick={generatePortfolio}
                disabled={
                  isGenerating || !portfolioData.name || !portfolioData.title
                }
                className="animate-glow"
              >
                {isGenerating ? (
                  "Generating..."
                ) : (
                  <>
                    <Rocket className="w-4 h-4 mr-2" />
                    Create Portfolio
                  </>
                )}
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <Card className="glass-effect sticky top-8">
              {/* Section Navigation */}
              <div className="p-6 border-b border-border">
                <div className="grid grid-cols-3 gap-2">
                  {sections.map((section) => (
                    <Button
                      key={section.id}
                      variant={
                        activeSection === section.id ? "default" : "ghost"
                      }
                      size="sm"
                      onClick={() => setActiveSection(section.id)}
                      className="text-xs glass-effect"
                    >
                      <span className="mr-1">{section.icon}</span>
                      {section.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Form Content */}
              <div className="p-6">{renderSectionContent()}</div>
            </Card>
          </motion.div>

          {/* Preview Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <Card className="glass-effect min-h-[600px]">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Live Preview</h3>
                  <Badge variant="outline" className="glass-effect">
                    {templateId}
                  </Badge>
                </div>

                {/* Mock Preview */}
                <div className="bg-muted/20 rounded-lg p-8 min-h-[500px] glass-effect">
                  <div className="text-center mb-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                      {portfolioData.profileImage ? (
                        <img
                          src={portfolioData.profileImage || "/placeholder.svg"}
                          alt="Profile"
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        <span className="text-2xl text-white">
                          {portfolioData.name
                            ? portfolioData.name.charAt(0).toUpperCase()
                            : "?"}
                        </span>
                      )}
                    </div>
                    <h2 className="text-2xl font-bold mb-2">
                      {portfolioData.name || "Your Name"}
                    </h2>
                    <p className="text-muted-foreground mb-2">
                      {portfolioData.title || "Your Professional Title"}
                    </p>
                    {portfolioData.location && (
                      <p className="text-sm text-muted-foreground">
                        {portfolioData.location}
                      </p>
                    )}
                  </div>

                  {portfolioData.about && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-3">About Me</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {portfolioData.about}
                      </p>
                    </div>
                  )}

                  {portfolioData.skills.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-3">Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {portfolioData.skills.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {portfolioData.projects.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-3">Projects</h3>
                      <div className="space-y-4">
                        {portfolioData.projects.map((project) => (
                          <div
                            key={project.id}
                            className="border border-border rounded-lg p-4"
                          >
                            <h4 className="font-medium mb-2">
                              {project.title || "Project Title"}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {project.description || "Project description..."}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {portfolioData.restaurantInfo && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-3">Menu</h3>
                      <div className="space-y-4">
                        {portfolioData.restaurantInfo.menu.map((item) => (
                          <div
                            key={item.id}
                            className="border border-border rounded-lg p-4"
                          >
                            <h4 className="font-medium mb-2">
                              {item.name || "Dish Name"}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {item.description || "Description of the dish..."}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Price: {item.price || "$0"}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Category: {item.category || "Main Course"}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

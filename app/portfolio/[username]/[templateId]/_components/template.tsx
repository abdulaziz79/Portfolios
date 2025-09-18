"use client";

import { useEffect, useState } from "react";

import { NeonDevTemplate } from "@/components/templates/neon-dev-template";
import { MinimalCodeTemplate } from "@/components/templates/minimal-code-template";
import { GlassPhotoTemplate } from "@/components/templates/glass-photo-template";
import { CyberDesignTemplate } from "@/components/templates/cyber-design-template";
import { ModernDevTemplate } from "@/components/templates/modern-dev-template";
import { CreativeDevTemplate } from "@/components/templates/creative-dev-template";
import { ElegantPhotoTemplate } from "@/components/templates/elegant-photo-template";
import { VintagePhotoTemplate } from "@/components/templates/vintage-photo-template";
import { ModernDesignTemplate } from "@/components/templates/modern-design-template";
import { BoldDesignTemplate } from "@/components/templates/bold-design-template";
import { ModernRestaurantTemplate } from "@/components/templates/modern-restaurant-template";
import { ElegantRestaurantTemplate } from "@/components/templates/elegant-restaurant-template";
import NewDevTemplate from "@/components/templates/new-developer";
import { PremiumPortfolioTemplate } from "@/components/templates/premium";

interface PortfolioData {
  name: string;
  title: string;
  about: string;
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
    title: string; // Changed from 'name'
    description: string;
    technologies: string[];
    image: string;
    liveUrl: string; // Changed from 'link'
    githubUrl: string;
  }>;
  contact: {
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
    instagram: string;
    website: string;
  };
  profileImage: string;
  menuItems?: Array<{
    id: string;
    category: string;
    name: string;
    description: string;
    price: string;
  }>;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    instagram?: string;
    website?: string;
    twitter?: string;
    [key: string]: string | undefined;
  };
  restaurantInfo?: {
    menu?: Array<{
      id: string;
      category: string;
      name: string;
      description: string;
      price: string;
    }>;
    hours?: string;
    cuisine?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

export default function PortfolioPage({
  username,
  templateId,
}: {
  username: string;
  templateId: string;
}) {
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  console.log("Props - username:", username, "templateId:", templateId);
  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `/api/portfolios/${username}/${templateId}`
        );

        if (response.ok) {
          const data = await response.json();
          setPortfolioData(data);
        } else {
          // Fallback to localStorage or mock data
          const storageKey = `portfolio-${username}-${templateId}`;
          const storedData = localStorage.getItem(storageKey);

          if (storedData) {
            setPortfolioData(JSON.parse(storedData));
          } else {
            const mockData = getMockData(
              username as string,
              templateId as string
            );
            setPortfolioData(mockData);
          }
        }
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
        // Fallback logic here
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, [username, templateId]);

  const getMockData = (
    username: string,
    templateId: string
  ): PortfolioData | null => {
    const mockDataMap: Record<string, PortfolioData> = {
      "john-doe-neon-dev": {
        name: "John Doe",
        title: "Full Stack Developer",
        about:
          "Passionate developer with 5+ years of experience building modern web applications using React, Node.js, and cloud technologies.",
        skills: ["React", "Node.js", "TypeScript", "AWS", "Docker", "GraphQL"],
        experience: [
          {
            id: "1",
            company: "Tech Corp",
            position: "Senior Developer",
            duration: "2022 - Present",
            description:
              "Lead development of microservices architecture serving 1M+ users",
          },
        ],
        projects: [
          {
            id: "1", // Added id
            title: "E-commerce Platform", // Changed from name to title
            description:
              "Full-stack e-commerce solution with React and Node.js",
            technologies: ["React", "Node.js", "MongoDB"],
            image: "/ecommerce-website-homepage.png",
            liveUrl: "https://live-demo.com", // Changed from link to liveUrl
            githubUrl: "https://github.com", // Added githubUrl
          },
        ],
        contact: {
          email: "john@example.com",
          phone: "+1 (555) 123-4567",
          location: "San Francisco, CA",
          github: "https://github.com/johndoe",
          linkedin: "https://linkedin.com/in/johndoe",
          instagram: "",
          website: "https://johndoe.dev",
        },
        profileImage: "/professional-developer-headshot.png",
        socialLinks: {
          github: "https://github.com/johndoe",
          linkedin: "https://linkedin.com/in/johndoe",
          website: "https://johndoe.dev",
        },
      },
      "bella-vista-restaurant-modern-restaurant": {
        name: "Bella Vista Restaurant",
        title: "Fine Dining Experience",
        about:
          "Experience culinary excellence at Bella Vista, where traditional Italian flavors meet modern innovation. Our award-winning chefs create memorable dining experiences using the finest local ingredients.",
        skills: [
          "Italian Cuisine",
          "Wine Pairing",
          "Farm-to-Table",
          "Artisan Pasta",
          "Wood-Fired Pizza",
        ],
        experience: [
          {
            id: "2",
            company: "Bella Vista Restaurant",
            position: "Executive Chef",
            duration: "2018 - Present",
            description:
              "Leading a team of 15 chefs, creating seasonal menus that celebrate local ingredients",
          },
        ],
        projects: [
          {
            id: "2", // Added id
            title: "E-commerce Platform", // Changed from name to title
            description:
              "Full-stack e-commerce solution with React and Node.js",
            technologies: ["React", "Node.js", "MongoDB"],
            image: "/ecommerce-website-homepage.png",
            liveUrl: "https://live-demo.com", // Changed from link to liveUrl
            githubUrl: "https://github.com", // Added githubUrl
          },
        ],
        contact: {
          email: "reservations@bellavista.com",
          phone: "+1 (555) 987-6543",
          location: "123 Culinary Street, Food City, FC 12345",
          github: "",
          linkedin: "",
          instagram: "https://instagram.com/bellavistarestaurant",
          website: "https://bellavista.com",
        },
        profileImage: "/elegant-restaurant-interior.jpg",
        socialLinks: {
          github: "",
          linkedin: "",
          instagram: "https://instagram.com/bellavistarestaurant",
          website: "https://bellavista.com",
        },
        menuItems: [
          {
            id: "1",
            category: "Appetizers",
            name: "Burrata Caprese",
            description:
              "Fresh burrata with heirloom tomatoes, basil oil, and aged balsamic",
            price: "$18",
          },
          {
            id: "2",
            category: "Appetizers",
            name: "Truffle Arancini",
            description: "Crispy risotto balls with truffle oil and parmesan",
            price: "$16",
          },
          {
            id: "3",
            category: "Main Courses",
            name: "Osso Buco",
            description:
              "Braised veal shank with saffron risotto and gremolata",
            price: "$42",
          },
          {
            id: "4",
            category: "Main Courses",
            name: "Branzino",
            description:
              "Mediterranean sea bass with lemon herb crust and roasted vegetables",
            price: "$38",
          },
          {
            id: "5",
            category: "Desserts",
            name: "Tiramisu",
            description:
              "Classic Italian dessert with espresso-soaked ladyfingers",
            price: "$12",
          },
        ],
      },
    };

    const key = `${username}-${templateId}`;
    return mockDataMap[key] || null;
  };

  console.log("Portfolio Data:", portfolioData);
  const renderTemplate = () => {
    if (!portfolioData) return null;

    switch (templateId) {
      case "neon-dev":
        return <NeonDevTemplate data={portfolioData} />;
      case "new-dev":
        return <NewDevTemplate data={portfolioData} />;
      case "premium-dev":
        return <PremiumPortfolioTemplate data={portfolioData} />;
      case "minimal-code":
        return <MinimalCodeTemplate data={portfolioData} />;
      case "glass-dev":
        return <GlassPhotoTemplate data={portfolioData} />;
      case "cyber-tech":
        return <CyberDesignTemplate data={portfolioData} />;
      case "cyber-design":
        return <CyberDesignTemplate data={portfolioData} />;
      case "modern-dev":
        return <ModernDevTemplate data={portfolioData} />;
      case "creative-dev":
        return <CreativeDevTemplate data={portfolioData} />;
      case "creative-studio":
        return <CreativeDevTemplate data={portfolioData} />;
      case "glass-photo":
        return <ElegantPhotoTemplate data={portfolioData} />;
      case "minimal-gallery":
        return <VintagePhotoTemplate data={portfolioData} />;
      case "dark-lens":
        return <ModernDesignTemplate data={portfolioData} />;
      case "bold-design":
        return <BoldDesignTemplate data={portfolioData} />;
      case "modern-restaurant":
        return (
          <ModernRestaurantTemplate
            data={{
              name: portfolioData.name,
              title: portfolioData.title,
              about: portfolioData.about,
              email: portfolioData.contact?.email
                ? portfolioData.contact.email
                : "",
              phone: portfolioData.contact?.phone
                ? portfolioData.contact?.phone
                : "",
              location: portfolioData.contact?.location
                ? portfolioData.contact.location
                : "",
              profileImage: portfolioData.profileImage
                ? portfolioData.profileImage
                : "",
              hours: "11:00 AM - 10:00 PM",
              cuisine: "Italian Cuisine",
              menu: portfolioData.restaurantInfo?.menu || [],
              socialLinks: {
                instagram: portfolioData.socialLinks?.instagram || "",
                facebook: "",
                website: portfolioData.socialLinks?.website || "",
              },
            }}
          />
        );
      case "elegant-restaurant":
        return (
          <ElegantRestaurantTemplate
            data={{
              name: portfolioData.name,
              title: portfolioData.title,
              about: portfolioData.about,
              email: portfolioData.contact?.email
                ? portfolioData.contact.email
                : "",
              phone: portfolioData.contact?.phone
                ? portfolioData.contact?.phone
                : "",
              location: portfolioData.contact?.location
                ? portfolioData.contact.location
                : "",
              profileImage: portfolioData.profileImage
                ? portfolioData.profileImage
                : "",
              hours: "11:00 AM - 10:00 PM",
              cuisine: "Italian Cuisine",
              menu: portfolioData.restaurantInfo?.menu || [],
              socialLinks: {
                instagram: portfolioData.socialLinks?.instagram || "",
                facebook: "",
                website: portfolioData.socialLinks?.website || "",
              },
            }}
          />
        );
      default:
        return (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">Template Not Found</h1>
              <p>The template "{templateId}" is not available.</p>
            </div>
          </div>
        );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!portfolioData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Portfolio Not Found</h1>
          <p>
            The portfolio for "{username}" with template "{templateId}" could
            not be found.
          </p>
        </div>
      </div>
    );
  }

  return renderTemplate();
}

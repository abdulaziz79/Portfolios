"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Holdco corp.",
      location: "Sodeco Square, Beirut",
      period: "Dec 2024 - Present",
      description:
        "Developing and optimizing web applications for multiple clients, handling both frontend and backend to deliver tailored, high-performance solutions.",
    },
    {
      title: "Backend Developer",
      company: "Eurisko",
      location: "Adma - Jounieh",
      period: "Sep 2024 - Dec 2024",
      description:
        "Worked on backend systems using Node.js, Nest.js, and Express.js, focusing on building scalable APIs and ensuring performance and security standards.",
    },
    {
      title: "Frontend Developer",
      company: "Freelance",
      location: "Lebanon",
      period: "Mar 2024 - Oct 2024",
      description:
        "Delivered custom web solutions for clients, designing user-friendly interfaces and building scalable architectures from scratch.",
    },
    {
      title: "Full-Stack Developer",
      company: "CodiTech",
      location: "Tripoli, Lebanon",
      period: "Jun 2023 - Mar 2024",
      description:
        "Developed full-stack applications by integrating React.js frontends with Node.js and MongoDB backends, while gaining experience in scalable system design.",
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key achievements
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-24 bg-border" />
              )}
              <Card className="mb-8 ml-12 border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <div className="absolute -left-6 top-6 w-3 h-3 bg-primary rounded-full border-4 border-background" />
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    {experience.title}
                  </CardTitle>
                  <CardDescription className="text-lg font-medium text-primary">
                    {experience.company}
                  </CardDescription>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {experience.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {experience.location}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {experience.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import {
  Download,
  Plus,
  X,
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Globe,
  Calendar,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  current: boolean;
}

interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  url?: string;
}

interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    website: string;
    linkedin: string;
    github: string;
  };
  summary: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  languages: string[];
  certifications: string[];
}

interface ResumeBuilderProps {
  onNavigate: (...args: any[]) => void;
}

export default function ResumeBuilder({ onNavigate }: ResumeBuilderProps) {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeSection, setActiveSection] = useState("personal");

  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      website: "",
      linkedin: "",
      github: "",
    },
    summary: "",
    skills: [],
    experience: [],
    education: [],
    projects: [],
    languages: [],
    certifications: [],
  });

  const [newSkill, setNewSkill] = useState("");
  const [newLanguage, setNewLanguage] = useState("");
  const [newCertification, setNewCertification] = useState("");

  const addSkill = () => {
    if (newSkill.trim()) {
      setResumeData((prev) => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()],
      }));
      setNewSkill("");
    }
  };

  const removeSkill = (index: number) => {
    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };

  const addLanguage = () => {
    if (newLanguage.trim()) {
      setResumeData((prev) => ({
        ...prev,
        languages: [...prev.languages, newLanguage.trim()],
      }));
      setNewLanguage("");
    }
  };

  const removeLanguage = (index: number) => {
    setResumeData((prev) => ({
      ...prev,
      languages: prev.languages.filter((_, i) => i !== index),
    }));
  };

  const addCertification = () => {
    if (newCertification.trim()) {
      setResumeData((prev) => ({
        ...prev,
        certifications: [...prev.certifications, newCertification.trim()],
      }));
      setNewCertification("");
    }
  };

  const removeCertification = (index: number) => {
    setResumeData((prev) => ({
      ...prev,
      certifications: prev.certifications.filter((_, i) => i !== index),
    }));
  };

  const addExperience = () => {
    const newExp: Experience = {
      id: Date.now().toString(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
      current: false,
    };
    setResumeData((prev) => ({
      ...prev,
      experience: [...prev.experience, newExp],
    }));
  };

  const updateExperience = (
    id: string,
    field: keyof Experience,
    value: string | boolean
  ) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    }));
  };

  const removeExperience = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.filter((exp) => exp.id !== id),
    }));
  };

  const addEducation = () => {
    const newEdu: Education = {
      id: Date.now().toString(),
      school: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
      gpa: "",
    };
    setResumeData((prev) => ({
      ...prev,
      education: [...prev.education, newEdu],
    }));
  };

  const updateEducation = (
    id: string,
    field: keyof Education,
    value: string
  ) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    }));
  };

  const removeEducation = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.filter((edu) => edu.id !== id),
    }));
  };

  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      name: "",
      description: "",
      technologies: [],
      url: "",
    };
    setResumeData((prev) => ({
      ...prev,
      projects: [...prev.projects, newProject],
    }));
  };

  const updateProject = (
    id: string,
    field: keyof Project,
    value: string | string[]
  ) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.map((proj) =>
        proj.id === id ? { ...proj, [field]: value } : proj
      ),
    }));
  };

  const removeProject = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.filter((proj) => proj.id !== id),
    }));
  };

  const generatePDF = async () => {
    setIsGenerating(true);
    try {
      // Using jsPDF for PDF generation
      const { jsPDF } = await import("jspdf");

      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 20;
      const contentWidth = pageWidth - 2 * margin;
      let yPosition = margin;

      // Helper function to add text with wrapping
      const addText = (
        text: string,
        fontSize: number,
        isBold: boolean = false,
        color: string = "#000000"
      ) => {
        pdf.setFontSize(fontSize);
        pdf.setFont("helvetica", isBold ? "bold" : "normal");
        pdf.setTextColor(color);

        const lines = pdf.splitTextToSize(text, contentWidth);
        lines.forEach((line: string) => {
          if (yPosition > pageHeight - margin) {
            pdf.addPage();
            yPosition = margin;
          }
          pdf.text(line, margin, yPosition);
          yPosition += fontSize * 0.6;
        });
      };

      const addSection = (title: string) => {
        yPosition += 5;
        addText(title.toUpperCase(), 12, true, "#2563eb");
        yPosition += 3;
        pdf.setDrawColor("#e5e7eb");
        pdf.line(margin, yPosition, pageWidth - margin, yPosition);
        yPosition += 8;
      };

      // Header - Personal Information
      addText(resumeData.personalInfo.fullName, 18, true, "#1f2937");
      yPosition += 3;

      const contactInfo = [
        resumeData.personalInfo.email,
        resumeData.personalInfo.phone,
        resumeData.personalInfo.location,
      ]
        .filter(Boolean)
        .join(" • ");

      if (contactInfo) {
        addText(contactInfo, 10, false, "#6b7280");
        yPosition += 2;
      }

      const webLinks = [
        resumeData.personalInfo.website,
        resumeData.personalInfo.linkedin,
        resumeData.personalInfo.github,
      ]
        .filter(Boolean)
        .join(" • ");

      if (webLinks) {
        addText(webLinks, 10, false, "#6b7280");
        yPosition += 2;
      }

      // Summary
      if (resumeData.summary) {
        addSection("Professional Summary");
        addText(resumeData.summary, 10);
      }

      // Skills
      if (resumeData.skills.length > 0) {
        addSection("Skills");
        const skillsText = resumeData.skills.join(" • ");
        addText(skillsText, 10);
      }

      // Experience
      if (resumeData.experience.length > 0) {
        addSection("Professional Experience");
        resumeData.experience.forEach((exp) => {
          const dateRange = exp.current
            ? `${exp.startDate} - Present`
            : `${exp.startDate} - ${exp.endDate}`;

          addText(exp.position, 11, true);
          addText(`${exp.company} | ${dateRange}`, 10, false, "#6b7280");
          if (exp.description) {
            addText(exp.description, 10);
          }
          yPosition += 3;
        });
      }

      // Education
      if (resumeData.education.length > 0) {
        addSection("Education");
        resumeData.education.forEach((edu) => {
          const degreeText = edu.field
            ? `${edu.degree} in ${edu.field}`
            : edu.degree;
          addText(degreeText, 11, true);
          const schoolInfo = `${edu.school} | ${edu.startDate} - ${edu.endDate}`;
          addText(schoolInfo, 10, false, "#6b7280");
          if (edu.gpa) {
            addText(`GPA: ${edu.gpa}`, 10, false, "#6b7280");
          }
          yPosition += 3;
        });
      }

      // Projects
      if (resumeData.projects.length > 0) {
        addSection("Projects");
        resumeData.projects.forEach((project) => {
          addText(project.name, 11, true);
          if (project.url) {
            addText(project.url, 9, false, "#2563eb");
          }
          if (project.description) {
            addText(project.description, 10);
          }
          if (project.technologies.length > 0) {
            addText(
              `Technologies: ${project.technologies.join(", ")}`,
              9,
              false,
              "#6b7280"
            );
          }
          yPosition += 3;
        });
      }

      // Languages
      if (resumeData.languages.length > 0) {
        addSection("Languages");
        addText(resumeData.languages.join(" • "), 10);
      }

      // Certifications
      if (resumeData.certifications.length > 0) {
        addSection("Certifications");
        resumeData.certifications.forEach((cert) => {
          addText(`• ${cert}`, 10);
        });
      }

      // Save the PDF
      const fileName = resumeData.personalInfo.fullName
        ? `${resumeData.personalInfo.fullName.replace(/\s+/g, "_")}_Resume.pdf`
        : "Resume.pdf";

      pdf.save(fileName);
      toast.success("Resume downloaded successfully!");
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast.error("Failed to generate PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const sections = [
    { id: "personal", name: "Personal Info", icon: User },
    { id: "summary", name: "Summary", icon: Star },
    { id: "experience", name: "Experience", icon: Briefcase },
    { id: "education", name: "Education", icon: GraduationCap },
    { id: "skills", name: "Skills", icon: Award },
    { id: "projects", name: "Projects", icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Resume Builder
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Create a professional resume without images and download it as a PDF
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Builder Interface */}
          <div className="lg:col-span-2 space-y-6">
            {/* Section Navigation */}
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {sections.map((section) => (
                    <Button
                      key={section.id}
                      variant={
                        activeSection === section.id ? "default" : "outline"
                      }
                      className={`justify-start ${
                        activeSection === section.id
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                          : ""
                      }`}
                      onClick={() => setActiveSection(section.id)}
                    >
                      <section.icon className="w-4 h-4 mr-2" />
                      {section.name}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Personal Information */}
            {activeSection === "personal" && (
              <motion.div
                key="personal"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <User className="w-5 h-5 mr-2" />
                      Personal Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                          id="fullName"
                          value={resumeData.personalInfo.fullName}
                          onChange={(e) =>
                            setResumeData((prev) => ({
                              ...prev,
                              personalInfo: {
                                ...prev.personalInfo,
                                fullName: e.target.value,
                              },
                            }))
                          }
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={resumeData.personalInfo.email}
                          onChange={(e) =>
                            setResumeData((prev) => ({
                              ...prev,
                              personalInfo: {
                                ...prev.personalInfo,
                                email: e.target.value,
                              },
                            }))
                          }
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          value={resumeData.personalInfo.phone}
                          onChange={(e) =>
                            setResumeData((prev) => ({
                              ...prev,
                              personalInfo: {
                                ...prev.personalInfo,
                                phone: e.target.value,
                              },
                            }))
                          }
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={resumeData.personalInfo.location}
                          onChange={(e) =>
                            setResumeData((prev) => ({
                              ...prev,
                              personalInfo: {
                                ...prev.personalInfo,
                                location: e.target.value,
                              },
                            }))
                          }
                          placeholder="City, State"
                        />
                      </div>
                      <div>
                        <Label htmlFor="website">Website</Label>
                        <Input
                          id="website"
                          value={resumeData.personalInfo.website}
                          onChange={(e) =>
                            setResumeData((prev) => ({
                              ...prev,
                              personalInfo: {
                                ...prev.personalInfo,
                                website: e.target.value,
                              },
                            }))
                          }
                          placeholder="https://yourwebsite.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="linkedin">LinkedIn</Label>
                        <Input
                          id="linkedin"
                          value={resumeData.personalInfo.linkedin}
                          onChange={(e) =>
                            setResumeData((prev) => ({
                              ...prev,
                              personalInfo: {
                                ...prev.personalInfo,
                                linkedin: e.target.value,
                              },
                            }))
                          }
                          placeholder="https://linkedin.com/in/johndoe"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Professional Summary */}
            {activeSection === "summary" && (
              <motion.div
                key="summary"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Star className="w-5 h-5 mr-2" />
                      Professional Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      value={resumeData.summary}
                      onChange={(e) =>
                        setResumeData((prev) => ({
                          ...prev,
                          summary: e.target.value,
                        }))
                      }
                      placeholder="Write a brief professional summary highlighting your key skills, experience, and career objectives..."
                      rows={6}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Experience */}
            {activeSection === "experience" && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="flex items-center">
                      <Briefcase className="w-5 h-5 mr-2" />
                      Work Experience
                    </CardTitle>
                    <Button onClick={addExperience} size="sm">
                      <Plus className="w-4 h-4 mr-1" />
                      Add Experience
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {resumeData.experience.map((exp, index) => (
                      <div
                        key={exp.id}
                        className="p-4 border rounded-lg space-y-4 relative"
                      >
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => removeExperience(exp.id)}
                        >
                          <X className="w-4 h-4" />
                        </Button>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label>Company</Label>
                            <Input
                              value={exp.company}
                              onChange={(e) =>
                                updateExperience(
                                  exp.id,
                                  "company",
                                  e.target.value
                                )
                              }
                              placeholder="Company Name"
                            />
                          </div>
                          <div>
                            <Label>Position</Label>
                            <Input
                              value={exp.position}
                              onChange={(e) =>
                                updateExperience(
                                  exp.id,
                                  "position",
                                  e.target.value
                                )
                              }
                              placeholder="Job Title"
                            />
                          </div>
                          <div>
                            <Label>Start Date</Label>
                            <Input
                              value={exp.startDate}
                              onChange={(e) =>
                                updateExperience(
                                  exp.id,
                                  "startDate",
                                  e.target.value
                                )
                              }
                              placeholder="MM/YYYY"
                            />
                          </div>
                          <div>
                            <Label>End Date</Label>
                            <Input
                              value={exp.endDate}
                              onChange={(e) =>
                                updateExperience(
                                  exp.id,
                                  "endDate",
                                  e.target.value
                                )
                              }
                              placeholder="MM/YYYY"
                              disabled={exp.current}
                            />
                            <div className="flex items-center mt-2">
                              <input
                                type="checkbox"
                                id={`current-${exp.id}`}
                                checked={exp.current}
                                onChange={(e) => {
                                  updateExperience(
                                    exp.id,
                                    "current",
                                    e.target.checked
                                  );
                                  if (e.target.checked) {
                                    updateExperience(exp.id, "endDate", "");
                                  }
                                }}
                                className="mr-2"
                              />
                              <Label
                                htmlFor={`current-${exp.id}`}
                                className="text-sm"
                              >
                                Currently working here
                              </Label>
                            </div>
                          </div>
                        </div>
                        <div>
                          <Label>Description</Label>
                          <Textarea
                            value={exp.description}
                            onChange={(e) =>
                              updateExperience(
                                exp.id,
                                "description",
                                e.target.value
                              )
                            }
                            placeholder="Describe your responsibilities and achievements..."
                            rows={3}
                          />
                        </div>
                      </div>
                    ))}

                    {resumeData.experience.length === 0 && (
                      <div className="text-center py-8 text-muted-foreground">
                        <Briefcase className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <p>No work experience added yet.</p>
                        <Button onClick={addExperience} className="mt-4">
                          Add Your First Experience
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Education */}
            {activeSection === "education" && (
              <motion.div
                key="education"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="flex items-center">
                      <GraduationCap className="w-5 h-5 mr-2" />
                      Education
                    </CardTitle>
                    <Button onClick={addEducation} size="sm">
                      <Plus className="w-4 h-4 mr-1" />
                      Add Education
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {resumeData.education.map((edu, index) => (
                      <div
                        key={edu.id}
                        className="p-4 border rounded-lg space-y-4 relative"
                      >
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => removeEducation(edu.id)}
                        >
                          <X className="w-4 h-4" />
                        </Button>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label>School/University</Label>
                            <Input
                              value={edu.school}
                              onChange={(e) =>
                                updateEducation(
                                  edu.id,
                                  "school",
                                  e.target.value
                                )
                              }
                              placeholder="Institution Name"
                            />
                          </div>
                          <div>
                            <Label>Degree</Label>
                            <Input
                              value={edu.degree}
                              onChange={(e) =>
                                updateEducation(
                                  edu.id,
                                  "degree",
                                  e.target.value
                                )
                              }
                              placeholder="Bachelor's, Master's, etc."
                            />
                          </div>
                          <div>
                            <Label>Field of Study</Label>
                            <Input
                              value={edu.field}
                              onChange={(e) =>
                                updateEducation(edu.id, "field", e.target.value)
                              }
                              placeholder="Computer Science, etc."
                            />
                          </div>
                          <div>
                            <Label>GPA (Optional)</Label>
                            <Input
                              value={edu.gpa || ""}
                              onChange={(e) =>
                                updateEducation(edu.id, "gpa", e.target.value)
                              }
                              placeholder="3.8"
                            />
                          </div>
                          <div>
                            <Label>Start Date</Label>
                            <Input
                              value={edu.startDate}
                              onChange={(e) =>
                                updateEducation(
                                  edu.id,
                                  "startDate",
                                  e.target.value
                                )
                              }
                              placeholder="MM/YYYY"
                            />
                          </div>
                          <div>
                            <Label>End Date</Label>
                            <Input
                              value={edu.endDate}
                              onChange={(e) =>
                                updateEducation(
                                  edu.id,
                                  "endDate",
                                  e.target.value
                                )
                              }
                              placeholder="MM/YYYY"
                            />
                          </div>
                        </div>
                      </div>
                    ))}

                    {resumeData.education.length === 0 && (
                      <div className="text-center py-8 text-muted-foreground">
                        <GraduationCap className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <p>No education added yet.</p>
                        <Button onClick={addEducation} className="mt-4">
                          Add Your Education
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Skills */}
            {activeSection === "skills" && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="w-5 h-5 mr-2" />
                      Skills & Languages
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Skills */}
                    <div>
                      <Label className="text-base font-medium">
                        Technical Skills
                      </Label>
                      <div className="flex gap-2 mt-2">
                        <Input
                          value={newSkill}
                          onChange={(e) => setNewSkill(e.target.value)}
                          placeholder="Add a skill"
                          onKeyPress={(e) => e.key === "Enter" && addSkill()}
                        />
                        <Button onClick={addSkill}>Add</Button>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {resumeData.skills.map((skill, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="flex items-center gap-1"
                          >
                            {skill}
                            <X
                              className="w-3 h-3 cursor-pointer hover:text-destructive"
                              onClick={() => removeSkill(index)}
                            />
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Languages */}
                    <div>
                      <Label className="text-base font-medium">Languages</Label>
                      <div className="flex gap-2 mt-2">
                        <Input
                          value={newLanguage}
                          onChange={(e) => setNewLanguage(e.target.value)}
                          placeholder="Add a language"
                          onKeyPress={(e) => e.key === "Enter" && addLanguage()}
                        />
                        <Button onClick={addLanguage}>Add</Button>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {resumeData.languages.map((language, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="flex items-center gap-1"
                          >
                            {language}
                            <X
                              className="w-3 h-3 cursor-pointer hover:text-destructive"
                              onClick={() => removeLanguage(index)}
                            />
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Certifications */}
                    <div>
                      <Label className="text-base font-medium">
                        Certifications
                      </Label>
                      <div className="flex gap-2 mt-2">
                        <Input
                          value={newCertification}
                          onChange={(e) => setNewCertification(e.target.value)}
                          placeholder="Add a certification"
                          onKeyPress={(e) =>
                            e.key === "Enter" && addCertification()
                          }
                        />
                        <Button onClick={addCertification}>Add</Button>
                      </div>
                      <div className="space-y-2 mt-4">
                        {resumeData.certifications.map((cert, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-2 border rounded"
                          >
                            <span>{cert}</span>
                            <X
                              className="w-4 h-4 cursor-pointer hover:text-destructive"
                              onClick={() => removeCertification(index)}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Projects */}
            {activeSection === "projects" && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="flex items-center">
                      <Globe className="w-5 h-5 mr-2" />
                      Projects
                    </CardTitle>
                    <Button onClick={addProject} size="sm">
                      <Plus className="w-4 h-4 mr-1" />
                      Add Project
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {resumeData.projects.map((project, index) => (
                      <div
                        key={project.id}
                        className="p-4 border rounded-lg space-y-4 relative"
                      >
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => removeProject(project.id)}
                        >
                          <X className="w-4 h-4" />
                        </Button>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label>Project Name</Label>
                            <Input
                              value={project.name}
                              onChange={(e) =>
                                updateProject(
                                  project.id,
                                  "name",
                                  e.target.value
                                )
                              }
                              placeholder="My Awesome Project"
                            />
                          </div>
                          <div>
                            <Label>Project URL (Optional)</Label>
                            <Input
                              value={project.url || ""}
                              onChange={(e) =>
                                updateProject(project.id, "url", e.target.value)
                              }
                              placeholder="https://project-url.com"
                            />
                          </div>
                        </div>

                        <div>
                          <Label>Description</Label>
                          <Textarea
                            value={project.description}
                            onChange={(e) =>
                              updateProject(
                                project.id,
                                "description",
                                e.target.value
                              )
                            }
                            placeholder="Describe your project, its features, and your role..."
                            rows={3}
                          />
                        </div>

                        <div>
                          <Label>Technologies</Label>
                          <Input
                            value={project.technologies.join(", ")}
                            onChange={(e) =>
                              updateProject(
                                project.id,
                                "technologies",
                                e.target.value.split(",").map((t) => t.trim())
                              )
                            }
                            placeholder="React, Node.js, MongoDB"
                          />
                        </div>
                      </div>
                    ))}

                    {resumeData.projects.length === 0 && (
                      <div className="text-center py-8 text-muted-foreground">
                        <Globe className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <p>No projects added yet.</p>
                        <Button onClick={addProject} className="mt-4">
                          Add Your First Project
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>

          {/* Preview Panel */}
          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Resume Preview
                  <Button
                    onClick={generatePDF}
                    disabled={isGenerating}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  >
                    {isGenerating ? (
                      <>Generating...</>
                    ) : (
                      <>
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </>
                    )}
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  ref={resumeRef}
                  className="bg-white p-6 rounded border text-black text-sm space-y-4 max-h-96 overflow-y-auto"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  {/* Header */}
                  <div className="text-center border-b pb-4">
                    <h1 className="text-xl font-bold mb-2">
                      {resumeData.personalInfo.fullName || "Your Name"}
                    </h1>
                    <div className="text-xs text-gray-600">
                      {[
                        resumeData.personalInfo.email,
                        resumeData.personalInfo.phone,
                        resumeData.personalInfo.location,
                      ]
                        .filter(Boolean)
                        .join(" • ")}
                    </div>
                    {(resumeData.personalInfo.website ||
                      resumeData.personalInfo.linkedin) && (
                      <div className="text-xs text-gray-600 mt-1">
                        {[
                          resumeData.personalInfo.website,
                          resumeData.personalInfo.linkedin,
                        ]
                          .filter(Boolean)
                          .join(" • ")}
                      </div>
                    )}
                  </div>

                  {/* Summary */}
                  {resumeData.summary && (
                    <div>
                      <h2 className="font-bold text-blue-600 border-b border-gray-200 pb-1 mb-2">
                        PROFESSIONAL SUMMARY
                      </h2>
                      <p className="text-xs leading-relaxed">
                        {resumeData.summary}
                      </p>
                    </div>
                  )}

                  {/* Skills */}
                  {resumeData.skills.length > 0 && (
                    <div>
                      <h2 className="font-bold text-blue-600 border-b border-gray-200 pb-1 mb-2">
                        SKILLS
                      </h2>
                      <p className="text-xs">{resumeData.skills.join(" • ")}</p>
                    </div>
                  )}

                  {/* Experience */}
                  {resumeData.experience.length > 0 && (
                    <div>
                      <h2 className="font-bold text-blue-600 border-b border-gray-200 pb-1 mb-2">
                        PROFESSIONAL EXPERIENCE
                      </h2>
                      <div className="space-y-3">
                        {resumeData.experience.map((exp, index) => (
                          <div key={index}>
                            <div className="font-semibold text-xs">
                              {exp.position}
                            </div>
                            <div className="text-xs text-gray-600">
                              {exp.company} |{" "}
                              {exp.current
                                ? `${exp.startDate} - Present`
                                : `${exp.startDate} - ${exp.endDate}`}
                            </div>
                            {exp.description && (
                              <div className="text-xs mt-1 leading-relaxed">
                                {exp.description}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Education */}
                  {resumeData.education.length > 0 && (
                    <div>
                      <h2 className="font-bold text-blue-600 border-b border-gray-200 pb-1 mb-2">
                        EDUCATION
                      </h2>
                      <div className="space-y-2">
                        {resumeData.education.map((edu, index) => (
                          <div key={index}>
                            <div className="font-semibold text-xs">
                              {edu.field
                                ? `${edu.degree} in ${edu.field}`
                                : edu.degree}
                            </div>
                            <div className="text-xs text-gray-600">
                              {edu.school} | {edu.startDate} - {edu.endDate}
                              {edu.gpa && ` | GPA: ${edu.gpa}`}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Projects */}
                  {resumeData.projects.length > 0 && (
                    <div>
                      <h2 className="font-bold text-blue-600 border-b border-gray-200 pb-1 mb-2">
                        PROJECTS
                      </h2>
                      <div className="space-y-2">
                        {resumeData.projects.map((project, index) => (
                          <div key={index}>
                            <div className="font-semibold text-xs">
                              {project.name}
                            </div>
                            {project.url && (
                              <div className="text-xs text-blue-600">
                                {project.url}
                              </div>
                            )}
                            {project.description && (
                              <div className="text-xs mt-1 leading-relaxed">
                                {project.description}
                              </div>
                            )}
                            {project.technologies.length > 0 && (
                              <div className="text-xs text-gray-600">
                                Technologies: {project.technologies.join(", ")}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Languages */}
                  {resumeData.languages.length > 0 && (
                    <div>
                      <h2 className="font-bold text-blue-600 border-b border-gray-200 pb-1 mb-2">
                        LANGUAGES
                      </h2>
                      <p className="text-xs">
                        {resumeData.languages.join(" • ")}
                      </p>
                    </div>
                  )}

                  {/* Certifications */}
                  {resumeData.certifications.length > 0 && (
                    <div>
                      <h2 className="font-bold text-blue-600 border-b border-gray-200 pb-1 mb-2">
                        CERTIFICATIONS
                      </h2>
                      <div className="space-y-1">
                        {resumeData.certifications.map((cert, index) => (
                          <div key={index} className="text-xs">
                            • {cert}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

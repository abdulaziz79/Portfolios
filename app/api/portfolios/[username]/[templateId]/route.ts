import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { username: string; templateId: string } }
) {
  try {
    const { username, templateId } = await params;
    console.log("Fetching portfolio for:", username, templateId);

    const portfolio = await prisma.portfolio.findFirst({
      where: {
        user: {
          name: username,
        },
        templateId: templateId,
      },
      include: {
        skills: true,
        experiences: true,
        projects: true,
        contactInfo: true,
        menuItems: true,
        restaurantInfo: true,
      },
    });

    if (!portfolio) {
      return NextResponse.json(
        { error: "Portfolio not found" },
        { status: 404 }
      );
    }

    // Transform the data to match your frontend interface
    const portfolioData = {
      name: portfolio.name,
      title: portfolio.title,
      about: portfolio.about,
      skills: portfolio.skills.map((skill) => skill.name),
      experience: portfolio.experiences.map((exp) => ({
        id: exp.id,
        company: exp.company,
        position: exp.position,
        duration: exp.duration || "",
        description: exp.description || "",
      })),
      projects: portfolio.projects.map((proj) => ({
        id: proj.id,
        title: proj.title,
        description: proj.description || "",
        technologies: proj.technologies,
        image: proj.image || "",
        liveUrl: proj.liveUrl || "",
        githubUrl: proj.githubUrl || "",
      })),
      contact: {
        email: portfolio.contactInfo?.email || "",
        phone: portfolio.contactInfo?.phone || "",
        location: portfolio.contactInfo?.location || "",
        github: portfolio.contactInfo?.github || "",
        linkedin: portfolio.contactInfo?.linkedin || "",
        instagram: portfolio.contactInfo?.instagram || "",
        website: portfolio.contactInfo?.website || "",
      },
      profileImage: portfolio.profileImage || "",
      menuItems: portfolio.menuItems.map((item) => ({
        id: item.id,
        category: item.category,
        name: item.name,
        description: item.description || "",
        price: item.price || "",
      })),
      restaurantInfo: portfolio.restaurantInfo
        ? {
            hours: portfolio.restaurantInfo.hours,
            cuisine: portfolio.restaurantInfo.cuisine,
          }
        : undefined,
    };

    return NextResponse.json(portfolioData);
  } catch (error) {
    console.error("Error fetching portfolio:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

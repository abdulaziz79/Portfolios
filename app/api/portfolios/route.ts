// app/api/portfolios/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";

export async function POST(request: NextRequest) {
  try {
    // const session = await getServerSession();
    // if (!session?.user?.email) {
    //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    // }
    console.log("Received portfolio creation request");

    const body = await request.json();
    const { templateId, portfolioData, userEmail } = body;
    console.log("Request body:", body);
    if (!templateId || !portfolioData || !userEmail) {
      return NextResponse.json(
        { error: "Template ID, portfolio data, and user email are required" },
        { status: 400 }
      );
    }

    // Get the authenticated user
    const user = await prisma.user.findUnique({
      where: { email: userEmail },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Check if portfolio already exists for this user and template
    const existingPortfolio = await prisma.portfolio.findUnique({
      where: {
        userId_templateId: {
          userId: user.id,
          templateId: parseInt(templateId),
        },
      },
    });

    let portfolio;

    if (existingPortfolio) {
      // Update existing portfolio
      portfolio = await updatePortfolio(existingPortfolio.id, portfolioData);
    } else {
      // Create new portfolio
      portfolio = await createPortfolio(
        user.id,
        parseInt(templateId),
        portfolioData
      );
    }

    return NextResponse.json({ success: true, portfolio });
  } catch (error) {
    console.error("Error saving portfolio:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Helper function to create a new portfolio
async function createPortfolio(userId: number, templateId: number, data: any) {
  return await prisma.portfolio.create({
    data: {
      userId,
      templateId,
      name: data.name,
      title: data.title,
      about: data.about,
      profileImage: data.profileImage,

      // Create related data
      skills: {
        create: data.skills?.map((skill: string) => ({
          name: skill,
        })),
      },
      experiences: {
        create: data.experience?.map((exp: any) => ({
          company: exp.company,
          position: exp.position,
          duration: exp.duration,
          description: exp.description,
        })),
      },
      projects: {
        create: data.projects?.map((proj: any) => ({
          title: proj.title,
          description: proj.description,
          technologies: proj.technologies,
          image: proj.image,
          liveUrl: proj.liveUrl,
          githubUrl: proj.githubUrl,
        })),
      },
      contactInfo: {
        create: {
          email: data.contact?.email,
          phone: data.contact?.phone,
          location: data.contact?.location,
          github: data.contact?.github,
          linkedin: data.contact?.linkedin,
          instagram: data.contact?.instagram,
          website: data.contact?.website,
        },
      },
      menuItems: {
        create: data.menuItems?.map((item: any) => ({
          category: item.category,
          name: item.name,
          description: item.description,
          price: item.price,
        })),
      },
      restaurantInfo: data.restaurantInfo
        ? {
            create: {
              hours: data.restaurantInfo.hours,
              cuisine: data.restaurantInfo.cuisine,
            },
          }
        : undefined,
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
}

// Helper function to update an existing portfolio
async function updatePortfolio(portfolioId: string, data: any) {
  // First, delete all related data to avoid duplicates
  await prisma.$transaction([
    prisma.skill.deleteMany({ where: { portfolioId } }),
    prisma.experience.deleteMany({ where: { portfolioId } }),
    prisma.project.deleteMany({ where: { portfolioId } }),
    prisma.menuItem.deleteMany({ where: { portfolioId } }),
  ]);

  // Then update the portfolio with new data
  return await prisma.portfolio.update({
    where: { id: portfolioId },
    data: {
      name: data.name,
      title: data.title,
      about: data.about,
      profileImage: data.profileImage,

      // Recreate related data
      skills: {
        create: data.skills?.map((skill: string) => ({
          name: skill,
        })),
      },
      experiences: {
        create: data.experience?.map((exp: any) => ({
          company: exp.company,
          position: exp.position,
          duration: exp.duration,
          description: exp.description,
        })),
      },
      projects: {
        create: data.projects?.map((proj: any) => ({
          title: proj.title,
          description: proj.description,
          technologies: proj.technologies,
          image: proj.image,
          liveUrl: proj.liveUrl,
          githubUrl: proj.githubUrl,
        })),
      },
      contactInfo: {
        update: {
          email: data.contact?.email,
          phone: data.contact?.phone,
          location: data.contact?.location,
          github: data.contact?.github,
          linkedin: data.contact?.linkedin,
          instagram: data.contact?.instagram,
          website: data.contact?.website,
        },
      },
      menuItems: {
        create: data.menuItems?.map((item: any) => ({
          category: item.category,
          name: item.name,
          description: item.description,
          price: item.price,
        })),
      },
      restaurantInfo: data.restaurantInfo
        ? {
            update: {
              hours: data.restaurantInfo.hours,
              cuisine: data.restaurantInfo.cuisine,
            },
          }
        : undefined,
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
}

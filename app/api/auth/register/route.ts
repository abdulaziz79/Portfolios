import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const { supabaseUid, email, name } = await request.json();

    console.log("📥 Received registration request:", {
      supabaseUid,
      email,
      name,
    });

    // Validate required fields
    if (!supabaseUid || !email) {
      console.error("❌ Missing required fields");
      return NextResponse.json(
        { error: "Supabase UID and email are required" },
        { status: 400 }
      );
    }

    // Check if user already exists by supabaseUid or email
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ supabaseUid }, { email }],
      },
    });

    if (existingUser) {
      console.error("❌ User already exists:", existingUser);
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      );
    }

    // Create new user in database
    console.log("📝 Creating user in database...");
    const user = await prisma.user.create({
      data: {
        email,
        name: name || email.split("@")[0], // Use name or derive from email
        supabaseUid,
        status: true,
        templateIds: [], // Initialize empty array
      },
    });

    console.log("✅ User created successfully:", user);

    return NextResponse.json(
      {
        message: "User created successfully",
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          supabaseUid: user.supabaseUid,
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("🔥 Registration API error:", error);

    // Handle Prisma errors
    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "User with this email or UID already exists" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

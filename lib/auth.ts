import { createClient } from "./supabase/server";
import { prisma } from "./prisma";

export async function getCurrentUser() {
  try {
    const supabase = await createClient();

    const {
      data: { user: supabaseUser },
    } = await supabase.auth.getUser();

    if (!supabaseUser) {
      return null;
    }

    let user;
    try {
      user = await prisma.user.findUnique({
        where: { supabaseUid: supabaseUser.id },
        include: { templates: true },
      });
    } catch (err) {
      console.error("Prisma error: Could not fetch user", err);
      return null;
    }

    if (!user) {
      try {
        user = await prisma.user.create({
          data: {
            email: supabaseUser.email!,
            name:
              supabaseUser.user_metadata?.full_name ||
              supabaseUser.email?.split("@")[0],
            supabaseUid: supabaseUser.id,
            avatarUrl: supabaseUser.user_metadata?.avatar_url,
          },
          include: { templates: true },
        });
      } catch (err) {
        console.error("Prisma error: Could not create user", err);
        return null;
      }
    }

    return user;
  } catch (error) {
    console.error("getCurrentUser failed:", error);
    return null;
  }
}

export async function signOut() {
  try {
    const supabase = await createClient();
    await supabase.auth.signOut();
  } catch (err) {
    console.error("Sign out failed:", err);
  }
}

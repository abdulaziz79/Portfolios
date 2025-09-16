import { HeroSection } from "@/components/hero-section";
import { TemplateCarousel } from "@/components/template-carousel";
import { ThemeToggle } from "@/components/theme-toggle";
import { getCurrentUser, signOut } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function HomePage() {
  async function handleLogout() {
    "use server";
    await signOut();
    redirect("/login");
  }
  const user = await getCurrentUser();
  if (!user) {
    console.log("User is not logged in");
  }
  console.log("user on home page:", user);
  return (
    <main className="min-h-screen">
      {/* Header with theme toggle */}
      <header className="fixed top-0 right-0 z-50 p-6">
        <ThemeToggle user={user} signOut={handleLogout} />
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* Template Carousel */}
      <TemplateCarousel />
    </main>
  );
}

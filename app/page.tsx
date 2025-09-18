import { HeroSection } from "@/components/hero-section";
import { TemplateCarousel } from "@/components/template-carousel";
import { ThemeToggle } from "@/components/theme-toggle";
import { getCurrentUser, signOut } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

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
      {/* Updated Header with full navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            PortfolioForge
          </Link>

          {/* Navigation with ThemeToggle */}
          <ThemeToggle user={user} signOut={handleLogout} />
        </div>
      </header>

      {/* Hero Section - add padding to account for fixed header */}
      <div className="pt-20">
        <HeroSection />
      </div>

      {/* Template Carousel */}
      <TemplateCarousel />
    </main>
  );
}

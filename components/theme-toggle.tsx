"use client";
import { LogIn, LogOut, Moon, Sun, Menu, X, Loader2 } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ThemeToggleProps {
  user: User | null;
  signOut: () => void;
}

export function ThemeToggle({ user, signOut }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { label: "Projects", href: "/projects" },
    { label: "Photographer", href: "/photographer" },
    { label: "Designer", href: "/designer" },
  ];

  if (!mounted) {
    return (
      <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="h-6 w-20 bg-muted rounded-md animate-pulse"
            />
          ))}
        </div>
        <div className="h-10 w-10 bg-muted rounded-md animate-pulse" />
      </div>
    );
  }

  const handleLogin = async () => {
    setAuthLoading(true);
    router.push("/login");
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-sm font-medium transition-colors hover:text-primary relative group"
          >
            {item.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-background/95 backdrop-blur-sm flex flex-col h-[100dvh]">
          <div className="flex justify-between items-center p-4">
            <span className="text-xl font-bold">Oryon</span>
            <button
              className="p-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="border-t border-muted pt-4" />

            <div className="flex flex-col space-y-4">
              {user ? (
                <Button
                  variant="ghost"
                  onClick={() => {
                    signOut();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center space-x-2 justify-center"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Sign Out</span>
                </Button>
              ) : (
                <Button
                  onClick={handleLogin}
                  disabled={authLoading}
                  className="flex items-center space-x-2 justify-center"
                >
                  {authLoading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <LogIn className="h-5 w-5" />
                  )}
                  <span>{authLoading ? "Redirecting..." : "Login"}</span>
                </Button>
              )}

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="relative overflow-hidden glass-effect self-center"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Auth Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        {user ? (
          <Button
            variant="ghost"
            onClick={signOut}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <LogOut className="h-5 w-5" />
            <span className="hidden sm:inline">Sign Out</span>
          </Button>
        ) : (
          <Button
            onClick={handleLogin}
            disabled={authLoading}
            className="flex items-center space-x-2 cursor-pointer"
          >
            {authLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <LogIn className="h-5 w-5" />
            )}
            <span className="hidden sm:inline">
              {authLoading ? "Loading..." : "Login"}
            </span>
          </Button>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="relative overflow-hidden glass-effect animate-glow hover:scale-110 transition-all duration-300 cursor-pointer"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </>
  );
}

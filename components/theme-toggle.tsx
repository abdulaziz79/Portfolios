"use client";
import { LogIn, LogOut, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";

interface ThemeToggleProps {
  user: User | null;
  signOut: () => void;
}

export function ThemeToggle({ user, signOut }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="relative overflow-hidden glass-effect animate-glow hover:scale-110 transition-all duration-300"
      >
        <div className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <div className="flex items-center space-x-4">
      {user ? (
        <LogOut
          onClick={signOut}
          className="h-[1.2rem] w-[1.2rem]  cursor-pointer"
        />
      ) : (
        <LogIn
          onClick={() => router.push("/login")}
          className="h-[1.2rem] w-[1.2rem] text-green-500 cursor-pointer"
        />
      )}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="relative overflow-hidden glass-effect animate-glow hover:scale-110 transition-all duration-300"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}

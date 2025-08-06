"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const LandingThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("landing-theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("landing-theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="z-[250] ml-12 bg rounded-lg hover:bg-landing-base-lighter transition-colors duration-200"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Moon size={20} className="text-landing-subtitle" />
      ) : (
        <Sun size={20} className="text-landing-subtitle" />
      )}
    </button>
  );
};

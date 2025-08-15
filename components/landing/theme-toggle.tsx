"use client";
import { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi2";

export const LandingThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("landing-theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || "light";

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
      className="z-[250] cursor-pointer mr-4 lg:mr-0 ml-0 lg:ml-12 bg rounded-lg hover:bg-landing-base-lighter transition-colors duration-200"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <HiMoon size={20} className="text-landing-subtitle" />
      ) : (
        <HiSun size={20} className="text-landing-subtitle" />
      )}
    </button>
  );
};

"use client";

import { useTheme } from "@/context/theme-context";
import { SunIcon, MoonIcon } from "@/icons";

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} aria-label="Toggle dark mode">
      {theme === "dark" ? (
        <MoonIcon className="w-5 h-5 text-neutral-100" />
      ) : (
        <SunIcon className="w-5 h-5 text-neutral-900" />
      )}
    </button>
  );
}

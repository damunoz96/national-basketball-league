"use client";
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
    const { toggleTheme, theme } = useTheme();
    return (
        <button onClick={toggleTheme} className="p-2 rounded-full text-gray-500 hover:bg-gray-300 transition-colors">
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
    );
};
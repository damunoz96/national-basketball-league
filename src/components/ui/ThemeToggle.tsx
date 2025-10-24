"use client";
import { useTheme as useNextTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
    const { theme, setTheme } = useNextTheme();
    return (
      <div className="cursor-pointer">
        {theme === "light" ? (
          <Moon
            className=""
            onClick={() => setTheme("dark")}
            size={20}
          />
        ) : (
          <Sun
            className=""
            onClick={() => setTheme("light")}
            size={20}
          />
        )}
      </div>
      //<button onClick={()=>setTheme} className="p-2 rounded-full text-gray-500 hover:bg-gray-300 transition-colors">
      //</button>
    );
};
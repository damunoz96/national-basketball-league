import { Shield } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center">
            <Shield className="h-6 w-6 mr-2" />
            <span className="font-bold">National Basketball League</span>
          </div>
          {/* Aquí irían los links de navegación en el futuro */}
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </header>
    );
  };
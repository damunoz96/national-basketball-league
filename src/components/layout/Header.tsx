import { Shield } from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";
import Link from "next/link";

export const Header = () => {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center">
            <Shield className="h-6 w-6 mr-2" />
            <Link className="font-bold" href={"/"}>
              National Basketball League
            </Link>
            <li className="flex m-7 gap-3">
              <ul>
                Teams
              </ul>
              <ul>
                Players
              </ul>
            </li>
          </div>
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </header>
    );
  };
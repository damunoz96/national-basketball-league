import { Shield } from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";
import Link from "next/link";

export const Header = () => {
    return (
      <header className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-primary/20 dark:border-primary/30 px-4 sm:px-6 lg:px-10">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center">
            <Shield className="h-6 w-6 mr-2" />
            <Link className="font-bold" href={"/"}>
              National Basketball League
            </Link>
            <li className="flex m-7 gap-3">
              <ul>News</ul>
              <ul>
                <Link href={"/teams"} className="hover:underline">
                  Teams
                </Link>
              </ul>
              <ul>Players</ul>
              <ul>Stats</ul>
            </li>
          </div>
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </header>
    );
  };
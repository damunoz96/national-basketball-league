import { Footer, Header, Sidebar } from "@/components";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "National Basketball League",
  description: "Platform for the National Basketball League management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
        <ThemeProvider enableSystem attribute="class">
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-1">
              {/* <Sidebar /> */}
              <main className="flex-1 p-6">{children}</main>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

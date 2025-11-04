"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timeout);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3 md:px-8">
        <h1 className="text-lg md:text-xl font-bold">
          <Link href="/">Farbud.dev</Link>
        </h1>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/projects" className="hover:text-blue-500">
            Projects
          </Link>
          <Link href="/about" className="hover:text-blue-500">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-500">
            Contact
          </Link>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? "🌞" : "🌙"}
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md border border-gray-300 dark:border-gray-600"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <Link href="/projects" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <button
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
              setMenuOpen(false);
            }}
            className="p-2 rounded-md border border-gray-300 dark:border-gray-600"
          >
            {theme === "dark" ? "🌞" : "🌙"}
          </button>
        </div>
      )}
    </nav>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [activeTab, setActiveTab] = useState("Beranda");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efek untuk mengubah class 'dark' pada root HTML agar tema bisa diterapkan secara global
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const navLinks = [
    { label: "Beranda", href: "#home" },
    { label: "Tentang", href: "#about" },
    { label: "Proyek", href: "#projects" },
    { label: "Skill", href: "#skills" },
    { label: "Kontak", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-8 pt-4 sm:pt-6 transition-all">
      <div className="max-w-6xl mx-auto bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/90 dark:border-slate-800/80 rounded-full py-2.5 px-4 sm:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-between transition-colors duration-300">
        {/* Logo Brand (Kiri) - Teks disesuaikan untuk responsif */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="relative w-8 h-8 rounded-full overflow-hidden shadow-xs border border-slate-200/80 dark:border-slate-700 bg-slate-800 flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
            <Image
              src="/logo.webp"
              alt="Logo Fiqhan"
              width={32}
              height={32}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <span className="font-semibold text-slate-800 dark:text-white text-sm tracking-tight whitespace-nowrap">
            <span className="inline sm:hidden">Fiqhan</span>
            <span className="hidden sm:inline md:hidden">Fiqhan Chusnan</span>
            <span className="hidden md:inline">Portofolio Fiqhan</span>
          </span>
        </Link>

        {/* Menu Navigasi (Tengah - Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => {
            const isActive = activeTab === link.label;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setActiveTab(link.label)}
                className={`text-xs font-medium transition-all relative py-1.5 ${
                  isActive
                    ? "text-slate-900 dark:text-white font-semibold"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-800 dark:bg-slate-200 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Tombol Aksi (Kanan) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 text-slate-700 dark:text-slate-300 bg-white/90 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 border border-slate-200/75 dark:border-slate-700 rounded-full transition-all shadow-xs hover:shadow-sm active:scale-95"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? (
              <svg
                className="w-4 h-4 text-slate-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4 text-slate-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </button>

          {/* Tombol GitHub */}
          <a
            href="https://github.com/fiqhan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hidden sm:inline-flex items-center justify-center p-2 text-slate-700 dark:text-slate-300 bg-white/90 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 border border-slate-200/70 dark:border-slate-700 rounded-full transition-all shadow-xs hover:shadow-sm active:scale-95"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          {/* Download CV Button */}
          <a
            href="/CV.pdf"
            download
            className="hidden sm:inline-flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white/90 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 border border-slate-200/70 dark:border-slate-700 px-3.5 py-1.5 rounded-full transition-all shadow-xs hover:shadow-sm active:scale-95"
          >
            <svg
              className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span>CV</span>
          </a>

          {/* Hamburger Menu Button (Mobile Only) */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 dark:text-slate-300 bg-white/90 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 border border-slate-200/75 dark:border-slate-700 rounded-full transition-all active:scale-95"
            aria-label="Toggle Mobile Menu"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Navigasi Dropdown (Mobile) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden max-w-6xl mx-auto mt-2 p-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-white/90 dark:border-slate-800/80 rounded-3xl shadow-lg transition-all animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => {
                  setActiveTab(link.label);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-xs font-medium px-4 py-2.5 rounded-xl transition-all ${
                  activeTab === link.label
                    ? "bg-slate-200/70 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between px-2">
              <a
                href="/CV.pdf"
                download
                className="text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1.5 py-1"
              >
                📥 Unduh CV Lengkap
              </a>
              <a
                href="https://github.com/fiqhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-slate-700 dark:text-slate-300 py-1"
              >
                GitHub ↗
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

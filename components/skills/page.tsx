"use client";

import { useState } from "react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Mobile & AR Development",
      description:
        "Pengembangan aplikasi mobile lintas platform & Augmented Reality",
      skills: [
        { name: "Flutter", level: "Advanced" },
        { name: "Dart", level: "Advanced" },
        { name: "Augmented Reality (AR)", level: "Intermediate" },
        { name: "ARCore / Unity AR", level: "Intermediate" },
        { name: "REST API Integration", level: "Advanced" },
      ],
    },
    {
      title: "Web Development",
      description:
        "Pembuatan aplikasi web modern, responsif, dan performa tinggi",
      skills: [
        { name: "Next.js (App Router)", level: "Intermediate" },
        { name: "React.js", level: "Intermediate" },
        { name: "TypeScript", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "HTML5 / CSS3 / JS", level: "Advanced" },
      ],
    },
    {
      title: "UI/UX & Product Design",
      description: "Perancangan antarmuka pengguna & riset pengalaman pengguna",
      skills: [
        { name: "Figma", level: "Advanced" },
        { name: "User Research", level: "Intermediate" },
        { name: "Wireframing & Prototyping", level: "Advanced" },
        { name: "Design Systems", level: "Intermediate" },
      ],
    },
    {
      title: "Cybersecurity & Security",
      description: "Keamanan jaringan, audit kerentanan, dan proteksi sistem",
      skills: [
        { name: "Network Security", level: "Intermediate" },
        { name: "Vulnerability Assessment", level: "Intermediate" },
        { name: "OWASP Top 10", level: "Intermediate" },
        { name: "Web Security Basics", level: "Intermediate" },
      ],
    },
  ];

  return (
    // Tambahkan scroll-mt-28 agar judul tidak tertutup header melayang saat di-scroll
    <section id="skills" className="py-6 px-4 sm:px-6 scroll-mt-28">
      <div className="max-w-6xl mx-auto bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/80 dark:border-slate-800/80 rounded-[2.5rem] p-6 sm:p-10 md:p-12 shadow-[0_10px_40px_rgb(0,0,0,0.03)] transition-colors duration-300">
        {/* Header Section */}
        <div className="space-y-2 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200/60 dark:bg-slate-800/80 border border-slate-300/40 dark:border-slate-700 text-xs font-medium text-slate-600 dark:text-slate-300">
            Keahlian & Tech Stack Saya
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Keahlian{" "}
            <span className="text-slate-600 dark:text-slate-400 font-medium">
              & Teknologi
            </span>
          </h2>
        </div>

        {/* Grid 2 Kategori Utama */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 hover:bg-white/80 dark:hover:bg-slate-800 hover:border-white dark:hover:border-slate-600 transition-all duration-300 shadow-2xs hover:shadow-md flex flex-col justify-between gap-5"
            >
              {/* Header Kategori */}
              <div className="space-y-1 pb-3 border-b border-slate-200/60 dark:border-slate-700/60">
                <h3 className="font-bold text-slate-800 dark:text-white text-base sm:text-lg">
                  {category.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Grid 2 Kolom Rapi untuk Skill Item */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center justify-between gap-2 bg-white/90 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-700 px-3.5 py-2.5 rounded-2xl shadow-2xs hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
                  >
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-lg border border-slate-200/60 dark:border-slate-700 shrink-0">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

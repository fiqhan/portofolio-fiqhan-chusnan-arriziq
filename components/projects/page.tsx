"use client";

import { useState } from "react";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const categories = ["Semua", "Mobile & AR", "Web", "UI/UX", "Cybersecurity"];

  const projects = [
    {
      title: "MatchVenture - Interactive Web Game",
      category: "Web",
      description:
        "Platform game web interaktif berbasis teka-teki (puzzle) yang menawarkan pengalaman bermain seru dengan antarmuka yang responsif dan performa tinggi.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Game Logic"],
      link: "https://matchventure.skylinedev.web.id", // Disesuaikan dengan domain asli
    },
    {
      title: "DiengVibe - AR Cultural Heritage",
      category: "Mobile & AR",
      description:
        "Aplikasi mobile interaktif berbasis Flutter & AR yang menggabungkan visualisasi 3D situs bersejarah Dieng dengan pengalaman edutainment.",
      tags: ["Flutter", "Augmented Reality", "3D Model", "Dart"],
      link: "https://github.com/fiqhan",
    },
    {
      title: "UNSIQ Student & Campus Portal",
      category: "Web",
      description:
        "Platform web akademis & informasi mahasiswa berkinerja tinggi dengan antarmuka yang bersih, cepat, dan mudah diakses.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
      link: "https://github.com/fiqhan",
    },
    {
      title: "SecureAuth & Vulnerability Audit",
      category: "Cybersecurity",
      description:
        "Sistem audit keamanan web dan pengujian penetrasi (pentest) untuk mendeteksi kerentanan OWASP Top 10.",
      tags: ["Security Audit", "Pentesting", "OAuth2", "Encryption"],
      link: "https://github.com/fiqhan",
    },
    {
      title: "DiengVibe - Smart-Tourism UI Kit",
      category: "UI/UX",
      description:
        "Desain sistem antarmuka pengguna modern berkonsep Glassmorphism khusus untuk aplikasi pariwisata daerah.",
      tags: ["Figma", "UI/UX", "Design System", "Prototyping"],
      link: "https://github.com/fiqhan",
    },
  ];

  const filteredProjects =
    activeCategory === "Semua"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-6 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/80 dark:border-slate-800/80 rounded-[2.5rem] p-6 sm:p-10 md:p-12 shadow-[0_10px_40px_rgb(0,0,0,0.03)] transition-colors duration-300">
        {/* Header & Filter Category */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200/60 dark:bg-slate-800/80 border border-slate-300/40 dark:border-slate-700 text-xs font-medium text-slate-600 dark:text-slate-300">
              Proyek Saya
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Proyek{" "}
              <span className="text-slate-600 dark:text-slate-400 font-medium">
                Pilihan
              </span>
            </h2>
          </div>

          {/* Filter Pills - Responsif & Fleksibel */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none -mx-2 px-2 sm:mx-0 sm:px-0 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-medium px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-slate-800 dark:bg-slate-700 text-white shadow-xs"
                    : "bg-white/70 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid - 1 Kolom Mobile / 2 Kolom Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-3xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 hover:bg-white/80 dark:hover:bg-slate-800 hover:border-white dark:hover:border-slate-600 transition-all duration-300 shadow-2xs hover:shadow-md flex flex-col justify-between gap-6"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider bg-slate-200/60 dark:bg-slate-700 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors p-1"
                    aria-label="View Project"
                  >
                    <svg
                      className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200/50 dark:border-slate-700/50">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] text-slate-600 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-700/80 border border-slate-200/70 dark:border-slate-600 px-2.5 py-1 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

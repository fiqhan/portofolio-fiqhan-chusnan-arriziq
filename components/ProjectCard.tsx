"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Star,
  Zap,
  Shield,
  Smartphone,
} from "lucide-react";

interface Badge {
  icon: React.ReactNode;
  label: string;
  color: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  badges?: Badge[];
  isFlagship?: boolean;
  summary?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  badges = [],
  isFlagship = false,
  summary,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <motion.div
      className={`relative group ${
        isFlagship ? "col-span-full md:col-span-2" : ""
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Card Container */}
      <div
        className={`
          relative h-full p-6 rounded-2xl border transition-all duration-300
          bg-slate-900/80 border-slate-800 backdrop-blur-sm
          hover:border-cyan-500/50 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.2)]
          ${isFlagship ? "glow" : ""}
        `}
      >
        {/* Gradient Overlay on Hover */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(6, 182, 212, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)",
          }}
        />

        {/* Flagship Badge */}
        {isFlagship && (
          <div className="absolute -top-3 -right-3">
            <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-xs font-bold text-white shadow-lg">
              <Star className="w-3 h-3" />
              FLAGSHIP
            </div>
          </div>
        )}

        {/* Content */}
        <div className="relative z-10">
          {/* Title */}
          <h3
            className={`font-bold mb-2 ${isFlagship ? "text-2xl" : "text-xl"}`}
          >
            <span className="gradient-text">{title}</span>
          </h3>

          {/* Description */}
          <p className="text-slate-400 mb-4 text-sm leading-relaxed">
            {description}
          </p>

          {/* Technical Highlights Badges */}
          {badges.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  className={`badge ${badge.color}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {badge.icon}
                  {badge.label}
                </motion.div>
              ))}
            </div>
          )}

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs rounded-full bg-slate-800 text-slate-300 border border-slate-700"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Hover Summary (Revealed on Hover) */}
          <motion.div
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            whileHover={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="pt-4 mt-4 border-t border-slate-700/50">
              <p className="text-sm text-slate-300 leading-relaxed">
                {summary ||
                  "Click to view project details and technical case study."}
              </p>
            </div>
          </motion.div>

          {/* Links */}
          <div className="flex gap-3 mt-4 pt-4 border-t border-slate-700/50">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-300 transition-colors"
              >
                <Github className="w-4 h-4" />
                Source
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Helper function to create project data
export const createProjectBadges = (badges: string[]): Badge[] => {
  const badgeConfig: Record<string, { icon: React.ReactNode; color: string }> =
    {
      "98% Device Compatibility": {
        icon: <Smartphone className="w-3 h-3" />,
        color: "badge-green",
      },
      "Unity-to-Native Migration": {
        icon: <Zap className="w-3 h-3" />,
        color: "badge-blue",
      },
      "ARCore Optimized": {
        icon: <Shield className="w-3 h-3" />,
        color: "badge-purple",
      },
      "Google Play Compliant": {
        icon: <Shield className="w-3 h-3" />,
        color: "badge-cyan",
      },
    };

  return badges.map((b) => ({
    label: b,
    ...(badgeConfig[b] || {
      icon: <Zap className="w-3 h-3" />,
      color: "badge-blue",
    }),
  }));
};

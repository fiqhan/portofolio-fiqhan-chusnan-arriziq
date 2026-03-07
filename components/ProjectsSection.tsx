"use client";

import { motion } from "framer-motion";
import { Smartphone, Zap, Shield, Star } from "lucide-react";
import ProjectCard, { createProjectBadges } from "./ProjectCard";

const projects = [
  {
    title: "DiengVibe",
    description:
      "An immersive AR-powered travel companion app showcasing the Dieng Plateau cultural heritage. Features temple recognition, historical information overlay, and interactive cultural experiences.",
    tech: ["Flutter", "ARCore", "TensorFlow Lite", "Firebase", "GetX"],
    isFlagship: true,
    summary:
      "Successfully migrated from Unity to Flutter Native, achieving 98% device compatibility while maintaining AR features. Solved critical Oppo A77s compatibility and Google Play policy issues.",
    liveUrl: "https://play.google.com/store/apps/details?id=com.diengvibe.app",
    badges: createProjectBadges([
      "98% Device Compatibility",
      "Unity-to-Native Migration",
      "ARCore Optimized",
      "Google Play Compliant",
    ]),
  },
  {
    title: "AR Heritage Navigator",
    description:
      "Mobile AR application for exploring historical monuments with real-time object recognition and contextual information display.",
    tech: ["Flutter", "ARKit", "Python", "OpenCV"],
    isFlagship: false,
    summary:
      "Integrated computer vision models for accurate monument identification with 95% accuracy rate.",
    githubUrl: "https://github.com",
  },
  {
    title: "Performance Profiler",
    description:
      "Developer tool for analyzing and optimizing Flutter app performance with real-time metrics and heatmap visualization.",
    tech: ["Flutter", "Dart", "Firebase", "Custom Paint"],
    isFlagship: false,
    summary:
      "Reduced app startup time by 40% through systematic profiling and optimization techniques.",
    githubUrl: "https://github.com",
  },
  {
    title: "Cultural Quiz AR",
    description:
      "Educational gamified AR experience testing knowledge of Indonesian cultural heritage through interactive 3D models.",
    tech: ["Flutter", "model_viewer_plus", "Provider", "REST API"],
    isFlagship: false,
    summary:
      "Engaged 50K+ users with educational AR content featuring 100+ cultural artifacts.",
    liveUrl: "https://culturalquiz.app",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A showcase of my work in Flutter development, AR experiences, and
            mobile optimization
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={project.isFlagship ? "md:col-span-2" : ""}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {/* View More Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="https://github.com/fiqhan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            View All Projects on GitHub
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

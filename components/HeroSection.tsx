"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import FloatingCloud from "./FloatingCloud";

export default function HeroSection() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating Tech Cloud */}
      <FloatingCloud />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Name & Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="text-cyan-400 font-mono text-sm md:text-base mb-4 tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {"<Hello World />"}
          </motion.p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-slate-200">I&apos;m </span>
            <span className="gradient-text">Fiqhan Chusnan Arriziq</span>
          </h1>

          <motion.p
            className="text-xl md:text-2xl text-slate-400 mb-8 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Fullstack Developer &amp; AR Enthusiast
          </motion.p>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold">
            <span className="gradient-text">Bridging Heritage</span>
            <span className="text-slate-300"> and </span>
            <span className="gradient-text">Technology</span>
            <span className="text-slate-300"> through </span>
            <span className="gradient-text">AR</span>
          </h2>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Lead Developer of{" "}
          <span className="text-cyan-400 font-semibold">DiengVibe</span> —
          Crafting immersive AR experiences that bring cultural heritage to life
          on mobile devices.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            onClick={scrollToProjects}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold text-white overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <div className="flex gap-4">
            <motion.a
              href="https://github.com/fiqhan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800/50 border border-slate-700 hover:border-cyan-500 hover:bg-slate-800 transition-colors"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5 text-slate-400 hover:text-cyan-400 transition-colors" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/fiqhan-arriziq-247b59309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800/50 border border-slate-700 hover:border-blue-500 hover:bg-slate-800 transition-colors"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5 text-slate-400 hover:text-blue-400 transition-colors" />
            </motion.a>
            <motion.a
              href="mailto:bm240521@gmail.com"
              className="p-3 rounded-full bg-slate-800/50 border border-slate-700 hover:border-purple-500 hover:bg-slate-800 transition-colors"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5 text-slate-400 hover:text-purple-400 transition-colors" />
            </motion.a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {[
            { label: "Years Experience", value: "3+" },
            { label: "Projects Completed", value: "5+" },
            { label: "App Downloads", value: "500K+" },
            { label: "AR Features", value: "3+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + index * 0.1 }}
              whileHover={{
                scale: 1.02,
                borderColor: "rgba(6, 182, 212, 0.5)",
              }}
            >
              <div className="text-2xl md:text-3xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-slate-500 mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5 },
          y: { duration: 2, repeat: Infinity },
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-cyan-400"
            animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}

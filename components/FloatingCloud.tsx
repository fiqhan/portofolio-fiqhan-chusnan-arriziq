"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Cpu, Globe, Sparkles, Layers } from "lucide-react";

const techStack = [
  { icon: Code2, label: "Flutter", color: "from-blue-400 to-cyan-400" },
  { icon: Globe, label: "ARCore", color: "from-green-400 to-emerald-400" },
  { icon: Smartphone, label: "Native", color: "from-purple-400 to-pink-400" },
  { icon: Cpu, label: "TensorFlow", color: "from-orange-400 to-red-400" },
  { icon: Sparkles, label: "Unity", color: "from-yellow-400 to-amber-400" },
  { icon: Layers, label: "3D Models", color: "from-indigo-400 to-violet-400" },
];

const cloudPositions = [
  { x: 10, y: 10, delay: 0 },
  { x: 85, y: 15, delay: 0.5 },
  { x: 20, y: 80, delay: 1 },
  { x: 75, y: 75, delay: 1.5 },
  { x: 50, y: 5, delay: 2 },
  { x: 90, y: 50, delay: 0.8 },
];

// Pre-defined particle positions to avoid Math.random during render
const particlePositions = [
  { x: 5, y: 20, duration: 12, delay: 0 },
  { x: 15, y: 45, duration: 15, delay: 1 },
  { x: 25, y: 70, duration: 18, delay: 2 },
  { x: 35, y: 30, duration: 14, delay: 0.5 },
  { x: 45, y: 55, duration: 16, delay: 1.5 },
  { x: 55, y: 80, duration: 13, delay: 2.5 },
  { x: 65, y: 25, duration: 17, delay: 0.8 },
  { x: 75, y: 50, duration: 19, delay: 1.8 },
  { x: 85, y: 75, duration: 11, delay: 3 },
  { x: 95, y: 40, duration: 14, delay: 0.3 },
  { x: 8, y: 60, duration: 16, delay: 1.2 },
  { x: 18, y: 85, duration: 12, delay: 2.2 },
  { x: 28, y: 15, duration: 18, delay: 0.7 },
  { x: 38, y: 40, duration: 15, delay: 1.7 },
  { x: 48, y: 65, duration: 13, delay: 2.7 },
  { x: 58, y: 90, duration: 17, delay: 0.4 },
  { x: 68, y: 35, duration: 14, delay: 1.4 },
  { x: 78, y: 60, duration: 16, delay: 2.4 },
  { x: 88, y: 85, duration: 11, delay: 3.2 },
  { x: 98, y: 20, duration: 15, delay: 0.6 },
];

export default function FloatingCloud() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {techStack.map((tech, index) => {
        const position = cloudPositions[index];
        const Icon = tech.icon;

        return (
          <motion.div
            key={tech.label}
            className="absolute flex flex-col items-center gap-2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.1, 1],
              y: [0, -15, 0],
            }}
            transition={{
              opacity: {
                duration: 3,
                repeat: Infinity,
                delay: position.delay,
                ease: "easeInOut",
              },
              scale: {
                duration: 4,
                repeat: Infinity,
                delay: position.delay,
                ease: "easeInOut",
              },
              y: {
                duration: 4,
                repeat: Infinity,
                delay: position.delay,
                ease: "easeInOut",
              },
            }}
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
            }}
          >
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-lg`}
            >
              <Icon className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs font-medium text-slate-400 bg-slate-900/60 px-2 py-1 rounded-full backdrop-blur-sm">
              {tech.label}
            </span>
          </motion.div>
        );
      })}

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        {cloudPositions.map((pos, i) => {
          const nextPos = cloudPositions[(i + 1) % cloudPositions.length];
          return (
            <motion.line
              key={i}
              x1={`${pos.x}%`}
              y1={`${pos.y}%`}
              x2={`${nextPos.x}%`}
              y2={`${nextPos.y}%`}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </svg>

      {/* Ambient Particles */}
      {particlePositions.map((particle, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          initial={{
            x: `${particle.x}%`,
            y: `${particle.y}%`,
            opacity: 0,
          }}
          animate={{
            y: [`${particle.y}%`, `${(particle.y + 30) % 100}%`],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

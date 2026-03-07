"use client";

import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Stage,
  Html,
  Environment,
  PresentationControls,
  Float,
  Sparkles,
} from "@react-three/drei";
import { motion } from "framer-motion";
import { RotateCcw, ZoomIn, Eye } from "lucide-react";
import * as THREE from "three";

// Loading component for the 3D model
function Loader() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-2">
        <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
        <span className="text-slate-400 text-sm">Loading 3D Model...</span>
      </div>
    </Html>
  );
}

// Temple model component - replace with your actual .glb file
function TempleModel({
  modelPath = "/models/temple.glb",
  autoRotate = true,
}: {
  modelPath?: string;
  autoRotate?: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (autoRotate && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
    }
  });

  // Placeholder temple-like structure
  return (
    <group ref={groupRef}>
      {/* Main Temple Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.5, 2, 1.5]} />
        <meshStandardMaterial color="#8B7355" roughness={0.8} metalness={0.1} />
      </mesh>

      {/* Roof */}
      <mesh position={[0, 1.5, 0]}>
        <coneGeometry args={[1.2, 1, 4]} />
        <meshStandardMaterial color="#4A4A4A" roughness={0.6} metalness={0.2} />
      </mesh>

      {/* Top Spire */}
      <mesh position={[0, 2.2, 0]}>
        <coneGeometry args={[0.3, 0.8, 8]} />
        <meshStandardMaterial color="#D4AF37" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Base Platform */}
      <mesh position={[0, -1.1, 0]}>
        <cylinderGeometry args={[1.8, 2, 0.2, 32]} />
        <meshStandardMaterial color="#696969" roughness={0.9} />
      </mesh>
    </group>
  );
}

// Interactive 3D Scene
function Scene({ modelPath }: { modelPath?: string }) {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />

      {/* Environment for reflections */}
      <Environment preset="sunset" />

      {/* Sparkles effect */}
      <Sparkles count={50} scale={5} size={2} speed={0.5} color="#06b6d4" />

      {/* Presentation Controls for interaction */}
      <PresentationControls
        global
        rotation={[0, 0.3, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <Suspense fallback={<Loader />}>
            <Stage environment="sunset" intensity={0.5}>
              <TempleModel modelPath={modelPath} />
            </Stage>
          </Suspense>
        </Float>
      </PresentationControls>

      {/* Orbit Controls (secondary) */}
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={3}
        maxDistance={10}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
}

interface ModelViewerProps {
  modelPath?: string;
  title?: string;
  description?: string;
}

export default function ModelViewer({
  modelPath = "/models/temple.glb",
  title = "Interactive 3D Heritage",
  description = "Explore the temple model in 3D. Drag to rotate, scroll to zoom.",
}: ModelViewerProps) {
  const [isInteracting, setIsInteracting] = useState(false);

  const words = title.split(" ");
  const lastWord = words.pop();
  const titleText = words.join(" ");

  const instructions = [
    { icon: "👆", label: "Drag to rotate", desc: "Orbit around the model" },
    { icon: "🔍", label: "Scroll to zoom", desc: "Get closer or further" },
    { icon: "📱", label: "View in AR", desc: "On supported devices" },
  ];

  return (
    <section className="section relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="section-title">
            {titleText} <span className="gradient-text">{lastWord}</span>
          </h2>
          <p className="section-subtitle">{description}</p>
        </motion.div>

        {/* 3D Canvas Container */}
        <motion.div
          className="relative aspect-square max-w-2xl mx-auto rounded-2xl overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 glow-cyan"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onPointerDown={() => setIsInteracting(true)}
          onPointerUp={() => setIsInteracting(false)}
        >
          {/* Canvas */}
          <Canvas
            shadows
            camera={{ position: [0, 0, 6], fov: 45 }}
            gl={{ antialias: true, alpha: true }}
            dpr={[1, 2]}
          >
            <Scene modelPath={modelPath} />
          </Canvas>

          {/* Controls Overlay */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Eye className="w-4 h-4" />
              {isInteracting ? "Interacting..." : "Drag to rotate"}
            </div>
            <div className="flex items-center gap-2">
              <button
                className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                title="Reset view"
                onClick={() => window.location.reload()}
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                title="Zoom in"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Loading Overlay */}
          <div className="absolute top-4 left-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 backdrop-blur-sm text-xs text-slate-300">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              WebGL Active
            </div>
          </div>
        </motion.div>

        {/* Instructions */}
        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {instructions.map((instruction, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-center"
            >
              <div className="text-2xl mb-2">{instruction.icon}</div>
              <div className="text-sm font-medium text-slate-300">
                {instruction.label}
              </div>
              <div className="text-xs text-slate-500">{instruction.desc}</div>
            </div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          className="mt-6 text-center text-slate-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Place your .glb model in the{" "}
          <code className="px-2 py-1 rounded bg-slate-800 text-cyan-400">
            public/models/
          </code>{" "}
          folder
        </motion.p>
      </div>
    </section>
  );
}

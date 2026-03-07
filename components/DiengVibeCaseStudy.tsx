"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  X,
  AlertTriangle,
  CheckCircle2,
  Zap,
  Shield,
  Smartphone,
} from "lucide-react";
import CodeBlock from "./CodeBlock";

const modelViewerCode = `import 'package:model_viewer_plus/model_viewer_plus.dart';

class TempleModelViewer extends StatelessWidget {
  final String modelPath;
  final String templeName;

  const TempleModelViewer({
    super.key,
    required this.modelPath,
    required this.templeName,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        // 3D Model Viewer with AR support
        SizedBox(
          height: 400,
          child: ModelViewer(
            src: modelPath, // e.g., 'assets/models/prambanan.glb'
            alt: '3D model of \$templeName',
            ar: true, // Enable AR viewing
            arModes: const ['scene-viewer', 'webxr', 'quick-look'],
            autoRotate: true,
            cameraControls: true,
            backgroundColor: const Color(0xFF0F172A),
            shadowIntensity: 1,
            exposure: 0.8,
            loading: Loading.lazy,
          ),
        ),
        // AR Button custom styling
        Container(
          margin: const EdgeInsets.only(top: 16),
          child: const Text(
            'Tap model to view in AR',
            style: TextStyle(color: Colors.grey),
          ),
        ),
      ],
    );
  }
}`;

const comparisons = [
  {
    title: "Device Compatibility",
    before: {
      title: "Unity Build",
      issues: [
        "Only 62% of Android devices supported",
        "High APK size (150MB+)",
        "Heavy battery consumption",
        "Slow cold start time (8s+)",
      ],
      icon: <Smartphone className="w-5 h-5 text-red-400" />,
    },
    after: {
      title: "Flutter Native",
      improvements: [
        "98% Android device compatibility",
        "Reduced APK to 25MB",
        "Optimized battery usage",
        "Fast cold start (2s)",
      ],
      icon: <Smartphone className="w-5 h-5 text-green-400" />,
    },
  },
  {
    title: "Google Play Policy",
    before: {
      title: "Unity Issues",
      issues: [
        "SDK transparency requirements",
        "Multiple permission requests",
        "Unclear data handling disclosure",
        "Delayed review process",
      ],
      icon: <AlertTriangle className="w-5 h-5 text-red-400" />,
    },
    after: {
      title: "Flutter Solution",
      improvements: [
        "Full SDK transparency achieved",
        "Minimal permissions required",
        "Clear data handling policies",
        "Fast review approval",
      ],
      icon: <CheckCircle2 className="w-5 h-5 text-green-400" />,
    },
  },
  {
    title: "AR Performance",
    before: {
      title: "Unity AR",
      issues: [
        "High memory footprint",
        "Frame drops on mid-range devices",
        "Limited ARCore optimization",
        "Inconsistent tracking quality",
      ],
      icon: <Zap className="w-5 h-5 text-red-400" />,
    },
    after: {
      title: "Native ARCore",
      improvements: [
        "Memory optimized by 60%",
        "60fps on 95% of devices",
        "Deep ARCore integration",
        "Stable tracking algorithm",
      ],
      icon: <Zap className="w-5 h-5 text-green-400" />,
    },
  },
];

export default function DiengVibeCaseStudy() {
  return (
    <section className="section relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
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
            DiengVibe <span className="gradient-text">Case Study</span>
          </h2>
          <p className="section-subtitle">
            Deep dive into the Unity to Flutter Native AR migration
          </p>
        </motion.div>

        {/* Technical Highlights */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {[
            {
              icon: <Smartphone className="w-6 h-6" />,
              value: "98%",
              label: "Device Compatibility",
              color: "from-green-400 to-emerald-500",
            },
            {
              icon: <Zap className="w-6 h-6" />,
              value: "75%",
              label: "Size Reduction",
              color: "from-cyan-400 to-blue-500",
            },
            {
              icon: <Shield className="w-6 h-6" />,
              value: "100%",
              label: "Play Policy Compliant",
              color: "from-purple-400 to-pink-500",
            },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm text-center"
            >
              <div
                className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}
              >
                <div className="text-white">{stat.icon}</div>
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Before/After Comparisons */}
        <div className="space-y-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Problem <span className="gradient-text">vs</span> Solution
          </h3>

          {comparisons.map((comparison, index) => (
            <motion.div
              key={comparison.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Before Card */}
              <div className="p-6 rounded-2xl bg-red-950/20 border border-red-900/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-red-500/20">
                    {comparison.before.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-red-400">
                    {comparison.before.title}
                  </h4>
                </div>
                <ul className="space-y-3">
                  {comparison.before.issues.map((issue, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-slate-400"
                    >
                      <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arrow */}
              <div className="hidden lg:flex items-center justify-center">
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-6 h-6 text-white" />
                </motion.div>
              </div>

              {/* After Card */}
              <div className="p-6 rounded-2xl bg-green-950/20 border border-green-900/30 lg:col-span-2 lg:w-1/2 lg:mx-auto">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-green-500/20">
                    {comparison.after.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-green-400">
                    {comparison.after.title}
                  </h4>
                </div>
                <ul className="space-y-3">
                  {comparison.after.improvements.map((improvement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-slate-300"
                    >
                      <Check className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>{improvement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Code Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            3D Model Integration
          </h3>
          <p className="text-slate-400 text-center mb-6 max-w-2xl mx-auto">
            Using model_viewer_plus to embed interactive 3D temple models with
            AR support
          </p>
          <div className="max-w-3xl mx-auto">
            <CodeBlock
              code={modelViewerCode}
              language="dart"
              filename="temple_model_viewer.dart"
            />
          </div>
        </motion.div>

        {/* Key Takeaways */}
        <motion.div
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-cyan-400" />
            Key Takeaways
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
            {[
              "Flutter Native provides better performance and smaller bundle size",
              "Direct ARCore integration enables deeper hardware optimization",
              "Proper SDK documentation ensures smooth Play Store approval",
              "TensorFlow Lite enables on-device ML without cloud dependency",
            ].map((takeaway, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

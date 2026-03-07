import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import DiengVibeCaseStudy from "@/components/DiengVibeCaseStudy";
import ModelViewer from "@/components/ModelViewer";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712]">
      {/* Hero Section */}
      <HeroSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* DiengVibe Case Study */}
      <DiengVibeCaseStudy />

      {/* 3D Model Viewer */}
      <ModelViewer />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Fiqhan Chusnan Arriziq. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs mt-2">
            Built with Next.js, Tailwind CSS, Framer Motion & React Three Fiber
          </p>
        </div>
      </footer>
    </main>
  );
}


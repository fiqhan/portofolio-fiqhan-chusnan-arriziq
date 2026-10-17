import About from "@/components/about/page";
import Articles from "@/components/article/page";
import Contact from "@/components/contacts/page";
import Header from "@/components/header/page";
import Hero from "@/components/heroSection/page";
import Projects from "@/components/projects/page";
import Skills from "@/components/skills/page";

export default function Home() {
  return (
    <main className="min-h-screen pb-16">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Articles />
      <Contact />
    </main>
  );
}

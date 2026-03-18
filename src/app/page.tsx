import About from "@/components/ui/About";
import Contact from "@/components/ui/Contact";
import Experience from "@/components/ui/Experience";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import Overall from "@/components/ui/Overall";
import Projects from "@/components/ui/Projects";
import { Separator } from "@/components/ui/separator";
import Services from "@/components/ui/Services";
import Skills from "@/components/ui/Skills";

export default function Home() {
  return (
    <div className="w-full flex-col">
      <Header />
      <div id="overall" className="mt-20 scroll-mt-24">
        <Overall />
      </div>
      <div id="about" className="mt-4 scroll-mt-24">
        <About />
      </div>
      <div id="skills" className="mt-4 scroll-mt-24">
        <Skills />
      </div>
      <div id="projects" className="mt-4 scroll-mt-24">
        <Projects />
      </div>
      <div id="experience" className="mt-4 scroll-mt-24">
        <Experience />
      </div>
      <div id="services" className="mt-4 scroll-mt-24">
        <Services />
      </div>
      <div id="contact" className="mt-4 scroll-mt-24">
        <Contact />
      </div>
      <Separator />
      <Footer />
    </div>
  );
}

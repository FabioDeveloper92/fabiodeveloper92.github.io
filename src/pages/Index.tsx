
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="space-y-4 md:space-y-8">
        <AboutMe />
        <Resume />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;

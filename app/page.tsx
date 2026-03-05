import Splash from "./components/Splash";
import AnimatedBackground from "./components/AnimatedBackground";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import EducationCerts from "./sections/EducationCerts";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Splash />
      <AnimatedBackground />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <EducationCerts />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

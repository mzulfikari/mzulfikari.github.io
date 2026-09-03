import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import EngineeringMetrics from "@/components/EngineeringMetrics";
import About from "@/components/About";
import Skills from "@/components/Skills";
import EngineeringFocus from "@/components/EngineeringFocus";
import FeaturedProject from "@/components/FeaturedProject";
import Projects from "@/components/Projects";
import Architecture from "@/components/Architecture";
import Security from "@/components/Security";
import Github from "@/components/Github";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import EngineeringPrinciples from "@/components/EngineeringPrinciples";
import CurrentlyLearning from "@/components/CurrentlyLearning";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <EngineeringMetrics />
        <About />
        <Skills />
        <EngineeringFocus />
        <FeaturedProject />
        <Projects />
        <Architecture />
        <Security />
        <Github />
        <CurrentlyBuilding />
        <EngineeringPrinciples />
        <CurrentlyLearning />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

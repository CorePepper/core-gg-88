import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Team from "@/components/Team";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import CTASection from "@/components/CTASection";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="bg-navy min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Team />
      <About />
      <Reviews />
      <CTASection />
      <Contact />
    </div>
  );
};

export default Index;
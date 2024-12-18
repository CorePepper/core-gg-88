import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Reviews from "@/components/Reviews";
import CTASection from "@/components/CTASection";
import Team from "@/components/Team";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="bg-navy min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Reviews />
      <CTASection />
      <Team />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
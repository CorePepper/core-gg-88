import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen bg-navy relative overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/90 to-navy/80" />
        <div className="absolute inset-0 bg-[url('/lovable-uploads/5033d188-8ff7-40bd-a808-a8aecc24cdd6.png')] bg-cover bg-center opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl md:text-6xl text-gold font-extrabold mb-4 drop-shadow-lg animate-fade-in leading-tight">
            <span className="block mb-2">Pushing the Edge of Excellence,</span>
            <span className="block">Defining Victory.</span>
          </div>
          <p className="text-lg md:text-xl text-white/80 mb-8">
            ゲームプレイヤーのための最高品質を追求する企業
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center px-8 py-3 bg-gold text-navy font-semibold rounded-full hover:bg-gold-light transition-colors group"
          >
            お問い合わせはこちら
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
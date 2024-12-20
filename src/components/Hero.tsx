import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="h-[calc(100vh-80px)] bg-navy relative overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/90 to-navy/80" />
        <div 
          className="absolute inset-0 bg-[url('/lovable-uploads/5033d188-8ff7-40bd-a808-a8aecc24cdd6.png')] bg-cover bg-center opacity-30" 
          role="img" 
          aria-label="ゲーム用指サックの使用イメージ" 
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-gold font-extrabold mb-4 sm:mb-6 leading-tight">
            <span className="block md:hidden">Pushing the Edge</span>
            <span className="block md:hidden">of Excellence,</span>
            <span className="block md:hidden">Defining Victory.</span>
            <span className="hidden md:inline">Pushing the Edge of Excellence,</span>
            <span className="hidden md:block mt-2">Defining Victory.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 sm:mb-12 leading-relaxed">
            <span className="block md:inline">ゲームプレイヤーのための</span>
            <span className="block md:inline md:ml-1">最高品質を追求</span>
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-gold text-navy font-bold rounded-full hover:bg-gold-light transition-colors group"
          >
            お問い合わせはこちら
            <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
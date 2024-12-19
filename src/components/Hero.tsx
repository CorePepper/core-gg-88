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
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl text-gold font-extrabold mb-6 drop-shadow-lg">
            <span className="block">Pushing the Edge of Excellence,</span>
            <span className="block mt-2">Defining Victory.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-12 px-4">
            ゲームプレイヤーのための最高品質を追求する企業
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center px-8 py-4 text-lg bg-gold text-navy font-bold rounded-full hover:bg-gold-light transition-colors group"
          >
            お問い合わせはこちら
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
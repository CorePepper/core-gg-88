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
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/90 to-navy/80" />
        <div className="absolute inset-0 bg-[url('/lovable-uploads/c7423fdc-3e3f-42a1-af85-d180d4828b82.jpg')] bg-cover bg-center opacity-30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">合同会社</span>
            <span className="text-gold">CORE</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gold font-light mb-4">
            日本から世界へ、ゲームと革新を届ける
          </p>
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
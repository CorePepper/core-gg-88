import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-navy relative overflow-hidden flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/90 to-navy/80" />
        <div className="absolute inset-0 bg-[url('/lovable-uploads/1d482bec-0a1f-4059-8745-c1939374924f.png')] bg-cover bg-center opacity-30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Core</span>
            <span className="text-gold"> 指サック</span>
            <span className="text-white"> プレミアム</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gold font-light mb-4">
            至高のプレーイング
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-8">
            日本一位のチームが開発した最高品質のゲーミングフィンガーサック
          </p>
          <a
            href="#"
            className="inline-flex items-center px-8 py-3 bg-gold text-navy font-semibold rounded-full hover:bg-gold-light transition-colors group"
          >
            Amazonで購入する
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
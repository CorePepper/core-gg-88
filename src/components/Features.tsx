import { Star, ThumbsUp, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Star,
    title: "累計10万個突破の信頼品質",
    description: (
      <>
        多くのプレイヤーに選ばれ
        <br />
        続ける実績が証明する品質
      </>
    ),
  },
  {
    icon: ThumbsUp,
    title: "Amazonベストセラー獲得",
    description: (
      <>
        ユーザーレビューで高評価を
        <br />
        獲得し続けています
      </>
    ),
  },
  {
    icon: Zap,
    title: (
      <>
        耐久性・快適さ
        <br />
        最速反応を実現
      </>
    ),
    description: (
      <>
        特殊素材による最速のタッチ反応と
        <br />
        完璧なフィット感
      </>
    ),
  },
];

const Features = () => {
  return (
    <section id="products" className="py-16 sm:py-20 bg-navy-light relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-navy/80 z-10" />
        <div className="absolute inset-0 bg-[url('/lovable-uploads/61ef5862-80bb-417a-ae78-f5d44d392fb4.png')] bg-cover bg-center opacity-30 scale-90" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
          <span className="text-gold">CORE</span>
          <span className="text-white">開発製品</span>
        </h2>
        
        <div className="text-center mb-10 sm:mb-12 mt-12 sm:mt-16">
          <h3 className="text-3xl sm:text-4xl md:text-5xl text-gold font-bold mb-4 sm:mb-6 animate-glow drop-shadow-lg">
            Core指サックプレミアム
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-white/80 px-4">
            <span className="block md:inline">日本一位のチームが開発した</span>
            <span className="block md:inline md:ml-2">最高品質のゲーミング指サック</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-navy/80 backdrop-blur-sm p-6 sm:p-8 rounded-lg hover:bg-navy/70 transition-colors text-center"
            >
              <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 text-gold mb-4 sm:mb-6 mx-auto" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
                {feature.title}
              </h3>
              <p className="text-white/80 text-base sm:text-lg">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16 space-y-4 sm:space-y-6">
          <a
            href="https://amzn.asia/d/ghIgPyc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-gold text-navy font-bold rounded-full hover:bg-gold-light transition-colors group"
          >
            Amazonで購入する
            <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <Link
            to="/reviews"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-white text-navy font-bold rounded-full border-2 border-gold hover:bg-gray-200 transition-colors group"
          >
            プロ選手の声
            <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
import { Star, ThumbsUp, Zap, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Star,
    title: "累計10万個突破の信頼品質",
    description: "多くのプレイヤーに選ばれ続ける実績が証明する品質",
  },
  {
    icon: ThumbsUp,
    title: "Amazonベストセラー獲得",
    description: "ユーザーレビューで高評価を獲得し続けています",
  },
  {
    icon: Zap,
    title: "耐久性・快適さ・最速反応を実現",
    description: "特殊素材による最速のタッチ反応と完璧なフィット感を実現",
  },
];

const Features = () => {
  return (
    <section id="products" className="py-20 bg-navy-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-white">Core Gaming</span>
          <span className="text-gold">製品</span>
        </h2>
        
        <div className="text-center mb-12">
          <h3 className="text-2xl text-gold font-semibold mb-4">Core指サックプレミアム</h3>
          <p className="text-white/80">
            日本一位のプロチームが開発した最高品質のゲーミングフィンガーサック
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-navy p-6 rounded-lg hover:bg-navy/80 transition-colors"
            >
              <feature.icon className="w-8 h-8 text-gold mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
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

export default Features;
import { Star, Clock, Zap, ThumbsUp } from "lucide-react";

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
    icon: Clock,
    title: "耐久性抜群の素材で長時間プレイでも快適",
    description: "特殊素材により、長時間の使用でも快適な着用感を維持",
  },
  {
    icon: Zap,
    title: "優れたタッチ感度と快適なフィット感",
    description: "特殊繊維による最速のタッチ反応と完璧なフィット感を実現",
  },
];

const Features = () => {
  return (
    <section id="products" className="py-20 bg-navy-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-white">プロから選ばれる</span>
          <span className="text-gold">理由</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
      </div>
    </section>
  );
};

export default Features;
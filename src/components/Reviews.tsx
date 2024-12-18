import { Star } from "lucide-react";

const reviews = [
  {
    name: "ゲーマーA",
    rating: 5,
    text: "タッチ感度が素晴らしく、長時間プレイでも快適です。",
  },
  {
    name: "プロゲーマーB",
    rating: 5,
    text: "大会で使用していますが、パフォーマンスが格段に向上しました。",
  },
  {
    name: "ストリーマーC",
    rating: 5,
    text: "耐久性が高く、長期間使用できるのが魅力です。",
  },
];

const Reviews = () => {
  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-white">多くのプレイヤーが認めた</span>
          <span className="text-gold">クオリティ</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-navy-light p-6 rounded-lg hover:transform hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-gold fill-current"
                  />
                ))}
              </div>
              <p className="text-white/80 mb-4">{review.text}</p>
              <p className="text-gold font-semibold">{review.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center space-y-4">
          <div className="inline-flex items-center justify-center space-x-8">
            <div className="text-white">
              <span className="text-gold text-4xl font-bold block">10万個</span>
              <span className="text-sm">累計販売数突破</span>
            </div>
            <div className="text-white">
              <span className="text-gold text-4xl font-bold block">1位</span>
              <span className="text-sm">Amazonベストセラー</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
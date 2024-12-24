import { Star } from "lucide-react";

const reviews = [
  {
    title: "耐久性",
    rating: 5,
    text: "特殊繊維を使用し、摩擦に強い厚さで滑りやすさを落として耐久性を考慮した独自開発の設計",
  },
  {
    title: "反応速度",
    rating: 5,
    text: "銀繊維100%使用+独自の編み方でタッチしてからの反応速度が最速",
  },
  {
    title: "快適さ",
    rating: 5,
    text: "特殊繊維ライクラファイバーを使用し、伸縮性に優れていて指にフィット",
  },
];

const Reviews = () => {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-navy/80" />
        <div className="absolute inset-0 bg-[url('/lovable-uploads/0f17d324-4e96-4f45-91f4-229883758a92.png')] bg-cover bg-center opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="block md:inline text-white">多くのプレイヤーが認めた</span>
          <span className="block md:inline text-gold">クオリティ</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-navy-light/80 backdrop-blur-sm p-6 rounded-lg hover:transform hover:-translate-y-1 transition-transform"
            >
              <h3 className="text-2xl font-bold text-gold mb-4">{review.title}</h3>
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-gold fill-current"
                  />
                ))}
              </div>
              <p className="text-white/80 mb-4">{review.text}</p>
            </div>
          ))}

          <div className="bg-navy-light/80 backdrop-blur-sm p-6 rounded-lg hover:transform hover:-translate-y-1 transition-transform">
            <h3 className="text-2xl font-bold text-gold mb-4">【αD Aves べてぃ】</h3>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-gold fill-current"
                />
              ))}
            </div>
            <div className="flex flex-row items-start justify-between">
              <div>
                <p className="text-white/80 mb-4">毛玉が出ないのと、長持ちするためコスパが良い！</p>
              </div>
              <div className="w-1/3 ml-4 flex-shrink-0">
                <img
                  src="/lovable-uploads/364a0773-ee13-4f0f-abd1-b119f4fdb2bf.png"
                  alt="【αD Aves べてぃ】"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
          </div>

          <div className="bg-navy-light/80 backdrop-blur-sm p-6 rounded-lg hover:transform hover:-translate-y-1 transition-transform">
            <h3 className="text-2xl font-bold text-gold mb-4">プロゲーマーD</h3>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-gold fill-current"
                />
              ))}
            </div>
            <div className="flex flex-row items-start justify-between">
              <div>
                <p className="text-white/80 mb-4">他の製品と比較しても、反応速度と操作性が群を抜いています。チーム全体でCore製品を採用しています。</p>
              </div>
              <div className="w-1/3 ml-4 flex-shrink-0">
                <img
                  src="/lovable-uploads/34f745ce-d519-4a16-a1ca-e788b0dec542.png"
                  alt="プロゲーマーD"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
          </div>

          <div className="bg-navy-light/80 backdrop-blur-sm p-6 rounded-lg hover:transform hover:-translate-y-1 transition-transform">
            <h3 className="text-2xl font-bold text-gold mb-4">eスポーツ選手E</h3>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-gold fill-current"
                />
              ))}
            </div>
            <div className="flex flex-row items-start justify-between">
              <div>
                <p className="text-white/80 mb-4">国際大会での使用実績もあり、信頼性は折り紙付きです。プロの要求に応える最高峰の製品です。</p>
              </div>
              <div className="w-1/3 ml-4 flex-shrink-0">
                <img
                  src="/lovable-uploads/34f745ce-d519-4a16-a1ca-e788b0dec542.png"
                  alt="eスポーツ選手E"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
          </div>

          <div className="bg-navy-light/80 backdrop-blur-sm p-6 rounded-lg hover:transform hover:-translate-y-1 transition-transform">
            <h3 className="text-2xl font-bold text-gold mb-4">プロゲーマーF</h3>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-gold fill-current"
                />
              ))}
            </div>
            <div className="flex flex-row items-start justify-between">
              <div>
                <p className="text-white/80 mb-4">素材の品質が素晴らしく、プレイ中のストレスが大幅に軽減されました。まさにプロ仕様の逸品です。</p>
              </div>
              <div className="w-1/3 ml-4 flex-shrink-0">
                <img
                  src="/lovable-uploads/34f745ce-d519-4a16-a1ca-e788b0dec542.png"
                  alt="プロゲーマーF"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center space-y-4">
          <div className="inline-flex items-center justify-center space-x-8">
            <div className="text-white">
              <span className="text-gold text-4xl font-bold block">30万個</span>
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
import { Star, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useNavigate } from "react-router-dom";

const reviews = [
  {
    name: "わずぼーん",
    rating: 5,
    text: "タッチ感度が上がって正確なプレイができる。耐久性も凄くて気に入ってる！",
    secondImage: "/lovable-uploads/34f745ce-d519-4a16-a1ca-e788b0dec542.png"
  },
  {
    name: "プロゲーマーB",
    rating: 5,
    text: "長時間のプレイでも指先が快適で、パフォーマンスを最大限に発揮できます。プロ仕様の品質だと実感しています。",
    secondImage: "/lovable-uploads/34f745ce-d519-4a16-a1ca-e788b0dec542.png"
  },
  {
    name: "ストリーマーC",
    rating: 5,
    text: "配信中も快適に使用でき、視聴者からも好評です。耐久性も抜群で、長期間安心して使えます。",
    secondImage: "/lovable-uploads/34f745ce-d519-4a16-a1ca-e788b0dec542.png"
  },
  {
    name: "プロゲーマーD",
    rating: 5,
    text: "他の製品と比較しても、反応速度と操作性が群を抜いています。チーム全体でCore製品を採用しています。",
    secondImage: "/lovable-uploads/34f745ce-d519-4a16-a1ca-e788b0dec542.png"
  },
  {
    name: "eスポーツ選手E",
    rating: 5,
    text: "国際大会での使用実績もあり、信頼性は折り紙付きです。プロの要求に応える最高峰の製品です。",
    secondImage: "/lovable-uploads/34f745ce-d519-4a16-a1ca-e788b0dec542.png"
  },
  {
    name: "プロゲーマーF",
    rating: 5,
    text: "素材の品質が素晴らしく、プレイ中のストレスが大幅に軽減されました。まさにプロ仕様の逸品です。",
    secondImage: "/lovable-uploads/34f745ce-d519-4a16-a1ca-e788b0dec542.png"
  },
];

const Reviews = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-navy">
      <Navigation />
      <div className="container mx-auto px-4 py-20">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center px-6 py-3 bg-navy-light/80 backdrop-blur-sm text-gold hover:text-gold-light hover:bg-navy-light transition-all duration-300 rounded-lg shadow-lg mb-8 group"
        >
          <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          戻る
        </button>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">プロ選手の声</h1>
          <p className="text-xl text-gold">プロのプレイヤーから寄せられた感想</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-2/3">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-navy-light/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <div className="flex-1">
                    <div className="flex flex-row items-center justify-between mb-4">
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-gold fill-current"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-between">
                      <div>
                        <p className="text-white/80 mb-4">{review.text}</p>
                        <p className="text-gold font-semibold text-xl">{review.name}</p>
                      </div>
                      {review.secondImage && (
                        <div className="w-1/3 ml-4 flex-shrink-0">
                          <img
                            src={review.secondImage}
                            alt="Additional review image"
                            className="w-full h-auto rounded-lg object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="lg:w-1/3 flex flex-col items-center gap-8">
            <img
              src="/lovable-uploads/92f6c11c-45d0-451a-b318-857720b23e06.png"
              alt="Delta Gaming Premium"
              className="w-full h-auto rounded-lg shadow-xl"
            />
            <div className="flex flex-col gap-4 w-full">
              <a
                href="https://amzn.asia/d/ghIgPyc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-gold text-navy font-semibold rounded-full hover:bg-gold-light transition-colors group"
              >
                Amazonで購入する
                <ArrowLeft className="ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://twitter.com/hashtag/Core_指サック"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-twitter text-white font-semibold rounded-full hover:bg-twitter-dark transition-colors group"
              >
                購入者の声 を検索
                <ArrowLeft className="ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
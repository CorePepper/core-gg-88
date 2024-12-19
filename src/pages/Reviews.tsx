import { Star, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useNavigate } from "react-router-dom";

const reviews = [
  {
    name: "CorePepper",
    rating: 5,
    text: "Core指サックを使用してから、タッチ感度が格段に向上し、より正確なプレイが可能になりました。大会でも愛用しています。",
    image: "/lovable-uploads/f4bd1fef-49d2-490c-b3c4-4f7cdeb34d50.png"
  },
  {
    name: "プロゲーマーB",
    rating: 5,
    text: "長時間のプレイでも指先が快適で、パフォーマンスを最大限に発揮できます。プロ仕様の品質だと実感しています。",
  },
  {
    name: "ストリーマーC",
    rating: 5,
    text: "配信中も快適に使用でき、視聴者からも好評です。耐久性も抜群で、長期間安心して使えます。",
  },
  {
    name: "プロゲーマーD",
    rating: 5,
    text: "他の製品と比較しても、反応速度と操作性が群を抜いています。チーム全体でCore製品を採用しています。",
  },
  {
    name: "eスポーツ選手E",
    rating: 5,
    text: "国際大会での使用実績もあり、信頼性は折り紙付きです。プロの要求に応える最高峰の製品です。",
  },
  {
    name: "プロゲーマーF",
    rating: 5,
    text: "素材の品質が素晴らしく、プレイ中のストレスが大幅に軽減されました。まさにプロ仕様の逸品です。",
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
          <p className="text-xl text-gold">プロのプレイヤーから寄せられた体験談</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-navy-light/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300"
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
              <div className="flex items-center space-x-3">
                {review.image && (
                  <img 
                    src={review.image} 
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                )}
                <p className="text-gold font-semibold">{review.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;

import { ArrowLeft, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useNavigate } from "react-router-dom";

interface Review {
  name: string;
  rating: number;
  text: string;
  secondImage?: string;
}

const reviews: Review[] = [
  {
    name: "わずぼーん",
    rating: 5,
    text: "タッチ感度が上がって正確なプレイができる。耐久性も凄くて気に入ってる！",
    secondImage: "/lovable-uploads/34f745ce-d519-4a16-a1ca-e788b0dec542.png"
  },
  {
    name: "SG/αD 皇帝",
    rating: 5,
    text: "風呂上りや手汗で滑りにくい時があったけどCoreサックを使うと滑りが良いし解決する！",
    secondImage: "/lovable-uploads/e8c03b06-e531-4dda-83fb-fee52cf33eb9.png"
  },
  {
    name: "【αD Aves べてぃ】",
    rating: 5,
    text: "毛玉が出ないのと、長持ちするためコスパが良い！",
    secondImage: "/lovable-uploads/538cc242-f436-4151-bd4a-892b1dae7174.png"
  },
  {
    name: "【αD Aves らいむ】",
    rating: 5,
    text: "破れないし色々な面からみても長持ちします、ちょうどいい感じで滑って最高です。",
    secondImage: "/lovable-uploads/bce2de37-351b-407e-9bc9-393652a56ab3.png"
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
  }
];

const ReviewItem = ({ review }: { review: Review }) => {
  return (
    <div className="bg-navy-light/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
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
          <div className="flex flex-row items-center justify-between">
            <div>
              <p className="text-white/80 mb-4">{review.text}</p>
              <p className="text-gold font-semibold text-xl">{review.name}</p>
            </div>
            {review.secondImage && (
              <div className="w-1/3 ml-4 flex-shrink-0">
                <img
                  src={review.secondImage}
                  alt="Additional review image"
                  className={`w-full h-auto rounded-lg object-cover transform ${
                    review.name === "【αD Aves らいむ】" ? "scale-[1.75]" : ""
                  } ${
                    review.name === "【αD Aves べてぃ】" ? "scale-[1.75]" : ""
                  }`}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ReviewList = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-2/3">
      {reviews.map((review, index) => (
        <ReviewItem key={index} review={review} />
      ))}
    </div>
  );
};

const ReviewStats = () => {
  return (
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
  );
};

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
          <ReviewList reviews={reviews} />
          
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

        <ReviewStats />
      </div>
    </div>
  );
};

export default Reviews;
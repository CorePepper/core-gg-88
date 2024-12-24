import { Star } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface Review {
  name: string;
  rating: number;
  text: string;
  secondImage?: string;
}

interface ReviewItemProps {
  review: Review;
}

export const ReviewItem = ({ review }: ReviewItemProps) => {
  const isEmperor = review.name === "SG/αD 皇帝";
  const isMobile = useIsMobile();

  const isSpecialCard = (
    review.name === "【αD Aves らいむ】" || 
    review.name === "【αD Aves べてぃ】" || 
    review.name === "【αD Aves】 ひよ"
  );

  if (isEmperor) {
    return (
      <div className="bg-navy-light/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300 h-full flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <h2 className="text-gold font-semibold text-xl lg:text-4xl mb-4 lg:mb-8 text-center">{review.name}</h2>
          
          <div className="flex justify-center mb-4 lg:mb-8 w-full lg:mt-6">
            {review.secondImage && (
              <img
                src={review.secondImage}
                alt={review.name}
                className="rounded-lg object-cover w-1/3 lg:w-3/4 lg:scale-[1.3] transition-transform duration-300"
              />
            )}
          </div>

          <div className="flex justify-center mb-4 lg:mt-8 lg:mb-10">
            {[...Array(review.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 lg:w-8 lg:h-8 text-gold fill-current"
              />
            ))}
          </div>
        </div>

        <p className="text-white/80 text-base lg:text-2xl text-center mt-auto lg:mt-4 whitespace-pre-line relative -top-4">
          風呂上りや手汗で滑りにくい時があったけどCoreサックを使うと滑りが良いし解決。Coreサック最高！
        </p>
      </div>
    );
  }

  return (
    <div className="bg-navy-light/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
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
      <div className="flex flex-row items-start justify-between flex-grow">
        <div className="flex flex-col justify-between h-full flex-grow">
          <p className="text-white/80 mb-4">{review.text}</p>
          <p className="text-gold font-semibold text-xl">{review.name}</p>
        </div>
        {review.secondImage && (
          <div className="w-1/3 ml-4 flex-shrink-0">
            <img
              src={review.secondImage}
              alt={review.name}
              className={`w-full h-auto rounded-lg object-cover transform ${
                isSpecialCard ? "scale-[1.75]" : ""
              }`}
            />
          </div>
        )}
      </div>
    </div>
  );
};
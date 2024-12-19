import { Star } from "lucide-react";
import { Review } from "@/types/review";

interface ReviewItemProps {
  review: Review;
}

const ReviewItem = ({ review }: ReviewItemProps) => {
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
  );
};

export default ReviewItem;
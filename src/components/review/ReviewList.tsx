import { ReviewItem } from "./ReviewItem";

interface Review {
  name: string;
  rating: number;
  text: string;
  secondImage?: string;
}

interface ReviewListProps {
  reviews: Review[];
}

export const ReviewList = ({ reviews }: ReviewListProps) => {
  const verticalReviews = reviews.slice(0, 4);
  const horizontalReviews = reviews.slice(4, 6);
  const row4Reviews = reviews.slice(6, 9);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-2/3">
      {verticalReviews.map((review, index) => (
        <ReviewItem key={index} review={review} />
      ))}
      <div className="md:col-span-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {horizontalReviews.map((review, index) => (
            <ReviewItem key={index} review={review} />
          ))}
        </div>
      </div>
      <div className="md:col-span-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {row4Reviews.map((review, index) => (
            <ReviewItem key={index} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};
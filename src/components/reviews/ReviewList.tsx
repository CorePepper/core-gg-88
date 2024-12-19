import { Review } from "@/types/review";
import ReviewItem from "./ReviewItem";

interface ReviewListProps {
  reviews: Review[];
}

const ReviewList = ({ reviews }: ReviewListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-2/3">
      {reviews.map((review, index) => (
        <ReviewItem key={index} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;
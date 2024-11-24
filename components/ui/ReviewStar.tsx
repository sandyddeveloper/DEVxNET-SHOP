import { StarIcon } from "@heroicons/react/outline";
import React from "react";

type StarRatingProps = {
  averageRating: number | null;
};

const StarRating: React.FC<StarRatingProps> = ({ averageRating }) => {
  const getStars = () => {
    if (
      averageRating === null ||
      averageRating === undefined ||
      averageRating <= 0
    )
      return 0;
    if (averageRating > 0 && averageRating <= 1) return 1;
    if (averageRating > 1 && averageRating <= 2) return 2;
    if (averageRating > 2 && averageRating <= 3) return 3;
    if (averageRating > 3 && averageRating <= 4) return 4;
    if (averageRating > 4 && averageRating <= 5) return 5;
    return 0;
  };

  const filledStars = getStars();

  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, index) => (
        <StarIcon
          className={`h-5 w-5 ${
            index < filledStars ? "text-yellow-500" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default StarRating;

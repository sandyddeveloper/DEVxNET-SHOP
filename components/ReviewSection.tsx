import React from "react";
import { StarIcon as SolidStarIcon } from "@heroicons/react/solid";
import { StarIcon as OutlineStarIcon } from "@heroicons/react/outline";

const ReviewSection = () => {
  const reviews = [
    {
      name: "John Doe",
      rating: 5,
      comment: "Great quality shirt, fits perfectly!",
      date: "November 10, 2024",
    },
    {
      name: "Jane Smith",
      rating: 4,
      comment: "Very comfortable, but wish there were more colors.",
      date: "November 15, 2024",
    },
    {
      name: "Mike Johnson",
      rating: 3,
      comment: "It's okay, but the material feels a bit thin.",
      date: "November 20, 2024",
    },
  ];

  return (
    <div className="mt-10">
      <h3 className="text-xl font-bold mb-6">Customer Reviews</h3>
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 border">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-lg">{review.name}</h4>
              <div className="flex space-x-1">
                {Array.from({ length: 5 }, (_, i) =>
                  i < review.rating ? (
                    <SolidStarIcon
                      key={i}
                      className="h-5 w-5 text-yellow-500"
                    />
                  ) : (
                    <OutlineStarIcon
                      key={i}
                      className="h-5 w-5 text-gray-300"
                    />
                  )
                )}
              </div>
            </div>
            <p className="text-gray-600 mt-2">{review.comment}</p>
            <p className="text-gray-400 text-sm mt-1">{review.date}</p>
          </div>
        ))}
      </div>

      {/* Leave a Review Section */}
      <div className="mt-8 bg-gray-50 shadow-md rounded-lg p-6 border">
        <h4 className="font-bold text-lg mb-4">Leave a Review</h4>
        <textarea
          className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          rows={4}
          placeholder="Write your review here..."
        ></textarea>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-1">
            <span className="text-sm text-gray-600">Rate:</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <OutlineStarIcon
                  key={i}
                  className="h-6 w-6 text-gray-400 cursor-pointer hover:text-yellow-500"
                />
              ))}
            </div>
          </div>
          <button className="bg-black text-white py-2 px-6 rounded-md text-sm hover:bg-gray-800">
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;

import React, { useState } from "react";
import StarRating from "./ui/ReviewStar";

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState("S");
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const price = 27.36;
  const discount = 0.15;
  const discountedPrice = (price * (1 - discount)).toFixed(2);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">PS Basics Mens Reece</h2>
      <p className="text-gray-500">Men's Shirts</p>
      <div className="flex items-center space-x-2">
        <StarRating averageRating={3.5} />
        <span className="text-sm text-gray-500">(124 Reviews)</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="line-through text-gray-400 text-lg">${price}</span>
        <span className="text-3xl font-bold text-green-500">
          ${discountedPrice}
        </span>
      </div>
      <div>
        <p className="font-medium">Size</p>
        <div className="flex gap-2 mt-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              aria-label={`Select size ${size}`}
              className={`w-10 h-10 border rounded-md ${
                selectedSize === size
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <button className="w-full bg-green-500 text-white py-2 rounded-md font-medium">
          Checkout Now
        </button>
        <button className="w-full bg-gray-200 text-green-500 py-2 rounded-md font-medium">
          Add To Cart
        </button>
      </div>
      <div>
        <h3 className="font-semibold">Detail</h3>
        <p className="text-gray-500 text-sm sm:text-base mt-2">
          Keep things cool and casual with help from the Reece Regular T-Shirt.
          This new PacSun go-to has an easy regular fit, a soft cotton
          construction, and a versatile solid color design.
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;

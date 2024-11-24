import React, { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

const SimilarProducts = () => {
  const products = [
    {
      id: 1,
      name: "Basic White T-Shirt",
      price: "$19.99",
      image: "https://m.media-amazon.com/images/I/71ShBw4g6GL._SX679_.jpg",
      rating: 4,
    },
    {
      id: 2,
      name: "Casual Blue T-Shirt",
      price: "$21.99",
      image: "https://m.media-amazon.com/images/I/51-pLhPHoBL.jpg",
      rating: 5,
    },
    {
      id: 3,
      name: "Classic Black T-Shirt",
      price: "$24.99",
      image: "https://m.media-amazon.com/images/I/71SDyw8Kc9L._SX679_.jpg",
      rating: 3,
    },
    {
      id: 4,
      name: "Light Gray T-Shirt",
      price: "$22.99",
      image: "https://m.media-amazon.com/images/I/71Kh44s4-EL._SX679_.jpg",
      rating: 4,
    },
    {
      id: 5,
      name: "Red Comfort T-Shirt",
      price: "$25.99",
      image: "https://m.media-amazon.com/images/I/61eOGeu2NIL._SX679_.jpg",
      rating: 5,
    },
    {
      id: 6,
      name: "Green Everyday T-Shirt",
      price: "$23.99",
      image: "https://m.media-amazon.com/images/I/31pWsH8piWL.jpg",
      rating: 4,
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-10 relative">
      <h3 className="text-xl font-bold mb-4">Similar Products</h3>
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute top-1/2 -translate-y-1/2 left-0 z-10 bg-white shadow-md rounded-full p-2 hover:shadow-lg focus:outline-none"
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-500" />
      </button>
      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute top-1/2 -translate-y-1/2 right-0 z-10 bg-white shadow-md rounded-full p-2 hover:shadow-lg focus:outline-none"
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-500" />
      </button>
      {/* Product Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll space-x-4 px-4 scrollbar-hide"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-48 border rounded-lg p-4 hover:shadow-lg"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h4 className="text-sm font-medium mt-2">{product.name}</h4>
            <p className="text-gray-500">{product.price}</p>
            {/* Review Stars */}
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ${
                    i < product.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.116 3.427a1 1 0 00.95.69h3.611c.969 0 1.371 1.24.588 1.81l-2.923 2.107a1 1 0 00-.364 1.118l1.116 3.427c.3.921-.755 1.688-1.538 1.118L10 13.011a1 1 0 00-1.176 0l-2.923 2.107c-.783.57-1.838-.197-1.538-1.118l1.116-3.427a1 1 0 00-.364-1.118L2.192 8.854c-.783-.57-.38-1.81.588-1.81h3.611a1 1 0 00.95-.69l1.116-3.427z" />
                </svg>
              ))}
            </div>
            <button className="mt-2 w-full bg-green-500 text-white py-1 rounded-md text-sm">
              View Product
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;

// components/ProductGallery.tsx
import React, { useState } from "react";

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(
    "https://m.media-amazon.com/images/I/41uJuV0pmGL._SX679_.jpg"
  );
  const images = [
    "https://m.media-amazon.com/images/I/41rdXS5rDuL._SY879_.jpg",
    "https://m.media-amazon.com/images/I/61BUjmO9QEL._SY741_.jpg",
    "https://m.media-amazon.com/images/I/41uJuV0pmGL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/61BUjmO9QEL._SY741_.jpg",
    "https://m.media-amazon.com/images/I/41rdXS5rDuL._SY879_.jpg",
  ];

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-full h-96">
        <img
          src={selectedImage}
          alt="Selected product"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex gap-2">
        {images.map((img, index) => (
          <button key={index} onClick={() => setSelectedImage(img)}>
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`w-16 h-16 rounded-lg cursor-pointer ${
                selectedImage === img ? "ring-2 ring-black" : "opacity-70"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;

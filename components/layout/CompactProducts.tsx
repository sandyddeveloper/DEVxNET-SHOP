import React from "react";

const CategoriesSection = () => {
  const categories = [
    {
      title: "Electronics",
      price: "From ₹3999",
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2023/10/instantcameras-2048px-02039.jpg",
      bg: "bg-black text-white",
    },
    {
      title: "Travelling",
      price: "From ₹2999",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHttZ1JX69LazmjKg8caWgYXusLwreDUJPNg&s",
      bg: "bg-gray-900 text-white",
    },
    {
      title: "Music & Sound",
      price: "From ₹3999",
      image: "https://m.media-amazon.com/images/I/81T0g6FuNqL.jpg",
      bg: "bg-blue-500",
    },
    {
      title: "I am a Gamer",
      price: "From ₹1999",
      image:
        "https://www.asus.com/campaign/powered-by-asus/upload/scenario/20240813181719_pic2.jpg",
      bg: "bg-pink-500",
    },
    {
      title: "All categories",
      price: "From ₹999",
      image:
        "https://www.eksa.in/cdn/shop/products/EKSA-product-E900-green_72f80e5b-a7b9-4872-993c-ca614685684a.jpg?v=1656315587",
      bg: "bg-gray-100 text-black",
    },
    {
      title: "Special Offers",
      price: "From ₹5999",
      image:
        "https://www.91-cdn.com/hub/wp-content/uploads/2022/12/Apple-Products-expected-to-launch-in-2023.png",
      bg: "bg-white text-black",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`relative flex flex-col justify-between p-8 rounded-lg shadow-xl transition-transform duration-300 hover:scale-105 ${category.bg}`}
        >
          <div>
            <h2 className="text-2xl font-bold">{category.title}</h2>
            <p className="text-lg mt-2">{category.price}</p>
          </div>
          <button className="absolute bottom-8 right-8 bg-white text-black p-3 rounded-full shadow-md">
            &gt;
          </button>
          <img
            src={category.image}
            alt={category.title}
            className="absolute right-8 -top-10 w-36 h-36 rounded-xl"
          />
        </div>
      ))}
    </div>
  );
};

export default CategoriesSection;

import React from "react";

const Deals = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Deals of the day */}
      <section className="p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Deals of the day</h2>
          <a href="#" className="text-blue-500 hover:underline">
            Shop all deals →
          </a>
        </div>
        <div className="grid grid-cols-4 gap-6 mt-4">
          {[
            {
              img: "https://www.lavanyathelabel.com/cdn/shop/collections/04_ethnicwear_1400x_a34fb8dc-f016-43eb-95bd-bec3858edc01_2600x.webp?v=1732004280",
              title: "Women's Ethnic Clothing",
            },
            {
              img: "https://www.lavanyathelabel.com/cdn/shop/collections/04_ethnicwear_1400x_a34fb8dc-f016-43eb-95bd-bec3858edc01_2600x.webp?v=1732004280",
              title: "Women's Western Clothing",
            },
            {
              img: "https://www.lavanyathelabel.com/cdn/shop/collections/04_ethnicwear_1400x_a34fb8dc-f016-43eb-95bd-bec3858edc01_2600x.webp?v=1732004280",
              title: "Fashion Jewellery",
            },
            {
              img: "https://www.lavanyathelabel.com/cdn/shop/collections/04_ethnicwear_1400x_a34fb8dc-f016-43eb-95bd-bec3858edc01_2600x.webp?v=1732004280",
              title: "Women's Shoes",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md overflow-hidden group"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-4">
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-gray-500 text-sm">Up to 40% off</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Best Selling */}
      <section className="p-6 bg-white">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Best Selling</h2>
          <a href="#" className="text-blue-500 hover:underline">
            See more →
          </a>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-4">
          {[
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyvIZf9tyfVOCxW6Ypa5BbOaAiOvMiT3lvXw&s",
              title: "Furniture",
            },
            {
              img: "https://www.elvdirect.com/wp-content/uploads/2021/04/Edit04_Silver-150x150.jpg",
              title: "Mobile Phone",
            },
            { img: "https://via.placeholder.com/150", title: "Kitchens" },
            { img: "https://via.placeholder.com/150", title: "Books & Media" },
            { img: "https://via.placeholder.com/150", title: "Clothing" },
            { img: "https://via.placeholder.com/150", title: "Men's Fashion" },
          ].map((item, index) => (
            <div
              key={index}
              className="relative bg-white shadow-md rounded-md overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="absolute bottom-0 bg-black bg-opacity-50 text-white w-full text-center py-2">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Electronics */}
      <section className="p-6 ">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Electronics</h2>
          <a href="#" className="text-blue-500 hover:underline">
            Shop all deals →
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="bg-white shadow-md rounded-md p-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Electronics"
                  className="w-full h-40 object-cover mb-4"
                />
                <h3 className="text-sm font-medium">MSI Prestige</h3>
                <p className="text-gray-500 text-sm line-through">₹89,000.00</p>
                <p className="text-blue-500 text-lg font-semibold">
                  ₹82,890.00
                </p>
                <button className="bg-green-500 text-white w-full mt-2 py-2 rounded-md hover:bg-blue-600">
                  Buy Now
                </button>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Deals;

import React from "react";

const AdBanner = () => {
  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-green-900 to-transparent  p-8 shadow-lg">
      {/* Left Content */}
      <div className="text-white max-w-lg">
        <h2 className="text-3xl font-bold mb-2">Become a Reseller</h2>
        <h1 className="text-4xl font-extrabold mb-4">
          Start your Online Business
        </h1>
        <p className="text-lg mb-6">
          Become a Bynim seller and grow your business across India
        </p>
        <button className="bg-green-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md font-medium shadow-md transition">
          Become a Seller
        </button>
      </div>

      {/* Right Image */}
      <div className="hidden md:block w-1/2">
        <img
          src="https://via.placeholder.com/500x300"
          alt="Reseller"
          className="rounded-lg"
        />
      </div>
      <div className="hidden md:block w-1/2">
        <img
          src="https://via.placeholder.com/500x300"
          alt="Reseller"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default AdBanner;

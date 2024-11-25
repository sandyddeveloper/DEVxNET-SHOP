"use client";
import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-[72px] w-full z-50 transition-all ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        {/* Left Section */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="text-sm">
            <p>
              Delivering to{" "}
              <span className="font-semibold text-black">Chennai 600042</span>
            </p>
            <a
              href="/"
              className="text-blue-500 text-xs underline hover:text-blue-600 transition"
            >
              Update location
            </a>
          </div>
        </div>

        {/* Search Section */}
        <div className="flex-1 mx-4">
          <form className="flex">
            <select className="border text-sm px-2 py-2 rounded-l-md focus:outline-none">
              <option>All</option>
              <option>Electronics</option>
              <option>Books</option>
              <option>Fashion</option>
            </select>
            <input
              type="text"
              placeholder="Search Devxnet.cloud"
              className="flex-1 px-4 py-2 border rounded-r-md focus:outline-none"
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 px-4 py-2 flex items-center justify-center rounded-md shadow-md transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 text-white"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6 .1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                />
              </svg>
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="hidden sm:flex items-center space-x-6 text-sm">
          <a href="#" className="hover:underline">
            Hello, Sign in <br />
            <span className="font-semibold">Account & Lists</span>
          </a>
          <a href="#" className="hover:underline">
            Returns <br />
            <span className="font-semibold">& Orders</span>
          </a>
          <a href="#" className="relative">
            <svg
              className="h-6 w-6 text-yellow-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h18M16 8H8m-5 3v12a1 1 0 001 1h14a1 1 0 001-1V11m-9-3v4"
              />
            </svg>
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              0
            </span>
          </a>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-gray-100 text-sm py-2">
        <div className="container mx-auto flex flex-wrap justify-center items-center space-x-4">
          {[
            "All",
            "Fresh",
            "MX Player",
            "Sell",
            "Best Sellers",
            "Today's Deals",
            "Mobiles",
            "Electronics",
            "Home & Kitchen",
            "Prime",
          ].map((item, index) => (
            <button key={index} className="hover:underline">
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

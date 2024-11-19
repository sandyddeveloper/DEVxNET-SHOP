"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-teal-600 font-bold text-xl mr-0">DEVxNET</span>
          <span className="text-black font-bold text-xl">SHOP</span>
          <span className="text-teal-600 font-bold text-xl">.</span>
        </div>

        {/* Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/home"
            className="text-gray-700 hover:text-teal-600 transition font-medium"
          >
            Home
          </Link>
          <Link
            href="/demo"
            className="text-gray-700 hover:text-teal-600 transition font-medium"
          >
            Demo
          </Link>
          <Link
            href="/special-features"
            className="text-gray-700 hover:text-teal-600 transition font-medium"
          >
            Special features
          </Link>
          <Link
            href="/template-features"
            className="text-gray-700 hover:text-teal-600 transition font-medium"
          >
            Template features
          </Link>
          <Link
            href="/pages"
            className="text-gray-700 hover:text-teal-600 transition font-medium"
          >
            Pages
          </Link>
          <Link
            href="/blog"
            className="text-gray-700 hover:text-teal-600 transition font-medium"
          >
            Blog
          </Link>
          <Link
            href="/hire-us"
            className="text-gray-700 hover:text-teal-600 transition font-medium"
          >
            Hire Us
          </Link>
          <Link
            href="/documentation"
            className="text-gray-700 hover:text-teal-600 transition font-medium"
          >
            Documentation
          </Link>
        </nav>

        {/* Buy Now Button */}
        <div>
          <Link
            href="/buy"
            className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-full flex items-center space-x-2 transition"
          >
            <span>Buy Now</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

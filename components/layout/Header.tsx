"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "./Navbar";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-teal-600 font-bold text-xl">DEVxNET</span>
            <span className="text-black font-bold text-xl">SHOP</span>
            <span className="text-teal-600 font-bold text-xl">.</span>
          </div>

          {/* Links for Larger Screens */}
          <nav className="hidden md:flex items-center space-x-6">
            {[
              "Home",
              "Demo",
              "Special features",
              "Pages",
              "Blog",
              "Hire Us",
            ].map((item, index) => (
              <Link
                key={index}
                href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                className="text-gray-700 hover:text-teal-600 font-medium"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="material-icons">menu</span>
          </button>

          {/* Buy Now Button */}
          <div className="hidden md:block">
            <Link
              href="/buy"
              className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-full flex items-center space-x-2"
            >
              <span>Buy Now</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <nav className="flex flex-col items-start space-y-4 px-4 py-2">
              {[
                "Home",
                "Demo",
                "Special features",
                "Pages",
                "Blog",
                "Hire Us",
              ].map((item, index) => (
                <Link
                  key={index}
                  href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                  className="text-gray-700 hover:text-teal-600 font-medium"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
      <Navbar />
    </>
  );
};

export default Header;

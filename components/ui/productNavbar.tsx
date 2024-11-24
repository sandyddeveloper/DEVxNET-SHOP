import React, { useState } from "react";
import {
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
  MenuIcon,
  LoginIcon,
  UserAddIcon,
  XIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";

const ProductNavbar: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 py-2 shadow-md bg-white z-20 relative">
        {/* Left Section: Logo and Links */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <div className="rounded-full bg-green-500 w-[160px] h-[50px] flex items-center justify-center">
            <span className="text-white font-bold text-lg text-center">
              DEVxNET SHOP
            </span>
          </div>

          {/* Links (Hidden in Mobile View) */}
          <div className="hidden lg:flex space-x-4">
            <Link
              href="/"
              className="text-lg font-medium hover:text-gray-600 transition"
            >
              Home
            </Link>
            <button
              onClick={() => router.back()}
              className="text-lg font-medium hover:text-gray-600 transition"
            >
              Back
            </button>
          </div>
        </div>

        {/* Hamburger Menu (Visible in Mobile View) */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="focus:outline-none"
          >
            {isMenuOpen ? (
              <XIcon className="h-6 w-6 text-gray-600" />
            ) : (
              <MenuIcon className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Right Section: Icons */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Search Icon */}
          <button
            onClick={toggleSearch}
            className="focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <SearchIcon className="h-6 w-6 text-gray-600 cursor-pointer" />
          </button>

          {/* Shopping Cart Icon */}
          <ShoppingBagIcon className="h-6 w-6 text-gray-600 cursor-pointer" />

          {/* User Account Icon */}
          <UserIcon className="h-6 w-6 text-gray-600 cursor-pointer" />

          {/* Login Link */}
          <Link
            href="/login"
            className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 text-sm font-medium"
          >
            <LoginIcon className="h-5 w-5" />
            <span>Login</span>
          </Link>

          {/* Register Link */}
          <Link
            href="/register"
            className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 text-sm font-medium"
          >
            <UserAddIcon className="h-5 w-5" />
            <span>Register</span>
          </Link>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg z-20 lg:hidden">
          <ul className="flex flex-col space-y-4 px-4 py-4">
            <li>
              <Link
                href="/"
                className="block text-lg font-medium text-gray-700 hover:text-gray-900"
              >
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={() => router.back()}
                className="block text-lg font-medium text-gray-700 hover:text-gray-900"
              >
                Back
              </button>
            </li>
            <li>
              <Link
                href="/login"
                className="flex items-center space-x-1 text-lg font-medium text-gray-700 hover:text-gray-900"
              >
                <LoginIcon className="h-5 w-5" />
                <span>Login</span>
              </Link>
            </li>
            <li>
              <Link
                href="/register"
                className="flex items-center space-x-1 text-lg font-medium text-gray-700 hover:text-gray-900"
              >
                <UserAddIcon className="h-5 w-5" />
                <span>Register</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
      {/* Search Bar */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg px-4 py-2 z-30">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
      )}
      {/* Shipping Banner */}
      {isVisible && (
        <div
          className={`bg-blue-500 text-white text-center py-2 z-10 relative ${
            isSearchOpen ? "mt-[50px]" : "mt-0"
          }`}
        >
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200"
          >
            &times;
          </button>
          Free 2 Days Shipping for Orders Over ₹3000
        </div>
      )}
    </div>
  );
};

export default ProductNavbar;

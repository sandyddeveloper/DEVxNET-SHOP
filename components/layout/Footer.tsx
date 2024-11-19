import React from "react";
import {
  HomeIcon,
  UserGroupIcon,
  PhoneIcon,
  MailIcon,
} from "@heroicons/react/outline";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Shop by Category
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <HomeIcon className="h-5 w-5 text-green-400" />
              <a href="#" className="hover:text-gray-100">
                Electronics
              </a>
            </li>
            <li className="flex items-center gap-2">
              <HomeIcon className="h-5 w-5 text-green-400" />
              <a href="#" className="hover:text-gray-100">
                Fashion
              </a>
            </li>
            <li className="flex items-center gap-2">
              <HomeIcon className="h-5 w-5 text-green-400" />
              <a href="#" className="hover:text-gray-100">
                Home & Kitchen
              </a>
            </li>
            <li className="flex items-center gap-2">
              <HomeIcon className="h-5 w-5 text-green-400" />
              <a href="#" className="hover:text-gray-100">
                Sports & Outdoors
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Customer Support
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5 text-blue-400" />
              <a href="#" className="hover:text-gray-100">
                Contact Us
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MailIcon className="h-5 w-5 text-blue-400" />
              <a href="#" className="hover:text-gray-100">
                FAQs
              </a>
            </li>
            <li className="flex items-center gap-2">
              <UserGroupIcon className="h-5 w-5 text-blue-400" />
              <a href="#" className="hover:text-gray-100">
                Support Center
              </a>
            </li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
          <p className="text-sm text-gray-400">
            We are a leading e-commerce store offering a wide range of products
            at unbeatable prices. Our mission is to provide quality,
            convenience, and the best shopping experience for all our customers.
          </p>
        </div>

        {/* Stay Connected */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Stay Connected
          </h3>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-500 hover:text-white">
              {/* Facebook Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12a10 10 0 11-11.96-9.95V10H7v4h3.04v10A10 10 0 1122 12z" />
              </svg>
            </a>
            <a href="#" className="text-pink-500 hover:text-white">
              {/* Instagram Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.86 16.44c-1.87.7-2.88-.52-2.88-1.41v-.3h3v.3c0 .65-.14 1.27-.47 1.41zm5.15-7.73C12.4 5.78 7.98 7.86 7 11.58c0 .24-.14.48-.38.41-.54.55-1.55-.8-1.14-1.18 1.27-2.14 4.47-4.59 9.22-3.99 1.6.18 2.99.64 4.3 1.42.34.22.63.52.84.87-.41-.02-.85-.06-1.19-.06a6.54 6.54 0 00-4.63 1.36c.09-.42.26-.82.54-1.17z" />
              </svg>
            </a>
            <a href="#" className="text-blue-400 hover:text-white">
              {/* Twitter Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 001.87-2.37 8.47 8.47 0 01-2.67 1.02A4.24 4.24 0 0011.85 8c0 .33.03.66.1.97a12.09 12.09 0 01-8.77-4.44A4.2 4.2 0 002.64 8c0 1.5.77 2.81 1.93 3.59a4.22 4.22 0 01-1.92-.53v.05c0 2.1 1.5 3.85 3.49 4.25-.36.1-.75.15-1.15.15-.28 0-.56-.03-.83-.08.56 1.74 2.18 3.01 4.11 3.04a8.5 8.5 0 01-5.26 1.8c-.34 0-.67-.02-1-.06A12 12 0 009.63 21c7.54 0 11.66-6.26 11.66-11.67 0-.18-.01-.36-.02-.54A8.5 8.5 0 0022.46 6z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-800 py-4 text-center">
        <p className="text-sm text-gray-500">
          &copy; 2024 Your E-Commerce Store. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import { ArrowRight } from "lucide-react";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram , } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200   footer">
      <div className="container mx-auto px-4 py-6 md:flex md:justify-around md:items-center">
        {/* Left Section: Logo */}
        <div className="flex justify-center md:justify-start items-center mb-4 md:mb-0">
          <img
            src="/logo.png"
            alt="Culiner Logo"
            className="w-[120px] h-auto"
          />
        </div>

        {/* Center Section: Navigation */}
        <nav className="mb-4 md:mb-0">
          <ul className="flex justify-center md:justify-start space-x-6 text-sm">
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 transition"
              >
                Farmers Market
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 transition"
              >
                Producers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 transition"
              >
                Home Cooks
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 transition"
              >
                Directory
              </a>
            </li>
          </ul>
        </nav>

        {/* Right Section: Social Media Icons */}
        <div className="flex justify-center md:justify-end space-x-6">
        <button className="w-[30px] h-[30px] rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100">
        <FaFacebookF size={20} />
      </button>
      <button className="w-[30px] h-[30px] rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100">
        <FaInstagram size={20} />
      </button>
      <button className="w-[30px] h-[30px] rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100">
        <FaTwitter size={20} />
      </button>
         
        </div>
      </div>
      <div className="last-sec bg-gray-50 py-4">
  <div className="container mx-auto flex flex-wrap justify-between items-center">
    {/* Copyright Section */}
    <p className="text-[16px] text-[#202020] font-medium pl-24">
      © 2024 Culineer. All rights reserved.
    </p>
    {/* Terms and Privacy Policy Section */}
    <div className="terms flex space-x-4 mt-2 md:mt-0">
      <a
        href="#"
        className="text-[16px] text-[#202020] font-medium hover:text-gray-700 transition pr-24"
      >
        Terms & Conditions Privacy Policy
      </a>
    
    
</div>
</div>
</div>
  <div>
    
  </div>
    </footer>
  );
}

export default Footer;

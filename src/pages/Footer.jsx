import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { IoLogoGooglePlaystore, IoLogoApple } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-wrap  gap-6 mb-6 text-lg">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/recipes" className="hover:text-white transition">Recipes</Link>
          <Link to="/contact" className="hover:text-white transition">Contact Us</Link>
          <Link to="/about" className="hover:text-white transition">About Us</Link>
          <Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
        </div>

        <div className="flex flex-wrap justify-between items-start gap-6">
          
          <div className="w-full md:w-1/2">
            <p className="mb-3 text-gray-400">
              Food Fusion is all about redefining ‘Cooking’ for you! It’s the solution to that never-ending problem
              of preparing high-quality delicious food and reducing the habit of eating out. With simple and modern 
              cooking methods, we ensure you enjoy a flavorsome treat.
            </p>
            <p className="text-gray-400">
              As Pakistan’s first digital food video portal, we understand the struggle of following text-based recipes. 
              That’s why we provide **step-by-step video tutorials** to help you master cooking effortlessly.
            </p>
          </div>

          <div className="w-full md:w-1/3 flex flex-col items-center">
            
            <img 
              src="https://www.foodfusion.com/wp-content/themes/food-fusion/assets/img/Food-Youtube-Channel-transparent_216px.png" // Replace with actual path
              alt="Food Fusion Logo"
              className="w-24 mb-4"
            />


            <p className="mb-2 text-lg font-semibold text-white">Get Social With Us</p>
            <div className="flex gap-4 text-2xl">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className="hover:text-blue-500 transition w-8 h-8" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="hover:text-blue-400 transition w-8 h-8" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube className="hover:text-red-500 transition w-8 h-8" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="hover:text-pink-500 transition w-8 h-8" />
              </a>
            </div>

            {/* Download App Section */}
            <p className="mt-4 text-lg font-semibold text-white">Download Our App</p>
            <div className="flex gap-4 mt-2">
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                <IoLogoGooglePlaystore className="hover:text-blue-500 transition w-10 h-10" />
              </a>
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                <IoLogoApple className="hover:text-white transition w-10 h-10" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

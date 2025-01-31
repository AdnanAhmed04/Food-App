import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <img src="https://as2.ftcdn.net/v2/jpg/02/74/91/33/1000_F_274913349_r9tG4fw95BxhJEVbKPoO3NGtvHgEExmw.jpg" alt="Logo" className="h-12 w-12 rounded-full" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-gray-900">Ramzan</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Drinks</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Dish Type</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Breakfast</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Desserts</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Lunch / Dinner</a>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <span className="text-2xl">&#10005;</span> // Close Icon (X)
              ) : (
                <span className="text-2xl">&#9776;</span> // Hamburger Icon
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Ramzan</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Drinks</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Dish Type</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Breakfast</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Desserts</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Lunch / Dinner</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

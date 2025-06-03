import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-indigo-600">
        Desig<span className="text-gray-800">Need</span>
      </div>

      {/* Navigation Links */}
      <div className="space-x-8 text-gray-700 font-medium hidden md:flex">
        <a href="#" className="hover:text-indigo-600">Explore Designs</a>
        <a href="#" className="hover:text-indigo-600">Designers</a>
        <a href="#" className="hover:text-indigo-600">Upload</a>
        <a href="#" className="hover:text-indigo-600">Moodboards</a>
      </div>

      {/* Login/Signup Buttons */}
      <div className="space-x-4 hidden md:flex">
        <button className="text-indigo-600 hover:underline">Login</button>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          Signup
        </button>
      </div>

      
    </nav>
  );
};

export default Navbar;

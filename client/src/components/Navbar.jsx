import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#E0D9D2] shadow-md p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-[#E17878]">
        Desig<span className="text-[#9EB371]">Need</span>
      </div>

      {/* Navigation Links */}
      <div className="space-x-8 text-gray-700 font-medium hidden md:flex">
        <a href="#" className="hover:text-[#E17878]">Explore Designs</a>
        <a href="#" className="hover:text-[#E17878]">Designers</a>
        <a href="#" className="hover:text-[#E17878]">Upload</a>
        <a href="#" className="hover:text-[#E17878]">Moodboards</a>
      </div>

      {/* Login/Signup Buttons */}
      <div className="space-x-4 hidden md:flex">
        <button className="text-[#E17878] hover:underline">Login</button>
        <button className="bg-[#E17878] text-white px-4 py-2 rounded-lg hover:bg-[#c45c5c]">
          Signup
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

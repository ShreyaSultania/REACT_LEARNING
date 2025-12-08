import React from "react";

function Header() {
  return (
    <header className="bg-linear-to-r from-slate-900 to-slate-800 shadow-lg">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="flex gap-8">
          <a
            href="#"
            className="text-white font-semibold hover:text-yellow-400 transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white font-semibold hover:text-yellow-400 transition-colors duration-200"
          >
            Feature
          </a>
          <a
            href="#"
            className="text-white font-semibold hover:text-yellow-400 transition-colors duration-200"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-white font-semibold hover:text-yellow-400 transition-colors duration-200"
          >
            FAQs
          </a>
          <a
            href="#"
            className="text-white font-semibold hover:text-yellow-400 transition-colors duration-200"
          >
            About
          </a>
        </div>
        <div className="flex gap-3">
          <button className="text-white border-2 border-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-200">
            Login
          </button>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200">
            Sign-up
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

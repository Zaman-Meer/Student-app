import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HamburgerIcon } from "../assets/hamburger-icon.svg";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-600 text-white fixed top-0 left-0 w-full z-50 shadow-md transition duration-300 ease-in-out">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between relative">
        <div className="text-2xl font-bold hover:text-blue-300 transition duration-200">
          <Link to="/">MyApp</Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link
            to="/"
            className="hover:bg-blue-700 px-3 py-2 rounded transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:bg-blue-700 px-3 py-2 rounded transition duration-200"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:bg-blue-700 px-3 py-2 rounded transition duration-200"
          >
            Contact
          </Link>
        </nav>
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none hover:text-blue-300 transition duration-200"
        >
          <HamburgerIcon />
        </button>
      </div>
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } absolute right-0 top-[54px] w-full h-full transition duration-300 ease-in-out`}
      >
        <nav className="bg-blue-700 text-white">
          <Link
            to="/"
            className="block px-4 py-2 hover:bg-blue-800 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 hover:bg-blue-800 transition duration-200"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 hover:bg-blue-800 transition duration-200"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

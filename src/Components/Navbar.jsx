import React, { useState } from "react";
import { FaHouseLock } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-pink-300 to-pink-500 text-white sticky top-0 z-10 rounded-lg mx-4 my-2">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo */}
        <h1 className="text-lg sm:text-xl text-black font-bold flex items-center gap-2">
          <FaHouseLock />
          Kingsukh Guest House
        </h1>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-black hover:text-gray-200 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row md:items-center absolute md:static top-full left-1/2 transform -translate-x-1/2 md:transform-none bg-gradient-to-r from-pink-300 to-pink-500 md:bg-transparent rounded-lg md:rounded-none w-[90%] md:w-auto space-y-4 md:space-y-0 md:space-x-6 py-4 md:py-0`}
        >
          {["Home", "About", "Services", "Rooms", "Gallery", "Contact"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-2 text-center block text-black rounded-md hover:bg-white hover:text-pink-500 transition duration-300"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

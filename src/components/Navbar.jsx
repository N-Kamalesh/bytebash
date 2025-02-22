import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">P2PLend</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Lend
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Borrow
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              About
            </a>
          </div>

          {/* Hamburger Menu Button (Mobile) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <div className="space-y-1">
                <div className="w-6 h-0.5 bg-gray-600"></div>
                <div className="w-6 h-0.5 bg-gray-600"></div>
                <div className="w-6 h-0.5 bg-gray-600"></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-700 hover:text-blue-600"
          >
            <span className="text-2xl">×</span>
          </button>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 py-2"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 py-2"
            onClick={() => setIsOpen(false)}
          >
            Lend
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 py-2"
            onClick={() => setIsOpen(false)}
          >
            Borrow
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 py-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

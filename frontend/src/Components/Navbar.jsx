import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white px-6 py-3 shadow-md md:px-12">
      {/* Main Container: Replaced inline styles with Tailwind spacing */}
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Rising Stars"
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 font-semibold md:flex">
          <li>
            <Link
              to="/"
              className="no-underline text-black hover:text-orange-500 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="no-underline text-black hover:text-orange-500 transition-colors"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className="no-underline text-black hover:text-orange-500 transition-colors"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/franchise"
              className="no-underline text-black hover:text-orange-500 transition-colors"
            >
              Franchise
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="no-underline text-black hover:text-orange-500 transition-colors"
            >
              Contact Us
            </Link>
          </li>

          <button className="rounded-lg border-2 border-orange-500 px-5 py-2 text-orange-500 transition-all duration-500 hover:bg-orange-500 hover:text-white">
            Enroll Now
          </button>
        </ul>

        {/* Mobile Burger Icon */}
        <div className="flex items-center md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="mt-4 flex flex-col gap-4 bg-white pb-6 font-bold text-gray-700 md:hidden">
          <li className="border-b border-gray-100 pb-2">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="border-b border-gray-100 pb-2">
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
          </li>
          <li className="border-b border-gray-100 pb-2">
            <Link to="/gallery" onClick={() => setIsOpen(false)}>
              Gallery
            </Link>
          </li>
          <li className="border-b border-gray-100 pb-2">
            <Link to="/franchise" onClick={() => setIsOpen(false)}>
              Franchise
            </Link>
          </li>
          <li className="border-b border-gray-100 pb-2">
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
          </li>
          <button className="w-full rounded-lg bg-orange-500 py-3 text-white">
            Enroll Now
          </button>
        </ul>
      )}

      {/* Floating Action Buttons (WhatsApp/Insta) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <a href="https://wa.me/9566862918" target="_blank" rel="noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="whatsapp"
            className="h-14 w-14 rounded-full bg-white p-2 shadow-lg transition-transform hover:scale-110"
          />
        </a>
        <a
          href="https://www.instagram.com/risingstarskidsschoolvpm"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
            alt="instagram"
            className="h-14 w-14 rounded-full bg-white p-2 shadow-lg transition-transform hover:scale-110"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

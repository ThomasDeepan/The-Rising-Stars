import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo.png"; // Ensure path is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "About Us", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Franchise", path: "/franchise" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-4 md:px-8 pt-4">
      {/* MAIN CONTAINER: Glassmorphism effect with organic rounding */}
      <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-md border border-white/20 rounded-[2rem] md:rounded-full px-6 md:px-10 py-3 flex items-center justify-between shadow-lg shadow-blue-900/5">
        {/* LEFT: LOGO */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="Rising Stars Logo"
            className="h-10 md:h-12 w-auto transition-transform group-hover:scale-110"
          />
          <span className="hidden sm:block text-xl font-black text-[#3D5A5C]">
            Rising <span className="text-[#F2A365]">Stars</span>
          </span>
        </Link>

        {/* CENTER: DESKTOP LINKS (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-[#3D5A5C] font-bold text-sm hover:text-[#F2A365] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F2A365] transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* RIGHT: ENROLL BUTTON & MOBILE TOGGLE */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden sm:block bg-[#F2A365] text-white px-8 py-3 rounded-full font-extrabold text-sm shadow-md shadow-orange-200 hover:bg-[#e08f52] hover:-translate-y-0.5 transition-all"
          >
            Enroll Now !!
          </Link>

          {/* MOBILE MENU TOGGLE ICON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#3D5A5C] hover:bg-gray-100 rounded-full transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY: Animated slide-down card */}
      <div
        className={`lg:hidden absolute top-24 left-4 right-4 bg-white rounded-[2rem] shadow-2xl border border-gray-100 p-6 transition-all duration-300 origin-top ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}
      >
        <div className="flex flex-col gap-4 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-[#3D5A5C] font-bold text-lg py-2 hover:text-[#F2A365]"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/enroll"
            onClick={() => setIsOpen(false)}
            className="mt-2 bg-[#F2A365] text-white py-4 rounded-2xl font-black text-lg shadow-lg shadow-orange-100"
          >
            Enroll Now !!
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

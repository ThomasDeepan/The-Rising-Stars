import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <section className="relative bg-[#113B45] text-white pt-24 pb-12  overflow-hidden">
      {/* 1. TOP WAVE TRANSITION */}
      {/* <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 fill-[#FFF9F0]"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div> */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* COLUMN 1: BRAND */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black tracking-tight text-white">
              Rising <span className="text-[#F2A365]">Stars</span>
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm">
              "A Pre-School Which Enlighten Your Kids To Rise Like A Sun And
              Shine Like A Star." We provide a nurturing environment for
              holistic growth.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F2A365] transition-all text-white"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div>
            <h4 className="text-[#F2A365] font-black mb-6 uppercase tracking-widest text-sm">
              Quick Links
            </h4>
            <ul className="space-y-4 text-gray-300 font-medium">
              {[
                { name: "Home", path: "/" },
                { name: "Blog", path: "/blog" },
                { name: "About Us", path: "/about" },
                { name: "Gallery", path: "/gallery" },
                { name: "Franchise", path: "/franchise" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-white hover:translate-x-2 transition-all flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F2A365] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: CATEGORY */}
          <div>
            <h4 className="text-[#F2A365] font-black mb-6 uppercase tracking-widest text-sm">
              Our Programs
            </h4>
            <ul className="space-y-4 text-gray-300 font-medium text-sm">
              <li>Play Group (2 - 2.6y)</li>
              <li>Nursery (2.6 - 4y)</li>
              <li>Daycare (From 1.8 years)</li>
              <li>After School Activities</li>
            </ul>
          </div>

          {/* COLUMN 4: CONTACT INFO */}
          <div>
            <h4 className="text-[#F2A365] font-black mb-6 uppercase tracking-widest text-sm">
              Contact Info
            </h4>
            <ul className="space-y-5">
              <li className="flex gap-4 items-start text-gray-300">
                <MapPin className="text-[#F2A365] shrink-0" size={20} />
                <span className="text-sm">
                  Rising Stars Kids School, Villupuram, Tamil Nadu.
                </span>
              </li>
              <li className="flex gap-4 items-center text-gray-300">
                <Phone className="text-[#F2A365] shrink-0" size={20} />
                <span className="text-sm">+91 9566862918</span>
              </li>
              <li className="flex gap-4 items-center text-gray-300">
                <Mail className="text-[#F2A365] shrink-0" size={20} />
                <span className="text-sm">risingstarsvpm@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-xs font-bold tracking-widest uppercase">
            © {new Date().getFullYear()} By Shank's Code. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;

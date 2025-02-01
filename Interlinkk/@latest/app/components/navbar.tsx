"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-10 transition-all duration-300 ${
        isScrolled ? "bg-[#ffffff]/70 backdrop-blur-xs shadow-md" : "bg-[#f7f3ec]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-sans text-gray-800">
            <a href="/">
              <img
                src="/trlogo.png"
                alt="Logo"
                className="h-12 w-12 inline-block mr-2"
              />
            </a>
          </div>

          {/* Hamburger Menu (Mobile & Tablet) */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Menu Items (Desktop) */}
          <div className="hidden lg:flex space-x-4">
            <a
              href="/"
              className="text-gray-800 font-mono font-medium hover:bg-[#ac915ff6] px-3 py-2 rounded-md transition duration-300"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-gray-800 font-mono font-medium hover:bg-[#ac915ff6] px-3 py-2 rounded-md transition duration-300"
            >
              About
            </a>
            <a
              href="/events"
              className="text-gray-800 font-mono font-medium hover:bg-[#ac915ff6] px-3 py-2 rounded-md transition duration-300"
            >
              Programs
            </a>
          </div>
        </div>
      </div>

      {/* Dropdown Menu (Mobile & Tablet) */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            <a href="/" className="text-gray-800 hover:text-blue-500">
              Home
            </a>
            <a href="/about" className="text-gray-800 hover:text-blue-500">
              About
            </a>
            <a href="/events" className="text-gray-800 hover:text-blue-500">
              Programs
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

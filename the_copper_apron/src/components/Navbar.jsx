import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/Copper_Apron_logo_Edit.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyle =
    "text-base font-semibold text-[#EC9B3B] hover:text-[#C84B31] transition-colors";

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <nav className="flex flex-row justify-between items-center px-6 md:px-10 py-3 bg-[#2D2424] sticky top-0 z-40 border-b border-amber-500/10 shadow-md">
        {/* Brand Logo & Name */}
        <Link to="/home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="The Copper Apron Logo"
            className="w-12 h-12 rounded-lg object-cover"
          />
          <p className="text-xl md:text-2xl font-bold text-[#F9F6F0] tracking-wide">
            The Copper Apron
          </p>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/home" className={navLinkStyle}>
            Home
          </Link>
          <Link to="/menu" className={navLinkStyle}>
            Menu
          </Link>
          <Link to="/orders" className={navLinkStyle}>
            Orders
          </Link>
          <Link to="/about" className={navLinkStyle}>
            About
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          className="md:hidden text-[#EC9B3B] hover:text-white text-2xl p-2 rounded-md focus:outline-none"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 top-16.25 z-50 bg-black/60 backdrop-blur-sm flex justify-end"
          onClick={toggleMenu}
        >
          <div
            className="bg-[#2D2424] w-64 h-full flex flex-col gap-6 p-6 border-l border-amber-500/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Link to="/home" className={navLinkStyle} onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/menu" className={navLinkStyle} onClick={toggleMenu}>
              Menu
            </Link>
            <Link to="/orders" className={navLinkStyle} onClick={toggleMenu}>
              Orders
            </Link>
            <Link to="/about" className={navLinkStyle} onClick={toggleMenu}>
              About
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

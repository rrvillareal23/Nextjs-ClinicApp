"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Get current path

  const menuItems = [
    {
      href: "/aboutus",
      label: "About Us",
      hoverColor: "hover:bg-[#e51937]",
      activeColor: "bg-[#e51937]",
    },
    {
      href: "/services",
      label: "Services",
      hoverColor: "hover:bg-[#f78f13]",
      activeColor: "bg-[#f78f13]",
    },
    {
      href: "/ourteam",
      label: "Team Rainbow Kids",
      hoverColor: "hover:bg-[#ffde00]",
      activeColor: "bg-[#ffde00]",
    },
    {
      href: "/patientinfo",
      label: "Patient Info",
      hoverColor: "hover:bg-[#008a5f]",
      activeColor: "bg-[#008a5f]",
    },
    {
      href: "/joinourteam",
      label: "Join Our Team",
      hoverColor: "hover:bg-[#0079c2]",
      activeColor: "bg-[#0079c2]",
    },
    {
      href: "/contactdonate",
      label: "Contact/Donate",
      hoverColor: "hover:bg-[#51388b]",
      activeColor: "bg-[#51388b]",
    },
  ];

  return (
    <div>
      <div
        className="h-[3px] bg-repeat"
        style={{ backgroundImage: "url('/top-bar.png')" }}
      ></div>
      <nav className="bg-gray-800 p-4 shadow-md z-20">
        <div className="flex justify-between items-center w-full">
          {/* Logo Section */}
          <div>
            <Link href="/">
              <Image
                src="/logo-white-1.png"
                alt="Logo"
                width={250}
                height={250}
                className="cursor-pointer ml-8"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-white px-4 py-2 rounded-md transition-colors duration-300 ${
                  item.hoverColor
                } ${pathname === item.href ? item.activeColor : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <span
                className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="absolute bg-gray-800 z-50 right-0 top-16 w-1/3 h-screen p-4 space-y-4 lg:hidden">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)} // Close menu on link click
                  className={`block text-white px-4 py-2 rounded-md transition-colors duration-300 ${
                    item.hoverColor
                  } ${pathname === item.href ? item.activeColor : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
      <div
        className="h-[3px] bg-repeat"
        style={{ backgroundImage: "url('/top-bar.png')" }}
      ></div>
    </div>
  );
};

export default Navbar;

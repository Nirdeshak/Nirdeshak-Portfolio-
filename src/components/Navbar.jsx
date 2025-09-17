import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { IoCall } from "react-icons/io5";
import { PiWhatsappLogoBold } from "react-icons/pi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0  w-full bg-gray-900 shadow-md z-50 p-2 border-4 rounded-full animate-borderGradient mb-4">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo / Brand */}
        <div>
          <div className="text-2xl text-white  hover:text-indigo-600 transition-colors animate-textColorChange font-bold">
            Nirdeshak
          </div>
          <p className="flex items-center text-white hover:text-indigo-600">
            <IoCall className="mr-2" /><PiWhatsappLogoBold className="mr-2"/> 9822766045
          </p>{" "}
        </div>
        {/* <div className="text-2xl font-bold text-white  hover:text-indigo-600 transition-colors ">Nirdeshak</div> */}

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white hover:text-indigo-600 font-medium transition-colors "
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-xl border-t border-gray-200">
          <ul className="flex flex-col items-center space-y-4 py-6 px-4">
            {navItems.map((item) => (
              <li key={item.href} className="w-full">
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center text-gray-700 hover:text-indigo-600 
                       font-medium transition-colors duration-300 py-2 rounded-lg hover:bg-indigo-50"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import styles from "./navbar.module.css";
import Logo from "../../../public/images/Logo.png";  // Corrected path

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu after click
  };

  return (
    // <nav className="bg-gray-800 shadow-md fixed w-full z-50 py-4"> background: "linear-gradient(to bottom, #751904, #b44e0f)"
    <nav className="bg-gradient-to-b from-[#751904] to-[#b44e0f] shadow-md fixed w-screen z-50 py-4">
      <div className="w-screen mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10">
        {/* <div className="flex items-center justify-between h-16"> */}
        <div className="flex-shrink-0">
          <Link href="#">
            <Image className="hidden lg:flex " src={Logo} alt="Logo" width={120} height={110} />
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="ml-4 flex items-center md:ml-6">
            <Link href="#hero" onClick={(e) => handleScroll(e, 'hero')} className="text-white hover:bg-[#751904] block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link href="#courses" onClick={(e) => handleScroll(e, 'courses')} className="text-white hover:bg-[#751904] block px-3 py-2 rounded-md text-base font-medium">Courses</Link>
            <Link href="#calendar" onClick={(e) => handleScroll(e, 'calendar')} className="text-white hover:bg-[#751904] block px-3 py-2 rounded-md text-base font-medium">Dates</Link>
            <Link href="#team" onClick={(e) => handleScroll(e, 'team header')} className="text-white hover:bg-[#751904] block px-3 py-2 rounded-md text-base font-medium">Our Team</Link>
            <Link href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-white hover:bg-[#751904] block px-3 py-2 rounded-md text-base font-medium">Contact Us</Link>
          </div>
        </div>
        <div className="md:hidden flex-shrink-0">
          <Link href="#">
            <Image src={Logo} alt="Logo" width={150} height={150} />
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
        {/* </div> */}
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden w-screen`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="#hero" onClick={(e) => handleScroll(e, 'hero')} className="text-white hover:bg-[#751904] block px-3 py-2 rounded-md text-base font-medium">About</Link>
          <Link href="#courses" onClick={(e) => handleScroll(e, 'courses')} className="text-white hover:bg-[#751904] block px-3 py-2 rounded-md text-base font-medium">Courses</Link>
          <Link href="#calendar" onClick={(e) => handleScroll(e, 'calendar')} className="text-white hover:bg-[#751904] block px-3 py-2 rounded-md text-base font-medium">Dates</Link>
          <Link href="#team" onClick={(e) => handleScroll(e, 'team header')} className="text-white hover:bg-[#751904] block px-3 py-2 rounded-md text-base font-medium">Our Team</Link>
          <Link href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-white hover:bg-[#751904] block px-3 py-2 rounded-md text-base font-medium">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default App;

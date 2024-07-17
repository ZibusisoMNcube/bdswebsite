import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/Logo.png"
import styles from "../navbar/navbar.module.css"

/**
 * 
 * @returns  <Link href="#about" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link href="#courses" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Courses</Link>
            <Link href="#team" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">The Team</Link>
            <Link href="#contact" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
 */

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 shadow-md fixed w-full z-10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="#">
              <Image className="hidden lg:flex"
                src={Logo}
                alt="Logo"
                width={150}
                height={150}
              />
            </Link>

          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Link href="#about">About</Link>
              <Link href="#courses" >Hospitality Courses</Link>
              <Link href="#calendar" >Course Dates</Link>
              <Link href="#team" >Meet Our Team</Link>
              <Link href="#contact" >Contact Us</Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">


          <a className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">About</a>

          <a className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Hospitality Courses</a>

          <a className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Our Team</a>

          <a className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Course Dates </a>

          <a className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Contact</a>

        </div>
      </div>
    </nav>
  );
}

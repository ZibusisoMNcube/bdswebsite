import React from "react";
import Image from "next/image"; 
import Logo from "../../public/Logo.png"

  export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const menuItems = [
      "About",
      "Our Team",
      "Courses",
      "Contact",
    ];
  /**
   * 
   * <nav className="container m-auto grid grid-cols-2 pt-5" >
      <div className="pt-5">
        <Image
      src={Logo}
      alt="Logo"
      width={150}
      height={150}
    />
      </div>
      <div className="flex justify-end pt-20 hidden lg:flex">
        <ul className="flex">
        <li className="px-3">About</li>
        <li className="px-3">Courses</li>
        <li className="px-3">Facilitators</li>
        <li className="px-3">Contact</li>
        </ul>
      </div>
    </nav>
   * 
   */

    return (
      <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">

      <Image className="hidden lg:flex"
      src={Logo}
      alt="Logo"
      width={150}
      height={150}
    />
      

      </div>
      <div className="block lg:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M3 3.5A1.5 1.5 0 0 1 4.5 2h11A1.5 1.5 0 0 1 17 3.5c0 .827-.673 1.5-1.5 1.5H4.5A1.5 1.5 0 0 1 3 3.5zm0 6A1.5 1.5 0 0 1 4.5 8h11a1.5 1.5 0 0 1 1.5 1.5c0 .827-.673 1.5-1.5 1.5H4.5A1.5 1.5 0 0 1 3 9.5zm0 6A1.5 1.5 0 0 1 4.5 14h11a1.5 1.5 0 0 1 1.5 1.5c0 .827-.673 1.5-1.5 1.5H4.5A1.5 1.5 0 0 1 3 15.5z"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } w-full lg:flex lg:items-center lg:w-auto lg:justify-end`}
      >
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 px-4"
          >
            About
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 px-4"
          >
            Facilitators
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white px-4"
          >
            Courses
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white px-4"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
    );
  }
  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#751904] to-[#b44e0f] shadow-t shadow-xl items-center text-center z-5 y-0 hidden md:block w-screen">
      <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col items-center text-center space-y-4 md:flex-row md:space-y-0 md:space-x-6 lg:px-8">
        {/* <div className="flex space-x-6 z-10">
          <a href="https://www.facebook.com/baobabsolutions?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-[#751904] hover:text-[#4c1303]">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.linkedin.com/company/baobabdevelopmentsolutions/" target="_blank" rel="noopener noreferrer" className="text-[#751904] hover:text-[#4c1303]">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://wa.me/27795772042" target="_blank" rel="noopener noreferrer" className="text-[#751904] hover:text-[#4c1303]">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
        </div> */}
        <div className="text-center text-md leading-5 text-white z-10">
          &copy; 2024 BDS (Pty) Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const GoogleMapsWithAddress: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.145690576222!2d144.96305791581762!3d-37.81627987975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1d1e5874747!2sGoogle!5e0!3m2!1sen!2sus!4v1604373267152!5m2!1sen!2sus"
          width="300"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">Contact</h2>
        <p>Name: Yvette Van Zyl</p>
        <p>Phone: +27 79 577 2042</p>
        <p>Email: info@baobabsolutions.co.za</p>
        <br /> {/* Add a line break here */}
        <h2 className="text-xl font-bold mb-2">Operating Hours</h2>
        <p> Monday - Friday: 8am - 5pm</p>
        <p> </p>
        <br />
        
        {/* Social Media Icons */}
        <h2 className="text-xl font-bold mb-2">Social Media</h2>
        <div className="flex mt-4 space-x-2">
          <a href="https://www.facebook.com/baobabsolutions" target="_blank" rel="noopener noreferrer" className="text-white">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            <span className="ml-2">  </span>
          </a> 
          <a href="https://www.linkedin.com/company/baobabdevelopmentsolutions/" target="_blank" rel="noopener noreferrer" className="text-white">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            <span className="ml-2">  </span>
          </a>
          <a href="https://wa.me/27795772042" target="_blank" rel="noopener noreferrer" className="text-white">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            <span className="ml-2">  </span> 
          </a>
        </div>
      </div>
    </div>
  );
};

export default GoogleMapsWithAddress;

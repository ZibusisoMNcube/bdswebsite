'use client';

import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import styles from './styles/GoogleMaps.module.css'; // Create this CSS file for styling

const GoogleMapsWithAddress: React.FC = () => {
  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API as string,
        version: 'quarterly',
      });

      const { Map } = await loader.importLibrary('maps');

      const locationInMap = {
        lat: -33.87849,
        lng: 18.51024,
      };

      // MARKER
      const { Marker } = (await loader.importLibrary(
        'marker'
      )) as google.maps.MarkerLibrary;

      const options: google.maps.MapOptions = {
        center: locationInMap,
        zoom: 15,
        mapTypeId: 'roadmap',
      };

      const map = new Map(mapRef.current as HTMLDivElement, options);

      // Add the marker with a label
      const marker = new Marker({
        map: map,
        position: locationInMap,
        title: 'Prosperity Business Park',
        label: {
          text: 'Prosperity Business Park',
          color: '#fff',
          fontSize: '14px',
          fontWeight: 'bold',
        },
      });
    };

    initializeMap();
  }, []);

  return (
    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
      {/* <div className={styles.mapContainer} ref={mapRef}></div> */}
      <div className={styles.mapContainer}><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13249.72766719123!2d18.5101537!3d-33.8785285!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5f112e7c6a93%3A0xcd69fde217c09367!2sBAOBAB%20DEVELOPMENT%20SOLUTIONS!5e0!3m2!1sen!2sza!4v1721663046523!5m2!1sen!2sza" 
      width="100%" 
      height="100%" 
      style={{border:0 }}
      loading="lazy" 
      >
        </iframe>
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

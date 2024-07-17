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
          color: '#000',
          fontSize: '14px',
          fontWeight: 'bold',
        },
      });
    };

    initializeMap();
  }, []);

  return (
    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
      <div className={styles.mapContainer} ref={mapRef}></div>
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

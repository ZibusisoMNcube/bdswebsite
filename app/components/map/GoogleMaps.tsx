// components/GoogleMaps.tsx
'use client';

import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import styles from "../map/map.module.css";

export default function GoogleMaps() {
  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API as string,
        version: 'quarterly',
      });

      const { Map } = await loader.importLibrary('maps');

      const locationInMap = {
        lat: -33.87849, // Updated latitude
        lng: 18.51024,  // Updated longitude
      };

      // MARKER
      const { Marker } = (await loader.importLibrary(
        'marker'
      )) as google.maps.MarkerLibrary;

      const options: google.maps.MapOptions = {
        center: locationInMap,
        zoom: 15,
        mapId: 'NEXT_MAPS_TUTS',
      };

      const map = new Map(mapRef.current as HTMLDivElement, options);

      // add the marker in the map
      const marker = new Marker({
        map: map,
        position: locationInMap,
        title: 'Prosperity Business Park', // Tooltip on hover
        label: {
          text: 'Prosperity Business Park', // Label below the marker
          color: 'black',
          fontWeight: 'bold',
        },
      });

      // Add a "View Larger Map" control
      const viewLargerMapControlDiv = document.createElement('div');
      const viewLargerMapControl = new ViewLargerMapControl(viewLargerMapControlDiv, map);
      map.controls[google.maps.ControlPosition.TOP_RIGHT].push(viewLargerMapControlDiv);
    };

    const ViewLargerMapControl = (controlDiv: HTMLDivElement, map: google.maps.Map) => {
      // Set CSS for the control border
      const controlUI = document.createElement('div');
      controlUI.style.backgroundColor = '#fff';
      controlUI.style.border = '2px solid #fff';
      controlUI.style.borderRadius = '3px';
      controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
      controlUI.style.cursor = 'pointer';
      controlUI.style.marginTop = '8px';
      controlUI.style.marginRight = '8px';
      controlUI.style.textAlign = 'center';
      controlUI.title = 'Click to view in a larger map';
      controlDiv.appendChild(controlUI);

      // Set CSS for the control interior
      const controlText = document.createElement('div');
      controlText.style.color = 'rgb(25,25,25)';
      controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
      controlText.style.fontSize = '16px';
      controlText.style.lineHeight = '38px';
      controlText.style.paddingLeft = '5px';
      controlText.style.paddingRight = '5px';
      controlText.innerHTML = 'View Larger Map';
      controlUI.appendChild(controlText);

      // Setup the click event listeners: simply set the map to Chicago
      controlUI.addEventListener('click', () => {
        window.open(`https://www.google.com/maps?q=${map.getCenter()?.lat()},${map.getCenter()?.lng()}`, '_blank');
      });
    };

    initializeMap();
  }, []);

  return <div className={`${styles.map_container} `} ref={mapRef} />;
}

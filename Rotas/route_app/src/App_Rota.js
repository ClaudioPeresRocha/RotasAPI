require('dotenv').config();

import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

// Localizações dos marcadores
const positions = [
  {
    lat: -3.745,
    lng: -38.523
  },
  {
    lat: -3.750,
    lng: -38.530
  }
];

const position = {
  lat: -3.745,
  lng: -38.523
};

function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey='AIzaSyDin0yqSl_PSUnfoYX8Ot7Sk9LGz3110Op'
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {positions.map((position, index) => (
          <Marker
            key={index}
            position={position}
          />
        ))}
        <Marker
          // Adiciona um marcador no mapa
          position={position}
        />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent);

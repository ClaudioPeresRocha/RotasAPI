import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '1000px',
  height: '800px'
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
    lat: -3.700,
    lng: -38.40
  }
];

const position = {
  lat: -29.6849862,
  lng: -51.4509651
};

function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDin0yqSl_PSUnfoYX8Ot7Sk9LGz3110O0"
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
        { /* Child components, like markers, info windows, etc. */ }
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent);

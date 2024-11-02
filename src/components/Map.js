// src/components/Map.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 3.4516,  // Latitud de Cali
  lng: -76.5320, // Longitud de Cali
};

const Map = ({ apiKey, markers }) => {
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={12}
      >
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;

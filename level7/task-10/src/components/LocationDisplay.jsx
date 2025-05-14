import React from 'react';
import useGeolocation from '../hooks/useGeolocation';
import './LocationDisplay.css';

const LocationDisplay = () => {
  const { location, error } = useGeolocation();

  return (
    <div className="location-card">
      <h2>Your Location</h2>
      {error && <p className="error">{error}</p>}
      {!error && location.lat && location.lon ? (
        <div className="coords">
          <p>Latitude: {location.lat}</p>
          <p>Longitude: {location.lon}</p>
        </div>
      ) : (
        !error && <p>Getting your location...</p>
      )}
    </div>
  );
};

export default LocationDisplay;

import { useState, useEffect } from 'react';

const useGeolocation = () => {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      return;
    }

    const success = (position) => {
      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    };

    const failure = (err) => {
      switch (err.code) {
        case err.PERMISSION_DENIED:
          setError('Permission denied.');
          break;
        case err.POSITION_UNAVAILABLE:
          setError('Position unavailable.');
          break;
        case err.TIMEOUT:
          setError('Request timed out.');
          break;
        default:
          setError('An unknown error occurred.');
      }
    };

    navigator.geolocation.getCurrentPosition(success, failure);
  }, []);

  return { location, error };
};

export default useGeolocation;

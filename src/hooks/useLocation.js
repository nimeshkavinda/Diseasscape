import { useEffect, useState } from "react";
import * as Location from "expo-location";
import Constants from "expo-constants";

let apiKey = Constants.manifest?.extra?.setGoogleApiKey;

const useLocation = () => {
  const [location, setLocation] = useState({
    coords: null,
    address: null,
    error: null,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setLocation({
          ...location,
          error: "Permission to access location was denied",
        });
      }

      Location.setGoogleApiKey(apiKey);

      let { coords } = await Location.getCurrentPositionAsync();

      if (coords) {
        let { latitude, longitude } = coords;

        let regionName = await Location.reverseGeocodeAsync({
          longitude,
          latitude,
        });

        setLocation({
          ...location,
          coords: coords,
          address: regionName[0],
        });
      }
    })();
  }, []);

  return location;
};

export default useLocation;

import { useEffect, useState } from "react";
import { Camera } from "expo-camera";

const useCamera = () => {
  const [cameraPermission, setCameraPermission] = useState(null);

  const getCameraPermission = async () => {
    const permission = await Camera.requestCameraPermissionsAsync
      .then(() => {
        setCameraPermission(permission);
      })
      .catch((error) => {
        console.log("Permission for camera access needed.", error.message);
      });
  };

  useEffect(() => {
    getCameraPermission();
  }, []);

  return cameraPermission;
};

export default useCamera;

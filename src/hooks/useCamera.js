import { useEffect, useState } from "react";
import { Camera } from "expo-camera";

const useCamera = () => {
  const [permission, setPermission] = useState(null);

  const getCameraPermission = async () => {
    // const cameraPermission = await Camera.requestCameraPermissionsAsync
    //   .then(() => {
    //     setPermission(cameraPermission.status === "granted");
    //   })
    //   .catch((error) => {
    //     console.log("Permission for camera access needed.", error.message);
    //   });

    const cameraPermission = await Camera.requestCameraPermissionsAsync();

    setPermission(cameraPermission.status === "granted");

    if (cameraPermission.status !== "granted") {
      alert("Permission for camera access needed.");
    }
  };

  useEffect(() => {
    getCameraPermission();
  }, []);

  return permission;
};

export default useCamera;

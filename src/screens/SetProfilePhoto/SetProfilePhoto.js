import {
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import { Text, BackButton } from "../../common";
import styles from "./styles";
import colors from "../../theme/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Camera } from "expo-camera";
import useCamera from "../../hooks/useCamera";
import { useNavigation } from "@react-navigation/native";

const SetProfilePhoto = () => {
  const cameraPermission = useCamera();
  const [showCameraView, setShowCameraView] = useState(false);
  const [camera, setCamera] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const navigation = useNavigation();

  const takePicture = async () => {
    console.log("Camera permission: ", cameraPermission);
    if (cameraPermission) {
      const data = await camera.takePictureAsync({ base64: true });
      console.log("Captured image data", data);
      setProfilePhoto(data);
      setShowCameraView(false);
    } else {
      console.log("Camera permission is required");
    }
  };

  const handleProfilePhotoSubmit = () => {
    if (profilePhoto !== null || "") {
      navigation.navigate("CompleteProfile", { profilePhoto });
    } else {
      Alert.alert(
        "Profile photo is required",
        "Please submit a photo of yourself",
        [
          {
            text: "OK",
            style: "default",
          },
        ],
        {
          cancelable: true,
        }
      );
    }
  };

  if (showCameraView) {
    return (
      <Modal
        animationType="none"
        transparent={false}
        visible={showCameraView}
        style={styles.cameraWrapper}
      >
        <Camera
          ref={(ref) => setCamera(ref)}
          style={styles.camera}
          type={Camera.Constants.Type.front}
        >
          <View style={styles.snapButtonWrapper}>
            <TouchableOpacity
              style={styles.snapButton}
              onPress={() => {
                takePicture();
              }}
            >
              <MaterialIcons name="lens" size={72} color="#fff" />
            </TouchableOpacity>
          </View>
        </Camera>
      </Modal>
    );
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <View>
        <View style={styles.headerNav}>
          <BackButton />
        </View>
        <View style={styles.headingWrapper}>
          <Text style={styles.headingText}>Take your profile photo</Text>
        </View>
      </View>
      <View style={styles.photoWrapper}>
        {profilePhoto === null ? (
          <TouchableOpacity onPress={() => setShowCameraView(true)}>
            <View style={styles.photoPlaceholder}>
              <MaterialIcons
                name="add-a-photo"
                size={60}
                color={colors.grey.medium}
              />
            </View>
          </TouchableOpacity>
        ) : (
          <Image
            style={styles.profileImg}
            source={{
              uri: profilePhoto.uri,
            }}
            resizeMode="cover"
          />
        )}
      </View>
      <View style={styles.photoOptionsWrapper}>
        {profilePhoto && (
          <TouchableOpacity
            style={[
              styles.optionButton,
              { backgroundColor: colors.error.secondary },
            ]}
            onPress={() => setProfilePhoto(null)}
          >
            <Text style={[styles.buttonText, { color: colors.error.primary }]}>
              Delete photo
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.primary.bg }]}
          onPress={handleProfilePhotoSubmit}
        >
          <Text style={[styles.buttonText, { color: colors.primary.text }]}>
            Set profile photo
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SetProfilePhoto;

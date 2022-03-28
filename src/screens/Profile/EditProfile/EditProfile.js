import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import {
  Text,
  BackButton,
  Input,
  ValidationText,
  Button,
} from "../../../common";
import colors from "../../../theme/colors";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Camera } from "expo-camera";
import useCamera from "../../../hooks/useCamera";
import { MaterialIcons } from "@expo/vector-icons";
import ac from "../../../redux/actions";
import { updateUser } from "../../../redux/actions/user";

const EditProfile = ({ navigation, route }) => {
  const cameraPermission = useCamera();
  const [showCameraView, setShowCameraView] = useState(false);
  const [camera, setCamera] = useState(null);
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      bio: route.params.user?.bio,
      number: route.params.user?.address?.number,
      street: route.params.user?.address?.street,
      city: route.params.user?.address?.city,
      district: route.params.user?.address?.district,
      province: route.params.user?.address?.province,
      phone: route.params.user?.phone,
    },
  });

  // updated user data
  const [userProfileData, setUserProfileData] = useState({
    profilePhoto: route.params.user?.profilePhoto,
    bio: route.params.user?.bio,
    address: {
      number: route.params.user?.address?.number,
      street: route.params.user?.address?.street,
      city: route.params.user?.address?.city,
      district: route.params.user?.address?.district,
      province: route.params.user?.address?.province,
    },
    phone: route.params.user?.phone,
  });

  const onUpdateProfile = (data) => {
    console.log("Profile data: ", data);
    setUserProfileData({
      ...userProfileData,
      bio: data?.bio,
      address: {
        number: data?.number,
        street: data?.street,
        city: data?.city,
        district: data?.district,
        province: data?.province,
      },
      phone: data?.phone,
    });

    dispatch(
      ac.updateUser(route.params.user?.uid, {
        ...userProfileData,
        bio: data?.bio,
        address: {
          number: data?.number,
          street: data?.street,
          city: data?.city,
          district: data?.district,
          province: data?.province,
        },
        phone: data?.phone,
      })
    );
  };

  console.log("Profile data state obj: ", userProfileData);

  const updateUserFetching = useSelector(({ updateUser: { fetching } }) => {
    return fetching;
  });

  useEffect(() => {
    if (!updateUserFetching) {
      dispatch(ac.getLoggedInUser(route.params.user?.uid));
    }
  }, [dispatch, updateUserFetching]);

  const takePicture = async () => {
    console.log("Camera permission: ", cameraPermission);
    if (cameraPermission) {
      const data = await camera.takePictureAsync({ base64: true });
      console.log("Captured image data", data);
      setUserProfileData({
        ...userProfileData,
        profilePhoto: data.base64,
      });
      setShowCameraView(false);
    } else {
      console.log("Camera permission is required");
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
      <View style={styles.headerNav}>
        <BackButton />
        <Text style={styles.headerNavText}>Edit Profile</Text>
        <Text></Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profileImgWrapper}>
          <Image
            style={styles.profileImg}
            source={{
              uri: `data:image/jpg;base64,${userProfileData.profilePhoto}`,
            }}
            resizeMode="cover"
          />
          <TouchableOpacity
            style={styles.editProfileImgIco}
            onPress={() => setShowCameraView(true)}
          >
            <Feather name="edit" size={16} color={colors.secondary.text} />
          </TouchableOpacity>
        </View>
        <Text style={styles.sectionHeading}>Bio</Text>
        <View style={styles.formWrapper}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Enter bio"
                multiline={true}
                style={styles.textArea}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                isError={errors.bio ? true : false}
              />
            )}
            name="bio"
          />
          {errors.bio && <ValidationText>Bio is required.</ValidationText>}
        </View>
        <Text style={styles.sectionHeading}>Contact</Text>
        <View style={styles.formWrapper}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Mobile number"
                keyboardType="numeric"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                isError={errors.phone ? true : false}
              />
            )}
            name="phone"
          />
          {errors.phone && (
            <ValidationText>Mobile number is required.</ValidationText>
          )}
        </View>
        <Text style={styles.sectionHeading}>Address</Text>
        <View style={styles.formWrapper}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Apt/ House No"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                isError={errors.number ? true : false}
              />
            )}
            name="number"
          />
          {errors.number && (
            <ValidationText>Apt/ House No is required.</ValidationText>
          )}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Street"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                isError={errors.street ? true : false}
              />
            )}
            name="street"
          />
          {errors.street && (
            <ValidationText>Street is required.</ValidationText>
          )}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="City"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                isError={errors.city ? true : false}
              />
            )}
            name="city"
          />
          {errors.city && <ValidationText>City is required.</ValidationText>}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="District"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                isError={errors.district ? true : false}
              />
            )}
            name="district"
          />
          {errors.district && (
            <ValidationText>District is required.</ValidationText>
          )}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Province"
                style={[styles.input, { marginBottom: 20 }]}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                isError={errors.province ? true : false}
              />
            )}
            name="province"
          />
          {errors.province && (
            <ValidationText>Province is required.</ValidationText>
          )}
        </View>
        <Button
          title="Update profile"
          style={styles.button}
          onPress={handleSubmit(onUpdateProfile)}
          isLoading={updateUserFetching}
        />
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.linkButton}>
            <Text style={[styles.buttonText, { color: colors.error.primary }]}>
              Delete account
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;

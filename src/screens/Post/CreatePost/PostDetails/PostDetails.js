import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import { useState, useEffect } from "react";
import { BackButton, ValidationText, Input } from "../../../../common";
import styles from "../styles";
import { useForm, Controller } from "react-hook-form";
import colors from "../../../../theme/colors";
import useLocation from "../../../../hooks/useLocation";
import moment from "moment";
import { MaterialIcons } from "@expo/vector-icons";
import { Camera } from "expo-camera";

const PostDetails = ({ navigation, route }) => {
  const [userRegion, setUserRegion] = useState();
  const [date, setDate] = useState(
    moment(new Date()).utc().format("ddd Do MMMM YYYY")
  );
  const { coords, address, error } = useLocation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      type: "",
      date: "",
      images: [],
      location: { name: "", vicinity: "" },
      latLng: {
        latitude: "",
        longitude: "",
      },
      postedBy: {
        id: 1,
        fullName: "Nimesh Kavinda",
        profileImg: "https://avatars.githubusercontent.com/u/44240093?v=4",
      },
    },
  });

  useEffect(() => {
    if (coords && address !== null) {
      console.log("Coords: ", coords, "Address: ", address);
      setUserRegion({
        name: address?.city,
        vicinity: address?.city,
        latitude: coords?.latitude,
        longitude: coords?.longitude,
      });
    }
    if (error !== null) {
      console.log("Failed to get user location");
    }
  }, [coords, address, error]);

  // camera
  const [cameraPermission, setCameraPermission] = useState(null);

  const [camera, setCamera] = useState(null);
  const [imageUri, setImageUri] = useState([]);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [imageArray, setImageArray] = useState([]);

  const getPermission = async () => {
    const cameraPermission = await Camera.requestCameraPermissionsAsync();

    setCameraPermission(cameraPermission.status === "granted");

    if (cameraPermission.status !== "granted") {
      alert("Permission for camera access needed.");
    }
  };

  useEffect(() => {
    getPermission();
  }, []);

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      console.log(data.uri);
      setImageUri(data.uri);
      setImageArray([...imageArray, data.uri]);
    }
  };

  // post data state obj
  const [postData, setPostData] = useState();

  const handleSubmitPress = (data) => {
    console.log("Post details data: ", data);
    setDate(moment(new Date()).utc().format("ddd Do MMMM YYYY"));
    setPostData({
      title: data?.title,
      description: data?.description,
      type: route.params.type,
      date: date,
      images: [],
      location: { name: userRegion?.name, vicinity: userRegion?.vicinity },
      latLng: {
        latitude: userRegion?.latitude,
        longitude: userRegion?.longitude,
      },
      postedBy: {
        id: 1,
        fullName: "Nimesh Kavinda",
        profileImg: "https://avatars.githubusercontent.com/u/44240093?v=4",
      },
    });
  };

  console.log("Post data state obj: ", postData);

  return (
    <SafeAreaView style={styles.wrapper}>
      <Camera
        ref={(ref) => setCamera(ref)}
        style={styles.fixedRatio}
        type={type}
      />
      <View style={styles.headerNav}>
        <BackButton />
      </View>
      <View style={styles.headingWrapper}>
        <Text style={styles.headingText}>Post details</Text>
      </View>
      <View style={styles.formWrapper}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Post title"
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              isError={errors.title ? true : false}
            />
          )}
          name="title"
        />
        {errors.title && <ValidationText>Title is required.</ValidationText>}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Post description"
              multiline={true}
              style={styles.textArea}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              isError={errors.description ? true : false}
            />
          )}
          name="description"
        />
        {errors.description && (
          <ValidationText>Description is required.</ValidationText>
        )}
      </View>
      <Text style={styles.sectionHeadingText}>Photos</Text>
      <ScrollView
        style={styles.photoScrollView}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity style={styles.takePhotoButton} onPress={takePicture}>
          <MaterialIcons
            name="add-a-photo"
            size={24}
            color={colors.grey.dark}
          />
          <Text style={styles.takePhotoButtonText}>Take photo</Text>
        </TouchableOpacity>
        {imageArray.length > 0 && (
          <View>
            <FlatList
              data={imageArray}
              renderItem={({ item, index }) => (
                <TouchableOpacity>
                  <Image
                    key={index}
                    source={{ uri: item }}
                    style={{
                      width: 160,
                      height: 160,
                      borderRadius: 10,
                      marginRight: 10,
                    }}
                  />
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
              style={styles.photoFlatList}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        )}
      </ScrollView>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={[
            styles.button,
            { width: "100%", backgroundColor: colors.primary.bg },
          ]}
          onPress={handleSubmit(handleSubmitPress)}
        >
          <Text style={[styles.buttonText, { color: colors.primary.text }]}>
            Create post
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PostDetails;

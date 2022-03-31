import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
  Alert,
} from "react-native";
import { useState, useEffect } from "react";
import { BackButton, ValidationText, Input, Button } from "../../../../common";
import styles from "../styles";
import { useForm, Controller } from "react-hook-form";
import colors from "../../../../theme/colors";
import useLocation from "../../../../hooks/useLocation";
import moment from "moment";
import { MaterialIcons } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import useCamera from "../../../../hooks/useCamera";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import ac from "../../../../redux/actions";

const PostDetails = ({ navigation, route }) => {
  const dispatch = useDispatch();
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
        uid: "",
        fullName: "",
        profileImg: "",
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

  const loggedInUser = useSelector(({ getLoggedInUser }) =>
    getLoggedInUser.data ? getLoggedInUser.data[0] : {}
  );

  // camera
  const cameraPermission = useCamera();
  const [showCameraView, setShowCameraView] = useState(false);
  const [camera, setCamera] = useState(null);
  const [images, setImages] = useState([]);

  const takePicture = async () => {
    console.log("Camera permission: ", cameraPermission);
    if (cameraPermission) {
      const data = await camera.takePictureAsync({ base64: true });
      console.log("Captured image data", data);
      setImages([...images, { id: uuidv4(), src: data.base64 }]);
      setShowCameraView(false);
    } else {
      console.log("Camera permission is required");
    }
  };

  console.log("Images thus far: ", images);

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
      images: images,
      location: { name: userRegion?.name, vicinity: userRegion?.vicinity },
      latLng: {
        latitude: userRegion?.latitude,
        longitude: userRegion?.longitude,
      },
      postedBy: {
        uid: loggedInUser?.uid,
        fullName: loggedInUser?.fullName,
        profileImg: loggedInUser?.profilePhoto,
      },
    });
  };

  const createPost = useSelector(({ createPost }) =>
    createPost.data ? createPost.data : {}
  );

  const createPostFetching = useSelector(({ createPost: { fetching } }) => {
    return fetching;
  });

  useEffect(() => {
    if (postData !== undefined || "" || null) {
      console.log("Post data state obj before submit: ", postData);
      dispatch(ac.createPost(postData));
    }
  }, [dispatch, postData]);

  useEffect(() => {
    if (!createPostFetching && createPost.data?.status === "success") {
      Alert.alert(
        "Success",
        "Your post has been created",
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
  }, [dispatch, createPost]);

  const deleteImage = (img) => {
    let imgToDelete = images.findIndex((item) => {
      return item.id === img.id;
    });

    setImages(images.splice(imgToDelete, 1));

    // for (let i = 0; i < images.length; i++) {
    //   if (images[i].id === img.id) {
    //     setImages(images.splice(i, 1));
    //     break;
    //   }
    // }
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
          type={Camera.Constants.Type.back}
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
        contentContainerStyle={styles.photoScrollView}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {images.length > 0 &&
          images.map((img, index) => {
            return (
              <View style={styles.imagePreviewWrapper} key={index}>
                <TouchableOpacity onPress={() => deleteImage(img)}>
                  <Image
                    key={img?.id}
                    source={{ uri: `data:image/jpg;base64,${img?.src}` }}
                    style={{
                      width: 160,
                      height: 160,
                      borderRadius: 10,
                      marginRight: 10,
                    }}
                  />
                </TouchableOpacity>
              </View>
            );
          })}
        {images.length < 5 && (
          <TouchableOpacity
            style={styles.takePhotoButton}
            onPress={() => setShowCameraView(true)}
          >
            <MaterialIcons
              name="add-a-photo"
              size={24}
              color={colors.grey.dark}
            />
            <Text style={styles.takePhotoButtonText}>Take photo</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
      <View style={styles.buttonSubmitWrapper}>
        <Button
          title="Create post"
          isLoading={createPostFetching}
          onPress={handleSubmit(handleSubmitPress)}
        />
      </View>
    </SafeAreaView>
  );
};

export default PostDetails;

import { View, SafeAreaView, ScrollView, Alert } from "react-native";
import { Text, BackButton, Input, ValidationText, Button } from "../../common";
import styles from "./styles";
import { useForm, Controller } from "react-hook-form";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ac from "../../redux/actions";

const CompleteProfile = ({ navigation, route }) => {
  const signUp = useSelector(({ signUp }) => signUp);
  const dispatch = useDispatch();
  const [userProfileData, setUserProfileData] = useState({
    uid: signUp?.data?.uid,
    fullName: "",
    profilePhoto: route.params.profilePhoto.base64,
    bio: "Hey there, I'm using Diseasscape",
    status: "healthy",
    disease: "",
    address: {
      number: "",
      street: "",
      city: "",
      district: "",
      province: "",
    },
    phone: "",
    posts: [],
    events: [],
    going: [],
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      uid: "",
      fullName: "",
      profilePhoto: "",
      bio: "",
      status: "",
      disease: "",
      address: {
        number: "",
        street: "",
        city: "",
        district: "",
        province: "",
      },
      phone: "",
      posts: [],
      events: [],
      going: [],
    },
  });

  const createUser = useSelector(({ createUser }) => createUser);

  const fetching = useSelector(({ createUser: { fetching } }) => {
    return fetching;
  });

  // useEffect(() => {
  //   setUserProfileData({
  //     uid: signUp?.data?.uid,
  //     fullName: "",
  //     profilePhoto: route.params.profilePhoto.base64,
  //     bio: "Hey there, I'm using Diseasscape",
  //     status: "healthy",
  //     disease: "",
  //     address: {
  //       number: "",
  //       street: "",
  //       city: "",
  //       district: "",
  //       province: "",
  //     },
  //     phone: "",
  //     posts: [],
  //     events: [],
  //     going: [],
  //   });
  // }, []);

  const onCreateProfile = (data) => {
    console.log("Profile data received on submit press: ", data);
    setUserProfileData({
      ...userProfileData,
      fullName: data?.fullName,
      address: {
        number: data?.number,
        street: data?.street,
        city: data?.city,
        district: data?.district,
        province: data?.province,
      },
      phone: data?.mobile,
    });
  };

  useEffect(() => {
    if (userProfileData?.fullName !== "" && userProfileData?.mobile !== "") {
      console.log("Profile data before dispatch: ", userProfileData);
      dispatch(ac.createUser(userProfileData));
    }
  }, [userProfileData]);

  useEffect(
    function () {
      if (createUser.data.status === "success") {
        console.log(
          "Create user updated state data from redux: ",
          createUser.data
        );
        navigation.navigate("Login");
      }
      if (createUser.error) {
        Alert.alert(
          "Error",
          "Failed to create user profile",
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
    },
    [createUser]
  );

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.headerNav}>
        <BackButton />
      </View>
      <View style={styles.headingWrapper}>
        <Text style={styles.headingText}>Complete profile</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionHeading}>Personal</Text>
        <View style={styles.formWrapper}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Full name"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                isError={errors.fullName ? true : false}
              />
            )}
            name="fullName"
          />
          {errors.fullName && (
            <ValidationText>Full name is required.</ValidationText>
          )}
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
                isError={errors.mobile ? true : false}
              />
            )}
            name="mobile"
          />
          {errors.mobile && (
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
          {errors.street && <ValidationText>City is required.</ValidationText>}
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
          {errors.street && (
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
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                isError={errors.province ? true : false}
              />
            )}
            name="province"
          />
          {errors.street && (
            <ValidationText>Province is required.</ValidationText>
          )}
        </View>
        <Button
          title="Create profile"
          onPress={handleSubmit(onCreateProfile)}
          isLoading={fetching}
          style={styles.button}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CompleteProfile;

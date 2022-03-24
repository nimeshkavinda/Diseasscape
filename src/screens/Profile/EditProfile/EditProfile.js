import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Text, BackButton, Input, ValidationText } from "../../../common";
import colors from "../../../theme/colors";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { useState, useEffect } from "react";

const EditProfile = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: "",
      fullName: "",
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
    },
  });

  // updated user data
  const [userProfileData, setUserProfileData] = useState();

  useEffect(() => {
    setUserProfileData({
      id: "",
      fullName: "",
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
    });
  }, []);

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
      phone: data?.mobile,
    });
  };

  console.log("Profile data state obj: ", userProfileData);

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
              uri: "https://avatars.githubusercontent.com/u/44240093?v=4",
            }}
            resizeMode="cover"
          />
          <TouchableOpacity style={styles.editProfileImgIco}>
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
          {errors.mobile && (
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
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.primary.bg }]}
          onPress={handleSubmit(onUpdateProfile)}
        >
          <Text style={[styles.buttonText, { color: colors.primary.text }]}>
            Update profile
          </Text>
        </TouchableOpacity>
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

import { View, TouchableOpacity, Alert } from "react-native";
import React, { useEffect } from "react";
import styles from "./styles";
import { Button, Input, BackButton, Text, ValidationText } from "../../common";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ac from "../../redux/actions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";

export default function Login() {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signIn = useSelector(({ signIn }) => signIn);

  const fetching = useSelector(({ signIn: { fetching } }) => {
    return fetching;
  });

  const getLoggedInUser = useSelector(({ getLoggedInUser }) => getLoggedInUser);

  const fetchingLoggedInUser = useSelector(
    ({ getLoggedInUser: { fetching } }) => {
      return fetching;
    }
  );

  const onSubmit = (data) => {
    dispatch(ac.signIn(data.email, data.password));
  };

  useEffect(() => {
    if (!fetching && signIn.data) {
      console.log("signed in uid: ", signIn.data.uid);
      dispatch(ac.getLoggedInUser(signIn.data.uid));
    }
  }, [dispatch, fetching, signIn]);

  useEffect(
    function () {
      if (
        signIn.data &&
        !fetching &&
        !fetchingLoggedInUser &&
        getLoggedInUser.data
      ) {
        console.log("logged in user: ", getLoggedInUser.data);
        navigation.navigate("HomeStack");
      } else if (signIn.error || getLoggedInUser.error) {
        Alert.alert(
          "Failed to login",
          signIn.error.code || getLoggedInUser.error,
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
    [signIn, fetching, getLoggedInUser, fetchingLoggedInUser, dispatch]
  );

  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <View>
        <BackButton />
        <View style={styles.headingWrapper}>
          <Text style={styles.title}>Welcome to Diseasscape</Text>
          <Text style={styles.subtitle}>Let's sign you in</Text>
        </View>
        <View style={styles.formWrapper}>
          <Controller
            control={control}
            rules={{
              required: true,
              pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="email address"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                isError={errors.email ? true : false}
              />
            )}
            name="email"
          />
          {errors.email?.type === "required" ? (
            <ValidationText>Email is required</ValidationText>
          ) : errors.email?.type === "pattern" ? (
            <ValidationText>Email is not valid</ValidationText>
          ) : null}

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                secureTextEntry={true}
                placeholder="password"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                isError={errors.password ? true : false}
              />
            )}
            name="password"
          />
          {errors.password && (
            <ValidationText>Password is required</ValidationText>
          )}

          <Button
            title="Forgot password?"
            variant="link"
            style={styles.forgotPWLink}
            onPress={() => navigation.navigate("ForgotPassword")}
          />
          <Button
            title="Login"
            isLoading={fetching || fetchingLoggedInUser}
            onPress={handleSubmit(onSubmit)}
          />
        </View>
        <View style={styles.socialLoginWrapper}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>OR</Text>
          <TouchableOpacity style={styles.socialLoginButton}>
            <AntDesign name="google" size={24} color="#015EFF" />
            <Text style={styles.socialLoginLabel}>Login with Google</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <View style={styles.signupLinkWrapper}>
          <Text style={styles.signupLabel}>Don't have an account?</Text>
          <Button
            title="Register"
            variant="link"
            style={styles.signupLink}
            onPress={() => navigation.navigate("Signup")}
          />
        </View>
      </View>
      <StatusBar style="dark" />
    </View>
  );
}

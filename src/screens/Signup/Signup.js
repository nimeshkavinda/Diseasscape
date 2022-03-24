import { View, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import styles from "./styles";
import { Button, Input, BackButton, Text, ValidationText } from "../../common";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ac from "../../redux/actions";

export default function Signup() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { register, getValues } = useForm();
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

  const signUp = useSelector(({ signUp }) => signUp);

  const fetching = useSelector(({ signUp: { fetching } }) => {
    return fetching;
  });

  const onSubmit = (data) => {
    console.log("Sign up data: ", data);
    dispatch(ac.signUp(data.email, data.password));
  };

  useEffect(
    function () {
      if (signUp.data) {
        console.log("Signup success data: ", signUp.data);
        navigation.navigate("SetProfilePhoto");
      }
      if (signUp.error) {
        Alert.alert(
          "Failed to sign up",
          signUp.error.code,
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
    [signUp]
  );

  return (
    <View style={styles.wrapper}>
      <View>
        <BackButton />
        <View style={styles.headingWrapper}>
          <Text style={styles.title}>Sign up</Text>
          <Text style={styles.subtitle}>Create an account</Text>
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
                // {...register("password")}
              />
            )}
            name="password"
          />
          {errors.password && (
            <ValidationText>Password is required</ValidationText>
          )}

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                secureTextEntry={true}
                placeholder="confirm password"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                isError={errors.conPassword ? true : false}
                // {...register("conPassword", {
                //   validate: (value) =>
                //     value === getValues("password") || "Passwords don't match",
                // })}
              />
            )}
            name="conPassword"
          />
          {errors.conPassword && (
            <ValidationText>Confirm password is required</ValidationText>
          )}
        </View>
        <Button
          title="Sign up"
          isLoading={fetching}
          onPress={handleSubmit(onSubmit)}
          style={styles.button}
        />
        <View style={styles.socialSignupWrapper}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>OR</Text>
          <TouchableOpacity style={styles.socialSignupButton}>
            <AntDesign name="google" size={24} color="#015EFF" />
            <Text style={styles.socialSignupLabel}>Sign up with Google</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <View style={styles.loginLinkWrapper}>
          <Text style={styles.loginLabel}>Already have an account?</Text>
          <Button
            title="Login"
            variant="link"
            style={styles.loginLink}
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </View>
    </View>
  );
}

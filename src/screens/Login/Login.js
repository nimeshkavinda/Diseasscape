import { View, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { Button, Input, BackButton, Text, ValidationText } from "../../common";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";

export default function Login() {
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

  const onSubmit = (data) => {
    console.log(data);
    // navigation.navigate("HomeStack");
  };

  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <View>
        <BackButton />
        <View style={styles.headingWrapper}>
          <Text style={styles.title}>Welcome back</Text>
          <Text style={styles.subtitle}>Let's sign you in</Text>
        </View>
        <View style={styles.formWrapper}>
          <Controller
            control={control}
            rules={{
              required: true,
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
          {errors.email && <ValidationText>Email is required</ValidationText>}

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
          <Button title="Login" onPress={handleSubmit(onSubmit)} />
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
    </View>
  );
}

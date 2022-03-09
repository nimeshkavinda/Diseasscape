import { View, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { Button, Input, BackButton, Text } from "../../common";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

export default function Login() {
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
          <Input placeholder="email address" style={styles.input} />
          <Input
            secureTextEntry={true}
            placeholder="password"
            style={styles.input}
          />
          <Button
            title="Forgot password?"
            variant="link"
            style={styles.forgotPWLink}
            onPress={() => navigation.navigate("ForgotPassword")}
          />
          <Button
            title="Login"
            onPress={() => navigation.navigate("HomeStack")}
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
    </View>
  );
}

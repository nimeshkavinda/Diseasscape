import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import { Button, Input, BackButton } from "../../common";
import { useNavigation } from "@react-navigation/native";

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
          <Input placeholder="password" style={styles.input} />
          <Button
            title="Forgot password?"
            variant="link"
            style={styles.forgotPWLink}
          />
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
        <Button
          title="Login"
          onPress={() => navigation.navigate("GetStarted")}
        />
      </View>
    </View>
  );
}

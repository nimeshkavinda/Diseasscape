import { View, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { Button, Input, BackButton, Text } from "../../common";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

export default function Signup() {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <View>
        <BackButton />
        <View style={styles.headingWrapper}>
          <Text style={styles.title}>Sign up</Text>
          <Text style={styles.subtitle}>Create an account</Text>
        </View>
        <View style={styles.formWrapper}>
          <Input placeholder="full name" style={styles.input} />
          <Input placeholder="email address" style={styles.input} />
          <Input
            secureTextEntry={true}
            placeholder="password"
            style={[styles.input, { marginBottom: 30 }]}
          />
          <Button
            title="Sign up"
            onPress={() => navigation.navigate("GetStarted")}
          />
        </View>
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

import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import { Button, Input, BackButton } from "../../common";
import { useNavigation } from "@react-navigation/native";

export default function EnterOTP() {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <BackButton />
      <View>
        <View style={styles.headingWrapper}>
          <Text style={styles.title}>Forgot password?</Text>
          <Text style={styles.subtitle}>Don't worry it happens.</Text>
        </View>
        <View style={styles.formWrapper}>
          <Text style={styles.instructions}>
            Please enter the email address associated with your account.
          </Text>
          <Input placeholder="email address" style={styles.input} />
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          title="Submit"
          onPress={() => navigation.navigate("ResetPassword")}
        />
      </View>
    </View>
  );
}

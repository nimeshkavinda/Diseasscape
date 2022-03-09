import { View } from "react-native";
import React from "react";
import styles from "./styles";
import { Button, Input, BackButton, Text } from "../../common";
import { useNavigation } from "@react-navigation/native";

export default function ResetPassword() {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <BackButton />
      <View>
        <View style={styles.headingWrapper}>
          <Text style={styles.title}>Pick a new password</Text>
        </View>
        <View style={styles.formWrapper}>
          <Text style={styles.instructions}>Please enter a new password</Text>
          <Input
            secureTextEntry={true}
            placeholder="password"
            style={styles.input}
          />
          <Input
            secureTextEntry={true}
            placeholder="confirm password"
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          title="Reset password"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
}

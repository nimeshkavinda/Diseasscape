import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import { CTAButton } from "../../common";

export default function GetStarted({ navigation }) {
  return (
    <View style={styles.wrapper}>
      <Text>GetStarted</Text>
      <CTAButton
        title="Get Started"
        onPress={() => navigation.navigate("login")}
      />
      <CTAButton
        title="Get Started"
        variant="secondary"
        onPress={() => navigation.navigate("login")}
      />
    </View>
  );
}

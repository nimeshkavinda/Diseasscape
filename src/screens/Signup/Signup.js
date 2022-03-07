import { View, Text, TextInput } from "react-native";
import React from "react";
import styles from "./styles";
import { Button } from "../../common";
import { useNavigation } from "@react-navigation/native";

export default function Signup() {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <View style={styles.headingWrapper}>
        <Text style={styles.title}>Hello again</Text>
        <Text style={styles.subtitle}>Welcome back we've missed you</Text>
      </View>
      <View style={styles.formWrapper}></View>
    </View>
  );
}

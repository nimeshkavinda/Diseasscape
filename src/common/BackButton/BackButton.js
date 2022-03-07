import { TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function BackButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => navigation.goBack()}
    >
      <AntDesign name="arrowleft" size={30} color="black" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 15,
  },
});

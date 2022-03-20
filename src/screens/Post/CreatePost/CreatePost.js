import { SafeAreaView, Text, View } from "react-native";
import React from "react";
import { BackButton } from "../../../common";
import styles from "./styles";

const CreatePost = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.headerNav}>
        <BackButton />
      </View>
      <Text>CreatePost</Text>
    </SafeAreaView>
  );
};

export default CreatePost;

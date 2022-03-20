import { View, SafeAreaView, TouchableOpacity } from "react-native";
import { Text, BackButton } from "../../../common";
import React from "react";
import styles from "./styles";

const Post = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.headerNav}>
        <BackButton />
      </View>
      <View style={styles.headingWrapper}>
        <Text styles={styles.headingText}>
          Select how you want to contribute
        </Text>
      </View>
      <View style={styles.postTypeWrapper}>
        <TouchableOpacity styles={styles.postTypeButton}>
          <Text style={styles.buttonText}>Create a post</Text>
        </TouchableOpacity>
        <TouchableOpacity styles={styles.postTypeButton}>
          <Text style={styles.buttonText}>Create an event</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Post;

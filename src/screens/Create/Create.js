import { View, SafeAreaView, TouchableOpacity } from "react-native";
import { Text, BackButton } from "../../common";
import React from "react";
import styles from "./styles";

const Create = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.headingWrapper}>
        <Text style={styles.headingText}>
          Select how you want to contribute
        </Text>
      </View>
      <View style={styles.postTypeWrapper}>
        <TouchableOpacity style={styles.postTypeButton}>
          <Text style={styles.buttonText}>Create a post</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.postTypeButton}>
          <Text style={styles.buttonText}>Create an event</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Create;

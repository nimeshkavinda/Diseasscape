import { View, SafeAreaView, TouchableOpacity } from "react-native";
import { Text, BackButton } from "../../common";
import React from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const Post = () => {
  const navigation = useNavigation();
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
        <TouchableOpacity
          styles={styles.postTypeButton}
          onPress={() =>
            navigation.navigate("CreatePost", {
              screen: "CreatePost",
            })
          }
        >
          <Text style={styles.buttonText}>Create a post</Text>
        </TouchableOpacity>
        <TouchableOpacity
          styles={styles.postTypeButton}
          onPress={() =>
            navigation.navigate("Post", {
              screen: "CreateEvent",
            })
          }
        >
          <Text style={styles.buttonText}>Create an event</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Post;

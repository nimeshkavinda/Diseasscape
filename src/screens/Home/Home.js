import { View, SafeAreaView, Image } from "react-native";
import { Text } from "../../common";
import React from "react";
import styles from "./styles";

const Home = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.header}>
        <View style={styles.greeting}>
          <Text style={styles.greetingText}>Good morning</Text>
          <Text style={styles.userName}>Nimesh</Text>
        </View>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://www.pinkvilla.com/imageresize/blackpink_rose_otg_main.jpg?width=752&format=webp&t=pvorg",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

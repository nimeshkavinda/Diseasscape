import { View, SafeAreaView } from "react-native";
import { Input, Text } from "../../common";
import React from "react";
import styles from "./styles";
import MapView from "react-native-maps";

const Home = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.header}>
        <Input style={styles.searchInput} placeholder="Search" />
      </View>
      <MapView style={styles.map} />
    </SafeAreaView>
  );
};

export default Home;

import { SafeAreaView, View } from "react-native";
import React from "react";
import { BackButton } from "../../../common/";
import styles from "./styles";
import EventDetails from "./EventDetails/EventDetails";
import EventLocation from "./EventLocation/EventLocation";

const CreateEvent = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.headerNav}>
        <BackButton />
      </View>
      {/* <EventDetails /> */}
      <EventLocation />
    </SafeAreaView>
  );
};

export default CreateEvent;

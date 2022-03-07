import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import { Button } from "../../common";
import { Video } from "expo-av";
import { BlurView } from "expo-blur";
import { StatusBar } from "expo-status-bar";

export default function Signup({ navigation }) {
  return (
    <View style={styles.wrapper}>
      <Video
        style={styles.video}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/diseasscape.appspot.com/o/1.mp4?alt=media&token=4258d7be-b2fa-4edd-9560-dcf573c8559e",
        }}
        useNativeControls={false}
        resizeMode="cover"
        isLooping
        isMuted
        shouldPlay
      />
      <BlurView intensity={80} tint="light" style={styles.blurViewWrapper}>
        <View style={styles.headingWrapper}>
          <Text style={styles.title}>It is health that is the real wealth</Text>
          <Text style={styles.subtitle}>Start your campaign now</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Get Started"
            onPress={() => navigation.navigate("login")}
          />
          <Button
            title="I already have an account"
            variant="link"
            style={styles.linkButton}
            onPress={() => navigation.navigate("login")}
          />
        </View>
      </BlurView>
      <StatusBar style="dark" />
    </View>
  );
}

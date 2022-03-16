import { View } from "react-native";
import React from "react";
import styles from "./styles";
import { Button, Text } from "../../common";
import { Video } from "expo-av";
import { BlurView } from "expo-blur";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

export default function GetStarted() {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <Video
        style={styles.video}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/diseasscape.appspot.com/o/1.mp4?alt=media&token=0390b605-5de8-4fe3-8f44-05ff6be43718",
        }}
        useNativeControls={false}
        resizeMode="cover"
        isLooping
        isMuted
        shouldPlay
      />
      <BlurView intensity={100} tint="light" style={styles.blurViewWrapper}>
        <View style={styles.headingWrapper}>
          <Text style={styles.title}>
            The groundwork of all happiness is health.
          </Text>
          <Text style={styles.subtitle}>
            It's a responsibility we all share
          </Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Get Started"
            onPress={() => navigation.navigate("Signup")}
          />
          <Button
            title="I already have an account"
            variant="link"
            style={styles.linkButton}
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </BlurView>
      <StatusBar style="light" />
    </View>
  );
}

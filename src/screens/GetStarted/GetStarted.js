import { View, Image, Platform } from "react-native";
import styles from "./styles";
import { Button, Text } from "../../common";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

export default function GetStarted() {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.image}
        source={require("../../../assets/images/getstarted.jpg")}
        resizeMode="cover"
      />
      <LinearGradient
        colors={[
          "transparent",
          "rgba(0, 0, 0, 0.75)",
          "rgba(0, 0, 0, 0.8)",
          "rgba(0, 0, 0, 0.95)",
        ]}
        style={styles.gradient}
      />
      <View style={styles.headingWrapper}>
        <Text style={styles.title}>
          It's one's responsibility to take care of loved ones.
        </Text>
        <Text style={styles.subtitle}>See how you can do you part</Text>
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
      {Platform.OS === "ios" && <StatusBar style="light" />}
    </View>
  );
}

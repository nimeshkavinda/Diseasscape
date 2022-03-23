import { View, SafeAreaView } from "react-native";
import { Text, BackButton } from "../../../common";
import styles from "./styles";

const EditProfile = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.headerNav}>
        <BackButton />
      </View>
      <View style={styles.headingWrapper}>
        <Text style={styles.headingText}>Edit Profile</Text>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;

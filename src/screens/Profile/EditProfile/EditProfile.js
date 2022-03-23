import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Text, BackButton, Input } from "../../../common";
import colors from "../../../theme/colors";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";

const EditProfile = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.headerNav}>
        <BackButton />
        <Text style={styles.headerNavText}>Edit Profile</Text>
        <Text></Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profileImgWrapper}>
          <Image
            style={styles.profileImg}
            source={{
              uri: "https://avatars.githubusercontent.com/u/44240093?v=4",
            }}
            resizeMode="cover"
          />
          <TouchableOpacity style={styles.editProfileImgIco}>
            <Feather name="edit" size={16} color={colors.secondary.text} />
          </TouchableOpacity>
        </View>
        <Text style={styles.sectionHeading}>Bio</Text>
        <View style={styles.formWrapper}>
          <Input
            placeholder="Enter bio"
            multiline={true}
            style={styles.textArea}
          />
        </View>
        <Text style={styles.sectionHeading}>Contact</Text>
        <View style={styles.formWrapper}>
          <Input placeholder="Mobile number" style={styles.input} />
        </View>
        <Text style={styles.sectionHeading}>Address</Text>
        <View style={styles.formWrapper}>
          <Input placeholder="Apt/ House No" style={styles.input} />
          <Input placeholder="Street" style={styles.input} />
          <Input placeholder="City" style={styles.input} />
          <Input placeholder="District" style={styles.input} />
          <Input placeholder="Province" style={styles.input} />
        </View>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.primary.bg }]}
        >
          <Text style={[styles.buttonText, { color: colors.primary.text }]}>
            Update profile
          </Text>
        </TouchableOpacity>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.linkButton}>
            <Text style={[styles.buttonText, { color: colors.error.primary }]}>
              Delete account
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;

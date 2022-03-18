import { SafeAreaView, View, Image, TouchableOpacity } from "react-native";
import { Text, BackButton } from "../../common";
import React from "react";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../theme/colors";
import call from "react-native-phone-call";
import { Text as Message } from "react-native-openanything";

const Profile = () => {
  const CallUser = (number) => {
    call({
      number: `${number}`,
      prompt: false,
    }).catch(console.error);
  };

  const MessageUser = (number) => {
    Message(number);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.headerNav}>
        <BackButton />
      </View>
      <View style={styles.profileWrapper}>
        <Image
          style={styles.profileImg}
          source={{
            uri: "https://avatars.githubusercontent.com/u/44240093?v=4",
          }}
          resizeMode="cover"
        />
        <Text style={styles.profileName}>Nimesh Kavinda</Text>
        <Text style={styles.profileBio} numberOfLines={2}>
          Software engineer by profession, public health care volunteer by
          heart. I regularly organize environment cleanup events
        </Text>
        <View style={styles.profileInfoRow}>
          <View style={styles.profileInfo}>
            <MaterialCommunityIcons
              name="map-marker"
              size={18}
              color={colors.grey.dark}
            />
            <Text style={styles.profileInfoText}>Lives in Padukka</Text>
          </View>
          <View style={styles.profileInfo}>
            <MaterialCommunityIcons
              name="calendar"
              size={18}
              color={colors.grey.dark}
            />
            <Text style={styles.profileInfoText}>Joined on 18 March 2022</Text>
          </View>
        </View>
        <View style={styles.contactsWrapper}>
          <TouchableOpacity style={styles.callButton} onPress={CallUser}>
            <Ionicons name="call" size={24} color={colors.success.primary} />
            <Text style={styles.callText}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.msgButton} onPress={MessageUser}>
            <Ionicons name="chatbubble" size={24} color={colors.primary.bg} />
            <Text style={styles.msgText}>Message</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.profileSectionWrapper}>
        <Text style={styles.profileSectionHeading}>All time contribution</Text>
        <View style={styles.profileStatItem}></View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

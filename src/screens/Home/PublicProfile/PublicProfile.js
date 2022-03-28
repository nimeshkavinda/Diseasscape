import { SafeAreaView, View, Image, TouchableOpacity } from "react-native";
import { Text, BackButton } from "../../../common";
import { ScrollView } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../../theme/colors";
import call from "react-native-phone-call";
import { Text as Message } from "react-native-openanything";
import { useDispatch, useSelector } from "react-redux";
import ac from "../../../redux/actions";
import moment from "moment";

const PublicProfile = ({ navigation, route }) => {
  const [isLoaded, setIsLoaded] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ac.getUserByUid(route.params.uid));
  }, []);

  const fetching = useSelector(({ getUserByUid: { fetching } }) => {
    return fetching;
  });

  const user = useSelector(({ getUserByUid }) =>
    getUserByUid.data ? getUserByUid.data[0] : {}
  );

  useEffect(() => {
    if (!fetching) {
      setIsLoaded(true);
    }
  }, [fetching]);

  const CallUser = () => {
    call({
      number: `${user?.phone}`,
      prompt: false,
    }).catch(console.error);
  };

  const MessageUser = () => {
    Message(user?.phone);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.headerNav}>
        <BackButton />
      </View>
      {isLoaded && (
        <>
          <View style={styles.profileWrapper}>
            <Image
              style={styles.profileImg}
              source={{
                uri: `data:image/jpg;base64,${user?.profilePhoto}`,
              }}
              resizeMode="cover"
            />
            <Text style={styles.profileName}>{user?.fullName}</Text>
            <Text style={styles.profileBio} numberOfLines={2}>
              {user?.bio}
            </Text>
            <View style={styles.profileInfoRow}>
              <View style={styles.profileInfo}>
                <MaterialCommunityIcons
                  name="map-marker"
                  size={18}
                  color={colors.grey.dark}
                />
                <Text style={styles.profileInfoText}>
                  Lives in {user?.address?.city}
                </Text>
              </View>
              <View style={styles.profileInfo}>
                <MaterialCommunityIcons
                  name="calendar"
                  size={18}
                  color={colors.grey.dark}
                />
                <Text style={styles.profileInfoText}>
                  Joined on {moment(user?.created).format("Do MMMM YYYY")}
                </Text>
              </View>
            </View>
            <View style={styles.contactsWrapper}>
              <TouchableOpacity style={styles.callButton} onPress={CallUser}>
                <Ionicons
                  name="call"
                  size={24}
                  color={colors.success.primary}
                />
                <Text style={styles.callText}>Call</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.msgButton} onPress={MessageUser}>
                <Ionicons
                  name="chatbubble"
                  size={24}
                  color={colors.primary.bg}
                />
                <Text style={styles.msgText}>Message</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.profileSectionWrapper}>
            <Text style={styles.profileSectionHeading}>
              All time contribution
            </Text>
            <View style={styles.postsScrollViewWrapper}>
              <ScrollView
                style={styles.scrollView}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View
                  style={[
                    styles.profileStatItem,
                    { backgroundColor: colors.warning.secondary },
                  ]}
                >
                  <View style={styles.icon}>
                    <MaterialCommunityIcons
                      name="post"
                      size={24}
                      color={colors.warning.primary}
                    />
                  </View>
                  <Text style={styles.statTitle}>Posts created</Text>
                  <Text style={styles.statCount}>
                    {user?.posts && Object.keys(user?.posts).length}
                  </Text>
                </View>
                <View
                  style={[
                    styles.profileStatItem,
                    { backgroundColor: colors.secondary.bg },
                  ]}
                >
                  <View style={styles.icon}>
                    <MaterialCommunityIcons
                      name="calendar-blank"
                      size={24}
                      color={colors.primary.bg}
                    />
                  </View>
                  <Text style={styles.statTitle}>Events organized</Text>
                  <Text style={styles.statCount}>
                    {user?.events && Object.keys(user?.events).length}
                  </Text>
                </View>
                <View
                  style={[
                    styles.profileStatItem,
                    { backgroundColor: colors.success.secondary },
                  ]}
                >
                  <View style={styles.icon}>
                    <MaterialCommunityIcons
                      name="calendar-check"
                      size={24}
                      color={colors.success.primary}
                    />
                  </View>
                  <Text style={styles.statTitle}>Events participated</Text>
                  <Text style={styles.statCount}>
                    {user?.going && Object.keys(user?.going).length}
                  </Text>
                </View>
              </ScrollView>
            </View>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default PublicProfile;

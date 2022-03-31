import { SafeAreaView, View, Image, TouchableOpacity } from "react-native";
import { Text } from "../../common";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../theme/colors";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import moment from "moment";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ac from "../../redux/actions";

const Profile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const loggedInUser = useSelector(({ getLoggedInUser }) =>
    getLoggedInUser.data ? getLoggedInUser.data[0] : {}
  );

  useEffect(() => {
    dispatch(ac.getLoggedInUser(loggedInUser.uid));
  }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.headerNav}>
        <Text style={styles.headerTitle}>My profile</Text>
      </View>
      <View style={styles.profileWrapper}>
        <Image
          style={styles.profileImg}
          source={{
            uri: `data:image/jpg;base64,${loggedInUser?.profilePhoto}`,
          }}
          resizeMode="cover"
        />
        <Text style={styles.profileName}>{loggedInUser?.fullName}</Text>
        <View
          style={[
            styles.myStatusWrapper,
            {
              backgroundColor:
                loggedInUser?.status === "healthy"
                  ? colors.success.secondary
                  : loggedInUser?.status === "symptoms"
                  ? colors.error.secondary
                  : loggedInUser?.status === "positive"
                  ? colors.error.primary
                  : colors.grey.light,
            },
          ]}
        >
          <Text
            style={[
              styles.myStatusText,
              {
                color:
                  loggedInUser?.status === "healthy"
                    ? colors.success.primary
                    : loggedInUser?.status === "symptoms"
                    ? colors.error.primary
                    : loggedInUser?.status === "positive"
                    ? "#fff"
                    : colors.grey.medium,
              },
            ]}
          >
            {loggedInUser?.status === "healthy"
              ? loggedInUser?.status
              : `${loggedInUser?.disease} ${loggedInUser?.status}`}
          </Text>
        </View>
        <Text style={styles.profileBio} numberOfLines={2}>
          {loggedInUser?.bio}
        </Text>
        <View style={styles.profileInfoRow}>
          <View style={styles.profileInfo}>
            <MaterialCommunityIcons
              name="map-marker"
              size={18}
              color={colors.grey.dark}
            />
            <Text style={styles.profileInfoText}>
              Lives in {loggedInUser?.address?.city}
            </Text>
          </View>
          <View style={styles.profileInfo}>
            <MaterialCommunityIcons
              name="calendar"
              size={18}
              color={colors.grey.dark}
            />
            <Text style={styles.profileInfoText}>
              Joined on {moment(loggedInUser?.created).format("Do MMMM YYYY")}
            </Text>
          </View>
        </View>
        <View style={styles.optionsWrapper}>
          <TouchableOpacity
            style={styles.statusButton}
            onPress={() =>
              navigation.navigate("SetStatus", { user: loggedInUser })
            }
          >
            <MaterialCommunityIcons
              name="hospital-box"
              size={24}
              color={colors.secondary.text}
            />
            <Text style={styles.statusText}>Set status</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.settingsButton}
            onPress={() =>
              navigation.navigate("EditProfile", { user: loggedInUser })
            }
          >
            <Ionicons name="settings" size={24} color={colors.grey.dark} />
            <Text style={styles.settingsText}>Edit profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.profileSectionWrapper}>
        <Text style={styles.profileSectionHeading}>All time contribution</Text>
        <View style={styles.postsScrollViewWrapper}>
          <ScrollView
            style={styles.scrollView}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <TouchableOpacity>
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
                  {loggedInUser?.posts &&
                    Object.keys(loggedInUser?.posts).length}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
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
                  {loggedInUser?.events &&
                    Object.keys(loggedInUser?.events).length}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
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
                  {loggedInUser?.going &&
                    Object.keys(loggedInUser?.going).length}
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

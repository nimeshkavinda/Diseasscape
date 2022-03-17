import BottomSheet, {
  BottomSheetView,
  TouchableOpacity,
} from "@gorhom/bottom-sheet";
import { FlatList } from "react-native-gesture-handler";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import colors from "../../../theme/colors";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const EventsModal = ({ visible, eventId, event, isNearYou, posts }) => {
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ["31%", "74%"], []);
  const handleClosePress = () => sheetRef.current.snapToPosition(-1);
  const openModal = () => sheetRef.current.snapToIndex(0);
  const [postsInVicinity, setPostsInVicinity] = useState();

  const filteredPosts = posts.filter(function (post) {
    return post.location.vicinity === event?.location?.vicinity;
  });

  useEffect(() => {
    openModal();
    setPostsInVicinity(filteredPosts);
  }, [eventId]);

  console.log("Posts in vicinity", postsInVicinity);

  const PostCard = ({ item }) => {
    return (
      <View style={styles.postCard}>
        <Image
          style={styles.postCardImg}
          source={{
            uri: item?.images[0].src,
          }}
          resizeMode="cover"
        />
        <View style={styles.postCardDetailsWrapper}>
          <View>
            <Text style={styles.postCardTitle} numberOfLines={1}>
              {item?.title}
            </Text>
            <View style={styles.postCardLocationWrapper}>
              <MaterialCommunityIcons name="map-marker-radius" size={12} />
              <Text style={styles.postCardLocation}>
                {item?.location?.vicinity}
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.postCardTypeTag,
              { backgroundColor: colors.error.secondary },
            ]}
          >
            <Text
              style={[styles.postCardType, { color: colors.error.primary }]}
            >
              {item?.type}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <BottomSheet
      index={visible == true ? 0 : -1}
      ref={sheetRef}
      snapPoints={snapPoints}
      handleIndicatorStyle={{ backgroundColor: colors.grey.medium }}
    >
      <BottomSheetView style={styles.wrapper}>
        <View style={styles.headerWrapper}>
          <View>
            <Text style={styles.name} numberOfLines={2}>
              {event?.title}
            </Text>
            <View style={styles.locationDetails}>
              <MaterialCommunityIcons name="map-marker-radius" size={18} />
              <Text style={styles.locationText}>
                {event?.location?.vicinity}
              </Text>
              {isNearYou && (
                <>
                  <Entypo
                    name="dot-single"
                    size={16}
                    color={colors.grey.dark}
                  />
                  <Text style={styles.locationText}>Near You</Text>
                </>
              )}
            </View>
          </View>
          <TouchableOpacity onPress={handleClosePress}>
            <AntDesign
              name="closecircle"
              size={24}
              color={colors.grey.medium}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.eventDetailsWrapper}>
          <View style={styles.eventDetails}>
            <Text style={styles.eventDetailsTitle}>Date</Text>
            <View
              style={[
                styles.eventDetailsPill,
                { backgroundColor: colors.secondary.bg },
              ]}
            >
              <Entypo name="calendar" size={14} color={colors.secondary.text} />
              <Text style={[styles.detail, { color: colors.secondary.text }]}>
                {event?.date}
              </Text>
            </View>
          </View>
          <View style={styles.eventDetails}>
            <Text style={styles.eventDetailsTitle}>Time</Text>
            <View
              style={[
                styles.eventDetailsPill,
                { backgroundColor: colors.success.secondary },
              ]}
            >
              <Entypo name="clock" size={14} color={colors.success.primary} />
              <Text style={[styles.detail, { color: colors.success.primary }]}>
                {event?.time}
              </Text>
            </View>
          </View>
          <View style={styles.eventDetails}>
            <Text style={styles.eventDetailsTitle}>Going</Text>
            <View
              style={[
                styles.eventDetailsPill,
                { backgroundColor: colors.warning.secondary },
              ]}
            >
              <Ionicons
                name="people"
                size={14}
                color={colors.warning.primary}
              />
              <Text style={[styles.detail, { color: colors.warning.primary }]}>
                {event && Object.keys(event?.participants).length}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.description}>{event?.description}</Text>
        </View>
        <View style={styles.postsWrapper}>
          <Text style={styles.postHeading}>Nearby risk sites</Text>
          <View style={styles.postsFlatListWrapper}>
            <FlatList
              data={filteredPosts}
              renderItem={({ item }) => <PostCard key={item?.id} item={item} />}
              keyExtractor={(item) => item?.id}
              style={styles.postCardFlatList}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        <View style={styles.footerWrapper}>
          <TouchableOpacity style={styles.organizerDetails}>
            <Image
              style={styles.organizerProfileImage}
              source={{
                uri: "https://avatars.githubusercontent.com/u/44240093?v=4",
              }}
            />
            <View>
              <Text style={styles.organizerName}>
                {event?.organizer?.fullName}
              </Text>
              <Text style={styles.organizerText}>Organizer</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Mark as going</Text>
          </TouchableOpacity>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};

export default EventsModal;

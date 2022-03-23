import BottomSheet, {
  BottomSheetView,
  TouchableOpacity,
} from "@gorhom/bottom-sheet";
import { FlatList } from "react-native-gesture-handler";
import React, { useEffect, useMemo, useRef } from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import colors from "../../../theme/colors";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PostsModal = ({ visible, postId, post, isNearYou }) => {
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ["24%", "74%"], []);
  const handleClosePress = () => sheetRef.current.snapToPosition(-1);
  const openModal = () => sheetRef.current.snapToIndex(0);
  const navigation = useNavigation();

  useEffect(() => {
    openModal();
  }, [postId]);

  const PostImage = ({ item }) => {
    return (
      <TouchableOpacity>
        <Image
          style={styles.postImage}
          source={{ uri: item.src }}
          resizeMode="cover"
        />
      </TouchableOpacity>
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
            <View style={styles.headerRow}>
              <View
                style={[
                  styles.tag,
                  { backgroundColor: colors.error.secondary },
                ]}
              >
                <Text style={[styles.type, { color: colors.error.primary }]}>
                  {post?.type}
                </Text>
              </View>
            </View>
            <Text style={styles.name} numberOfLines={2}>
              {post?.title}
            </Text>
            <View style={styles.locationDetails}>
              <MaterialCommunityIcons name="map-marker-radius" size={18} />
              <Text style={styles.locationText}>
                {post?.location?.vicinity}
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
            <TouchableOpacity
              style={styles.authorDetails}
              onPress={() => navigation.navigate("PublicProfile")}
            >
              <Image
                style={styles.authorImg}
                source={{ uri: post?.postedBy?.profileImg }}
              />
              <View style={styles.authorDetailsWrapper}>
                <Text style={styles.authorText}>
                  {post?.postedBy?.fullName}
                </Text>
                <Text style={styles.postedDate}>On {post?.date}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={handleClosePress}>
            <AntDesign
              name="closecircle"
              size={24}
              color={colors.grey.medium}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.flatListWrapper}>
          <FlatList
            data={post?.images}
            renderItem={({ item }) => <PostImage key={item?.id} item={item} />}
            keyExtractor={(item) => item?.id}
            style={styles.imgFlatList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.description} numberOfLines={3}>
            {post?.description}
          </Text>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};

export default PostsModal;

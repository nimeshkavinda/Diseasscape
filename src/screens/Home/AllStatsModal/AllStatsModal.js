import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import React, { useMemo, useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import colors from "../../../theme/colors";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const AllStatsModal = ({ name, vicinity, patients, posts, events }) => {
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ["28%"], []);

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={snapPoints}
      handleIndicatorStyle={{ backgroundColor: colors.grey.medium }}
    >
      <BottomSheetView style={styles.wrapper}>
        <View style={styles.locationHeaderWrapper}>
          <View style={styles.locationHeaderTitle}>
            <Text style={styles.locationName}>{name}</Text>
            <View style={styles.locationVicinity}>
              <MaterialCommunityIcons
                name="map-marker-radius"
                size={18}
                color={colors.secondary.text}
              />
              <Text style={styles.locationVicinityText}>{vicinity}</Text>
            </View>
          </View>
          <TouchableOpacity>
            <AntDesign
              name="closecircle"
              size={24}
              color={colors.grey.medium}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.locationDataWrapper}>
          <View style={styles.locationData}>
            <Text style={styles.locationDataTitle}>Patients</Text>
            <View style={styles.locationDataCount}>
              <MaterialIcons
                name="sick"
                size={24}
                color={colors.error.primary}
              />
              <Text
                style={[
                  styles.locationDataCountText,
                  { color: colors.error.primary },
                ]}
              >
                {patients}
              </Text>
            </View>
          </View>
          <View style={styles.locationData}>
            <Text style={styles.locationDataTitle}>Risk areas</Text>
            <View style={styles.locationDataCount}>
              <MaterialCommunityIcons
                name="asterisk"
                size={24}
                color={colors.warning}
              />
              <Text
                style={[
                  styles.locationDataCountText,
                  { color: colors.warning },
                ]}
              >
                {posts}
              </Text>
            </View>
          </View>
          <View style={styles.locationData}>
            <Text style={styles.locationDataTitle}>Meetups</Text>
            <View style={styles.locationDataCount}>
              <MaterialIcons
                name="event"
                size={24}
                color={colors.success.primary}
              />
              <Text
                style={[
                  styles.locationDataCountText,
                  { color: colors.success.primary },
                ]}
              >
                {events}
              </Text>
            </View>
          </View>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};

export default AllStatsModal;

import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import React, { useMemo, useRef } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import colors from "../../../theme/colors";

const PostsModal = () => {
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ["25%"], []);

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={snapPoints}
      handleIndicatorStyle={{ backgroundColor: colors.grey.medium }}
    >
      <BottomSheetView style={styles.wrapper}>
        <View style={styles.locationInfo}>
          <View style={styles.locationHeaderWrapper}>
            <Text style={styles.locationName}>test</Text>
            <View style={styles.locationProvince}>
              <Text style={styles.locationProvinceText}>test</Text>
            </View>
          </View>
          <View style={styles.locationDataWrapper}>
            <View style={styles.locationData}>
              <Text style={styles.locationDataTitle}>Patients</Text>
              <Text style={styles.locationDataCount}>300</Text>
            </View>
            <View style={styles.locationData}>
              <Text style={styles.locationDataTitle}>Risk sites</Text>
              <Text style={styles.locationDataCount}>15</Text>
            </View>
            <View style={styles.locationData}>
              <Text style={styles.locationDataTitle}>Events</Text>
              <Text style={styles.locationDataCount}>8</Text>
            </View>
          </View>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};

export default Posts;

import { View, SafeAreaView, Button } from "react-native";
import React, { useCallback, useMemo, useRef } from "react";
import { Input, Text } from "../../common";
import styles from "./styles";
import MapView from "react-native-maps";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const Home = () => {
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ["25%", "45%"], []);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.header}>
        <Input style={styles.searchInput} placeholder="Search" />
      </View>
      <MapView style={styles.map} />
      <BottomSheet ref={sheetRef} snapPoints={snapPoints}>
        <BottomSheetView>
          <Text>Awesome 🔥</Text>
        </BottomSheetView>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default Home;

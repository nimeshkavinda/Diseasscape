import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import React, { useEffect, useMemo, useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import colors from "../../../theme/colors";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const PatientModal = ({ visible, patientId, patient, isNearYou }) => {
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ["20%"], []);
  const handleClosePress = () => sheetRef.current.snapToPosition(-1);
  const openModal = () => sheetRef.current.snapToIndex(0);

  useEffect(() => {
    openModal();
  }, [patientId]);

  return (
    <BottomSheet
      index={visible == true ? 0 : -1}
      ref={sheetRef}
      snapPoints={snapPoints}
      handleIndicatorStyle={{ backgroundColor: colors.grey.medium }}
    >
      <BottomSheetView style={styles.wrapper}>
        <View style={styles.patientWrapper}>
          <View>
            <View style={styles.headerRow}>
              <Text style={styles.date}>{patient?.date}</Text>
              <View
                style={[
                  styles.tag,
                  {
                    backgroundColor:
                      patient?.status === "symptoms"
                        ? colors.error.secondary
                        : colors.error.primary,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.status,
                    {
                      color:
                        patient?.status === "symptoms"
                          ? colors.error.primary
                          : "#fff",
                    },
                  ]}
                >
                  {patient?.status}
                </Text>
              </View>
            </View>
            <Text style={[styles.name, { color: colors.error.primary }]}>
              {patient?.disease}
            </Text>
            <View style={styles.locationDetails}>
              <MaterialCommunityIcons name="map-marker-radius" size={18} />
              <Text style={styles.locationText}>
                {patient?.location?.vicinity}
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
      </BottomSheetView>
    </BottomSheet>
  );
};

export default PatientModal;

import { View } from "react-native";
import { Text } from "../../common";
import React from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import BottomSheet, {
  BottomSheetView,
  TouchableOpacity,
} from "@gorhom/bottom-sheet";
import { useRef, useMemo } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../theme/colors";

const Post = () => {
  const navigation = useNavigation();
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ["32%"], []);
  return (
    <View style={styles.wrapper}>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        handleIndicatorStyle={{ backgroundColor: "transparent" }}
      >
        <BottomSheetView style={styles.bottomSheetWrapper}>
          <View style={styles.headingWrapper}>
            <Text style={styles.headingText}>
              Select how you want to contribute
            </Text>
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("CreatePost")}
            >
              <View style={styles.buttonIcon}>
                <MaterialCommunityIcons
                  name="post"
                  size={24}
                  color={colors.secondary.text}
                />
              </View>
              <Text style={styles.buttonText}>
                Create a post of a risk site
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("CreateEvent")}
            >
              <View style={styles.buttonIcon}>
                <MaterialCommunityIcons
                  name="calendar"
                  size={24}
                  color={colors.secondary.text}
                />
              </View>
              <Text style={styles.buttonText}>Organize a meetup</Text>
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default Post;

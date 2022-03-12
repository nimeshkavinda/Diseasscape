import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    backgroundColor: "transparent",
    paddingHorizontal: 20,
    paddingVertical: 20,
    zIndex: 99,
  },
  map: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  searchInput: {
    elevation: 6,
    shadowColor: colors.grey.dark,
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 6,
    },
    shadowRadius: 30,
  },
});

export default styles;

import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  headerWrapper: {
    backgroundColor: "transparent",
    zIndex: 99,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  search: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    zIndex: 999,
  },
  filterWrapper: { top: 38, paddingVertical: 14, paddingLeft: 20 },
  filterOption: {
    height: 36,
    paddingVertical: Platform.OS === "android" ? 8 : 10,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginHorizontal: 4,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
    shadowColor: colors.grey.dark,
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 6,
    },
    shadowRadius: 30,
  },
  filterOptionTitle: { fontSize: 14, fontWeight: "500" },
  map: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  locationInfoWrapper: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 20,
    zIndex: 99,
  },
  locationInfo: {},
  locationName: { width: "60%", fontSize: 24, fontWeight: "bold" },
});

export default styles;

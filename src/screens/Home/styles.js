import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";

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
  filterWrapper: { paddingVertical: 14, paddingLeft: 20 },
  map: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default styles;

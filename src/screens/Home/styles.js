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
  filterWrapper: { paddingVertical: 14, paddingLeft: 20 },
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
  locationHeaderWrapper: { flexDirection: "column" },
  locationName: { fontSize: 26, fontWeight: "bold", marginBottom: 6 },
  locationProvince: { flexDirection: "row", alignItems: "center" },
  locationProvinceText: {
    marginLeft: 6,
    fontSize: 16,
    fontWeight: "500",
    color: colors.grey.dark,
  },
  locationDataWrapper: {
    backgroundColor: "#F3F4FA",
    marginVertical: 25,
    padding: 30,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  locationData: {
    flexDirection: "column",
    alignItems: "center",
    width: "33.3%",
  },
  locationDataCount: {
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 10,
  },
  locationDataTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#909090",
  },
});

export default styles;

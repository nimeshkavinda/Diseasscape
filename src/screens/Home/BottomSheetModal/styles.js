import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";

const styles = StyleSheet.create({
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

import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    zIndex: 99,
  },
  locationHeaderWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderBottomColor: colors.grey.medium,
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  locationHeaderTitle: {
    flexDirection: "column",
  },
  locationName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  locationVicinity: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 4,
  },
  locationVicinityText: {
    fontSize: 16,
    fontWeight: "normal",
    marginLeft: 3,
    color: colors.secondary.text,
  },
  locationDataWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  locationData: { alignItems: "flex-start" },
  locationDataTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#808080",
  },
  locationDataCount: { flexDirection: "row", alignItems: "center" },
  locationDataCountText: {
    fontSize: 21,
    fontWeight: "bold",
    marginLeft: 6,
    marginVertical: 6,
  },
});

export default styles;

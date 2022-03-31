import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    zIndex: 99,
  },
  patientWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingBottom: 10,
  },
  headerRow: { flexDirection: "row", alignItems: "center" },
  date: { fontSize: 16, fontWeight: "500", marginRight: 10 },
  status: {
    fontSize: 14,
    fontWeight: "500",
    textTransform: "capitalize",
    color: "#fff",
  },
  name: {
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 8,
    textTransform: "capitalize",
  },
  locationDetails: { flexDirection: "row", alignItems: "center" },
  locationText: {
    fontSize: 16,
    marginHorizontal: 4,
    fontWeight: "normal",
  },
  tag: {
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;

import { StyleSheet, Platform, StatusBar } from "react-native";
import colors from "../../../theme/colors";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  headerNav: { marginVertical: 20 },
  headingWrapper: { marginHorizontal: 20, marginBottom: 20 },
  headingText: { fontSize: 28, fontWeight: "bold" },
  sectionHeading: { marginHorizontal: 20, fontSize: 21, fontWeight: "500" },
  statusWrapper: {},
  statusFlatList: { paddingHorizontal: 20 },
  healthy: {
    height: 380,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    margin: 20,
    borderRadius: 20,
    backgroundColor: colors.success.secondary,
  },
  healthyText: {
    fontSize: 26,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 10,
  },
  diseaseWrapper: {},
  diseaseScrollView: {
    marginVertical: 20,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  diseaseButton: {
    width: 170,
    height: 60,
    padding: 10,
    marginBottom: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  diseaseButtonText: {
    fontSize: 21,
    fontWeight: "500",
  },
  buttonWrapper: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  buttonText: { fontSize: 16, fontWeight: "500" },
});

export default styles;

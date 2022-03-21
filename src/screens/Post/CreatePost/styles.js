import { StyleSheet, Platform, StatusBar } from "react-native";
import colors from "../../../theme/colors";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  headerNav: { marginVertical: 20, marginBottom: 20 },
  headingWrapper: { marginHorizontal: 20, marginBottom: 20 },
  headingText: { fontSize: 28, fontWeight: "bold" },
  formWrapper: { marginHorizontal: 20 },
  typeWrapper: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  scrollView: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  typeButton: {
    width: 170,
    height: 150,
    padding: 20,
    marginBottom: 10,
    borderRadius: 20,
    justifyContent: "space-between",
  },
  typeButtonText: {
    fontSize: 21,
    fontWeight: "500",
  },
  disabledTypeButton: {
    width: 170,
    height: 150,
    padding: 20,
    marginBottom: 10,
    borderRadius: 20,
    justifyContent: "space-between",
  },
  disabledTypeButtonText: {
    fontSize: 21,
    fontWeight: "500",
  },
  disabledTypeButtonTextLabel: {
    width: "50%",
    fontSize: 16,
  },
});

export default styles;

import { StyleSheet, Platform, StatusBar } from "react-native";
import colors from "../../../theme/colors";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "space-between",
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
  typeScrollView: {
    height: 760,
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
  input: { marginBottom: 12 },
  textArea: { height: 180, marginVertical: 14 },
  sectionHeadingText: {
    marginHorizontal: 20,
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonWrapper: {
    marginHorizontal: 20,
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    height: 60,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: { fontSize: 16, fontWeight: "500" },
  photoWrapper: { height: 180 },
  photoScrollView: {},
});

export default styles;

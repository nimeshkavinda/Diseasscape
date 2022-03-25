import { StyleSheet, Platform, StatusBar, Dimensions } from "react-native";
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
  textArea: { height: 140, marginVertical: 14 },
  sectionHeadingText: {
    marginHorizontal: 20,
    marginVertical: 10,
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
    width: "100%",
    textAlign: "center",
  },
  buttonText: { fontSize: 16, fontWeight: "500" },
  photoScrollView: {
    paddingLeft: 20,
    paddingRight: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  takePhotoButton: {
    width: 160,
    height: 160,
    backgroundColor: colors.grey.light,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  takePhotoButtonText: { fontSize: 16, marginTop: 6, color: colors.grey.dark },
  imagePreviewWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 6,
  },
  cameraWrapper: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  camera: {
    flex: 1,
    justifyContent: "flex-end",
  },
  snapButtonWrapper: { alignItems: "center", marginBottom: 40 },
  snapButton: {
    padding: 1,
    borderRadius: 50,
    backgroundColor: colors.grey.light,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;

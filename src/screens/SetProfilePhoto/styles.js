import { StyleSheet, Platform, StatusBar, Dimensions } from "react-native";
import colors from "../../theme/colors";

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
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderTopColor: colors.grey.medium,
    borderTopWidth: 5,
  },
  button: {
    width: "90%",
    height: 60,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  buttonText: { fontSize: 16, fontWeight: "500" },
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
  photoWrapper: {
    marginHorizontal: 20,
    alignItems: "center",
    marginVertical: 20,
  },
  profileImg: {
    width: 340,
    height: 340,
    borderRadius: 180,
  },
  photoOptionsWrapper: { flexDirection: "column", alignItems: "center" },
  optionButton: {
    width: "90%",
    height: 60,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    marginBottom: 10,
  },
  photoPlaceholder: {
    width: 340,
    height: 340,
    borderRadius: 180,
    backgroundColor: colors.grey.light,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;

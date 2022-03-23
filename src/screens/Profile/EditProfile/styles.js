import { StyleSheet, Platform, StatusBar } from "react-native";
import colors from "../../../theme/colors";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  headerNav: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerNavText: { fontSize: 21, fontWeight: "bold", marginRight: 40 },
  headingWrapper: { marginHorizontal: 20, marginBottom: 20 },
  headingText: { fontSize: 28, fontWeight: "bold" },
  sectionHeading: {
    fontSize: 18,
    fontWeight: "500",
    marginHorizontal: 20,
    marginVertical: 6,
  },
  buttonWrapper: {
    borderTopColor: colors.grey.medium,
    borderTopWidth: 5,
    marginVertical: 20,
  },
  linkButton: { marginHorizontal: 20, marginTop: 20 },
  button: {
    height: 60,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    marginVertical: 20,
  },
  buttonText: { fontSize: 16, fontWeight: "500" },
  input: { marginVertical: 10 },
  textArea: { marginVertical: 10, height: 140 },
  profileImgWrapper: { alignItems: "center", marginVertical: 30 },
  profileImg: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 16,
  },
  editProfileImgIco: {
    position: "absolute",
    bottom: 0,
    width: 36,
    height: 36,
    borderRadius: 40,
    backgroundColor: colors.secondary.bg,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  formWrapper: { marginHorizontal: 20 },
});

export default styles;

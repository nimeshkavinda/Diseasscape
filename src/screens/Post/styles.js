import { StyleSheet, Platform, StatusBar } from "react-native";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 20,
  },
  headingWrapper: { width: 240, margin: 20 },
  headingText: { fontSize: 32, fontWeight: "bold" },
  postTypeWrapper: { margin: 20 },
  postTypeButton: {
    width: 350,
    height: 64,
    padding: 20,
    borderRadius: 12,
    marginBottom: 10,
    backgroundColor: colors.secondary.bg,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: { fontSize: 21, color: colors.secondary.text },
});

export default styles;

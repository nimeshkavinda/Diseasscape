import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
  bottomSheetWrapper: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  headingWrapper: { width: 240 },
  headingText: { fontSize: 28, fontWeight: "bold" },
  buttonWrapper: { marginVertical: 20 },
  button: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  buttonText: { fontSize: 18, marginLeft: 10 },
  buttonIcon: {
    padding: 12,
    borderRadius: 50,
    backgroundColor: colors.secondary.bg,
  },
  video: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default styles;

import { StyleSheet, Platform, StatusBar } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  greeting: {},
  greetingText: {
    fontSize: 28,
    fontWeight: "700",
    lineHeight: 30,
  },
  userName: { fontSize: 28, fontWeight: "500" },
  avatar: { width: 50, height: 50, borderRadius: 50 },
});

export default styles;

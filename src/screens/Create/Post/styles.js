import { StyleSheet, Platform, StatusBar } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  headerNav: { marginVertical: 20 },
  headingWrapper: {},
  headingText: { fontSize: 24 },
});

export default styles;

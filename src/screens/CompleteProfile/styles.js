import { StyleSheet, Platform, StatusBar } from "react-native";

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
  headerNavText: { fontSize: 21, fontWeight: "bold", marginRight: 45 },
  headingWrapper: { marginHorizontal: 20, marginBottom: 20 },
  headingText: { fontSize: 28, fontWeight: "bold" },
  sectionHeading: {
    fontSize: 18,
    fontWeight: "500",
    marginHorizontal: 20,
    marginVertical: 6,
  },
  button: {
    marginHorizontal: 20,
  },
  buttonText: { fontSize: 16, fontWeight: "500" },
  input: { marginVertical: 10 },
  textArea: { marginVertical: 10, height: 140 },
  formWrapper: { marginHorizontal: 20, marginBottom: 20 },
});

export default styles;

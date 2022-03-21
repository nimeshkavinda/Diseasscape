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
  input: { marginBottom: 14 },
  textArea: { height: 220, marginVertical: 14 },
  dateTimeWrapper: {
    borderRadius: 14,
    marginVertical: 20,
    flexDirection: "row",
  },
  dateWrapper: { flexDirection: "row", alignItems: "center", marginRight: 20 },
  timeWrapper: { flexDirection: "row", alignItems: "center" },
  date: { width: 130, marginLeft: 10 },
  time: { width: 100, marginLeft: 10 },
  sectionHeadingText: { marginTop: 20, fontSize: 24, fontWeight: "bold" },
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
  mapWrapper: {
    flex: 1,
    marginBottom: 20,
  },
  map: { flex: 1 },
  markerFixed: {
    left: "50%",
    marginLeft: -10,
    marginTop: -32,
    position: "absolute",
    top: "50%",
  },
});

export default styles;

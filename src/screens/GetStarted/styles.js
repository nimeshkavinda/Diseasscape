import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  headingWrapper: {
    justifyContent: "flex-start",
    marginTop: 10,
    padding: 20,
  },
  buttonWrapper: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    lineHeight: 38,
    marginBottom: 8,
    width: "90%",
    color: "#fff",
  },
  subtitle: {
    fontSize: 21,
    fontWeight: "500",
    color: "#fff",
  },
  linkButton: {
    marginTop: 8,
    marginBottom: 4,
    color: "#fff",
  },
  image: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  gradient: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default styles;

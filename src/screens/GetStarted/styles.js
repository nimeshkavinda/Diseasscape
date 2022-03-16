import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  blurViewWrapper: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
    fontSize: 30,
    fontWeight: "700",
    lineHeight: 36,
    marginBottom: 8,
    width: "90%",
  },
  subtitle: {
    fontSize: 21,
    fontWeight: "500",
  },
  linkButton: {
    marginTop: 8,
    marginBottom: 4,
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

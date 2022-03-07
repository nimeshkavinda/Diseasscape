import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingTop: 60,
    paddingBottom: 20,
  },
  headingWrapper: {
    justifyContent: "flex-start",
    marginTop: 10,
    padding: 20,
  },
  formWrapper: { padding: 20 },
  buttonWrapper: {
    padding: 20,
  },
  title: {
    fontSize: 38,
    fontWeight: "700",
    lineHeight: 42,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 28,
    fontWeight: "500",
  },
  linkButton: {
    marginTop: 8,
    marginBottom: 6,
  },
  input: {
    marginVertical: 8,
  },
  signupLinkWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  signupLabel: { fontSize: 16 },
  signupLink: { fontSize: 16 },
  forgotPWLink: {
    fontSize: 16,
    color: "#9F9EA4",
    alignSelf: "flex-end",
  },
});

export default styles;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingTop: 60,
  },
  headingWrapper: {
    justifyContent: "flex-start",
    marginTop: 10,
    padding: 20,
  },
  formWrapper: { padding: 20 },
  buttonWrapper: {
    padding: 20,
    marginBottom: 20,
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
  instructions: { fontSize: 16, marginVertical: 10, width: "80%" },
  input: {
    marginVertical: 8,
  },
});

export default styles;

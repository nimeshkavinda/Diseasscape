import { StyleSheet, Platform, StatusBar } from "react-native";
import colors from "../../../theme/colors";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  headerNav: { marginVertical: 20 },
  profileWrapper: {
    alignItems: "center",
  },
  profileImg: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 16,
  },
  profileName: { fontSize: 24, fontWeight: "bold" },
  profileBio: {
    fontSize: 16,
    marginVertical: 10,
    marginHorizontal: 20,
    textAlign: "center",
  },
  profileInfoRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginVertical: 8,
  },
  profileInfo: {
    flexDirection: "row",
    alignContent: "center",
    marginHorizontal: 10,
  },
  profileInfoText: { fontSize: 12, marginLeft: 4, color: colors.grey.dark },
  contactsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  callButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.success.secondary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    width: 160,
  },
  callText: {
    color: colors.success.primary,
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 6,
  },
  msgButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.secondary.bg,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    width: 160,
  },
  msgText: {
    color: colors.primary.bg,
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 6,
  },
  profileSectionHeading: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  profileStatItem: {
    height: 180,
    width: 140,
    borderRadius: 25,
    padding: 20,
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginRight: 20,
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 10,
    width: 50,
    height: 50,
    borderRadius: 20,
    elevation: 6,
    shadowColor: colors.grey.dark,
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 6,
    },
    shadowRadius: 30,
  },
  statTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  statCount: {
    fontSize: 21,
    fontWeight: "bold",
  },
  postsScrollViewWrapper: { marginVertical: 20 },
  scrollView: { paddingLeft: 20 },
});

export default styles;

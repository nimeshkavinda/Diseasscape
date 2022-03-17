import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    zIndex: 99,
  },
  headerWrapper: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingBottom: 10,
  },
  name: { fontSize: 32, fontWeight: "bold", marginBottom: 8 },
  locationDetails: { flexDirection: "row", alignItems: "center" },
  locationText: {
    fontSize: 16,
    marginHorizontal: 4,
    fontWeight: "normal",
  },
  descriptionWrapper: { paddingHorizontal: 20 },
  descriptionTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 10 },
  description: {
    fontSize: 16,
  },
  eventDetailsWrapper: {
    marginTop: 15,
    marginBottom: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  eventDetails: { marginRight: 30 },
  eventDetailsTitle: { fontSize: 16, fontWeight: "500", marginBottom: 10 },
  eventDetailsPill: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 6,
  },
  detail: {
    fontSize: 12,
    fontWeight: "500",
    marginLeft: 6,
  },
  footerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  organizerDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  organizerProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 10,
  },
  organizerName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  organizerText: {
    fontSize: 12,
    fontWeight: "normal",
    color: colors.grey.dark,
  },
  button: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondary.bg,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: colors.secondary.text,
    fontWeight: "500",
  },
  postsWrapper: {
    paddingTop: 20,
  },
  postHeading: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 20,
  },
  postsFlatListWrapper: {},
  postCardFlatList: { paddingLeft: 20, paddingVertical: 10 },
  postCard: {
    elevation: 6,
    shadowColor: colors.grey.dark,
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 6,
    },
    backgroundColor: "#fff",
    shadowRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 275,
    borderRadius: 10,
    marginRight: 20,
    marginVertical: 20,
  },
  postCardImg: {
    height: 80,
    width: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  postCardDetailsWrapper: {
    paddingHorizontal: 12,
    width: 175,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  postCardTitle: { fontSize: 14, fontWeight: "bold" },
  postCardLocationWrapper: { flexDirection: "row", alignItems: "center" },
  postCardLocation: { marginLeft: 3, marginVertical: 2, fontSize: 12 },
  postCardTypeTag: {
    borderRadius: 5,
    paddingHorizontal: 4,
    paddingVertical: 1,
    marginTop: 2,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  postCardType: {
    textTransform: "capitalize",
    fontSize: 12,
    fontWeight: "500",
  },
});

export default styles;

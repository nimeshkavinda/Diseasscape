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
    paddingBottom: 24,
    borderBottomColor: colors.grey.medium,
    borderBottomWidth: 1,
  },
  headerRow: { flexDirection: "row", alignItems: "center" },
  name: { fontSize: 32, fontWeight: "bold", marginVertical: 8 },
  locationDetails: { flexDirection: "row", alignItems: "center" },
  locationText: {
    fontSize: 16,
    marginHorizontal: 4,
    fontWeight: "normal",
  },
  tag: {
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  type: { textTransform: "capitalize" },
  flatListWrapper: { paddingVertical: 20, height: 250 },
  imgFlatList: { height: 400, paddingHorizontal: 20 },
  postImage: { width: 250, height: 200, borderRadius: 10, marginRight: 10 },
  descriptionWrapper: { paddingHorizontal: 20 },
  descriptionTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 10 },
  description: {
    fontSize: 16,
  },
});

export default styles;

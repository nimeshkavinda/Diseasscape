import { TouchableOpacity, Text, Platform, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import colors from "../../theme/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  statusOption: {
    height: 80,
    width: 160,
    paddingVertical: Platform.OS === "android" ? 8 : 10,
    paddingHorizontal: 14,
    borderRadius: 16,
    marginRight: 10,
    marginVertical: 25,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
    shadowColor: colors.grey.dark,
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 6,
    },
    shadowRadius: 10,
  },
  statusOptionTitle: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: "500",
    textAlign: "center",
  },
});

const StatusItem = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.statusOption, backgroundColor]}
  >
    {item?.value === "positive" ? (
      <MaterialIcons name="sick" size={30} color={textColor.color} />
    ) : item?.value === "symptoms" ? (
      <MaterialCommunityIcons
        name="emoticon-sad"
        size={30}
        color={textColor.color}
      />
    ) : (
      <MaterialCommunityIcons
        name="emoticon-happy"
        size={30}
        color={textColor.color}
      />
    )}
    <Text style={[styles.statusOptionTitle, textColor]}>{item?.title}</Text>
  </TouchableOpacity>
);

const StatusButton = ({ item, selectedStatusId, onPress }) => {
  const backgroundColor =
    item.id === selectedStatusId ? colors.primary.bg : colors.secondary.bg;
  const color =
    item.id === selectedStatusId ? colors.primary.text : colors.secondary.text;

  return (
    <StatusItem
      item={item}
      onPress={onPress}
      backgroundColor={{ backgroundColor }}
      textColor={{ color }}
    />
  );
};

StatusButton.propTypes = {
  item: PropTypes.object,
  onPress: PropTypes.func,
  selectedStatusId: PropTypes.number,
};

export default StatusButton;

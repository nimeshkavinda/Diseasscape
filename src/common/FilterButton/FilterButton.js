import { TouchableOpacity, Text, Platform, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
  filterOption: {
    height: 36,
    paddingVertical: Platform.OS === "android" ? 8 : 10,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginHorizontal: 4,
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
  filterOptionTitle: { fontSize: 14, fontWeight: "500" },
});

const FilterItem = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.filterOption, backgroundColor]}
  >
    <Text style={[styles.filterOptionTitle, textColor]}>{item?.title}</Text>
  </TouchableOpacity>
);

const FilterButton = ({ item, selectedFilterId, onPress }) => {
  const backgroundColor =
    item.id === selectedFilterId ? colors.primary.bg : colors.secondary.bg;
  const color =
    item.id === selectedFilterId ? colors.primary.text : colors.secondary.text;

  return (
    <FilterItem
      item={item}
      onPress={onPress}
      backgroundColor={{ backgroundColor }}
      textColor={{ color }}
    />
  );
};

FilterButton.propTypes = {
  item: PropTypes.object,
  onPress: PropTypes.func,
  selectedFilterId: PropTypes.number,
};

export default FilterButton;

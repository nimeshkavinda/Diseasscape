import {
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useState } from "react";
import { Text, BackButton, StatusButton } from "../../../common";
import styles from "./styles";
import colors from "../../../theme/colors";
import { status, diseases } from "../../../data/statusItems.data";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SetStatus = () => {
  const [selectedStatus, setSelectedStatus] = useState(status[0]);
  const [selectedDisease, setSelectedDisease] = useState();
  const [updatedStatus, setUpdatedStatus] = useState({
    status: "healthy",
    disease: "",
  });

  const updateStatus = () => {
    if (selectedDisease === undefined) {
      Alert.alert(
        "Select a disease",
        "Please select the disease you are diagnosed/ having symptoms for",
        [
          {
            text: "OK",
            style: "default",
          },
        ],
        {
          cancelable: true,
        }
      );
    } else {
      setUpdatedStatus({
        status: selectedStatus?.value,
        disease: selectedDisease?.value,
      });
    }
  };

  console.log("Updated status: ", updatedStatus);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.headerNav}>
        <BackButton />
      </View>
      <View style={styles.headingWrapper}>
        <Text style={styles.headingText}>Set status</Text>
      </View>
      <Text style={styles.sectionHeading}>I'm</Text>
      <View style={styles.statusWrapper}>
        <FlatList
          data={status}
          renderItem={({ item }) => (
            <StatusButton
              item={item}
              selectedStatusId={selectedStatus?.id}
              onPress={() => setSelectedStatus(item)}
            />
          )}
          keyExtractor={(item) => item?.id}
          style={styles.statusFlatList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.diseaseWrapper}>
        {selectedStatus && selectedStatus.id === 1 ? (
          <View style={styles.healthy}>
            <MaterialCommunityIcons
              name="emoticon-happy"
              size={72}
              color={colors.success.primary}
            />
            <Text
              style={[styles.healthyText, { color: colors.success.primary }]}
            >
              Awesome, let's help others to be as healthy as you
            </Text>
          </View>
        ) : (
          <View style={styles.diseases}>
            <Text style={styles.sectionHeading}>For</Text>
            <ScrollView
              contentContainerStyle={styles.diseaseScrollView}
              showsVerticalScrollIndicator={false}
            >
              {diseases &&
                diseases.map((item) => {
                  return (
                    <TouchableOpacity
                      style={[
                        styles.diseaseButton,
                        {
                          backgroundColor:
                            selectedDisease?.id === item.id
                              ? colors.primary.bg
                              : colors.grey.light,
                        },
                      ]}
                      onPress={() => setSelectedDisease(item)}
                      key={item.id}
                    >
                      <Text
                        style={[
                          styles.diseaseButtonText,
                          {
                            color:
                              selectedDisease?.id === item.id
                                ? colors.primary.text
                                : colors.secondary.text,
                          },
                        ]}
                      >
                        {item?.title}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
            </ScrollView>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                style={[
                  styles.button,
                  { width: "100%", backgroundColor: colors.primary.bg },
                ]}
                onPress={updateStatus}
              >
                <Text
                  style={[styles.buttonText, { color: colors.primary.text }]}
                >
                  Update status
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SetStatus;

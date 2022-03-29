import {
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useState, useEffect } from "react";
import { Text, BackButton, StatusButton, Button } from "../../../common";
import styles from "./styles";
import colors from "../../../theme/colors";
import { status, diseases } from "../../../data/statusItems.data";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import ac from "../../../redux/actions";

const SetStatus = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [selectedStatus, setSelectedStatus] = useState();
  const [selectedDisease, setSelectedDisease] = useState();
  const [updatedStatus, setUpdatedStatus] = useState({
    status: "",
    disease: "",
  });

  useEffect(() => {
    switch (route.params?.user?.status) {
      case "healthy":
        setSelectedStatus(status[0]);
        break;
      case "symptoms":
        setSelectedStatus(status[1]);
        break;
      case "positive":
        setSelectedStatus(status[2]);
        break;
      default:
        setSelectedStatus(status[0]);
        break;
    }

    switch (route.params?.user?.disease) {
      case "dengue":
        setSelectedDisease(diseases[0]);
        break;
      case "yellowFever":
        setSelectedDisease(diseases[1]);
        break;
      case "chikungunya":
        setSelectedDisease(diseases[2]);
        break;
      case "zika":
        setSelectedDisease(diseases[3]);
        break;
      case "cholera":
        setSelectedDisease(diseases[4]);
        break;
      case "leptospirosis":
        setSelectedDisease(diseases[5]);
        break;
      case "covid":
        setSelectedDisease(diseases[6]);
        break;
      default:
        setSelectedDisease("");
        break;
    }
  }, []);

  const updateStatusSubmit = () => {
    console.log("selected status/disease: ", selectedStatus, selectedDisease);
    if (selectedDisease === "") {
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
    } else if (
      selectedStatus?.value !== route.params?.user?.status ||
      selectedDisease?.value !== route.params?.user?.disease
    ) {
      setUpdatedStatus({
        status: selectedStatus?.value,
        disease: selectedDisease?.value,
      });
      dispatch(
        ac.updateUser(route.params.user?.uid, {
          status: selectedStatus?.value,
          disease: selectedDisease?.value,
        })
      );
    }
  };

  console.log("Updated status: ", updatedStatus);

  const updateUserFetching = useSelector(({ updateUser: { fetching } }) => {
    return fetching;
  });

  const updateUser = useSelector(({ updateUser }) => updateUser);

  const fetchingLoggedInUser = useSelector(
    ({ getLoggedInUser: { fetching } }) => {
      return fetching;
    }
  );

  const getLoggedInUserSuccess = useSelector(
    ({ getLoggedInUser: { success } }) => {
      return success;
    }
  );

  useEffect(() => {
    if (updateUser.data?.status === "success" && !updateUserFetching) {
      Alert.alert(
        "Status changed",
        "Your status has been updated",
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
      dispatch(ac.getLoggedInUser(route.params.user?.uid));
    }
  }, [updateUser]);

  useEffect(
    function () {
      if (getLoggedInUserSuccess && updateUser.data?.status === "success") {
        console.log("Update user state data from redux: ", updateUser.data);
        navigation.reset({
          index: 0,
          routes: [{ name: "Profile" }],
        });
      }
      if (updateUser.error || !getLoggedInUserSuccess) {
        Alert.alert(
          "Error",
          "Failed to update status",
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
      }
    },
    [updateUser, getLoggedInUserSuccess]
  );

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
              <Button
                title="Update status"
                onPress={updateStatusSubmit}
                isLoading={updateUserFetching || fetchingLoggedInUser}
              />
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SetStatus;

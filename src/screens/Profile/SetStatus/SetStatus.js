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
import moment from "moment";
import useLocation from "../../../hooks/useLocation";

const SetStatus = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [selectedStatus, setSelectedStatus] = useState();
  const [selectedDisease, setSelectedDisease] = useState();
  const [userRegion, setUserRegion] = useState();
  const { coords, address, error } = useLocation();

  useEffect(() => {
    if (coords && address !== null) {
      console.log("Coords: ", coords, "Address: ", address);
      setUserRegion({
        name: address?.city,
        vicinity: address?.city,
        latitude: coords?.latitude,
        longitude: coords?.longitude,
      });
    }
    if (error !== null) {
      console.log("Failed to get user location");
    }
  }, [coords, address, error]);

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

  const updateUserFetching = useSelector(({ updateUser: { fetching } }) => {
    return fetching;
  });

  const updateUser = useSelector(({ updateUser }) => updateUser);

  const fetchingLoggedInUser = useSelector(
    ({ getLoggedInUser: { fetching } }) => {
      return fetching;
    }
  );

  const setStatusHealthy = () => {
    if (
      selectedStatus?.id === 1 &&
      selectedStatus?.value !== route.params?.user?.status
    ) {
      dispatch(
        ac.updateUser(route.params.user?.uid, {
          status: selectedStatus?.value,
          disease: "",
        })
      );
    }
  };

  useEffect(() => {
    setStatusHealthy();
  }, [selectedStatus]);

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
      dispatch(
        ac.updateUser(route.params.user?.uid, {
          status: selectedStatus?.value,
          disease: selectedDisease?.value,
        })
      );
      dispatch(
        ac.createPatient(route.params.user?.uid, {
          date: moment(new Date()).utc().format("ddd Do MMMM YYYY"),
          status: selectedStatus?.value,
          disease: selectedDisease?.value,
          location: {
            name: userRegion?.name,
            vicinity: userRegion?.vicinity,
          },
          latLng: {
            latitude: userRegion?.latitude,
            longitude: userRegion?.longitude,
          },
        })
      );
      if (!updateUserFetching && updateUser.data?.status === "success") {
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
      }
    }
  };

  useEffect(() => {
    if (!updateUserFetching && updateUser.data?.status === "success") {
      dispatch(ac.getLoggedInUser(route.params.user?.uid));
    }
  }, [dispatch, updateUser, updateUserFetching]);

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

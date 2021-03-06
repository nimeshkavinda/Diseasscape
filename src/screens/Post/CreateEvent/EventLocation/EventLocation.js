import { View, TouchableOpacity, Alert } from "react-native";
import { useState, useEffect } from "react";
import styles from "../styles";
import { Text, Input, Button } from "../../../../common";
import MapView, { Marker } from "react-native-maps";
import { Fontisto } from "@expo/vector-icons";
import useLocation from "../../../../hooks/useLocation";
import colors from "../../../../theme/colors";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import ac from "../../../../redux/actions";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

let apiKey = Constants.manifest?.extra?.googleMapsApiKey;

const latitudeDelta = 0.15;
const longitudeDelta = 0.01;

const EventLocation = ({ prevStep, eventData }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [userRegion, setUserRegion] = useState();
  const { coords, address, error } = useLocation();
  const [region, setRegion] = useState();
  const [postsArray, setPostsArray] = useState([]);

  // event data final state obj
  const [eventDataFinal, setEventDataFinal] = useState(eventData);

  const posts = useSelector(({ getPosts }) =>
    getPosts.data ? getPosts.data : {}
  );
  const postsFetching = useSelector(({ getPosts: { fetching } }) => {
    return fetching;
  });

  const loggedInUser = useSelector(({ getLoggedInUser }) =>
    getLoggedInUser.data ? getLoggedInUser.data[0] : {}
  );

  useEffect(() => {
    if (!postsFetching) {
      let postsArr = Object.keys(posts).map((key) => {
        return posts[key];
      });
      setPostsArray(postsArr);
    }
  }, [postsFetching]);

  useEffect(() => {
    if (coords && address !== null) {
      console.log("Coords: ", coords, "Address: ", address);
      setUserRegion({
        name: address?.city,
        vicinity: address?.city,
        latitude: coords?.latitude,
        longitude: coords?.longitude,
        latitudeDelta: latitudeDelta,
        longitudeDelta: longitudeDelta,
      });
      setRegion({
        name: address?.city,
        vicinity: address?.city,
        latitude: coords?.latitude,
        longitude: coords?.longitude,
        latitudeDelta: latitudeDelta,
        longitudeDelta: longitudeDelta,
      });
      setEventDataFinal({
        ...eventDataFinal,
        latLng: {
          ...eventDataFinal.latLng,
          latitude: coords?.latitude,
          longitude: coords?.longitude,
        },
        location: {
          ...eventDataFinal.location,
          name: address?.city,
          vicinity: address?.city,
        },
      });
      setIsLoaded(true);
    }
    if (error !== null) {
      Alert.alert(
        "Error",
        "Failed to fetch current location",
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
  }, [coords, address, error]);

  console.log("Event data final at component mount: ", eventDataFinal);

  const fetchPlaceData = (region) => {
    fetch(
      `https://maps.googleapis.com/maps/api/place/search/json?location=${region?.latitude},${region?.longitude}&radius=500&&sensor=false&key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Place: ", data);
        setRegion({
          name: data?.results[0]?.name,
          vicinity: data?.results[0]?.vicinity,
          latitude: region?.latitude,
          longitude: region?.longitude,
          latitudeDelta: latitudeDelta,
          longitudeDelta: longitudeDelta,
        });
        setEventDataFinal({
          ...eventDataFinal,
          latLng: {
            ...eventDataFinal.latLng,
            latitude: region?.latitude,
            longitude: region?.longitude,
          },
          location: {
            ...eventDataFinal.location,
            name: data?.results[0]?.name,
            vicinity: data?.results[0]?.vicinity,
          },
        });
      });
  };

  const onRegionChange = (region) => {
    console.log("Region: ", region);
    fetchPlaceData(region);
    console.log("Event data final at location change: ", eventDataFinal);
  };

  const createEvent = useSelector(({ createEvent }) =>
    createEvent.data ? createEvent.data : {}
  );

  const createEventFetching = useSelector(({ createEvent: { fetching } }) => {
    return fetching;
  });

  const createEventSubmit = () => {
    console.log("Event data before submit: ", eventDataFinal);
    console.log("Create event data", createEvent);
    dispatch(ac.createEvent(eventDataFinal));
    dispatch(
      ac.updateUser(loggedInUser?.uid, {
        ...loggedInUser,
        events: [
          ...loggedInUser.events,
          {
            eventId: createEvent?.data?.id,
          },
        ],
      })
    );
    Alert.alert(
      "Success",
      "Your event has been created",
      [
        {
          text: "OK",
          onPress: () => {
            navigation.reset({
              index: 0,
              routes: [{ name: "HomeStack" }],
            });
          },
          style: "default",
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  return (
    <View style={styles.wrapper}>
      <View>
        <View style={styles.headingWrapper}>
          <Text style={styles.headingText}>Set meetup location</Text>
        </View>
      </View>
      {isLoaded && (
        <View style={styles.mapWrapper}>
          <MapView
            style={styles.map}
            initialRegion={userRegion}
            region={region}
            onRegionChangeComplete={onRegionChange}
          >
            {postsArray.map((post) => (
              <Marker key={post.id} coordinate={post.latLng}>
                <MaterialCommunityIcons
                  name="map-marker-radius"
                  size={26}
                  color={colors.warning.primary}
                />
              </Marker>
            ))}
          </MapView>
          <View style={styles.markerFixed}>
            <Fontisto
              style={styles.marker}
              name="map-marker"
              size={32}
              color={colors.primary.bg}
            />
          </View>
        </View>
      )}
      <View style={styles.formWrapper}>
        <Input value={`${region?.vicinity}`} style={styles.input} />
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={[
            styles.button,
            { width: "48%", backgroundColor: colors.secondary.bg },
          ]}
          onPress={prevStep}
        >
          <Ionicons name="md-caret-back" size={16} color={colors.primary.bg} />
          <Text style={[styles.buttonText, { color: colors.secondary.text }]}>
            Event details
          </Text>
        </TouchableOpacity>
        {/* {createEventFetching && (
          <TouchableOpacity
            style={[
              styles.button,
              { width: "48%", backgroundColor: colors.primary.bg },
            ]}
            disabled={true}
          >
            <Text style={[styles.buttonText, { color: colors.primary.text }]}>
              Create event
            </Text>
          </TouchableOpacity>
        )} */}
        <View style={styles.buttonSubmitWrapper}>
          <Button
            title="Create event"
            onPress={createEventSubmit}
            isLoading={createEventFetching}
            style={{ fontSize: 16 }}
          />
        </View>
      </View>
    </View>
  );
};

export default EventLocation;

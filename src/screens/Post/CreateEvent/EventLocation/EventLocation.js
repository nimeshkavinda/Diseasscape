import { View, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import styles from "../styles";
import { Text, Input } from "../../../../common";
import MapView from "react-native-maps";
import { Fontisto } from "@expo/vector-icons";
import useLocation from "../../../../hooks/useLocation";
import colors from "../../../../theme/colors";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";

let apiKey = Constants.manifest?.extra?.googleMapsApiKey;

const latitudeDelta = 0.05;
const longitudeDelta = 0.01;

const EventLocation = ({ prevStep, eventData }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [userRegion, setUserRegion] = useState();
  const { coords, address, error } = useLocation();
  const [region, setRegion] = useState();

  // event data final state obj
  const [eventDataFinal, setEventDataFinal] = useState(eventData);

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
          />
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
        <TouchableOpacity
          style={[
            styles.button,
            { width: "48%", backgroundColor: colors.primary.bg },
          ]}
        >
          <Text style={[styles.buttonText, { color: colors.primary.text }]}>
            Create event
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EventLocation;

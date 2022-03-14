import { View, SafeAreaView } from "react-native";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Text } from "../../common";
import styles from "./styles";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import colors from "../../theme/colors";
import useLocation from "../../hooks/useLocation";
import Map from "./Map";
import { Marker } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Constants from "expo-constants";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [initialRegion, setInitialRegion] = useState();
  const { coords, address, error } = useLocation();
  const [region, setRegion] = useState();
  const [searchFocus, setSearchFocus] = useState(false);
  const [markers, setMarkers] = useState();
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ["3%", "15%", "45%"], []);

  useEffect(() => {
    if (coords && address !== null) {
      setInitialRegion({
        latitude: coords?.latitude,
        longitude: coords?.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.01,
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

  const userLocation = {
    description: "Current Location",
    geometry: {
      location: { lat: initialRegion?.latitude, lng: initialRegion?.longitude },
    },
  };

  const onSearchResultSelect = (data, details) => {
    console.log("Data: ", data, "Details: ", details);
    setRegion({
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
      latitudeDelta: 0.05,
      longitudeDelta: 0.01,
    });
  };

  const onRegionChange = (region) => {
    // setRegion(region);
    console.log("Region changed: ", region);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View
        style={[
          styles.header,
          searchFocus === true
            ? {
                flex: 1,
                backgroundColor: "#fff",
              }
            : { flex: 0.08 },
        ]}
      >
        <GooglePlacesAutocomplete
          placeholder="Search places"
          onPress={onSearchResultSelect}
          textInputProps={{
            onFocus: () => setSearchFocus(true),
            onBlur: () => setSearchFocus(false),
          }}
          // debounce={100}
          fetchDetails={true}
          disableScroll={true}
          query={{
            key: Constants.manifest?.extra?.googleMapsApiKey,
            language: "en",
            components: "country:lk",
          }}
          onFail={(error) => console.error(error)}
          predefinedPlaces={[userLocation]}
          enablePoweredByContainer={false}
          styles={{
            textInputContainer: {
              elevation: 6,
              shadowColor: colors.grey.dark,
              shadowOpacity: 0.1,
              shadowOffset: {
                height: 6,
              },
              shadowRadius: 30,
            },
            textInput: {
              borderRadius: 12,
              height: 60,
              fontSize: 18,
            },
            row: {
              flexDirection: "row",
              backgroundColor: "transparent",
              paddingHorizontal: 5,
              paddingVertical: 20,
              height: 63,
            },
            separator: {
              height: 1,
              backgroundColor: colors.grey.medium,
            },
            description: { fontSize: 18 },
          }}
        />
      </View>
      {isLoaded && (
        <Map
          style={styles.map}
          initialRegion={initialRegion}
          region={region}
          onRegionChange={onRegionChange}
        >
          <Marker
            coordinate={{
              latitude: coords?.latitude,
              longitude: coords?.longitude,
            }}
          />
        </Map>
      )}
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        handleIndicatorStyle={{ backgroundColor: colors.grey.medium }}
      >
        <BottomSheetView>
          <Text>test</Text>
        </BottomSheetView>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default Home;

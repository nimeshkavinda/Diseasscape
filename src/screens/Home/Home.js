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
  const { coords, address, error } = useLocation();
  const [region, setRegion] = useState();
  const [markers, setMarkers] = useState();
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ["3%", "15%", "45%"], []);

  const onRegionChange = (region) => {
    // setRegion(region);
  };

  useEffect(() => {
    if (coords && address !== null) {
      setRegion({
        latitude: coords?.latitude,
        longitude: coords?.longitude,
        latitudeDelta: 0.03,
        longitudeDelta: 0.09,
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

  console.log(region);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.header}>
        {/* <Input style={styles.searchInput} placeholder="Search" /> */}
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: Constants.manifest?.extra?.googleMapsApiKey,
            language: "en",
            components: "country:lk",
          }}
          onFail={(error) => console.error(error)}
        />
      </View>
      {isLoaded && (
        <Map
          // mapType="hybrid"
          style={styles.map}
          initialRegion={region}
          region={region}
          animateToRegion={{ region: region, duration: 5 }}
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
        // index={0}
        // enablePanDownToClose={true}
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

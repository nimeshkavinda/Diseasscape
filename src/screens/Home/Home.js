import {
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
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
import filterItemData from "../../data/filterItem.data";
import { FontAwesome5 } from "@expo/vector-icons";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [userRegion, setUserRegion] = useState();
  const { coords, address, error } = useLocation();
  const [region, setRegion] = useState();
  const [searchFocus, setSearchFocus] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [markers, setMarkers] = useState();
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ["35%", "45%", "70%"], []);

  useEffect(() => {
    if (coords && address !== null) {
      console.log("Coords: ", coords, "Address: ", address);
      setUserRegion({
        name: address?.city,
        vicinity: address?.city,
        latitude: coords?.latitude,
        longitude: coords?.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.01,
      });
      setRegion({
        name: address?.city,
        vicinity: address?.city,
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
      location: { lat: userRegion?.latitude, lng: userRegion?.longitude },
    },
    address: { name: address?.city, vicinity: address?.city },
  };

  const onSearchResultSelect = (data, details) => {
    console.log("Data: ", data, "Details: ", details);
    setRegion({
      name:
        data.description === "Current Location"
          ? data.address?.name
          : details.name,
      vicinity:
        data.description === "Current Location"
          ? data.address?.vicinity
          : details.vicinity,
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
      latitudeDelta: 0.05,
      longitudeDelta: 0.01,
    });
  };

  const onRegionChange = (region) => {
    // setRegion(region);
    // console.log("Region changed: ", region);
  };

  const FilterItem = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.filterOption, backgroundColor]}
    >
      <Text style={[styles.filterOptionTitle, textColor]}>{item?.title}</Text>
    </TouchableOpacity>
  );

  const renderFilterItem = ({ item }) => {
    const backgroundColor =
      item.id === selectedId ? colors.primary.bg : colors.secondary.bg;
    const color =
      item.id === selectedId ? colors.primary.text : colors.secondary.text;

    return (
      <FilterItem
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View
        style={[
          styles.headerWrapper,
          searchFocus === true
            ? {
                flex: 1,
                backgroundColor: "#fff",
              }
            : { flex: 0.8 },
        ]}
      >
        <View
          style={[
            styles.search,
            searchFocus === true
              ? {
                  height: Dimensions.get("window").height,
                  backgroundColor: "#fff",
                }
              : { flex: 0.1 },
          ]}
        >
          <GooglePlacesAutocomplete
            placeholder="Search places"
            onPress={onSearchResultSelect}
            textInputProps={{
              onFocus: () => setSearchFocus(true),
              onBlur: () => setSearchFocus(false),
            }}
            minLength={2}
            debounce={200}
            fetchDetails={true}
            disableScroll={true}
            // currentLocation={true}
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
                paddingHorizontal: 16,
              },
              row: {
                flexDirection: "row",
                backgroundColor: "transparent",
                paddingHorizontal: 4,
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
        <FlatList
          data={filterItemData}
          renderItem={renderFilterItem}
          keyExtractor={(item) => item.id}
          style={styles.filterWrapper}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {isLoaded && (
        <Map
          style={styles.map}
          initialRegion={userRegion}
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
        <BottomSheetView style={styles.locationInfoWrapper}>
          <View style={styles.locationInfo}>
            <View style={styles.locationHeaderWrapper}>
              <Text style={styles.locationName}>{region?.name}</Text>
              <View style={styles.locationProvince}>
                <FontAwesome5 name="map-marker-alt" size={14} color="black" />
                <Text style={styles.locationProvinceText}>
                  {region?.vicinity}
                </Text>
              </View>
            </View>
            <View style={styles.locationDataWrapper}>
              <View style={styles.locationData}>
                <Text style={styles.locationDataCount}>300</Text>
                <Text style={styles.locationDataTitle}>Patients</Text>
              </View>
              <View style={styles.locationData}>
                <Text style={styles.locationDataCount}>15</Text>
                <Text style={styles.locationDataTitle}>Risk sites</Text>
              </View>
              <View style={styles.locationData}>
                <Text style={styles.locationDataCount}>8</Text>
                <Text style={styles.locationDataTitle}>Events</Text>
              </View>
            </View>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default Home;

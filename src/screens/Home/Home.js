import { View, SafeAreaView, FlatList, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { FilterButton } from "../../common";
import styles from "./styles";
import colors from "../../theme/colors";
import useLocation from "../../hooks/useLocation";
import MapView, { Marker } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Constants from "expo-constants";
import filterItemData from "../../data/filterItem.data";
import patients from "../../data/patients.data";
import posts from "../../data/posts.data";
import events from "../../data/events.data";
import BottomSheetModal from "./BottomSheetModal/BottomSheetModal";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [userRegion, setUserRegion] = useState();
  const { coords, address, error } = useLocation();
  const [region, setRegion] = useState();
  const [searchFocus, setSearchFocus] = useState(false);
  const [selectedFilterId, setSelectedFilterId] = useState(1);

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
            : { flex: 0.23 },
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
              : { flex: 2 },
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
            query={{
              key: Constants.manifest?.extra?.googleMapsApiKey,
              language: "en",
              components: "country:lk",
            }}
            onFail={(error) => console.error("Autocomplete err: ", error)}
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
          renderItem={({ item }) => (
            <FilterButton
              item={item}
              selectedFilterId={selectedFilterId}
              onPress={() => setSelectedFilterId(item.id)}
            />
          )}
          keyExtractor={(item) => item.id}
          style={styles.filterWrapper}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {isLoaded && (
        <MapView style={styles.map} initialRegion={userRegion} region={region}>
          {selectedFilterId === 1 ? (
            <>
              {patients.map((patient) => (
                <Marker
                  key={patient.id}
                  coordinate={patient.latLng}
                  title={patient.title}
                  description={patient.title}
                  pinColor="red"
                  onPress={() => console.log(patient)}
                />
              ))}
              {posts.map((post) => (
                <Marker
                  key={post.id}
                  coordinate={post.latLng}
                  title={post.title}
                  description={post.title}
                  pinColor="green"
                  onPress={() => console.log(post)}
                />
              ))}
              {events.map((event) => (
                <Marker
                  key={event.id}
                  coordinate={event.latLng}
                  title={event.title}
                  description={event.title}
                  pinColor="blue"
                  onPress={() => console.log(event)}
                />
              ))}
            </>
          ) : selectedFilterId === 2 ? (
            patients.map((patient) => (
              <Marker
                key={patient.id}
                coordinate={patient.latLng}
                title={patient.title}
                description={patient.title}
                pinColor="red"
                onPress={() => console.log(patient)}
              />
            ))
          ) : selectedFilterId === 3 ? (
            posts.map((post) => (
              <Marker
                key={post.id}
                coordinate={post.latLng}
                title={post.title}
                description={post.title}
                pinColor="green"
                onPress={() => console.log(post)}
              />
            ))
          ) : (
            events.map((event) => (
              <Marker
                key={event.id}
                coordinate={event.latLng}
                title={event.title}
                description={event.title}
                pinColor="blue"
                onPress={() => console.log(event)}
              />
            ))
          )}
        </MapView>
      )}
      <BottomSheetModal />
    </SafeAreaView>
  );
};

export default Home;

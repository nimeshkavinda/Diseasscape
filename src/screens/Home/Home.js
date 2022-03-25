import { View, SafeAreaView, FlatList, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { FilterButton } from "../../common";
import styles from "./styles";
import colors from "../../theme/colors";
import useLocation from "../../hooks/useLocation";
import MapView, { Marker } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Constants from "expo-constants";
import filterItems from "../../data/filterItems.data";
import AllStatsModal from "./AllStatsModal/AllStatsModal";
import PatientModal from "./PatientModal/PatientModal";
import PostsModal from "./PostsModal/PostsModal";
import EventsModal from "./EventsModal/EventsModal";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import ac from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [userRegion, setUserRegion] = useState();
  const { coords, address, error } = useLocation();
  const [region, setRegion] = useState();
  const [searchFocus, setSearchFocus] = useState(false);
  const [selectedFilterId, setSelectedFilterId] = useState(1);

  useEffect(() => {
    dispatch(ac.getPatients());
    dispatch(ac.getPosts());
    dispatch(ac.getEvents());
  }, []);

  // all stats
  const [statsModalVisibility, setStatsModalVisibility] = useState(true);
  const [allStats, setAllStats] = useState();

  // patients
  const [patientsArray, setPatientsArray] = useState([]);
  const [patientModalVisibility, setPatientModalVisibility] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState();
  const patients = useSelector(({ getPatients }) =>
    getPatients.data ? getPatients.data : {}
  );
  useEffect(() => {
    let patientsArr = Object.keys(patients).map((key) => {
      return patients[key];
    });
    setPatientsArray(patientsArr);
  }, [patients]);

  // posts
  const [postsArray, setPostsArray] = useState([]);
  const [postModalVisibility, setPostModalVisibility] = useState(false);
  const [selectedPost, setSelectedPost] = useState();
  const posts = useSelector(({ getPosts }) =>
    getPosts.data ? getPosts.data : {}
  );
  useEffect(() => {
    let postsArr = Object.keys(posts).map((key) => {
      return posts[key];
    });
    setPostsArray(postsArr);
  }, [posts]);

  //events
  const [eventsArray, setEventsArray] = useState([]);
  const [eventModalVisibility, setEventModalVisibility] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState();
  const events = useSelector(({ getEvents }) =>
    getEvents.data ? getEvents.data : {}
  );
  useEffect(() => {
    let eventsArr = Object.keys(events).map((key) => {
      return events[key];
    });
    setEventsArray(eventsArr);
  }, [events]);

  const getPatientsInVicinity = patientsArray.filter((patient) => {
    return patient?.location?.vicinity === region?.vicinity;
  });

  const getPostsInVicinity = postsArray.filter((post) => {
    return post?.location?.vicinity === region?.vicinity;
  });

  const getEventsInVicinity = eventsArray.filter((event) => {
    return event?.location?.vicinity === region?.vicinity;
  });

  const userLocation = {
    description: "Current Location",
    geometry: {
      location: { lat: userRegion?.latitude, lng: userRegion?.longitude },
    },
    address: { name: address?.city, vicinity: address?.city },
  };

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
      setAllStats({
        patients: getPatientsInVicinity,
        posts: getPostsInVicinity,
        events: getEventsInVicinity,
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

  useEffect(() => {
    setAllStats({
      patients: getPatientsInVicinity,
      posts: getPostsInVicinity,
      events: getEventsInVicinity,
    });
  }, [region]);

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
    setAllStats({
      patients: getPatientsInVicinity,
      posts: getPostsInVicinity,
      events: getEventsInVicinity,
    });
    setStatsModalVisibility(true);
  };

  const BottomSheet = () => {
    if (selectedFilterId === 1) {
      return (
        <AllStatsModal
          visible={statsModalVisibility}
          name={region?.name}
          vicinity={region?.vicinity}
          stats={allStats}
        />
      );
    } else if (selectedFilterId === 2) {
      return (
        <PatientModal
          visible={patientModalVisibility}
          patientId={selectedPatient?.uid}
          patient={selectedPatient}
          isNearYou={
            userRegion?.vicinity === selectedPatient?.location?.vicinity
              ? true
              : false
          }
        />
      );
    } else if (selectedFilterId === 3) {
      return (
        <PostsModal
          visible={postModalVisibility}
          postId={selectedPost?.id}
          post={selectedPost}
          isNearYou={
            userRegion?.vicinity === selectedPost?.location?.vicinity
              ? true
              : false
          }
        />
      );
    } else if (selectedFilterId === 4) {
      return (
        <EventsModal
          visible={eventModalVisibility}
          eventId={selectedEvent?.id}
          event={selectedEvent}
          posts={postsArray}
          isNearYou={
            userRegion?.vicinity === selectedEvent?.location?.vicinity
              ? true
              : false
          }
        />
      );
    }
    return null;
  };

  const MapMarkers = () => {
    if (selectedFilterId === 1) {
      return (
        <>
          {patientsArray.map((patient) => (
            <Marker
              key={patient.uid}
              coordinate={patient.latLng}
              pinColor="red"
              // onPress={() => onPatientSelect(patient)}
            >
              <MaterialCommunityIcons
                name="map-marker"
                size={26}
                color={colors.error.primary}
              />
            </Marker>
          ))}
          {postsArray.map((post) => (
            <Marker
              key={post.id}
              coordinate={post.latLng}
              pinColor="green"
              // onPress={() => onPostSelect(post)}
            >
              <MaterialCommunityIcons
                name="map-marker-radius"
                size={26}
                color={colors.warning.primary}
              />
            </Marker>
          ))}
          {eventsArray.map((event) => (
            <Marker
              key={event.id}
              coordinate={event.latLng}
              pinColor="blue"
              // onPress={() => onEventSelect(event)}
            >
              <MaterialCommunityIcons
                name="map-marker-right"
                size={26}
                color={colors.success.primary}
              />
            </Marker>
          ))}
        </>
      );
    } else if (selectedFilterId === 2) {
      return (
        <>
          {patientsArray.map((patient) => (
            <Marker
              key={patient.uid}
              coordinate={patient.latLng}
              onPress={() => onPatientSelect(patient)}
            >
              {selectedPatient?.id === patient.id ? (
                <MaterialCommunityIcons
                  name="map-marker"
                  size={36}
                  color={colors.error.primary}
                />
              ) : (
                <MaterialCommunityIcons
                  name="map-marker"
                  size={26}
                  color={colors.error.primary}
                />
              )}
            </Marker>
          ))}
        </>
      );
    } else if (selectedFilterId === 3) {
      return (
        <>
          {postsArray.map((post) => (
            <Marker
              key={post.id}
              coordinate={post.latLng}
              onPress={() => onPostSelect(post)}
            >
              {selectedPost?.id === post.id ? (
                <MaterialCommunityIcons
                  name="map-marker-radius"
                  size={36}
                  color={colors.warning.primary}
                />
              ) : (
                <MaterialCommunityIcons
                  name="map-marker-radius"
                  size={26}
                  color={colors.warning.primary}
                />
              )}
            </Marker>
          ))}
        </>
      );
    } else if (selectedFilterId === 4) {
      return (
        <>
          {eventsArray.map((event) => (
            <Marker
              key={event.id}
              coordinate={event.latLng}
              onPress={() => onEventSelect(event)}
            >
              {selectedEvent?.id === event.id ? (
                <MaterialCommunityIcons
                  name="map-marker-right"
                  size={36}
                  color={colors.success.primary}
                />
              ) : (
                <MaterialCommunityIcons
                  name="map-marker-right"
                  size={26}
                  color={colors.success.primary}
                />
              )}
            </Marker>
          ))}
        </>
      );
    }
    return null;
  };

  const onPatientSelect = (patient) => {
    console.log("Selected Patient: ", patient);
    setSelectedPatient(patient);
    setPatientModalVisibility(true);
  };

  const onPostSelect = (post) => {
    console.log("Selected Post: ", post);
    setSelectedPost(post);
    setPostModalVisibility(true);
  };

  const onEventSelect = (event) => {
    console.log("Selected Event: ", event);
    setSelectedEvent(event);
    setEventModalVisibility(true);
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
          data={filterItems}
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
          <MapMarkers />
        </MapView>
      )}
      <BottomSheet />
    </SafeAreaView>
  );
};

export default Home;

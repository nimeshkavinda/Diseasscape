import { View, TouchableOpacity } from "react-native";
import { useState } from "react";
import styles from "../styles";
import { Input, Text, ValidationText } from "../../../../common";
import DateTimePicker from "@react-native-community/datetimepicker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../../../theme/colors";
import { Ionicons } from "@expo/vector-icons";
import EventLocation from "../EventLocation/EventLocation";
import { useForm, Controller } from "react-hook-form";
import moment from "moment";
import { useSelector } from "react-redux";

const EventDetails = () => {
  const [step, setStep] = useState(1);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      date: "",
      time: "",
      location: {
        name: "",
        vicinity: "",
      },
      latLng: {
        latitude: "",
        longitude: "",
      },
      organizer: {
        uid: "",
        fullName: "",
        profileImg: "",
      },
      participants: [{ uid: "", fullName: "" }],
    },
  });

  // data state obj
  const [eventData, setEventData] = useState();

  // date time
  const [dateTime, setDateTime] = useState(new Date());
  const [date, setDate] = useState(
    moment(new Date()).utc().format("ddd Do MMMM YYYY")
  );
  const [time, setTime] = useState(moment(new Date()).utc().format("hh:mm A"));

  const loggedInUser = useSelector(({ getLoggedInUser }) =>
    getLoggedInUser.data ? getLoggedInUser.data[0] : {}
  );

  const onDateTimeChange = (event, selectedValue) => {
    console.log("DateTime changed: ", selectedValue);
    setDateTime(selectedValue);
    setDate(moment(selectedValue).utc().format("ddd Do MMMM YYYY"));
    setTime(moment(selectedValue).utc().format("hh:mm A"));
    console.log("Date: ", date);
    console.log("Time: ", time);
  };

  const handleSubmitPress = (data) => {
    console.log("Even data step 1: ", data);
    setEventData({
      title: data?.title,
      description: data?.description,
      date: date,
      time: time,
      location: {
        name: "",
        vicinity: "",
      },
      latLng: {
        latitude: "",
        longitude: "",
      },
      organizer: {
        uid: loggedInUser?.uid,
        fullName: loggedInUser?.fullName,
        profileImg: loggedInUser?.profilePhoto,
      },
      participants: [
        { uid: loggedInUser?.uid, fullName: loggedInUser?.fullName },
      ],
    });
    nextStep();
  };

  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };

  if (step === 2) {
    return <EventLocation prevStep={prevStep} eventData={eventData} />;
  }

  return (
    <View style={styles.wrapper}>
      <View>
        <View style={styles.headingWrapper}>
          <Text style={styles.headingText}>Create event</Text>
        </View>
        <View style={styles.formWrapper}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Event title"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                isError={errors.title ? true : false}
              />
            )}
            name="title"
          />
          {errors.title && <ValidationText>Title is required.</ValidationText>}

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Event description"
                multiline={true}
                style={styles.textArea}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                isError={errors.description ? true : false}
              />
            )}
            name="description"
          />
          {errors.description && (
            <ValidationText>Description is required.</ValidationText>
          )}
          <Text style={styles.sectionHeadingText}>When</Text>
          <View style={styles.dateTimeWrapper}>
            <View style={styles.dateWrapper}>
              <MaterialCommunityIcons
                name="calendar"
                size={24}
                color={colors.primary.bg}
              />
              <DateTimePicker
                testID="dateTimePicker"
                value={dateTime}
                mode={"date"}
                is24Hour={true}
                onChange={onDateTimeChange}
                style={styles.date}
                minimumDate={new Date()}
              />
            </View>
            <View style={styles.timeWrapper}>
              <MaterialCommunityIcons
                name="clock"
                size={24}
                color={colors.success.primary}
              />
              <DateTimePicker
                testID="dateTimePicker"
                value={dateTime}
                mode={"time"}
                is24Hour={true}
                onChange={onDateTimeChange}
                style={styles.time}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={[
            styles.button,
            { width: "100%", backgroundColor: colors.primary.bg },
          ]}
          onPress={handleSubmit(handleSubmitPress)}
        >
          <Text style={[styles.buttonText, { color: colors.primary.text }]}>
            Meetup location
          </Text>
          <Ionicons
            name="md-caret-forward"
            size={16}
            color={colors.primary.text}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EventDetails;

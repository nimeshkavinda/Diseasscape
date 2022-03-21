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
        id: 1,
        fullName: "Nimesh Kavinda",
        profileImg: "https://avatars.githubusercontent.com/u/44240093?v=4",
      },
      participants: [{ id: 1, fullName: "John Doe" }],
    },
  });

  // date time
  const [dateTime, setDateTime] = useState(new Date());
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const onChange = (event, selectedValue) => {
    console.log("DateTime changed: ", selectedValue);
    setDateTime(selectedValue);
    setDate(moment(selectedValue).utc().format("ddd Do MMMM YYYY"));
    setTime(moment(selectedValue).utc().format("hh:mm A"));
    console.log("Date: ", date);
    console.log("Time: ", time);
  };

  const handleSubmitPress = (data) => {
    console.log(data);
    nextStep();
  };

  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };

  if (step === 2) {
    return <EventLocation prevStep={prevStep} />;
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
                onChange={onChange}
                style={styles.date}
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
                onChange={onChange}
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

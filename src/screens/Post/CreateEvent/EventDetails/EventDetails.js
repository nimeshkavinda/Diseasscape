import { View, TouchableOpacity } from "react-native";
import { useState } from "react";
import styles from "../styles";
import { Input, Text } from "../../../../common";
import DateTimePicker from "@react-native-community/datetimepicker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../../../theme/colors";
import { Ionicons } from "@expo/vector-icons";
import EventLocation from "../EventLocation/EventLocation";

const EventDetails = () => {
  const [step, setStep] = useState(1);

  // date time
  const [date, setDate] = useState(new Date(1598051730000));
  const [time, setTime] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const handleSubmitPress = () => {
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
          <Input placeholder="Event title" style={styles.input} />
          <Input
            placeholder="Event description"
            multiline={true}
            style={styles.textArea}
          />
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
                value={date}
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
                value={date}
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
          onPress={handleSubmitPress}
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

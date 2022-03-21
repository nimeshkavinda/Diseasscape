import { View } from "react-native";
import { useState } from "react";
import styles from "../styles";
import { Input, Text, Button } from "../../../../common";
import DateTimePicker from "@react-native-community/datetimepicker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../../../theme/colors";

const EventDetails = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [time, setTime] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

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
        <Button title="Next" />
      </View>
    </View>
  );
};

export default EventDetails;

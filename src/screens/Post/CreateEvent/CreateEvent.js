import { SafeAreaView, View } from "react-native";
import { BackButton } from "../../../common/";
import styles from "./styles";
import EventDetails from "./EventDetails/EventDetails";

const CreateEvent = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.headerNav}>
        <BackButton />
      </View>
      <EventDetails />
    </SafeAreaView>
  );
};

export default CreateEvent;

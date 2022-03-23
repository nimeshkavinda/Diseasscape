import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/Profile/Profile";
import SetStatus from "../screens/Profile/SetStatus/SetStatus";
import EditProfile from "../screens/Profile/EditProfile/EditProfile";

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={Profile}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SetStatus"
        component={SetStatus}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="EditProfile"
        component={EditProfile}
      />
    </Stack.Navigator>
  );
}

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Home";
import PublicProfile from "../screens/Home/PublicProfile/PublicProfile";

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Main"
        component={Home}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="PublicProfile"
        component={PublicProfile}
      />
    </Stack.Navigator>
  );
}

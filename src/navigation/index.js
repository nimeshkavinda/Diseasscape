import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeStack from "./HomeStack";
import AuthStack from "./AuthStack";

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AuthStack">
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomeStack"
          component={HomeStack}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AuthStack"
          component={AuthStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

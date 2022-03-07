import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStarted from "./src/screens/GetStarted/GetStarted";
import Login from "./src/screens/Login/Login";
import Signup from "./src/screens/Signup/Signup";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="get-started">
        <Stack.Screen
          options={{ headerShown: false }}
          name="get-started"
          component={GetStarted}
        />
        <Stack.Screen name="login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

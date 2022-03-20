import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStarted from "../screens/GetStarted/GetStarted";
import Login from "../screens/Login/Login";
import Signup from "../screens/Signup/Signup";
import ForgotPassword from "../screens/ForgotPassword/ForgotPassword";
import EnterOTP from "../screens/EnterOTP/EnterOTP";
import ResetPassword from "../screens/ResetPassword/ResetPassword";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="GetStarted">
      <Stack.Screen
        options={{ headerShown: false }}
        name="GetStarted"
        component={GetStarted}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Signup"
        component={Signup}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="ForgotPassword"
        component={ForgotPassword}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="ResetPassword"
        component={ResetPassword}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="EnterOTP"
        component={EnterOTP}
      />
    </Stack.Navigator>
  );
}

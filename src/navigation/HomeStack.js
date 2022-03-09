import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";
import colors from "../theme/colors";
import { Platform } from "react-native";

const Tab = createBottomTabNavigator();

export default function HomeStack() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Profile") {
            iconName = focused ? "user" : "user";
          }

          return <AntDesign name={iconName} size={size} color={color} />;
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary.bg,
        tabBarInactiveTintColor: colors.grey.dark,
        tabBarStyle: {
          borderTopWidth: 0,
          borderTopColor: "transparent",
          elevation: 6,
          shadowColor: colors.grey.dark,
          shadowOpacity: 0.1,
          shadowOffset: {
            height: 6,
          },
          shadowRadius: 30,
          height: Platform.OS === "android" ? 60 : 80,
          padding: Platform.OS === "android" ? 0 : 15,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
      />
      <Tab.Screen
        name="Profile"
        options={{ headerShown: false }}
        component={Profile}
      />
    </Tab.Navigator>
  );
}

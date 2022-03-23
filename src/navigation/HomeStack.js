import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import colors from "../theme/colors";
import { Platform } from "react-native";
import MainStack from "./MainStack";
import ProfileStack from "./ProfileStack";
import PostStack from "./PostStack";

const Tab = createBottomTabNavigator();

export default function HomeStack() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "MainStack") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "PostStack") {
            iconName = focused ? "pluscircleo" : "pluscircleo";
          } else if (route.name === "ProfileStack") {
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
        name="MainStack"
        options={{ headerShown: false }}
        component={MainStack}
      />
      <Tab.Screen
        name="PostStack"
        options={{ headerShown: false }}
        component={PostStack}
      />
      <Tab.Screen
        name="ProfileStack"
        options={{ headerShown: false }}
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
}

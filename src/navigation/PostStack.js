import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Post from "../screens/Post/Post";
import CreatePost from "../screens/Post/CreatePost/CreatePost";
import CreateEvent from "../screens/Post/CreateEvent/CreateEvent";

const Stack = createNativeStackNavigator();

export default function PostStack() {
  return (
    <Stack.Navigator initialRouteName="Post">
      <Stack.Group>
        <Stack.Screen
          options={{ headerShown: false }}
          name="CreatePost"
          component={CreatePost}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="CreateEvent"
          component={CreateEvent}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Post"
          component={Post}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

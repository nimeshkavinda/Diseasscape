import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreatePost from "../screens/Post/CreatePost/CreatePost";
import PostDetails from "../screens/Post/CreatePost/PostDetails/PostDetails";

const Stack = createNativeStackNavigator();

export default function CreatePostStack() {
  return (
    <Stack.Navigator initialRouteName="CreatePost">
      <Stack.Group>
        <Stack.Screen
          options={{ headerShown: false }}
          name="CreatePost"
          component={CreatePost}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="PostDetails"
          component={PostDetails}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

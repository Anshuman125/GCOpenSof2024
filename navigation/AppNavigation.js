import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import Moviescreen from "../screens/Moviescreen";
import VideoPlayer from "../components/Player";
import ProfileScreen from "../screens/ProfileScreen";
import Login from "../src/screens/Login";
import Plans from "../src/screens/Plans"
import Register from "../src/screens/Register"

const Stack = createNativeStackNavigator();

export default function AppNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
            <Stack.Screen name="Register" options={{headerShown: false}} component={Register} />
            <Stack.Screen name="Plans" options={{headerShown: false}} component={Plans} />
                <Stack.Screen name="Profile" options={{headerShown: false}} component={ProfileScreen} />
                <Stack.Screen name="Home" options={{headerShown: false}} component={Home} />
                <Stack.Screen name="Movies" options={{headerShown: false}} component={Moviescreen} />
                <Stack.Screen name="Search" options={{headerShown: false}} component={SearchScreen} />
                 <Stack.Screen name="videoplayer" options={{headerShown: false}} component={VideoPlayer} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}   
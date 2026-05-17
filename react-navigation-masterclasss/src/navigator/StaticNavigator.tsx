import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { createStaticNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: HomeScreen,
    Details: DetailsScreen,
    Profile: ProfileScreen
  }
});

const StaticNavigator = createStaticNavigation(Stack);

export default StaticNavigator;
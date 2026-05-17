import * as React from 'react';
import { View, Text } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: HomeScreen,
    Details: DetailsScreen,
    Profile: ProfileScreen
  }
});

const Navigation = createStaticNavigation(Stack);

export default function App() {
  return < Navigation />
}
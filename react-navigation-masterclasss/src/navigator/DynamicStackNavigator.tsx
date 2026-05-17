import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const DynamicStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Details' component={DetailsScreen} />
        <Stack.Screen name='Profile' component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default DynamicStackNavigator

const styles = StyleSheet.create({})
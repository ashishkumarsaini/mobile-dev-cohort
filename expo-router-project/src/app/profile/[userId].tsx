import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const UserProfileScreen = () => {
  const { userId } = useLocalSearchParams();
  return (
    <View>
      <Text>UserProfileScreen</Text>
      <Text>User ID: {userId}</Text>
    </View>
  )
}

export default UserProfileScreen

const styles = StyleSheet.create({});
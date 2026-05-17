import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TechGettingStartedScreen = () => {
  const { tech, topic } = useLocalSearchParams();
  return (
    <View>
      <Text>TechGettingStartedScreen</Text>
      <Text>Tech: {tech}</Text>
      <Text>Topic: {topic}</Text>
    </View>
  )
}

export default TechGettingStartedScreen

const styles = StyleSheet.create({})
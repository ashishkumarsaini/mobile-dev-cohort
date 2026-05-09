import { Button } from '@react-navigation/elements';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, View } from 'react-native';

const HomeComponent = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const items = Array.from({ length: 100 }, (_, i) => `Items ${i + 1}`);
  return (
    <ScrollView style={{ flex: 1, padding: 10 }}>
      {
        items.map((item) => (
          <View key={item} style={{
            margin: 5,
            padding: 10,
            backgroundColor: "#ffffff",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            borderRadius: 10,

          }}>
            <Text>{item}</Text>
          </View>
        ))
      }
      <View style={{ marginBottom: 50 }}>
        <Button onPress={() => alert('Hello World!')}>Click me</Button>
        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      </View>
    </ScrollView >
  )
}

export default HomeComponent

const styles = StyleSheet.create({})
import React from 'react';
import { FlatList as FlatListComponent, StyleSheet, Text, View } from 'react-native';

const FlatList = () => {
  const USERS = [
    { id: '1', name: 'Alice Johnson', role: 'Designer' },
    { id: '2', name: 'Bob Smith', role: 'Developer' },
    { id: '3', name: 'Carol White', role: 'Manager' },
    { id: '4', name: 'David Brown', role: 'Developer' },
    { id: '5', name: 'Eve Davis', role: 'Designer' },
    { id: '6', name: 'Carol White', role: 'Manager' },
    { id: '7', name: 'David Brown', role: 'Developer' },
    { id: '8', name: 'Eve Davis', role: 'Designer' },
    { id: '9', name: 'Carol White', role: 'Manager' },
    { id: '10', name: 'David Brown', role: 'Developer' },
    { id: '11', name: 'Eve Davis', role: 'Designer' },
  ];

  return (
    <FlatListComponent
      data={USERS}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={{
          padding: 10,
          backgroundColor: "#ffffff",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          borderRadius: 10,
          width: 200,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto',
        }}>
          <Text>{item.name}</Text>
        </View>
      )}
      contentContainerStyle={{
        padding: 16,
        gap: 16,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
  )
}

export default FlatList

const styles = StyleSheet.create({})
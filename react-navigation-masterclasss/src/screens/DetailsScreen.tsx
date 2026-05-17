import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const DetailsScreen = ({ route }: any) => {
  const navigation = useNavigation<any>();
  const { username = 'default' } = route.params || {}
  return (
    <View>
      <Text>{username}</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate("Profile")} />
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({}) 
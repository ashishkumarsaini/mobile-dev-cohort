import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button title="Go Back" onPress={() => navigation.popTo('Home')} />
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})
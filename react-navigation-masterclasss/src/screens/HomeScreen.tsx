import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@react-navigation/elements'
import { Link, useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigator = useNavigation<any>();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button screen="Details" onPressIn={() => navigator.navigate('Details', { username: 'ashish' })}>Go to Details</Button>
      <Link screen='Details' params={{}}>GO to Details using Link</Link>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})

/**
 * 1. navigate('') - go to screen by name
 * 2. goBack() - go to previous screen
 * 3. push('') - always adds a new instance
 * 4. replace('') - replace current screen
 * 5. popToTop() - go back to first screen
 * 6. popTo('') - 
 */
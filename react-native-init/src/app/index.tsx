import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LoginForm from './login-form';

const index = () => {
  return (
    <SafeAreaView>
      <LoginForm />
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})
import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import LoginForm from './login-form';

const index = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar
          animated={true}
          barStyle={'dark-content'}
        />
        <LoginForm />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default index

const styles = StyleSheet.create({})
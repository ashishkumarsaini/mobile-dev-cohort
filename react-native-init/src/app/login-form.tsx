import { FontAwesome } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const LoginForm = () => {
  const [formValue, setFormValues] = useState({
    email: {
      focused: false,
      value: ''
    },
    password: {
      focused: false,
      value: ''
    }
  });

  const handleValueUpdate = (fieldName: 'email' | 'password', value: string) => {
    setFormValues((prevState) => ({
      ...prevState,
      [fieldName]: {
        ...prevState[fieldName],
        value,
      }
    }))
  }

  const handleFocusUpdate = (fieldName: 'email' | 'password', focused: boolean) => {
    setFormValues((prevState) => ({
      ...prevState,
      [fieldName]: {
        ...prevState[fieldName],
        focused: focused,
      }
    }))
  }

  return (
    <View style={{ ...styles.container, height: '100%', gap: 20 }}>
      <View style={{ ...styles.container, gap: 10 }}>
        <AntDesign name="truck" size={50} color="#92c14cff" />
        <Text style={styles.heading}>Sign In</Text>
        <Text>Let's experience the joy of telecare AI.</Text>
      </View>
      <View style={{ ...styles.container, gap: 15, padding: 15 }}>
        <View style={styles.inputContainer}>
          <Text style={{ fontWeight: 700 }}>Email Address</Text>
          <TextInput
            placeholderTextColor="gray"
            style={formValue.email.focused ? { ...styles.input, boxShadow: '0 0 5px 3px #92c14cff', } : styles.input}
            placeholder="Enter your email.."
            value={formValue.email.value}
            onChangeText={(value) => handleValueUpdate('email', value)}
            onFocus={() => handleFocusUpdate('email', true)}
            onBlur={() => handleFocusUpdate('email', false)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ fontWeight: 700 }}>Password</Text>
          <TextInput
            placeholderTextColor="gray"
            style={formValue.password.focused ? { ...styles.input, boxShadow: '0 0 5px 3px #92c14cff', } : styles.input}
            placeholder="Enter your password"
            secureTextEntry
            value={formValue.password.value}
            onChangeText={(value) => handleValueUpdate('password', value)}
            onFocus={() => handleFocusUpdate('password', true)}
            onBlur={() => handleFocusUpdate('password', false)}
          />
        </View>
        <Pressable style={styles.submitButton}>
          <Text style={styles.submitButtonLable}>Sign In</Text>
        </Pressable>
      </View>
      <View style={{ ...styles.container, flexDirection: 'row', gap: 20 }}>
        <Pressable style={styles.iconContainer}>
          <FontAwesome name="facebook" size={24} color="black" />
        </Pressable>
        <Pressable style={styles.iconContainer}>
          <FontAwesome name="google" size={24} color="black" />
        </Pressable>
        <Pressable style={styles.iconContainer}>
          <FontAwesome name="instagram" size={24} color="black" />
        </Pressable>
      </View>
      <View style={{ ...styles.container, gap: 10 }}>
        <View style={{ ...styles.container, flexDirection: 'row', gap: 5 }}>
          <Text>Don't have an account?</Text>
          <Text style={{ color: '#92c14cff' }}>Sign Up.</Text>
        </View>
        <Text style={{ color: '#92c14cff' }}>Forgot your password?</Text>
      </View>
    </View>
  )
}

export default LoginForm

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: 20
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
  },
  inputContainer: {
    display: 'flex',
    gap: 5,
    justifyContent: 'center',
    width: '100%'
  },
  input: {
    padding: 10,
    paddingInline: 20,
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 20,
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  submitButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#92c14cff',
    borderRadius: 20,
    marginTop: 10
  },
  submitButtonLable: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#cccdce',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
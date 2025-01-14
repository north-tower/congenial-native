import { StyleSheet, Text, View,TextInput, ActivityIndicator, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { FIREBASE_AUTH } from '../FirebaseConfig'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { Button } from 'react-native'



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false)
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth,email, password);
      console.log(response)
      alert('Login Successful')
    } catch (error) {
      console.log(error);
      
    } finally {
      setLoading(false)
    }
  }

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }



  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
      <TextInput value={email} style={styles.input} placeholder='Email'
      onChangeText={(text) => setEmail(text)}></TextInput>
      <TextInput secureTextEntry={true} value={password} style={styles.input} placeholder='Password'
           onChangeText={(text) => setPassword(text)}></TextInput>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />

          ) : (
            <>
              <Button title="Login" onPress={signIn} />
              <Button title="Create account" onPress={signUp} />
            </>
          )}
      </KeyboardAvoidingView>
     
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
container: {
  marginHorizontal: 20,
  flex: 1,
  justifyContent: 'center'
},
input: {
  marginVertical: 4,
  height: 50, 
  borderWidth: 1,
  borderRadius: 4,
  padding: 10,
  backgroundColor: '#fff'
}
})

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/LoginScreen'
import List from './screens/List';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
;
import { FIREBASE_AUTH } from './FirebaseConfig';
import HomeScreen from './screens/HomeScreen';
import ResturantScreen from './screens/ResturantScreen';
import { Provider } from 'react-redux';
import { store } from './store';
import BasketScreen from './screens/BasketScreen'
import PreparingOrderScreen from './screens/PreparingOrderScreen'
import MessageFormScreen from './screens/MessageFormScreen'
import ContactScreen from './screens/ContactScreen'
import InfoScreen from './screens/InfoScreen'

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name="Home" component={HomeScreen} options={{
                headerShown: false,
              }} />
      <InsideStack.Screen name="Resturant" component={ResturantScreen} options={{
                headerShown: false,
              }} />
      <InsideStack.Screen name="Basket" component={BasketScreen} options={{
                headerShown: false,
              }} />
      <InsideStack.Screen name="PreparingOrderScreen" component={PreparingOrderScreen} options={{
                headerShown: false,
              }} />
      <InsideStack.Screen name="message" component={MessageFormScreen} options={{
                headerShown: false,
              }} />

<InsideStack.Screen name="Contact" component={ContactScreen} options={{
                headerShown: false,
              }} />
             <Stack.Screen name='Info' component={InfoScreen} options={{
                headerShown: false,
              }}  />

    </InsideStack.Navigator>
  )
}


export default function App() {
  const [user,setUser] = useState(null)
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user);
      setUser(user);
    });
  }, []);
  return (
    <NavigationContainer>
       <Provider store={store}> 
      <Stack.Navigator initialRouteName='Login'>
        {user ? (
        <Stack.Screen name="Inside" component={InsideLayout} options={{
          headerShown: false,
        }} />
        ):(
        <Stack.Screen name="Login" component={Login} options={{
          headerShown: false,
        }} />


        )}
      </Stack.Navigator>
      </Provider> 
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

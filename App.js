/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Bootup from './components/Bootup.js';
import SignUpScreen from './components/SignUpScreen.js';
import SignUpProfile from './components/SignUpProfile.js';
import Footer from './components/Footer.js';
import Profile from './components/Profile.js';
import HomeScreen from './components/HomeScreen.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        contentStyle:{
          backgroundColor:'#FFE4B0'
        }
      }}>
        <Stack.Screen
          name="Bootup"
          component={Bootup}
          options={{
            headerShown:false,
          }}
        />
        <Stack.Screen
          name="SignUpProfile"
          component={SignUpProfile}
          options={{
            headerShown:false,
          }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{
            headerShown:false,
          }}
        />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerShown:false,
            }}
        />
        <Stack.Screen
          name="Footer"
          component={Footer}
          options={{
            headerShown:false,
          }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown:false,
        }}
    />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;

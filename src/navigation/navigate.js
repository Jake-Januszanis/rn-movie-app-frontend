import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home/home-screen'
import Genres from '../screens/genres/genres-screen'
import Providers from '../screens/providers/providers-screen'
import MovieDisplay from '../screens/movies/movieDisplay-screen'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen
            name='Home'
            component={Home}
            options={{
              headerShown: false
            }}
            />
          <Stack.Screen
            name='Genres' 
            component={Genres}
          />
          <Stack.Screen
            name='Providers'
            component={Providers}
          /> 
          <Stack.Screen
            name='MovieDisplay'
            component={MovieDisplay}
            options={{
              headerShown: false
            }}
          /> 
        </Stack.Navigator>
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
  
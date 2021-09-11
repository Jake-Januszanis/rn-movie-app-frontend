import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home/HomeScreen'
import Genres from '../screens/genres/GenresScreen'
import Providers from '../screens/providers/ProvidersScreen'
import MovieDisplay from '../screens/movies/MovieScreen'



const Stack = createNativeStackNavigator();


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
  
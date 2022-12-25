import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Home from '../screens/Home';
import Details from '../screens/Details/Details';
import { colors, shadows } from '../config/theme';

const HomeStackNavigator = createStackNavigator();
let activeColor = colors;
let activeShadow = shadows;

const HomeNavigatorScreen = () => {
  return (
    <HomeStackNavigator.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: activeColor.accent,
          fontSize: 20,
          fontWeight: 'bold',
          paddingLeft: 22,
        },
        headerStyle: {
          backgroundColor: activeShadow.shadowLight,
        },
        headerTitleAlign: 'left',
      }}
    >
      <HomeStackNavigator.Screen name="Home" component={Home} />
      <HomeStackNavigator.Screen name="Details" component={Details} />
    </HomeStackNavigator.Navigator>
  );
};

export default HomeNavigatorScreen;

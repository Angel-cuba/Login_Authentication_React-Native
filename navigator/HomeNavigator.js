import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';


// Screens
import Home from '../screens/Home';
import Details from '../screens/Details/Details';
import { defaultTheme, shadows } from '../config/theme';
import { View } from 'react-native';

const HomeStackNavigator = createStackNavigator();
const themeApp = { mode: 'darkTheme' };
let activeColors = defaultTheme[themeApp.mode];

const HomeNavigatorScreen = () => {
  return (
    <HomeStackNavigator.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: activeColors.black,
          fontSize: 22,
          fontWeight: 'bold',
          paddingLeft: 22,
        },
        headerStyle: {
          backgroundColor: activeColors.secondary,
        },
        headerTitleAlign: 'left',
      }}
    >
      <HomeStackNavigator.Screen name="Home" component={Home} />
      <HomeStackNavigator.Screen name="Details" component={Details} options={{
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{ paddingLeft: 20 }}>
            <MaterialCommunityIcons name="keyboard-backspace" size={24} color={activeColors.black} />
          </View>
        ),

      }}/>
    </HomeStackNavigator.Navigator>
  );
};

export default HomeNavigatorScreen;

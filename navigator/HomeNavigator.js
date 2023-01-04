import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Screens
import Home from '../screens/Home';
import Details from '../screens/Details/Details';
import { defaultTheme } from '../config/theme';
import { View } from 'react-native';
// Context
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';


const HomeStackNavigator = createStackNavigator();

const HomeNavigatorScreen = () => {
  const { themeApp } = useContext(ThemeContext);
  let activeColors = defaultTheme[themeApp.mode];

  const { t } = useTranslation();
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
        
      <HomeStackNavigator.Screen name={t('common:screenHeader')} component={Home} />
      <HomeStackNavigator.Screen
        name= {t('common:screenDetails')}
        component={Details}
        options={{
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <View style={{ paddingLeft: 20 }}>
              <MaterialCommunityIcons
                name="keyboard-backspace"
                size={24}
                color={activeColors.black}
              />
            </View>
          ),
        }}
      />
    </HomeStackNavigator.Navigator>
  );
};

export default HomeNavigatorScreen;

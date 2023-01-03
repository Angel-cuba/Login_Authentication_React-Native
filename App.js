import { useEffect, useState } from 'react';
import { Appearance } from 'react-native';
import { getData, storeData } from './config/asyncStorage';
import { ThemeContext } from './context/ThemeContext';
import RootNavigator from './navigator/RootNavigator';
import * as SplashScreen from 'expo-splash-screen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [themeApp, setThemeApp] = useState({ mode: 'light' });
  const systemColorSchema = Appearance.getColorScheme();
  const updateTheme = (newTheme) => {
    let mode;
    if (!newTheme) {
      mode = themeApp.mode === 'dark' ? 'light' : 'dark';
      newTheme = { mode, system: false };
    } else {
      if (newTheme.system) {
        mode = systemColorSchema === 'dark' ? 'dark' : 'light';
        newTheme = { ...newTheme, mode };
      } else {
        newTheme = { ...newTheme, system: false };
      }
    }
    setThemeApp(newTheme);
    storeData('theme', newTheme);
  };

  // Listen to system color scheme changes
  if (themeApp.system) {
    Appearance.addChangeListener(({ colorScheme }) => {
      updateTheme({ system: true, mode: colorScheme });
    });
  }

  const fetchStoredTheme = async () => {
    try {
      const storedTheme = await getData('theme');
      if (storedTheme) {
        updateTheme(storedTheme);
      }
    } catch ({ message }) {
      alert(message);
    } finally {
      // Hide the splash screen after fetching resources
      await setTimeout(() => SplashScreen.hideAsync(), 1000);
    }
  };
  useEffect(() => {
    fetchStoredTheme();
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        themeApp,
        updateTheme,
      }}
    >
      <RootNavigator />
    </ThemeContext.Provider>
  );
}

import { useEffect, useState, Suspense } from 'react';
import { Appearance, AsyncStorage } from '@react-native-async-storage/async-storage';
import { getData, storeData } from './config/asyncStorage';
import { ThemeContext } from './context/ThemeContext';
import RootNavigator from './navigator/RootNavigator';
import * as SplashScreen from 'expo-splash-screen';
// Localization
import * as Localization from 'expo-localization';

//Importin language config
import './translations/config';
import Loader from './Loader';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <AppContent />
    </Suspense>
  );
}

const AppContent = () => {
  AsyncStorage?.setItem('user-language', 'en');
  const localValue = AsyncStorage?.getItem('user-language');
  if (localValue === undefined || localValue === null) {
    AsyncStorage?.setItem('user-language', Localization.locale.split('-')[0]);
  }

  const [themeApp, setThemeApp] = useState({ mode: 'light' });
  const systemColorSchema = Appearance?.getColorScheme();

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
    Appearance?.addChangeListener(({ colorScheme }) => {
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
};

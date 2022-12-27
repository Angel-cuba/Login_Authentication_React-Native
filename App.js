import { useState } from 'react';
import { ThemeContext } from './context/ThemeContext';
import RootNavigator from './navigator/RootNavigator';

export default function App() {
  const [themeApp, setThemeApp] = useState({ mode: 'dark' });

  const updateTheme = (newTheme) => {
    let mode;
    if(!newTheme) {
      mode = themeApp.mode === 'dark' ? 'light' : 'dark';
      newTheme = { mode };
    }
    setThemeApp(newTheme);
  };

  return (
    <ThemeContext.Provider value={{
      themeApp,
      updateTheme
    }}> 
      <RootNavigator />
    </ThemeContext.Provider>
  );
}

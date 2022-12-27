import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import { defaultTheme } from '../../config/theme';

// Context
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const MainContainer = ({ children, style, ...props }) => {
  const { themeApp } = useContext(ThemeContext);
  let activeColors = defaultTheme[themeApp.mode];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: activeColors.black}]}>
      <ScrollView
        style={[
          {
            backgroundColor: activeColors.tertiary,
          },
          style,
        ]}
        showsVerticalScrollIndicator={false}
        {...props}
      >
        {children}
        <StatusBar
          barStyle={themeApp.mode === 'dark' ? 'light-content' : 'dark-content'}
          animated={true}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainContainer;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

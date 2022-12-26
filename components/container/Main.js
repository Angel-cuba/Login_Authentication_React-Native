import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import { defaultTheme } from '../../config/theme';

const MainContainer = ({ children, style, ...props }) => {
  const themeApp = { mode: 'dark' };
  let activeColors = defaultTheme[themeApp.mode];
  return (
    <SafeAreaView style={styles.container}>
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
        <StatusBar style={themeApp.mode === 'dark' ? 'light' : 'dark'} />
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

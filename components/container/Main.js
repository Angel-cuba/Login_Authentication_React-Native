import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../../config/theme';

const MainContainer = ({ children, styles, ...props }) => {
  let activeColors = colors;

  return (
    <SafeAreaView style={styles}>
      <ScrollView
        style={[
          {
            backgroundColor: activeColors.accent,
          },
          styles,
        ]}
        showsVerticalScrollIndicator={false}
        {...props}
      >
        {children}
        <StatusBar style="auto" />
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

import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../config/theme';

const MainContainer = ({ children, style, ...props }) => {
  let activeColors = colors;

  return (
    <SafeAreaView style={styles}>
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

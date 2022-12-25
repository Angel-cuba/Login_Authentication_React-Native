import { StyleSheet, View } from 'react-native';
import React from 'react';
import { colors, defaultTheme, shadows } from '../../config/theme';
import StyledText from '../Texts/StyledText';

const SettingsItem = ({ children, label }) => {
  const themeApp = { mode: 'darkTheme' };
  let activeColors = defaultTheme[themeApp.mode];
  let shadowColor = shadows;

  return (
    <View
      style={[
        {
          backgroundColor: activeColors.secondary,
        },
        styles.settingsItem,
      ]}
    >
      <StyledText style={[{ color: activeColors.black }, styles.label]}>{label}</StyledText>
      {children}
    </View>
  );
};

export default SettingsItem;

const styles = StyleSheet.create({
  settingsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    height: 60,
    paddingHorizontal: 15,
    marginHorizontal: 15,
    marginBottom: 2,
    borderRadius: 10,
  },
  label: {
    fontStyle: 'italic',
  },
});

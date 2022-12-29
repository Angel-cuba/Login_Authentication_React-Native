import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useContext } from 'react';
import { defaultTheme, shadows } from '../../config/theme';
import StyledText from '../Texts/StyledText';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ThemeContext } from '../../context/ThemeContext';

const SettingButton = ({ label, icon, isEnabled, ...props }) => {
  const { themeApp } = useContext(ThemeContext);
  let activeColors = defaultTheme[themeApp.mode];

  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: activeColors.primary,
        },
        styles.settingsItem,
      ]}
      {...props}
    >
      <View style={styles.labelGroup}>
        <MaterialCommunityIcons
          name={icon}
          size={24}
          color={isEnabled ? activeColors.accent : activeColors.black}
          style={styles.icon}
        />
        <StyledText style={[{ color: activeColors.black }, styles.label]}>{label}</StyledText>
      </View>
      <MaterialCommunityIcons
        name={isEnabled ? 'checkbox-marked-circle' : 'checkbox-blank-circle-outline'}
        size={24}
        color={isEnabled ? activeColors.accent : activeColors.black}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

export default SettingButton;

const styles = StyleSheet.create({
  settingsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 15,
    marginHorizontal: 15,
    marginBottom: 2,
    borderRadius: 10,
  },
  label: {
    fontStyle: 'italic',
  },
  labelGroup: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 10,
  },
});

import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors, shadows } from '../../config/theme';
import StyledText from '../Texts/StyledText';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SettingButton = ({ label, icon, isEnabled, ...props }) => {
  let activeColors = colors;
  let shadowColor = shadows;

  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: activeColors.secondary,
        },
        styles.settingsItem,
      ]}
    >
      <View style={styles.labelGroup}>
        <MaterialCommunityIcons
          name={icon}
          size={24}
          color={isEnabled ? activeColors.accent : activeColors.tertiary}
          style={styles.icon}
        />
        <StyledText style={[{ color: shadowColor.shadowBlack }, styles.label]}>{label}</StyledText>
      </View>
      <MaterialCommunityIcons
        name={isEnabled ? 'checkbox-marked-circle' : 'checkbox-blank-circle-outline'}
        size={24}
        color={isEnabled ? activeColors.accent : activeColors.tertiary}
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

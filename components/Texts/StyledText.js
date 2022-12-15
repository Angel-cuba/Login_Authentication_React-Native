import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../../config/theme';

const StyledText = ({ children, styles, small, big, bold,  ...props }) => {
  let activeColors = colors;

  return (
    <Text
      style={[
        {
          color: activeColors.tint,
          fontSize: small ? 14 : big ? 24 : 16,
          fontWeight: bold || big ? 'bold' : 'normal',
        },
        styles,
      ]}
      showsVerticalScrollIndicator={false}
      {...props}
    >
      {children}
    </Text>
  );
};

export default StyledText;

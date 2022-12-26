import { Text } from 'react-native';
import React from 'react';
import { defaultTheme } from '../../config/theme';

const StyledText = ({ children, style, small, big, bold, ...props }) => {
  const themeApp = { mode: 'dark' };
  let activeColors = defaultTheme[themeApp.mode];

  return (
    <Text
      style={[
        {
          color: activeColors.black,
          fontSize: small ? 14 : big ? 24 : 16,
          fontWeight: bold || big ? 'bold' : 'normal',
          paddingBottom: 10,
        },
        style,
      ]}
      showsVerticalScrollIndicator={false}
      {...props}
    >
      {children}
    </Text>
  );
};

export default StyledText;

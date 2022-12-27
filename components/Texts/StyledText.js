import { Text } from 'react-native';
import React from 'react';
import { defaultTheme } from '../../config/theme';
// Context
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';


const StyledText = ({ children, style, small, big, bold, ...props }) => {
  const { themeApp } = useContext(ThemeContext);
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

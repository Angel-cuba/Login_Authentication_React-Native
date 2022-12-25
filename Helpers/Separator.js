import { View, StyleSheet } from 'react-native'
import React from 'react'
import { defaultTheme } from '../config/theme';

const themeApp = { mode: 'darkTheme' };
let activeColors = defaultTheme[themeApp.mode];

export default function Separator() {
  return (
    <View style={styles.container}>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    height: 1,
    marginVertical: 20,
    backgroundColor: activeColors.shadowBlack,
    marginHorizontal: 8,
  },
})
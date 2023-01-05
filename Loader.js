import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Loader = () => {
  return (
    <View style={styles.container}>
      <Text>This is a loading...</Text>
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
})
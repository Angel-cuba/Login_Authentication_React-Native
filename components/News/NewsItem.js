import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const NewsItem = ({ item }) => {
  return (
    <TouchableOpacity style={[{
      backgroundColor: 'red',
    }, styles.container]}>
      <Text>New item</Text>
    </TouchableOpacity>
  );
};

export default NewsItem;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors } from '../../config/theme';
import StyledText from '../Texts/StyledText';

const ExploreItem = ({ image, title, avatar, author, date, ...props }) => {
  let activeColors = colors;
  return (
    <TouchableOpacity style={[styles.container]} {...props}>
      <Image source={{ uri: image }} style={styles.image} />
      <StyledText style={[styles.title]} bold>
        {' '}
        {title}
      </StyledText>
    </TouchableOpacity>
  );
};
export default ExploreItem;

export const styles = StyleSheet.create({
  container: {
    height: 120,
    width: 120,
    borderRadius: 60,
    marginRight: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  title: {
    fontSize: 18,
  },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 25,
    flex: 3,
  },
});

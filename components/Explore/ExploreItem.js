import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors } from '../../config/theme';
import StyledText from '../Texts/StyledText';

const ExploreItem = ({ item, ...props }) => {
  let activeColors = colors;
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: activeColors.white,
        },
        styles.container,
      ]}
      {...props}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.bottomSection}>
        <StyledText numberOfLines={3} style={[{ color: activeColors.accent }, styles.title]} bold>
          {' '}
          {item.title}
        </StyledText>
        <View style={styles.authorRow}>
          <View style={styles.author}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <StyledText numberOfLines={2} bold>{item.author}</StyledText>
          </View>
          <StyledText style={[{ color: activeColors.accent }, styles.date]} small>
            {item.date}
          </StyledText>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ExploreItem;

export const styles = StyleSheet.create({
  container: {
    height: 370,
    width: 270,
    borderRadius: 20,
    marginRight: 20,
  },
  image: {
    width: 270,
    height: 190,
    borderRadius: 25,
  },
  title: {
    fontSize: 18,
  },
  bottomSection: {
    padding: 25,
    flex: 1,
    justifyContent: 'space-between',
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
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5,
  },
  date: {
    textAlign: 'right',
    flex: 2,
  },
});

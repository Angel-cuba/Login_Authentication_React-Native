import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { defaultTheme, shadows } from '../../config/theme';
import StyledText from '../Texts/StyledText';
import { useNavigation } from '@react-navigation/native';

const NewsItem = ({ image, title, avatar, author, date, content, ...props }) => {
  let shadowsColors = shadows;
  const themeApp = { mode: 'dark' };
  let activeColors = defaultTheme[themeApp.mode];

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Details', {
          image,
          title,
          avatar,
          author,
          date,
          content,
        });
      }}
      style={[
        {
          backgroundColor: shadowsColors.shadowLight,
        },
        styles.container,
      ]}
      {...props}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <View style={[{ backgroundColor: shadowsColors.shadowDark }, styles.bottomSection]}>
        <StyledText numberOfLines={3} style={[{ color: activeColors.accent }, styles.title]} bold>
          {' '}
          {title}
        </StyledText>
        <View style={styles.authorRow}>
          <View style={styles.author}>
            <Image source={{ uri: avatar }} style={styles.avatar} />
            <StyledText numberOfLines={2} bold>
              {author}
            </StyledText>
          </View>
          <StyledText style={[{ color: activeColors.accent }, styles.date]} small>
            {date}
          </StyledText>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default NewsItem;

export const styles = StyleSheet.create({
  container: {
    height: 360,
    width: 270,
    borderRadius: 20,
    marginRight: 15,
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
    padding: 20,
    flex: 1,
    justifyContent: 'space-between',
    borderRadius: 10,
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

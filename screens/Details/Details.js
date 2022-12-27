import { useContext } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import MainContainer from '../../components/container/Main';
import StyledText from '../../components/Texts/StyledText';
import { defaultTheme } from '../../config/theme';
import { ThemeContext } from '../../context/ThemeContext';
import Separator from '../../Helpers/Separator';

export default function Details({ route }) {
  const { themeApp } = useContext(ThemeContext);
  let activeColors = defaultTheme[themeApp.mode];

  const { image, title, avatar, author, date, content } = route?.params;
  return (
    <MainContainer style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={[{ backgroundColor: activeColors.primary }, styles.bottomSection]}>
        <StyledText numberOfLines={3} style={[{ color: activeColors.black }, styles.title]} bold>
          {' '}
          {title}
        </StyledText>
        <Separator />
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
        <Separator />
        <StyledText style={styles.content}>{content}</StyledText>
      </View>
    </MainContainer>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 18,
  },
  bottomSection: {
    padding: 20,
    top: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  authorRow: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 25,
    flex: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 5,
  },
  date: {
    textAlign: 'right',
    flex: 2,
    textAlign: 'center',
  },
  content: {
    marginTop: 20,
    fontSize: 16,
    height: '100%',
  },
});

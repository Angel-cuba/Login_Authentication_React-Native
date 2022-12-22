import { StyleSheet, Image, View } from 'react-native';
import MainContainer from '../../components/container/Main';
import StyledText from '../../components/Texts/StyledText';
import { newsData } from '../../config/data';
import { colors } from '../../config/theme';

let activeColors = colors;
export default function Details() {
  return (
    <MainContainer>
      <Image source={{ uri: newsData[0].image }} style={styles.image} />
      <View style={[{ backgroundColor: activeColors.primary }, styles.bottomSection]}>
        <StyledText numberOfLines={3} style={[{ color: activeColors.accent }, styles.title]} bold>
          {' '}
          {newsData[0].title}
        </StyledText>
        <View style={styles.authorRow}>
          <View style={styles.author}>
            <Image source={{ uri: newsData[0].avatar }} style={styles.avatar} />
            <StyledText numberOfLines={2} bold>
              {newsData[0].author}
            </StyledText>
          </View>
          <StyledText style={[{ color: activeColors.accent }, styles.date]} small>
            {newsData[0].date}
          </StyledText>
        </View>
        <StyledText style={ styles.content}>
            {newsData[0].content}
          </StyledText>
      </View>
    </MainContainer>
  );
}

export const styles = StyleSheet.create({
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
  }
});

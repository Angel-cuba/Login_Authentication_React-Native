import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainContainer from '../components/container/Main';
import ExploreSection from '../components/Explore/ExploreSection';
import NewsSection from '../components/News/News';
import StyledText from '../components/Texts/StyledText';

export default function Home() {
  return (
    <MainContainer>
      <StyledText style={styles.sectionTitle} big>
        Trending news
      </StyledText>
      <NewsSection/>
      <StyledText style={styles.sectionTitle} big>
        Explore
      </StyledText>
      <ExploreSection/>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    marginTop: 25,
    marginLeft: 25,
  },
});

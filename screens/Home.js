import { StyleSheet } from 'react-native';
import MainContainer from '../components/container/Main';
import ExploreSection from '../components/Explore/ExploreSection';
import NewsSection from '../components/News/News';
import StyledText from '../components/Texts/StyledText';
import { exploreData, newsData } from '../config/data';
import { defaultTheme } from '../config/theme';


const themeApp = { mode: 'dark' };
let activeColors = defaultTheme[themeApp.mode];
export default function Home() {
  return (
    <MainContainer style={styles.container}>
      <StyledText style={styles.sectionTitle} big>
        Trending news
      </StyledText>
      <NewsSection data={newsData} />
      <StyledText style={styles.sectionTitle} big>
        Explore
      </StyledText>
      <ExploreSection data={exploreData} />
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: activeColors.white
  },
  sectionTitle: {
    marginTop: 25,
    marginLeft: 35,
  },
});

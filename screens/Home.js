import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import MainContainer from '../components/container/Main';
import ExploreSection from '../components/Explore/ExploreSection';
import NewsSection from '../components/News/News';
import StyledText from '../components/Texts/StyledText';
import { exploreData, newsData } from '../config/data';
import { defaultTheme } from '../config/theme';
import { ThemeContext } from '../context/ThemeContext';

export default function Home() {
  const { themeApp } = useContext(ThemeContext);
  let activeColors = defaultTheme[themeApp.mode];
  return (
    <MainContainer style={{backgroundColor: activeColors.white}}>
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
  sectionTitle: {
    marginTop: 25,
    marginLeft: 35,
  },
});

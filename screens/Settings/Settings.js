import { useState } from 'react';
import { StyleSheet, Switch, View } from 'react-native';
import MainContainer from '../../components/container/Main';
import SettingButton from '../../components/Settings/SettingButton';
import SettingsItem from '../../components/Settings/SettingsItem';
import StyledText from '../../components/Texts/StyledText';
import { defaultTheme } from '../../config/theme';
// Context
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export default function Settings() {
  const { themeApp, updateTheme } = useContext(ThemeContext);
  let activeColors = defaultTheme[themeApp.mode];

  const [isEnabled, setIsEnabled] = useState(themeApp.mode);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    updateTheme();
  };

  return (
    <MainContainer
      style={[
        styles.container,
        {
          backgroundColor: activeColors.white,
        },
      ]}
    >
      {/* User section */}
      <StyledText numberOfLines={3} style={[{ color: activeColors.black }, styles.title]} bold>
        User
      </StyledText>
      <View style={[styles.section]}>
        <SettingsItem label="Name">
          <StyledText>Angel Luis</StyledText>
        </SettingsItem>
        <SettingsItem label="Joined On">
          <StyledText>22/12/22</StyledText>
        </SettingsItem>
      </View>

      {/* Theme section */}
      <StyledText numberOfLines={3} style={[{ color: activeColors.black }, styles.title]} bold>
        Theme switcher
      </StyledText>
      <View style={[styles.section]}>
        <SettingsItem label={isEnabled ? 'Dark mode' : 'Light mode'}>
          <Switch
            value={isEnabled}
            onValueChange={toggleSwitch}
            thumbColor={isEnabled ? activeColors.accent : activeColors.shadowBlack}
            ios_backgroundColor={activeColors.shadowBlack}
            trackColor={{ false: activeColors.shadowBlack, true: activeColors.white }}
          />
        </SettingsItem>
      </View>

      {/*  Theme section */}
      <StyledText numberOfLines={3} style={[{ color: activeColors.black }, styles.title]} bold>
        Theme settings
      </StyledText>
      <View style={[styles.section]}>
        <SettingButton label="Light" icon="lightbulb-on" isEnabled={!isEnabled} onPress={toggleSwitch}/>
        <SettingButton label="Dark" icon="weather-night" isEnabled={isEnabled} onPress={toggleSwitch}/>
        <SettingButton label="System" icon="theme-light-dark" isEnabled={isEnabled} />
      </View>
    </MainContainer>
  );
}

export const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  section: {
    borderRadius: 30,
    overflow: 'hidden',
    marginTop: 5,
    marginBottom: 40,
  },
  title: {
    paddingLeft: 21,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

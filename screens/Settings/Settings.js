import { useState } from 'react';
import { StyleSheet, Switch, View } from 'react-native';
import MainContainer from '../../components/container/Main';
import SettingButton from '../../components/Settings/SettingButton';
import SettingsItem from '../../components/Settings/SettingsItem';
import StyledText from '../../components/Texts/StyledText';
import { colors } from '../../config/theme';

let activeColors = colors;
export default function Settings() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <MainContainer style={styles.container}>
      {/* User section */}
      <StyledText numberOfLines={3} style={[{ color: activeColors.accent }, styles.title]} bold>
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
      <StyledText numberOfLines={3} style={[{ color: activeColors.accent }, styles.title]} bold>
        Theme switcher
      </StyledText>
      <View style={[styles.section]}>
        <SettingsItem label={isEnabled ? "Dark mode" : "Light mode"}>
          <Switch value={isEnabled}
          onValueChange={toggleSwitch} 
          thumbColor={isEnabled ? activeColors.accent : activeColors.tertiary}
          ios_backgroundColor={activeColors.tertiary}
          trackColor={{false: activeColors.tertiary, true: activeColors.secondary}}
          />
        </SettingsItem>
      </View>

      {/* About section */}
      <StyledText numberOfLines={3} style={[{ color: activeColors.accent }, styles.title]} bold>
        User
      </StyledText>
      <View style={[styles.section]}>
          <SettingButton label="Light" icon="lightbulb-on" isEnabled={!isEnabled}/>
          <SettingButton label="Dark" icon="weather-night" isEnabled={isEnabled}/>
          <SettingButton label="System" icon="theme-light-dark" isEnabled={isEnabled}/>

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
    marginTop: 20,
    marginBottom: 20,
  }
});

import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  // { code: 'en', label: 'English' },
  { code: 'fi', label: 'Suomea' },
  { code: 'es', label: 'Español' },
];

const Selector = () => {
  const { i18n } = useTranslation();
  const selectedLanguageCode = i18n.language;

  const [defaultLanguage, setDefaultLanguage] = React.useState(i18n.language);

  const setLanguage = (code) => {
    setDefaultLanguage(code);
    return i18n.changeLanguage(code);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>Select a Language</Text>
        <MaterialCommunityIcons color="#444" size={28} name="checkbox-marked-circle" />
      </View>
      {LANGUAGES.map((language) => {
        const selectedLanguage = language.code === selectedLanguageCode;
        if (selectedLanguage === undefined) {
          selectedLanguage = defaultLanguage === language.code;          
        }

        return (
          <Pressable
            key={language.code}
            style={styles.buttonContainer}
            disabled={selectedLanguage}
            onPress={() => setLanguage(language.code)}
          >
            <Text style={[selectedLanguage ? styles.selectedText : styles.text]}>
              {language.label} - {language.code}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#444',
    fontSize: 28,
    fontWeight: '600',
  },
  buttonContainer: {
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    color: '#000',
    paddingVertical: 4,
  },
  selectedText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'tomato',
    paddingVertical: 4,
  },
});

export default Selector;

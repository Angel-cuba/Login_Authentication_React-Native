import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigator from './navigator/RootNavigator';
import Details from './screens/Details/Details';
import Home from './screens/Home';
import Settings from './screens/Settings/Settings';

export default function App() {
  return (
    <RootNavigator/>
  );
}


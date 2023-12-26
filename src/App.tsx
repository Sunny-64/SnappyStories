/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen'
import type {PropsWithChildren} from 'react';
import {
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import RootNavigation from './navigations';

function App(): React.JSX.Element {

  useEffect(() => {
    setTimeout(() => {
        SplashScreen.hide();
    }, 500)
  })
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
      <RootNavigation />
  );
}

export default App;

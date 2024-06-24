import React from 'react';
import {Platform} from 'react-native';
import WebNavigation from './src/navigation/webNavigation';
import 'react-native-vector-icons/Fonts/MaterialIcons.ttf';
import {ThemeProvider, createTheme} from '@rneui/themed';
import 'react-native-vector-icons/Fonts/FontAwesome.ttf';
import MobileNavigation from './src/navigation/mobileNavigation';

const theme = createTheme({
  lightColors: {
    primary: '#e7e7e8',
  },
  darkColors: {
    primary: '#000',
  },
  mode: 'light',
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {Platform.OS === 'web' ? <WebNavigation /> : <MobileNavigation />}
    </ThemeProvider>
  );
};

export default App;

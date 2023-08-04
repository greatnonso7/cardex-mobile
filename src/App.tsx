import { ThemeProvider } from '@emotion/react';
import Navigation from './navigation';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import theme from 'theme';
import FlashMessage from 'react-native-flash-message';
import { hp } from 'utils';
import { StyleSheet } from 'react-native';
// import { Provider } from 'react-redux';
// import { store } from 'redux/store';
// import { PersistGate } from 'redux-persist/lib/integration/react';
// import { getPersistor } from '@rematch/persist';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    // <Provider store={store}>
    // <PersistGate loading={null} persistor={getPersistor()}>
    <ThemeProvider theme={theme}>
      <FlashMessage
        position="top"
        duration={4500}
        titleStyle={styles.titleStyle}
      />
      <Navigation />
    </ThemeProvider>
    // </PersistGate>
    // </Provider>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    textAlign: 'center',
    color: theme.colors.WHITE,
    fontFamily: theme.font.LexendMedium,
    fontSize: hp(14),
  },
});

export default App;

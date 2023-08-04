import { ThemeProvider } from '@emotion/react';
import Navigation from './navigation';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import theme from 'theme';
import FlashMessage from 'react-native-flash-message';
import { hp } from 'utils';
import { StyleSheet } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryTime = 1000 * 60 * 60 * 24;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 1800 * 1000,
      cacheTime: queryTime,
    },
  },
});

if (__DEV__) {
  import('react-query-native-devtools').then(({ addPlugin }) => {
    addPlugin({ queryClient });
  });
}

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <FlashMessage
          position="top"
          duration={4500}
          titleStyle={styles.titleStyle}
        />
        <Navigation />
      </ThemeProvider>
    </QueryClientProvider>
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

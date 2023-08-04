import { StyleSheet } from 'react-native';
import theme from 'theme';

export const styles = StyleSheet.create({
  container: {
    minHeight: 78,
    backgroundColor: theme.colors.PRIMARY_100,
    paddingHorizontal: 38,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 21,
    marginBottom: 240,
    maxWidth: 260,
  },
  removeContainerPadding: {
    paddingHorizontal: 0,
  },
  loadingText: {
    fontFamily: theme.font.LexendMedium,
    color: theme.colors.WHITE,
    fontSize: 15,
  },
  loader: {
    marginRight: 18,
  },
  checkContainer: {
    marginRight: 9,
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  errorContainer: {
    paddingTop: 54,
    paddingBottom: 49,
    minWidth: 260,
  },
  errorIcon: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  headerText: {
    textAlign: 'center',
    marginTop: 9,
  },
  headingContainer: {
    paddingHorizontal: 21,
  },
  subHeaderText: {
    marginTop: 15,
    color: theme.colors.WHITE,
    opacity: 0.7,
    textAlign: 'center',
  },
  retryContainer: {
    marginTop: 49,
  },
  retryText: {
    textAlign: 'center',
    ...theme.typography.body,
    color: theme.colors.WHITE,
    textDecorationLine: 'underline',
  },
});

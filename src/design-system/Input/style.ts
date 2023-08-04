import { StyleSheet } from 'react-native';
import theme from 'theme';
import { hp, wp } from 'utils';

const styles = StyleSheet.create({
  baseContainer: {
    height: hp(46),
    backgroundColor: theme.colors.OFF_WHITE,
    borderColor: theme.colors.OFF_WHITE,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
  },
  textInput: {
    fontFamily: theme.font.LexendRegular,
    fontSize: 14,
    flex: 1,
    paddingLeft: 10,
    color: theme.colors.PRIMARY,
  },
  errorContainer: {
    borderBottomWidth: hp(3),
    borderBottomColor: theme.colors.ERROR_RED,
    backgroundColor: theme.colors.LIGHT_ERROR_RED,
  },
});

export default styles;

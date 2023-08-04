import { StyleSheet } from 'react-native';
import theme from 'theme';
import { hp, wp } from 'utils';

const styles = StyleSheet.create({
  baseContainer: {
    height: hp(65),
    backgroundColor: theme.colors.TEXT_INPUT_CONTAINER,
    borderColor: theme.colors.TEXT_INPUT_CONTAINER,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: hp(20),
  },
  textInput: {
    fontFamily: theme.font.LexendRegular,
    fontSize: 14,
    flex: 1,
    paddingLeft: 10,
    color: theme.colors.PRIMARY_100,
  },
  errorContainer: {
    borderBottomWidth: hp(3),
    borderBottomColor: theme.colors.ERROR_RED,
    backgroundColor: theme.colors.LIGHT_ERROR_RED,
  },
});

export default styles;

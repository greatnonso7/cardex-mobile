import { StackScreenProps } from '@react-navigation/stack';
import { Box, Text } from 'design-system';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import Config from 'react-native-config';
import { AppLogo, Screen } from 'shared';
import theme from 'theme';
import { AuthStackParamList } from 'types';
import { deviceWidth, wp } from 'utils';

type Props = StackScreenProps<AuthStackParamList, 'GetStarted'>;

const GetStarted = ({ navigation: { navigate } }: Props) => {
  console.log(Config);
  return (
    <Screen removeSafeaArea backgroundColor={theme.colors.OFF_PRIMARY}>
      <Box>
        <AppLogo />
        <Box mt={50} alignSelf={'center'}>
          <Image source={theme.images['get-started']} style={styles.getStartedImage} resizeMode="contain" />
        </Box>
      </Box>

      <Box position={'absolute'} flexDirection={'row'} alignItems={'center'} alignSelf={'center'} width={deviceWidth} bottom={0} justifyContent={'space-between'}>
        <Box
          height={104}
          as={TouchableOpacity}
          onPress={() => navigate('CreateAccount')}
          activeOpacity={0.8}
          justifyContent={'center'}
          borderTopRightRadius={10}
          alignItems={'center'}
          width={wp(180)}
          backgroundColor={theme.colors.PRIMARY_200}>
          <Text color={theme.colors.PRIMARY_100} variant="header">Create account</Text>
        </Box>
        <Box
          height={104}
          justifyContent={'center'}
          as={TouchableOpacity}
          onPress={() => navigate('Login')}
          activeOpacity={0.8}
          alignItems={'center'}
          borderTopLeftRadius={10}
          width={wp(180)}
          backgroundColor={theme.colors.PRIMARY}>
          <Text color={theme.colors.PRIMARY_100} variant="header">Log in</Text>
        </Box>
      </Box>
    </Screen>
  )
}

const styles = StyleSheet.create({
  getStartedImage: {

  }
})

export default GetStarted;

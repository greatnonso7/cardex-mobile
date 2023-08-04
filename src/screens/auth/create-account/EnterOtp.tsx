import { Box, Button, RegularInput, Text } from 'design-system';
import React, { useEffect, useState } from 'react';
import { Header, Icon, Screen } from 'shared';
import theme from 'theme';
import { capitalizeFirstLetter, hp, wp } from 'utils';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AuthStackParamList } from 'types';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

interface FormData {
  otp: string;
}

const schema = yup.object().shape({
  otp: yup.string().required(),
});

type Props = StackScreenProps<AuthStackParamList, 'EnterOTP'>;

const EnterOTP = ({ navigation: { navigate } }: Props) => {
  const { params } = useRoute<RouteProp<AuthStackParamList, 'EnterOTP'>>()
  const [seconds, setSeconds] = useState<number>(30);

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        clearInterval(myInterval);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const resend = async () => {
    setSeconds(30);
  }

  const {
    control,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      otp: '',
    },
    mode: 'all',
  });

  const { otp } = watch();
  return (
    <Screen removeSafeaArea backgroundColor={theme.colors.OFF_PRIMARY}>
      <Header hasBackButton />
      <Box mx={24} mt={20}>
        <Text variant="h2">Enter OTP Code</Text>
        <Text variant="body" pt={10} color={theme.colors.BLACK} width={300} opacity={0.6}>Enter the 6- digit code sent to your email address</Text>

        <Box mt={30}>
          <RegularInput
            keyboardType="numeric"
            returnKeyType="done"
            autoCapitalize="none"
            control={control}
            name="otp"
            baseContainerStyle={styles.baseContainerStyle}
            value={otp}
            maxLength={6}
            textInputContainerStyle={styles.textInputContainerStyle}
            placeholder="* * * * * *"
            errorText={capitalizeFirstLetter(errors.otp?.message as string)}
          />
        </Box>

        <Box as={TouchableOpacity} onPress={() => seconds === 0 ? resend() : null} backgroundColor={theme.colors.OFF_WHITE_100} mt={40} alignSelf={'flex-end'} py={10} borderRadius={10} border={1.5} borderColor={theme.colors.OFF_PRIMARY} px={16}>
          {seconds === 0 ? (
            <Text color={theme.colors.PRIMARY}>Resend</Text>
          ) : (
            <Text color={theme.colors.PRIMARY}>Resend ({seconds})</Text>
          )}
        </Box>
      </Box>

      <Button position={'absolute'} bottom={40} alignSelf={'center'} mt={20} width={wp(330)} title="Proceed" disabled={otp.length === 6 ? false : true} onPress={() => navigate('SetPassword', { email: params.email })} />
    </Screen>
  )
}

const styles = StyleSheet.create({
  baseContainerStyle: {
    width: wp(189)
  },
  textInputContainerStyle: {
    fontSize: hp(20),
    lineHeight: hp(22)
  }
})

export default EnterOTP;

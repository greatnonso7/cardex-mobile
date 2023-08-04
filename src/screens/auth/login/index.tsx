import { Box, Button, RegularInput, Text } from 'design-system';
import React, { useState } from 'react';
import { Header, LoadingModal, Screen } from 'shared';
import theme from 'theme';
import { capitalizeFirstLetter, wp } from 'utils';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AuthStackParamList } from 'types';
import { StackScreenProps } from '@react-navigation/stack';
import { useMutation } from '@tanstack/react-query';
import { setLogin } from 'services';

interface FormData {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

type Props = StackScreenProps<AuthStackParamList, 'Login'>;

const Login = ({ navigation: { navigate } }: Props) => {
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);

  const {
    control,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: __DEV__ ? 'greatichoku09@gmail.com' : '',
      password: __DEV__ ? 'Password@1' : '',
    },
    mode: 'all',
  });

  const { email, password } = watch();

  const {
    mutate: login,
    error,
    status,
  } = useMutation(setLogin, {
    onSuccess: async (data: any) => {
      console.log(data, 'data');

      setTimeout(() => {
        if (data?.statusCode === 200) {
          setLoading(false);
          navigate('CompleteLogin', { email })
        }
        setLoading(false);
      }, 500);
    },
  });

  const loginUser = async () => {
    const data = {
      email,
      password,
    };

    await login(data);
    setLoading(true);
  }

  return (
    <Screen removeSafeaArea backgroundColor={theme.colors.OFF_PRIMARY}>
      <LoadingModal
        status={status}
        successText="Login successful"
        visible={loading}
        onClose={() => setLoading(false)}
        error={error}
      />
      <Header hasBackButton />
      <Box mx={24} mt={20}>
        <Text variant="h2">Log in</Text>
        <Text variant="body" pt={10} color={theme.colors.BLACK} opacity={0.6}>Enter email address and password to log in</Text>

        <Box mt={30}>
          <RegularInput
            keyboardType="email-address"
            label="Email Address"
            autoCapitalize="none"
            control={control}
            name="email"
            value={email}
            placeholder="Enter email address"
            errorText={capitalizeFirstLetter(errors.email?.message as string)}
          />
          <RegularInput
            label="Password"
            autoCapitalize="none"
            control={control}
            name="password"
            password
            value={password}
            secureTextEntry={showPassword}
            onPressPasswordIcon={() => setShowPassword(!showPassword)}
            placeholder="Enter password"
            errorText={capitalizeFirstLetter(errors.password?.message as string)}
          />
        </Box>
      </Box>

      <Text position={'absolute'} alignSelf={'center'} width={wp(300)} bottom={150} textAlign={'center'} variant="headerMedium">Online Card Access</Text>
      <Button position={'absolute'} bottom={40} alignSelf={'center'} width={wp(330)} title="Proceed" disabled={email && password ? false : true} onPress={() => loginUser()} />
    </Screen>
  )
}

export default Login;

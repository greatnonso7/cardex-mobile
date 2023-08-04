import { Box, Button, RegularInput, Text } from 'design-system';
import React, { useState } from 'react';
import { Header, Screen } from 'shared';
import theme from 'theme';
import { capitalizeFirstLetter, wp } from 'utils';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AuthStackParamList } from 'types';
import { StackScreenProps } from '@react-navigation/stack';

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
  return (
    <Screen removeSafeaArea backgroundColor={theme.colors.OFF_PRIMARY}>
      <Header hasBackButton />
      <Box mx={24} mt={20}>
        <Text variant="h2">Log in</Text>
        <Text variant="body" pt={10} color={theme.colors.BLACK} opacity={0.6}>Enter email address and password to log in</Text>

        <Box mt={50} mx={16}>
          <RegularInput
            containerProps={{ mb: 16 }}
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
      <Button position={'absolute'} bottom={40} alignSelf={'center'} width={wp(330)} title="Proceed" />
    </Screen>
  )
}

export default Login;

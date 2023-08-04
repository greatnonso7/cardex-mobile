import { Box, Button, RegularInput, Text } from 'design-system';
import React, { useState } from 'react';
import { Header, Icon, Screen } from 'shared';
import theme from 'theme';
import { capitalizeFirstLetter, wp } from 'utils';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AuthStackParamList } from 'types';
import { StackScreenProps } from '@react-navigation/stack';
import { RouteProp, useRoute } from '@react-navigation/native';

interface FormData {
  password: string;
}

const schema = yup.object().shape({
  password: yup.string().required(),
});

type Props = StackScreenProps<AuthStackParamList, 'SetPassword'>;

const SetPassword = ({ navigation: { navigate } }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const { params } = useRoute<RouteProp<AuthStackParamList, 'EnterOTP'>>()
  const {
    control,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      password: '',
    },
    mode: 'all',
  });

  const { password } = watch();
  return (
    <Screen removeSafeaArea backgroundColor={theme.colors.OFF_PRIMARY}>
      <Header hasBackButton />
      <Box mx={24} mt={20}>
        <Text variant="h2">Create your password</Text>
        <Text variant="body" pt={10} color={theme.colors.BLACK} width={300} opacity={0.6}>Create your log in password to keep your account secure</Text>

        <Box mt={30}>
          <RegularInput
            label="Set password"
            autoCapitalize="none"
            control={control}
            name="password"
            value={password}
            password
            secureTextEntry={showPassword}
            onPressPasswordIcon={() => setShowPassword(!showPassword)}
            placeholder="Enter your password"
            errorText={capitalizeFirstLetter(errors.password?.message as string)}
          />
        </Box>
      </Box>

      <Button alignSelf={'center'} mt={50} width={wp(330)} title="Proceed" disabled={password ? false : true} onPress={() => navigate('SetPhone', { email: params.email, password })} />
    </Screen>
  )
}

export default SetPassword;

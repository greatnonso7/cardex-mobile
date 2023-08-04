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
import { TouchableOpacity } from 'react-native';

interface FormData {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

type Props = StackScreenProps<AuthStackParamList, 'CreateAccount'>;

const CreateAccount = ({ navigation: { navigate } }: Props) => {
  const [isActive, setIsActive] = useState(false);

  const {
    control,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
    },
    mode: 'all',
  });

  const { email } = watch();
  return (
    <Screen removeSafeaArea backgroundColor={theme.colors.OFF_PRIMARY}>
      <Header hasBackButton />
      <Box mx={24} mt={20}>
        <Text variant="h2">Sign up</Text>
        <Text variant="body" pt={10} color={theme.colors.BLACK} width={300} opacity={0.6}>We will use this email address to authenticate logins to your account</Text>

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
          <Box my={10} flexDirection={'row'} alignItems={'center'}>
            <Box as={TouchableOpacity} onPress={() => setIsActive(!isActive)} activeOpacity={0.8}>
              {isActive ? <Icon name="active-checkbox" /> : <Box width={24} height={24} borderWidth={2} borderRadius={8} borderColor={theme.colors.OFF_WHITE} />}
            </Box>
            <Text px={2} variant="bodySmall" color={theme.colors.LIGHT_GRAY}>By signing up, I confirm I accept the <Text variant="bodySmall">Terms of Use</Text></Text>
          </Box>
        </Box>
      </Box>

      <Button alignSelf={'center'} mt={20} width={wp(330)} title="Proceed" disabled={email && isActive ? false : true} />
    </Screen>
  )
}

export default CreateAccount;

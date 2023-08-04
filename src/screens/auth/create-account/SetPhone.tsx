import { Box, Button, RegularInput, Text } from 'design-system';
import React from 'react';
import { Header, Screen } from 'shared';
import theme from 'theme';
import { capitalizeFirstLetter, wp } from 'utils';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AuthStackParamList } from 'types';
import { StackScreenProps } from '@react-navigation/stack';
import { RouteProp, useRoute } from '@react-navigation/native';

interface FormData {
  phone: string;
}

const schema = yup.object().shape({
  phone: yup.string().required(),
});

type Props = StackScreenProps<AuthStackParamList, 'SetPhone'>;

const SetPhone = ({ navigation: { navigate } }: Props) => {
  const { params } = useRoute<RouteProp<AuthStackParamList, 'SetPhone'>>()
  const {
    control,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      phone: '',
    },
    mode: 'all',
  });

  const { phone } = watch();
  return (
    <Screen removeSafeaArea backgroundColor={theme.colors.OFF_PRIMARY}>
      <Header hasBackButton />
      <Box mx={24} mt={20}>
        <Text variant="h2">Almost done</Text>
        <Text variant="body" pt={10} color={theme.colors.BLACK} width={300} opacity={0.6}>We will use this phone number to authenticate transactions & Log ins</Text>

        <Box mt={30}>
          <RegularInput
            label="Phone number"
            autoCapitalize="none"
            control={control}
            isPhone
            name="phone"
            value={phone}
            placeholder="9038819008"
            maxLength={11}
            errorText={capitalizeFirstLetter(errors.phone?.message as string)}
          />
        </Box>
      </Box>

      <Button alignSelf={'center'} mt={50} width={wp(330)} title="Proceed" disabled={phone.length >= 10 ? false : true} onPress={() => navigate('CompleteSignup', { email: params.email, password: params?.password, phone })} />
    </Screen>
  )
}

export default SetPhone;

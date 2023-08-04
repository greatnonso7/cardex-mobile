import { Box, Button, RegularInput, Text } from 'design-system';
import React, { useState } from 'react';
import { AvoidingView, Header, Screen } from 'shared';
import theme from 'theme';
import { capitalizeFirstLetter, wp } from 'utils';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AuthStackParamList } from 'types';
import { StackScreenProps } from '@react-navigation/stack';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { SelectGender, SelectState } from './modals';

interface FormData {
  name: string;
  gender: string;
  dateOfBirth: any;
  address: string;
  state: string;
}

const schema = yup.object().shape({
  name: yup.string().required(),
  gender: yup.string().required(),
  dateOfBirth: yup.date().required(),
  address: yup.string().required(),
  state: yup.string().required(),
});

type Props = StackScreenProps<AuthStackParamList, 'CompleteSignup'>;

const CompleteSignup = ({ navigation: { navigate } }: Props) => {
  const [openGender, setOpenGender] = useState(false);
  const [openStates, setOpenStates] = useState(false);
  const { params } = useRoute<RouteProp<AuthStackParamList, 'CompleteSignup'>>()

  const {
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      gender: '',
      dateOfBirth: '',
      state: '',
      address: '',
    },
    mode: 'all',
  });

  const { name, gender, dateOfBirth, address, state } = watch();
  const onSelectGender = async (selectedGender: string) => {
    console.log('onSelectGender', selectedGender);
    setOpenGender(false);
    setValue('gender', selectedGender);
  }

  const onSelectState = async (selectedState: string) => {
    setOpenStates(false);
    setValue('state', selectedState);
  }
  return (
    <Screen removeSafeaArea backgroundColor={theme.colors.OFF_PRIMARY}>
      <AvoidingView>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
          <Header hasBackButton />
          <Box mx={24} mt={20}>
            <Text variant="h2">Let's get to know you</Text>
            <Text variant="body" pt={10} color={theme.colors.BLACK} opacity={0.6}>Please fill in the details as it appears on your official documents or means of identification</Text>

            <Box mt={30}>
              <RegularInput
                label="Your full name"
                autoCapitalize="none"
                control={control}
                name="name"
                value={name}
                placeholder="Enter your full name"
                errorText={capitalizeFirstLetter(errors.name?.message as string)}
              />
              <RegularInput
                label="Email Address"
                autoCapitalize="none"
                control={control}
                name="gender"
                value={gender}
                isDropDown
                onPressDropDown={() => setOpenGender(true)}
                placeholder="Select your gender"
                errorText={capitalizeFirstLetter(errors.gender?.message as string)}
              />
              <RegularInput
                label="Date of birth"
                autoCapitalize="none"
                control={control}
                name="dateOfBirth"
                value={dateOfBirth}
                placeholder="Select your date of birth"
                errorText={capitalizeFirstLetter(errors.dateOfBirth?.message as string)}
              />
              <RegularInput
                label="Home address"
                autoCapitalize="none"
                control={control}
                name="address"
                value={address}
                placeholder="Enter your home address"
                errorText={capitalizeFirstLetter(errors.address?.message as string)}
              />
              <RegularInput
                label="State"
                autoCapitalize="none"
                control={control}
                name="state"
                value={state}
                isDropDown
                onPressDropDown={() => setOpenStates(true)}
                placeholder="Select your state"
                errorText={capitalizeFirstLetter(errors.state?.message as string)}
              />
            </Box>
          </Box>
          <Button mt={20} alignSelf={'center'} width={wp(330)} title="Proceed" disabled={state && address && name && dateOfBirth && gender ? false : true} />
        </ScrollView>
      </AvoidingView>
      <SelectGender onClose={() => setOpenGender(false)} isVisible={openGender} onComplete={onSelectGender} />
      <SelectState onClose={() => setOpenStates(false)} isVisible={openStates} onComplete={onSelectState} />
    </Screen>
  )
}

export default CompleteSignup;

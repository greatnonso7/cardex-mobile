import { Box, Button, RegularInput, Text } from 'design-system';
import React, { useState } from 'react';
import { AvoidingView, Header, LoadingModal, Screen } from 'shared';
import theme from 'theme';
import { capitalizeFirstLetter, wp } from 'utils';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AuthStackParamList } from 'types';
import { StackScreenProps } from '@react-navigation/stack';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native';
import { SelectGender, SelectState } from './modals';
import DatePicker from 'react-native-date-picker';
import dayjs from 'dayjs';
import { useMutation } from '@tanstack/react-query';
import { setCompleteSignup } from 'services';


interface FormData {
  name: string;
  gender: string;
  dateOfBirth: any;
  address: string;
  state: string;
  bvn: string;
}

const schema = yup.object().shape({
  name: yup.string().required(),
  gender: yup.string().required(),
  dateOfBirth: yup.date().required(),
  address: yup.string().required(),
  state: yup.string().required(),
  bvn: yup.string().required(),
});

export function useForceUpdate() {
  const [, setValue] = useState(0);
  return () => setValue(value => value + 1);
}

type Props = StackScreenProps<AuthStackParamList, 'CompleteSignup'>;

const CompleteSignup = ({ navigation: { navigate } }: Props) => {
  const [openGender, setOpenGender] = useState(false);
  const [openStates, setOpenStates] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
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
      bvn: '',
    },
    mode: 'all',
  });

  const { name, gender, dateOfBirth, address, state, bvn } = watch();
  const onSelectGender = async (selectedGender: string) => {
    setOpenGender(false);
    setValue('gender', selectedGender);
  }

  const onSelectState = async (selectedState: string) => {
    setOpenStates(false);
    setValue('state', selectedState);
  }
  const forceUpdate = useForceUpdate();

  const {
    mutate: completeSignup,
    error,
    status,
  } = useMutation(setCompleteSignup, {
    onSuccess: async (data: any) => {
      setTimeout(() => {
        if (data?.statusCode === 200) {
          setLoading(false);
          navigate('CompleteLogin', { email: params.email })

        }
        setLoading(false);
      }, 500);
    },
  });

  const verifyUser = async () => {
    const data = {
      email: params?.email,
      password: params?.password,
      phoneNumber: params?.phone,
      firstName: name?.split(' ')?.[0],
      lastName: name?.split(' ')?.[1],
      gender: gender,
      state,
      dateOfBirth: dayjs(dateOfBirth).format('YYYY-MM-DD'),
      address,
      bvn,

    };

    await completeSignup(data);
    setLoading(true);
  }

  return (
    <Screen removeSafeaArea backgroundColor={theme.colors.OFF_PRIMARY}>
      <LoadingModal
        status={status}
        successText="Account created successfully"
        visible={loading}
        onClose={() => setLoading(false)}
        error={error}
      />
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
              <Box
                as={TouchableOpacity}
                activeOpacity={0.8}
                onPress={() => setOpen(!open)}>
                <RegularInput
                  label="Date of birth"
                  autoCapitalize="none"
                  control={control}
                  editable={false}
                  name="dateOfBirth"
                  value={dateOfBirth ? dayjs(dateOfBirth).format('DD/MM/YYYY') : ''}
                  placeholder="Select your date of birth"
                  errorText={capitalizeFirstLetter(errors.dateOfBirth?.message as string)}
                />
              </Box>
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
                label="Bvn number"
                keyboardType="numeric"
                returnKeyType="done"
                autoCapitalize="none"
                control={control}
                name="bvn"
                maxLength={11}
                value={bvn}
                placeholder="Enter bvn number"
                errorText={capitalizeFirstLetter(errors.bvn?.message as string)}
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
          <Button mt={20} alignSelf={'center'} width={wp(330)} title="Proceed" disabled={state && address && name && dateOfBirth && gender && bvn.length >= 10 ? false : true} onPress={() => verifyUser()} />
        </ScrollView>
      </AvoidingView>
      <SelectGender onClose={() => setOpenGender(false)} isVisible={openGender} onComplete={onSelectGender} />
      <SelectState onClose={() => setOpenStates(false)} isVisible={openStates} onComplete={onSelectState} />
      <DatePicker
        modal
        textColor={theme.colors.BLACK}
        dividerHeight={1}
        open={open}
        date={new Date()}
        mode={'date'}
        maximumDate={new Date()}
        onConfirm={date => {
          setOpen(false);
          setValue('dateOfBirth', date?.toISOString());
          forceUpdate();
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </Screen>
  )
}

export default CompleteSignup;

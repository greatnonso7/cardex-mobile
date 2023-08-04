import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
};

export type AuthStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  CreateAccount: undefined;
  GetStarted: undefined;
  EnterOTP: { email?: string };
  SetPassword: { email?: string };
  SetPhone: { email?: string; password?: string };
  CompleteSignup: { email?: string; password?: string; phone?: string };
  CompleteLogin: { email?: string };
};

export type PhoneCountry = {
  id?: number;
  name: string;
  flag?: string;
  code?: string | number;
  dial_code?: string;
};

export type loginRequest = {
  email?: string | any;
  password?: string | any;
};

export type completeSignupRequest = {
  firstName: string;
  lastName: string;
  dateOfBirth: any;
  state: string;
  phoneNumber?: string | any;
  bvn: string;
  address: string;
};

export type getTokenRequest = {
  email?: string;
};

export type verifyEmailTokenRequest = {
  code: string;
};

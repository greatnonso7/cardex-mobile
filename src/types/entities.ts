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
};

export type PhoneCountry = {
  id?: number;
  name: string;
  flag?: string;
  code?: string | number;
  dial_code?: string;
};

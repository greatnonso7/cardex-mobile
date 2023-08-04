import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import Onboarding from 'screens/auth/onboarding';
import Login from 'screens/auth/login';
import GetStarted from 'screens/auth/get-started';
import CreateAccount from 'screens/auth/create-account';
import { AuthStackParamList } from 'types';
import EnterOTP from 'screens/auth/create-account/EnterOtp';
import SetPassword from 'screens/auth/create-account/SetPassword';
import SetPhone from 'screens/auth/create-account/SetPhone';
import CompleteSignup from 'screens/auth/create-account/CompleteSignup';

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <AuthStack.Screen name="Onboarding" component={Onboarding} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="GetStarted" component={GetStarted} />
      <AuthStack.Screen name="CreateAccount" component={CreateAccount} />
      <AuthStack.Screen name="EnterOTP" component={EnterOTP} />
      <AuthStack.Screen name="SetPassword" component={SetPassword} />
      <AuthStack.Screen name="SetPhone" component={SetPhone} />
      <AuthStack.Screen name="CompleteSignup" component={CompleteSignup} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;

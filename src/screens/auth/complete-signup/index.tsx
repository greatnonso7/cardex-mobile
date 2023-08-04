import { RouteProp, useRoute } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { Box, Button, Text } from "design-system";
import React from "react";
import { Screen } from "shared";
import { AuthStackParamList } from "types";
import { CommonActions } from '@react-navigation/native';


type Props = StackScreenProps<AuthStackParamList, 'CompleteLogin'>;


const CompleteLogin = ({ navigation: { dispatch } }: Props) => {
  const { params } = useRoute<RouteProp<AuthStackParamList, 'CompleteLogin'>>()

  return (
    <Screen removeSafeaArea>
      <Box mt={50} mx={24}>
        <Text>Login successful</Text>
        <Text>Welcome {params.email}</Text>
      </Box>

      <Button mt={20} mx={24} title="Logout" onPress={() => dispatch(
        CommonActions.reset({
          index: 1,
          routes: [
            { name: 'Onboarding' },
          ],
        })
      )}
      />
    </Screen>
  )
}

export default CompleteLogin;

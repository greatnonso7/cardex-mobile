import React from 'react';
import { Box, Text } from 'design-system';
import { Icon } from 'shared';
import { headerProps } from './types';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { hp, isIos, populateHitSlop, wp } from 'utils';

export const Header = ({
  containerProps,
}: headerProps) => {
  const navigation = useNavigation<any>();

  return (
    <Box {...containerProps} px={24}>
      <Box
        height={35}
        alignItems={'center'}
        flexDirection={'row'}
        justifyContent={'space-between'}>
        <Box
          as={TouchableOpacity}
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
          hitSlop={populateHitSlop(5)}>
          <Icon name="arrow-right" />
        </Box>
        <Box>
          <Icon name="logo" />
        </Box>
      </Box>
    </Box>
  );
};

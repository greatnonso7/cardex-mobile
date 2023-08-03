import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Box } from 'design-system';
import { hp, isAndroid } from 'utils';

interface Props {
  children: React.ReactNode | React.ReactNode[];
  backgroundColor?: string;
  removeSafeaArea?: boolean;
  opacity?: number;
}

export const Screen = ({
  children,
  backgroundColor,
  removeSafeaArea,
  opacity,
}: Props) => {
  const { top } = useSafeAreaInsets();

  return (
    <>
      {removeSafeaArea ? (
        <Box
          backgroundColor={backgroundColor || 'white'}
          flex={1}
          opacity={opacity || 1}
          pt={isAndroid ? top + hp(30) : top}>
          <StatusBar
            backgroundColor="white"
            translucent
            barStyle="dark-content"
          />
          {children}
        </Box>
      ) : (
        <Box
          backgroundColor={backgroundColor || 'white'}
          flex={1}
          as={SafeAreaView}>
          <StatusBar
            backgroundColor="white"
            translucent
            barStyle="dark-content"
          />
          {children}
        </Box>
      )}
    </>
  );
};

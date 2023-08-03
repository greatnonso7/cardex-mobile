import React from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { Box, BoxProps, Text } from 'design-system';
import theme from 'theme';
import { hp } from 'utils';
import { Icon } from 'shared';

interface Props extends BoxProps {
  title?: string;
  disabled?: boolean;
  textColor?: string;
  textVariant?: any;
  backgroundColor?: string;
  hasIcon?: string;
  loading?: boolean;
}

export const Button = ({
  title,
  disabled,
  textColor,
  textVariant,
  hasIcon,
  backgroundColor,
  loading,
  ...props
}: Props) => {
  return (
    <Box
      disabled={disabled}
      activeOpacity={0.8}
      opacity={disabled ? 0.2 : 1}
      as={TouchableOpacity}
      mb={hp(7)}
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      borderRadius={hp(7)}
      height={hp(46)}
      backgroundColor={backgroundColor || theme.colors.PRIMARY}
      {...props}>
      <Box
        flexDirection={'row'}
        alignItems="center"
        justifyContent={'center'}
        alignSelf={'center'}>
        {loading ? (
          <ActivityIndicator size={'small'} color={theme.colors.WHITE} />
        ) : (
          <>
            {hasIcon && (
              <Box top={hp(1)} right={10}>
                <Icon name={hasIcon} />
              </Box>
            )}
            <Text
              color={textColor || 'white'}
              variant={textVariant || 'headerBold'}>
              {title}
            </Text>
          </>
        )}
      </Box>
    </Box>
  );
};

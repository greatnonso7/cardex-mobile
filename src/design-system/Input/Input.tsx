/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  ViewStyle,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Controller, ControllerRenderProps } from 'react-hook-form';
import Box, { BoxProps } from '../Box';
import Text from '../Text';
import { InputBaseProps } from './types';
import theme from 'theme';
import styles from './style';
import { hp } from 'utils';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'shared';

interface RegularInputProps extends InputBaseProps, TextInputProps {
  type?: 'regular';
  containerProps?: BoxProps;
  baseContainerStyle?: ViewStyle;
  hasIcon?: string;
  textInputContainerStyle?: any;
  password?: boolean;
  onPressPasswordIcon?: () => void;
  isDropDown?: boolean;
  onPressDropDown?: () => void;
  isLoading?: boolean;
  isPhone?: boolean;
}

interface ComponentMapType {
  [index: string]: ({
    onChange,
    onBlur,
    value,
  }: any) => JSX.Element | JSX.Element[];
}

export const RegularInput = ({
  containerProps,
  control,
  errorText,
  label,
  name = '',
  type = 'regular',
  baseContainerStyle,
  onPressPasswordIcon,
  password,
  isDropDown,
  onPressDropDown,
  isLoading,
  isPhone,
  textInputContainerStyle,
  ...props
}: RegularInputProps) => {
  const regularInput = ({ onChange, onBlur, value }: ControllerRenderProps) => {
    return (
      <Box
        px={16}
        activeOpacity={0.8}
        onPress={onPressDropDown}
        as={isDropDown ? TouchableOpacity : View}
        style={[
          styles.baseContainer,
          baseContainerStyle,
          Boolean(errorText) && styles.errorContainer,
        ]}>
        {isPhone && (
          <Box flexDirection={'row'} as={TouchableOpacity} activeOpacity={0.8} alignItems={'center'}>
            <Text>+234</Text>
            <Icon name="arrow-down" />
          </Box>
        )}
        <TextInput
          style={[
            styles.textInput,
            textInputContainerStyle,
          ]}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          editable={isDropDown ? false : true}
          placeholderTextColor={theme.colors.PLACEHOLDER}
          {...props}
        />
        {password && (
          <Box
            as={TouchableOpacity}
            activeOpacity={0.8}
            onPress={onPressPasswordIcon}>
            <Icon name="eye-slash" />
          </Box>
        )}
        {isDropDown && (
          <Box
            as={TouchableOpacity}
            onPress={onPressDropDown}
            activeOpacity={0.8}>
            <Icon name="arrow-down" />
          </Box>
        )}
        {isLoading && (
          <ActivityIndicator size={'small'} color={theme.colors.PRIMARY} />
        )}
      </Box>
    );
  };

  const componentMap: ComponentMapType = {
    regular: regularInput,
  };

  const navigation = useNavigation<any>();

  return (
    <Box {...containerProps}>
      {label && (
        <Text
          variant="body"
          pb={10}
          fontSize={hp(14)}
          color={theme.colors.LABEL_TEXT}
          fontFamily={theme.font.LexendRegular}>
          {label}
        </Text>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <View>{componentMap[type]({ onChange, onBlur, value })}</View>
        )}
      />
      <Box flexDirection={'row'}>
        {errorText && (
          <Text variant="bodySmall" bottom={15} color="red">
            {errorText}
          </Text>
        )}
      </Box>
    </Box>
  );
};

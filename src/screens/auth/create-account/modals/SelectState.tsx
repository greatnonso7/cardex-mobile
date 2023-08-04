
import React from 'react';
import { Box, Text } from 'design-system';
import { BaseModal, Icon } from 'shared';
import { styles } from './style';
import { ScrollView, TouchableOpacity } from 'react-native';
import { hp } from 'utils';
import theme from 'theme';
import { states } from 'data';

interface SelectStateProps {
  isVisible: boolean;
  onClose: () => void;
  onComplete: (selectedState: string) => void;
}

export const SelectState = ({
  isVisible,
  onClose,
  onComplete,
}: SelectStateProps) => {
  return (
    <BaseModal onClose={onClose} visible={isVisible}>
      <Box style={styles.modalContainer}>
        <Box
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <Box>
            <Text
              variant="h3"
              fontSize={hp(20)}
              fontFamily={theme.font.LexendSemiBold}>
              Select state of residence
            </Text>
          </Box>
          <Box as={TouchableOpacity} activeOpacity={0.8} onPress={onClose}>
            <Icon name="close" />
          </Box>
        </Box>
        <Box mt={40}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainerStyle}>
            {states
              ?.sort((a, b) => (a > b ? 1 : -1))
              ?.map(option => {
                return (
                  <Box
                    key={option}
                    mb={14}
                    as={TouchableOpacity}
                    activeOpacity={0.8}
                    onPress={() => {
                      onComplete(option);
                    }}
                    flexDirection={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    px={10}
                    py={1}
                    borderRadius={10}>
                    <Box flexDirection={'row'} alignItems={'center'}>
                      <Text variant="body">{option}</Text>
                    </Box>
                  </Box>
                );
              })}
          </ScrollView>
        </Box>
      </Box>
    </BaseModal>
  );
};

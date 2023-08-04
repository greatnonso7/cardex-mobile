
import React from 'react';
import { Box, Text } from 'design-system';
import { BaseModal, Icon } from 'shared';
import { styles } from './style';
import { ScrollView, TouchableOpacity } from 'react-native';
import { hp } from 'utils';
import theme from 'theme';
import { gender, states } from 'data';

interface SelectGenderProps {
  isVisible: boolean;
  onClose: () => void;
  onComplete: (selectedState: string) => void;
}

export const SelectGender = ({
  isVisible,
  onClose,
  onComplete,
}: SelectGenderProps) => {
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
              fontSize={hp(24)}
              fontFamily={theme.font.LexendSemiBold}>
              Select gender
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
            {gender
              ?.map(option => {
                return (
                  <Box
                    key={option.id}
                    mb={14}
                    as={TouchableOpacity}
                    activeOpacity={0.8}
                    onPress={() => {
                      onComplete(option.title);
                    }}
                    flexDirection={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    px={10}
                    py={1}
                    borderRadius={10}>
                    <Box flexDirection={'row'} alignItems={'center'}>
                      <Text variant="bodyBold">{option.title}</Text>
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

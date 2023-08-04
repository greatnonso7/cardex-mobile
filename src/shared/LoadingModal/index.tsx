import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { AxiosError } from 'axios';
import * as Progress from 'react-native-progress';
import { Icon } from 'shared/Icon';
import theme from 'theme';
import { styles } from './style';

interface LoadingProps {
  status?: string;
  successText?: string;
  error?: AxiosError | any;
}

interface ModalProps {
  visible: boolean;
  onClose: () => void;
}

export const LoadingModal = ({
  visible,
  onClose,
  status = 'loading',
  successText,
  error,
}: ModalProps & LoadingProps) => {

  const isError = status === 'error';
  const isLoading = status === 'loading';

  const stateMap: any = {
    error: () => (
      <View style={styles.errorContainer}>
        <View style={styles.errorIcon}>
          <Icon name="error" />
        </View>
        <View style={styles.headingContainer}>
          <Text style={[styles.loadingText, styles.headerText]}>
            An error occured
          </Text>
          <Text style={styles.subHeaderText}>{error?.data?.message?.[1] || error?.data?.message}</Text>
        </View>
        <TouchableOpacity
          onPress={onClose}
          hitSlop={{ top: 5, bottom: 5, right: 5, left: 5 }}
          activeOpacity={0.7}
          style={styles.retryContainer}>
          <Text style={styles.retryText}>Try Again</Text>
        </TouchableOpacity>
      </View>
    ),
    loading: () => (
      <View style={styles.loadingContainer}>
        <Progress.Circle
          style={styles.loader}
          borderColor={theme.colors.WHITE}
          borderWidth={2}
          size={30}
          // endAngle={0.7}
          indeterminate={true}
          strokeCap="round"
        />
        <Text style={styles.loadingText}>Loading</Text>
      </View>
    ),
    success: () => (
      <View style={styles.loadingContainer}>
        <View style={styles.checkContainer}>
          <Icon name="checkMark" />
        </View>
        <Text style={styles.loadingText}>{successText}</Text>
      </View>
    ),
  };

  return (
    <View>
      <Modal
        animationOut="slideOutUp"
        animationIn="slideInDown"
        backdropColor={theme.colors.WHITE}
        backdropOpacity={0.85}
        onBackdropPress={isLoading ? undefined : onClose}
        isVisible={visible}>
        <View
          style={[styles.container, isError && styles.removeContainerPadding]}>
          {stateMap?.[status as string]?.()}
        </View>
      </Modal>
    </View>
  );
};

export default LoadingModal;

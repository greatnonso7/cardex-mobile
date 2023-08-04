import { StackScreenProps } from '@react-navigation/stack';
import { onboardingOptions } from 'data';
import { Box, Text } from 'design-system';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { AppLogo, Icon, Screen } from 'shared';
import theme from 'theme';
import { AuthStackParamList } from 'types';
import { deviceWidth, hp, wp } from 'utils';

type Props = StackScreenProps<AuthStackParamList, 'Onboarding'>;

const Onboarding = ({ navigation: { navigate } }: Props) => {
  const [sliderState, setSliderState] = useState({ currentPage: 0 });

  const setSliderPage = (event: any) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.round(x / deviceWidth);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };
  const { currentPage: pageIndex } = sliderState;

  return (
    <Screen removeSafeaArea>
      <ScrollView
        bounces={false}
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate={'fast'}
        scrollEventThrottle={16}
        onScroll={event => {
          setSliderPage(event);
        }}
        pagingEnabled={true}>
        {onboardingOptions?.map((item, index) => {
          return (
            <Box
              key={index}
              width={deviceWidth}
              mt={30}>
              <Box backgroundColor={theme.colors.WHITE} height={hp(500)}>
                <Box mb={10}>
                  <AppLogo />
                </Box>
                <Image
                  source={item.image}
                  resizeMode="contain"
                  style={styles.onboardingImage}
                />
              </Box>
              <Box backgroundColor={theme.colors.OFF_PRIMARY} height={hp(400)} py={20} px={24}>
                <Text color={theme.colors.PRIMARY_100} variant="h3" fontSize={hp(20)} textAlign={'center'}>
                  {item.title}
                </Text>
                <Text variant="bodySmall" py={10} fontSize={hp(15)} width={300} textAlign={'center'} alignSelf={'center'} fontFamily={theme.font.LexendThin} color={theme.colors.BLACK}>
                  "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                </Text>

                <Box flexDirection={'row'} as={TouchableOpacity} onPress={() => navigate('GetStarted')} activeOpacity={0.8} alignItems={'center'} mt={50} position={'absolute'} right={20} top={130}>
                  <Text variant="bodyMedium" color={theme.colors.PRIMARY}>Skip</Text>
                  <Box top={1.1}>
                    <Icon name="skip" />
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        })}
      </ScrollView>
      <Box
        position={'absolute'}
        bottom={hp(100)}
        zIndex={10000}
        alignSelf={'center'}
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'row'}>
        {Array.from(Array(3).keys()).map((key, index) => (
          <Box
            width={10}
            height={10}
            borderRadius={pageIndex === index ? hp(12) : 100}
            ml={wp(8)}
            backgroundColor={
              pageIndex === index
                ? theme.colors.PRIMARY_100
                : theme.colors.OFF_WHITE
            }
            key={index}
          />
        ))}
      </Box>
    </Screen>
  )
}

const styles = StyleSheet.create({
  onboardingImage: {
    marginTop: hp(50),
    width: wp(300),
    height: hp(300),
    alignSelf: 'center',
  }
})

export default Onboarding;

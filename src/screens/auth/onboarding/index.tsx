import { onboardingOptions } from 'data';
import { Box, Text } from 'design-system';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';
import { AppLogo, Icon, Screen } from 'shared';
import theme from 'theme';
import { deviceWidth, hp, wp } from 'utils';

const Onboarding = () => {
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
  return (
    <Screen removeSafeaArea>
      <Box top={20}>
        <AppLogo />
      </Box>
      <ScrollView
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
              bottom={20}
              width={deviceWidth}
              borderWidth={1}
              alignSelf={'center'}>
              <Image
                source={item.image}
                resizeMode="contain"
                style={styles.onboardingImage}
              />
              <Box justifyContent={'center'} alignItems={'center'} top={50}>
                <Text color={theme.colors.PRIMARY} variant="h1">
                  {item.title}
                </Text>
                <Text
                  textAlign={'center'}
                  width={wp(225)}
                  variant="body"
                  color={theme.colors.FAINT_ICON}
                  fontFamily={theme.font.MulishBold}>
                  {item.title}
                </Text>
              </Box>
            </Box>
          );
        })}
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  onboardingImage: {
    width: wp(300),
    height: hp(300),
  }
})

export default Onboarding;

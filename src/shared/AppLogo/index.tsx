import { Box, Text } from "design-system";
import React from "react";
import { Icon } from "shared/Icon";

export const AppLogo = () => {
  return (
    <Box flexDirection={'row'} alignSelf={'center'}>
      <Icon name="logo" />
      <Text variant="h3" lineHeight={22}>Cardex</Text>
    </Box>
  )
}
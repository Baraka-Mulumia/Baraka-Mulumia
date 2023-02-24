import {
  Box,
  Container,
  HStack,
  Hide,
  Show,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';

import { Branding } from './Branding';
import { DesktopNav } from './DesktopNav';
import { NavigationDrawer } from './NavigationDrawer';
import { ReadBlogButton } from './ReadBlogButton';
import { ThemeSwitcher } from '../ThemeSwitcher';

export const Header: FunctionComponent<{
  isSticky?: boolean;
}> = ({ isSticky = false }) => {
  const navBgOnSticky = useColorModeValue(
    'backgrounds.light.100',
    'backgrounds.dark.100',
  );

  const navBg = isSticky ? navBgOnSticky : 'transparent';

  return (
    <Box
      as={'header'}
      w={'full'}
      bg={navBg}
      boxShadow={isSticky ? 'md' : 'none'}>
      <Container maxW={'container.xl'}>
        <HStack py={4} justifyContent={'space-between'} alignItems={'center'}>
          <Branding />
          <Show above={'xxmd'}>
            <DesktopNav />
          </Show>
          <HStack alignItems={'center'} spacing={6}>
            <ThemeSwitcher />
            <Box
              display={{
                base: 'none',
                md: 'block',
              }}>
              <ReadBlogButton />
            </Box>
            <Box
              display={{
                xxmd: 'none',
              }}>
              <NavigationDrawer />
            </Box>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

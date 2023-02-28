import { Box, Stack, useColorModeValue } from '@chakra-ui/react';
import { DesktopNav, DesktopNavItem } from './header/DesktopNav';

import AppText from './AppText';
import { Branding } from './header/Branding';
import { FunctionComponent } from 'react';
import { NAVIGATION_LINKS_LIST } from '@/constants';
import { SocialMediaIcons } from './SocialMediaIcons';
import { map } from 'lodash';
import { uuid } from '@/lib/functions';

DesktopNav;

export const Footer: FunctionComponent = () => {
  const footerBg = useColorModeValue(
    'backgrounds.dark.200',
    'backgrounds.dark.200',
  );

  return (
    <Stack
      bg={footerBg}
      py={14}
      alignItems={'center'}
      justifyContent={'center'}
      spacing={{
        base: 3,
        md: 6,
      }}>
      <Box maxW={'sm'} mx={'auto'}>
        <Branding isWhite={true} />
      </Box>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent={'center'}
        alignItems={'center'}
        spacing={4}
        fontSize={'sm'}>
        {map(NAVIGATION_LINKS_LIST, item => (
          <DesktopNavItem
            label={item.name}
            key={uuid()}
            path={item.href}
            isWhite={true}
          />
        ))}
      </Stack>
      <SocialMediaIcons />
      <AppText fontSize={'sm'} fontWeight={'medium'} variant={'text_white'}>
        © {new Date().getFullYear()} All rights reserved. Baraka Mulumia
      </AppText>
    </Stack>
  );
};

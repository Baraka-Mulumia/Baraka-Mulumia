import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FunctionComponent, PropsWithChildren } from 'react';

import { SpyLink } from './SpyLink';
import { TransitionMotion } from './motion/Transition.motion';

type HeroProps = PropsWithChildren<{
  heading: string;
  leadText: string;
  isHomePage?: boolean;
}>;

export const PageHeroSection: FunctionComponent<HeroProps> = ({
  heading,
  leadText,
  children,
  isHomePage = false,
}) => {
  const headingColor = useColorModeValue(
    'text.light.headings',
    'text.dark.headings',
  );

  return (
    <Stack spacing={8} py={isHomePage ? 8 : 4} h={'full'} alignItems={'center'}>
      <Stack
        alignItems={'center'}
        spacing={0}
        width={{
          base: 'full',
          sm: '90%',
          md: '80%',
        }}
        pt={isHomePage ? 0 : { base: 20, md: 32 }}
        pb={isHomePage ? 0 : { base: 4, md: 8 }}
        maxW={isHomePage ? '600px' : 'container.md'}>
        <TransitionMotion key={heading}>
          <Heading
            as='h2'
            fontSize={{
              base: '3xl',
              sm: '4xl',
              md: '5xl',
            }}
            color={headingColor}
            lineHeight={'100%'}
            textAlign={'center'}
            fontFamily={'heading'}
            fontWeight={700}
            textTransform={'capitalize'}>
            {heading}
          </Heading>
        </TransitionMotion>
        <Box w={'90%'} pt={4}>
          <Text fontSize={'md'} textAlign={'center'}>
            {leadText}
          </Text>
        </Box>
      </Stack>
      {isHomePage && (
        <SpyLink path='about-section'>
          <Button variant={'primary'}>Explore</Button>
        </SpyLink>
      )}
      {children}
    </Stack>
  );
};

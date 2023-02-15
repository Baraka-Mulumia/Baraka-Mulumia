import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

import BannerImgDark from '@/assets/banner-image-dark.png';
import BannerImgLight from '@/assets/banner-image.png';
import { BlockContainer } from '@/containers/BlockContainer';
import { FunctionComponent } from 'react';
import Image from 'next/image';
import { SpyLink } from '@/components/SpyLink';

const Banner: FunctionComponent = () => {
  const { colorMode } = useColorMode();

  const bannerImage = colorMode === 'dark' ? BannerImgDark : BannerImgLight;

  const headingColor = useColorModeValue(
    'text.light.headings',
    'text.dark.headings',
  );
  return (
    <Box
      as={'section'}
      position={'relative'}
      zIndex={0}
      __css={banner_css_styles}>
      <BlockContainer alignItems={'start'} pt={{ base: 20, md: 32 }}>
        <Box position={'relative'} zIndex={2} w={'full'}>
          <Stack spacing={8} py={8} h={'full'} alignItems={'center'}>
            <Stack
              alignItems={'center'}
              spacing={0}
              width={{
                base: 'full',
                sm: '90%',
                md: '80%',
              }}
              maxW={'600px'}>
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
                Your vision. My expertise. Powerful Results.
              </Heading>
              <Box w={'80%'}>
                <Text fontSize={'sm'} textAlign={'center'} mt={4}>
                  With a passion for technology and a drive to create innovative
                  solutions, I am dedicated to delivering exceptional results
                  that meet and exceed expectations.
                </Text>
              </Box>
            </Stack>
            <SpyLink path='about-section'>
              <Button variant={'primary'}>Explore</Button>
            </SpyLink>
            <Box w={'75%'}>
              <Image
                src={bannerImage}
                alt='banner'
                priority={true}
                style={{
                  borderRadius: '1rem',
                }}
              />
            </Box>
          </Stack>
        </Box>
      </BlockContainer>
    </Box>
  );
};

export default Banner;

const banner_css_styles = {
  '&::after': {
    position: 'absolute',
    content: '""',
    bottom: 0,
    right: 0,
    height: '100%',
    width: '100%',
    zIndex: -1,
    backgroundImage: `url('/images/shape-right.png')`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'bottom right',
    backgroundSize: '32%',
  },
  '&::before': {
    position: 'absolute',
    content: '""',
    bottom: 6,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: -1,
    backgroundImage: `url('/images/shape-left.png')`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'bottom left',
    backgroundSize: '36%',
  },
};

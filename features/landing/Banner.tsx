import { Box, useColorMode } from '@chakra-ui/react';

import BannerImgDark from '@/assets/banner-image-dark.png';
import BannerImgLight from '@/assets/banner-image.png';
import { BlockContainer } from '@/containers/BlockContainer';
import { FunctionComponent } from 'react';
import Image from 'next/image';
import { PageHeroSection } from '@/components/PageHeroSection';

const Banner: FunctionComponent = () => {
  const { colorMode } = useColorMode();

  const bannerImage = colorMode === 'dark' ? BannerImgDark : BannerImgLight;

  return (
    <Box
      as={'section'}
      position={'relative'}
      zIndex={0}
      __css={banner_css_styles}>
      <BlockContainer alignItems={'start'} pt={{ base: 20, md: 32 }}>
        <Box position={'relative'} zIndex={2} w={'full'}>
          <PageHeroSection
            heading='Your vision. My expertise. Powerful Results.'
            isHomePage={true}
            leadText={
              'With a passion for technology and a drive to create innovative  solutions, I am dedicated to delivering exceptional results that meet and exceed expectations.'
            }>
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
          </PageHeroSection>
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

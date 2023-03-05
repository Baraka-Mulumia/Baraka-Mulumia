import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

import { FunctionComponent } from 'react';
import Image from 'next/image';

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  imgBoxBgColor: string;
};

export const ServiceCard: FunctionComponent<ServiceCardProps> = ({
  title,
  description,
  image,
  imgBoxBgColor,
}) => {
  const headingColor = useColorModeValue(
    'text.light.headings',
    'text.dark.headings',
  );

  const { colorMode } = useColorMode();

  const shadowColor = `0 0 20px ${
    colorMode === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(200,200,200,0.2)'
  }`;

  const hoverShadowColor = `0 0 20px ${
    colorMode === 'light' ? 'rgba(0,0,0,0.2)' : 'rgba(200,200,200,0.2)'
  }`;

  return (
    <Stack
      borderRadius={'16px'}
      minH={{
        base: 'auto',
        md: '240px',
      }}
      overflow={'hidden'}
      boxShadow={shadowColor}
      _hover={{
        boxShadow: hoverShadowColor,
        transform: 'scale(1.02) translateY(-2px)',
      }}
      direction={{
        base: 'column',
        md: 'row',
      }}>
      <Flex
        flex={{
          base: 1,
          md: 2,
          lg: 1,
        }}
        minH={{
          base: '200px',
          md: '100%',
        }}
        bg={imgBoxBgColor}
        justifyContent={'center'}
        alignItems={'center'}
        borderLeftRadius={{
          base: '0',
          md: 'lg',
        }}>
        <Box w={'120px'} h={'120px'} position={'relative'}>
          <Image
            src={image}
            alt={'Baraka Mulumia - Service Offer -  ' + title}
            fill
          />
        </Box>
      </Flex>
      <Stack p={6} flex={2}>
        <Heading as={'h3'} size={'md'} color={headingColor} mt={4}>
          {title}
        </Heading>
        <Text>{description}</Text>
      </Stack>
    </Stack>
  );
};

import { Box, Flex, Stack, useColorModeValue } from '@chakra-ui/react';

import AppHeading from './AppHeading';
import AppText from './AppText';
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

  return (
    <Stack
      borderRadius={'16px'}
      minH={{
        base: 'auto',
        md: '240px',
      }}
      overflow={'hidden'}
      boxShadow={'0 0 10px rgba(0,0,0,0.1)'}
      _hover={{
        boxShadow: '0 0 20px rgba(0,0,0,0.2)',
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
        <AppHeading as={'h3'} size={'md'} color={headingColor} mt={4}>
          {title}
        </AppHeading>
        <AppText>{description}</AppText>
      </Stack>
    </Stack>
  );
};

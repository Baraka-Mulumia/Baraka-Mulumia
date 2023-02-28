import { Box, Stack, useColorModeValue } from '@chakra-ui/react';

import AppHeading from './AppHeading';
import AppText from './AppText';
import { FunctionComponent } from 'react';
import Image from 'next/image';

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
};

export const ServiceCard: FunctionComponent<ServiceCardProps> = ({
  title,
  description,
  image,
}) => {
  const headingColor = useColorModeValue(
    'text.light.headings',
    'text.dark.headings',
  );

  return (
    <Stack
      maxW={'sm'}
      h={{
        base: 'auto',
        md: 72,
      }}>
      <Box
        h={{
          base: '50px',
          md: '80px',
        }}
        w={{
          base: '50px',
          md: '80px',
        }}
        position={'relative'}>
        <Image
          src={image}
          alt={'Baraka Mulumia - Service Offer -  ' + title}
          fill
        />
      </Box>
      <Stack>
        <Box
          h={{
            base: 'auto',
            md: 16,
          }}>
          <AppHeading as='h3' size='md' color={headingColor} noOfLines={2}>
            {title}
          </AppHeading>
        </Box>
        <AppText>{description}</AppText>
      </Stack>
    </Stack>
  );
};

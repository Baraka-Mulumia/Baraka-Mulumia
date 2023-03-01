import { Box, Button, Container, Stack, VStack } from '@chakra-ui/react';

import AppHeading from './AppHeading';
import AppText from './AppText';
import Link from 'next/link';
import NotFoundSvg from '@/assets/custom-icons/NotFoundSvg';
import React from 'react';

const PageNotFound = () => {
  return (
    <Container maxW={'container.xl'}>
      <VStack minH={'80vh'} placeItems={'center'} placeContent={'center'}>
        <Stack spacing={4} align={'center'} textAlign={'center'}>
          <AppHeading color={'primary.light.red'} size={'4xl'} fontWeight={500}>
            404
          </AppHeading>
          <AppText color={'gray.500'} size={'xl'} fontWeight={500}>
            I couldn&apos;t find the page you were looking for.
          </AppText>
        </Stack>
        <Box rounded={'sm'} w={'sm'} h={96}>
          <NotFoundSvg />
        </Box>

        <AppText variant={'secondary'} size={'xl'} fontWeight={500}>
          Please check the URL in the address bar and try again. If you think
          this is a mistake, please contact us.
        </AppText>
        <AppText variant={'secondary'} size={'2xl'} fontWeight={500}>
          OR
        </AppText>

        <Link href='/'>
          <Button variant={'primary'}>Go to Home</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default PageNotFound;

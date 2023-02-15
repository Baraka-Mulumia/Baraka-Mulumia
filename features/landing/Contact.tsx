import { Flex, Stack } from '@chakra-ui/react';

import { BlockContainer } from '@/containers/BlockContainer';
import { BlockHeader } from '@/components/BlockHeader';
import { ContactForm } from '../contact/ContactForm';
import { FunctionComponent } from 'react';

// ! TODO:  HANDLE SUBMIT

export const Contact: FunctionComponent = () => {
  return (
    <BlockContainer w={'full'} minH={'auto'}>
      <Stack
        spacing={{
          base: 10,
          md: 20,
        }}>
        <BlockHeader
          title='Lets talk about your next project'
          slogan='Expertly designed, Expertly created'
        />
        <Flex
          w={'full'}
          placeContent={'center'}
          placeItems={'center'}
          bg={'backgrounds.dark.200'}
          borderRadius={'xl'}
          py={{
            base: 5,
            md: 10,
          }}>
          <ContactForm colorVariant={'secondary'} />
        </Flex>
      </Stack>
    </BlockContainer>
  );
};

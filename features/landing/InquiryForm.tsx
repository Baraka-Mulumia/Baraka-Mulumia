import { Flex, Stack } from '@chakra-ui/react';

import { BlockContainer } from '@/containers/BlockContainer';
import { BlockHeader } from '@/components/BlockHeader';
import { FunctionComponent } from 'react';
import { ProjectInquiryForm } from '../contact/ProjectInquiryForm';
import { Service } from '@/types';

export const InquiryForm: FunctionComponent<{
  services: Service[];
}> = ({ services }) => {
  return (
    <BlockContainer w={'full'} minH={'auto'}>
      <Stack
        spacing={{
          base: 10,
          md: 20,
        }}>
        <BlockHeader
          slogan='Together We Can Build Your Dream'
          title="Let's Connect and Bring Your Vision to Life"
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
          <ProjectInquiryForm colorVariant={'secondary'} services={services} />
        </Flex>
      </Stack>
    </BlockContainer>
  );
};

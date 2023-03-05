import { Flex, Text } from '@chakra-ui/react';

import { Header } from '@/components/header';
import { NextPage } from 'next';
import { PageHeroSection } from '@/components/PageHeroSection';
import { PageWrapper } from '@/containers/PageWrapper';

const Timeline: NextPage = () => {
  return (
    <PageWrapper Nav={Header}>
      <PageHeroSection
        heading={'Journey to Success: A Timeline of Milestones'}
        leadText={
          'From Humble Beginnings to Accomplishments, Explore My Professional Path and Achievements'
        }
      />

      <Flex
        direction='column'
        alignItems='center'
        justifyContent='center'
        w={'full'}>
        <Text fontSize='3xl' fontWeight='bold'>
          Coming Soon
        </Text>
      </Flex>
    </PageWrapper>
  );
};

export default Timeline;

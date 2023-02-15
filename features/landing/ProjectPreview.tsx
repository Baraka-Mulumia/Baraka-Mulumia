import { Box, Button, HStack, StackProps } from '@chakra-ui/react';

import { BlockContainer } from '@/containers/BlockContainer';
import { BlockHeader } from '@/components/BlockHeader';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { FunctionComponent } from 'react';
import Link from 'next/link';
import { Project } from '@/lib/types';
import { ProjectList } from '../portfolio/ProjectList';

type ProjectListProps = {
  data: Project[];
} & StackProps;

export const ProjectPreview: FunctionComponent<{
  data: Project[];
}> = ({ data: projects }) => {
  return (
    <Box as='section' id='services' py='20' w={'full'}>
      <BlockContainer w={'full'} minH={'auto'}>
        <BlockHeader title='Some of my work' slogan='The art of creating' />

        <ProjectList data={projects} />

        <HStack spacing={4} mt={8} justifyContent={'flex-end'}>
          <Link href='/portfolio'>
            <Button variant={'primaryOutline'} rightIcon={<ChevronRightIcon />}>
              View All Projects{' '}
            </Button>
          </Link>
        </HStack>
      </BlockContainer>
    </Box>
  );
};

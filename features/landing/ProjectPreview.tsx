import { Box, Button, HStack } from '@chakra-ui/react';

import { BlockContainer } from '@/containers/BlockContainer';
import { BlockHeader } from '@/components/BlockHeader';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { FunctionComponent } from 'react';
import Link from 'next/link';
import { Project } from '@/types';
import { ProjectList } from '../portfolio/ProjectList';

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

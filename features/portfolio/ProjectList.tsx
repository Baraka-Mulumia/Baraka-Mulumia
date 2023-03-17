import { Flex, Grid, GridItem } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';

import { Project } from '@/types';
import { ProjectCard } from './ProjectCard';
import { TransitionMotion } from '@/components/motion/Transition.motion';
import { map } from 'lodash';

type ProjectListProps = {
  data: Project[];
};

export const ProjectList: FunctionComponent<ProjectListProps> = ({
  data: projects,
}) => {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(3, 1fr)',
      }}
      gap={6}
      w={'100%'}>
      {map(projects, project => (
        <GridItem key={project._id}>
          <TransitionMotion
            key={'project-card'}
            animate={{
              scale: [0.9, 1],
            }}>
            <Flex
              direction='column'
              justifyContent='center'
              alignItems='center'>
              <ProjectCard project={project} />
            </Flex>
          </TransitionMotion>
        </GridItem>
      ))}
    </Grid>
  );
};

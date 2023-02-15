import { Box, Grid, GridItem } from '@chakra-ui/react';

import { BlockContainer } from '@/containers/BlockContainer';
import { BlockHeader } from '@/components/BlockHeader';
import { FunctionComponent } from 'react';
import { Service } from '@/lib/types';
import { ServiceCard } from '@/components/ServiceCard';
import { map } from 'lodash';

export const Services: FunctionComponent<{
  data: Service[];
}> = ({ data: services }) => {
  return (
    <Box as='section' id='services' py='20'>
      <BlockContainer>
        <BlockHeader
          slogan='Quality Services'
          title='What i bring to the table'
        />

        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          px={2}
          gap={3}>
          {map(services, service => (
            <GridItem key={service.slug.current}>
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image.asset.url}
              />
            </GridItem>
          ))}
        </Grid>
      </BlockContainer>
    </Box>
  );
};

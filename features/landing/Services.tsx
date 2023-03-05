import { Box, Grid, GridItem } from '@chakra-ui/react';

import { BlockContainer } from '@/containers/BlockContainer';
import { BlockHeader } from '@/components/BlockHeader';
import { Element } from 'react-scroll';
import { FunctionComponent } from 'react';
import { Service } from '@/types';
import { ServiceCard } from '@/components/ServiceCard';
import { assignColor } from '@/lib/functions';
import { map } from 'lodash';

const colors = [
  '#BCD1FF',
  'linear-gradient(135deg, #F395BA 0%, #FED182 100%)',
  '#D2EBF7',
];

export const Services: FunctionComponent<{
  data: Service[];
}> = ({ data: services }) => {
  const assignedColors = assignColor(
    services.map((_, index) => index),
    colors,
  );

  return (
    <Element name='services-section'>
      <Box as='section' id='services' py='20'>
        <BlockContainer>
          <BlockHeader
            slogan='Cutting-Edge Services'
            title='Innovative Solutions for Your Business Needs'
          />

          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              xl: 'repeat(2, 1fr)',
            }}
            gap={6}>
            {map(services, (service, index) => (
              <GridItem
                colSpan={{
                  xl: index == services.length - 1 ? 2 : 1,
                }}
                key={service.slug.current}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  image={service.image.asset.url}
                  imgBoxBgColor={assignedColors[index]}
                />
              </GridItem>
            ))}
          </Grid>
        </BlockContainer>
      </Box>
    </Element>
  );
};

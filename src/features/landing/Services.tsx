import { Box, Grid, GridItem } from "@chakra-ui/react";

import { BlockContainer } from "@/components/layout/BlockContainer";
import { FunctionComponent } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { ServiceContent } from "@/lib/types";
import { map } from "lodash";

export const Services: FunctionComponent<{
  data: ServiceContent[];
}> = ({ data: services }) => {
  return (
    <Box as="section" id="services" py="20">
      <BlockContainer>
        <SectionHeader
          slogan="Quality Services"
          title="What i bring to the table"
        />

        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          px={2}
          gap={3}
        >
          {map(services, (service) => (
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

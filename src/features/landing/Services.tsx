import { Box, Grid, GridItem } from "@chakra-ui/react";

import { BlockContainer } from "@/components/layout/BlockContainer";
import { FunctionComponent } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";

export const Services: FunctionComponent = () => {
  const services = [
    {
      title: "Web application development",
      description:
        "Development of complex and scalable web applications using the popular JavaScript libraries, Next.Js, React, Vue.js, Redux and server-side technology Node.js.",
      image: "/images/service-1.png",
    },
  ];

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
          gap={3}
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <GridItem key={index}>
              <ServiceCard {...services[0]} />
            </GridItem>
          ))}
        </Grid>
      </BlockContainer>
    </Box>
  );
};

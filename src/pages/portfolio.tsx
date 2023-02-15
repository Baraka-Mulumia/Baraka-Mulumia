import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { BlockContainer } from "@/components/layout/BlockContainer";
import { Contact } from "@/features/landing/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/Header";
import { NextPage } from "next";
import { PageCOntentContainer } from "@/components/layout/PageCOntentContainer";
import { ProjectContent } from "@/lib/types";
import { ProjectDetailCard } from "@/components/ProjectDetailCard";
import { ProjectList } from "@/features/landing/Projects";
import { SanityClient } from "@/lib/sanityClient";
import { SimpleBanner } from "@/components/SimpleBanner";
import { map } from "lodash";

const projectsQuery = `*[_type == "project"] | order(_createdAt desc) {
   _createdAt,
  _id,
  title,
  description,
  isHosted,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  slug,
  sourceCodeUrl,
  status,
  technologies,
  url,
  images[] {
    asset->{
      _id,
      url
    }
  } 
}`;

export async function getStaticProps() {
  try {
    const data = await SanityClient.fetch(projectsQuery);
    return {
      props: {
        projects: data,
      },
    };
  } catch (error) {
    return {
      props: {
        projects: [],
      },
    };
  }
}

const Portfolio: NextPage<{
  projects: ProjectContent[];
}> = ({ projects }) => {
  return (
    <PageCOntentContainer Nav={Header}>
      <SimpleBanner
        title="Some of my projects"
        description={
          "As a software developer, I am Building digital solutions, one line of code at a time, and I understand the importance of bridging the gap between a client's vision and my expertise to achieve powerful results. This is why I am proud to present my personal portfolio, where I can showcase the projects I've worked on and the impact I've made"
        }
      />
      <BlockContainer>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={6}
          justifyContent="center"
          alignItems={"center"}
          w={"100%"}
        >
          {map(projects, (project, index) => (
            <GridItem
              key={project._id}
              colSpan={{
                md: index == 0 ? 2 : 1,
              }}
            >
              <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <ProjectDetailCard project={project} />
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </BlockContainer>
      <Contact />
      <Footer />
    </PageCOntentContainer>
  );
};

export default Portfolio;

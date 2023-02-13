import { Contact } from "@/features/landing/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/Header";
import { NextPage } from "next";
import { PageCOntentContainer } from "@/components/layout/PageCOntentContainer";
import { ProjectContent } from "@/lib/types";
import { ProjectList } from "@/features/landing/Projects";
import { SanityClient } from "@/lib/sanityClient";
import { SimpleBanner } from "@/components/SimpleBanner";
import { Text } from "@chakra-ui/react";

const projectsQuery = `*[_type == "project"] | order(_createdAt desc) {
 title,
  description,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  slug,
  url,
  sourceCodeUrl,
  isHosted,
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
      <ProjectList data={projects} spacing={8} />
      <Contact />
      <Footer />
    </PageCOntentContainer>
  );
};

export default Portfolio;

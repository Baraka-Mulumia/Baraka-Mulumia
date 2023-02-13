import { ProjectContent, ServiceContent } from "@/lib/types";
import {
  SanityClient,
  projectsPreviewQuery,
  servicesQuery,
} from "@/lib/sanityClient";

import AboutSection from "@/features/landing/About";
import Banner from "@/features/landing/Banner";
import { Box } from "@chakra-ui/react";
import { Contact } from "@/features/landing/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/Header";
import { NextPage } from "next";
import { PageCOntentContainer } from "@/components/layout/PageCOntentContainer";
import { Projects } from "@/features/landing/Projects";
import { Services } from "@/features/landing/Services";

const queries = `{
  "services": ${servicesQuery},
  "projects": ${projectsPreviewQuery}
}`;

export async function getStaticProps() {
  try {
    const data = await SanityClient.fetch(queries);

    const { services, projects } = data;

    return {
      props: {
        services,
        projects,
      },
    };
  } catch (error) {
    return {
      props: {
        services: [],
        projects: [],
      },
    };
  }
}

type HomePageProps = {
  services: ServiceContent[];
  projects: ProjectContent[];
};

const Home: NextPage<HomePageProps> = ({ services, projects }) => {
  return (
    <Box>
      <PageCOntentContainer Nav={Header}>
        <Banner />
        <AboutSection />
        <Services data={services} />
        <Projects data={projects} />
        <Contact />
        <Footer />
      </PageCOntentContainer>
    </Box>
  );
};

export default Home;

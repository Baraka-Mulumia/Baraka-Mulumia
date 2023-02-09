import AboutSection from "@/features/landing/About";
import Banner from "@/features/landing/Banner";
import { Blog } from "@/features/landing/blog";
import { Box } from "@chakra-ui/react";
import { Contact } from "@/features/landing/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/Header";
import { NextPage } from "next";
import { PageCOntentContainer } from "@/components/layout/PageCOntentContainer";
import { Projects } from "@/features/landing/Projects";
import { SanityClient } from "@/lib/sanityClient";
import { ServiceContent } from "@/lib/types";
import { Services } from "@/features/landing/Services";
import { sortBy } from "lodash";
const servicesQuery = `*[_type == "service"]{
  title,
  description,
  image {
    asset->{
      _id,
      url
    },
    alt
  },
  slug,
  _createdAt
}`;

export async function getStaticProps() {
  const data = await SanityClient.fetch(servicesQuery);

  return {
    props: {
      services: sortBy(data, "_createdAt"),
    },
  };
}

const Home: NextPage<{
  services: ServiceContent[];
}> = ({ services }) => {
  return (
    <Box>
      <PageCOntentContainer Nav={Header}>
        <Banner />
        <AboutSection />
        <Services data={services} />
        <Projects />
        <Contact />
        <Blog />
        <Footer />
      </PageCOntentContainer>
    </Box>
  );
};

export default Home;

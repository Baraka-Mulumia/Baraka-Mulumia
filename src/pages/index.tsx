import AboutSection from "@/sections/landing-page/About";
import Banner from "@/sections/landing-page/Banner";
import { Blog } from "@/sections/landing-page/blog";
import { Box } from "@chakra-ui/react";
import { Header } from "@/components/Header/Header";
import { PageCOntentContainer } from "@/components/layout/PageCOntentContainer";
import { Projects } from "@/sections/landing-page/Projects";
import { Services } from "@/sections/landing-page/Services";

export default function Home() {
  return (
    <Box>
      <PageCOntentContainer Nav={Header}>
        <Banner />
        <AboutSection />
        <Services />
        <Projects />
        <Blog />
      </PageCOntentContainer>
    </Box>
  );
}

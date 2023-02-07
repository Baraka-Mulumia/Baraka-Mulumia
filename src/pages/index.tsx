import AboutSection from "@/sections/About";
import Banner from "@/sections/Banner";
import { Box } from "@chakra-ui/react";
import { Header } from "@/components/Header/Header";
import { PageCOntentContainer } from "@/components/layout/PageCOntentContainer";

export default function Home() {
  return (
    <Box>
      <PageCOntentContainer Nav={Header}>
        <Banner />
        <AboutSection />
      </PageCOntentContainer>
    </Box>
  );
}

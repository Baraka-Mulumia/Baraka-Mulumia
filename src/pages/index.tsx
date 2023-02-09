import AboutSection from "@/features/landing/About";
import Banner from "@/features/landing/Banner";
import { Blog } from "@/features/landing/blog";
import { Box } from "@chakra-ui/react";
import { Contact } from "@/features/landing/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/Header";
import { PageCOntentContainer } from "@/components/layout/PageCOntentContainer";
import { Projects } from "@/features/landing/Projects";
import { Services } from "@/features/landing/Services";

export default function Home() {
  return (
    <Box>
      <PageCOntentContainer Nav={Header}>
        <Banner />
        <AboutSection />
        <Services />
        <Projects />
        <Contact />
        <Blog />
        <Footer />
      </PageCOntentContainer>
    </Box>
  );
}

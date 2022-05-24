import { AboutSection, ContactSection, HeroSection, ProjectsSection } from "../components/sections";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Home() {
    return (
        <Box>
            <Box w={"full"} py={3} position={"relative"}>
                <NavBar />
                <VStack justify={"center"} align={"stretch"} h={"full"} w={"full"}>
                    <SectionWrapper mt={"80px"}>
                        <HeroSection />
                    </SectionWrapper>
                    <SectionWrapper align={"start"}>
                        <AboutSection />
                    </SectionWrapper>
                    {/* <SectionWrapper align={"start"}>
                        <ProjectsSection />
                    </SectionWrapper>
                    <SectionWrapper align={"start"}>
                        <ContactSection />
                    </SectionWrapper> */}
                </VStack>
                <Footer />
            </Box>
        </Box>
    );
}

const SectionWrapper = ({ children, ...props }) => {
    return (
        <Flex justify={"center"} align={"center"} minHeight={"calc(100vh - 100px)"} {...props}>
            <Box maxW={"1280px"} minW={"364px"} py={8} px={4} flexGrow={1}>
                {children}
            </Box>
        </Flex>
    );
};

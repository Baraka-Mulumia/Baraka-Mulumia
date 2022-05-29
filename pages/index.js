import { AboutSection, ContactSection, HeroSection, ProjectsSection } from "../components/sections";
import { Box, Flex, VStack } from "@chakra-ui/react";

import CustomHead from "../components/subcomponents/CustomHead";
import { Element } from "react-scroll";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Home() {
    return (
        <Box>
            <CustomHead />
            <Box w={"full"} py={3} position={"relative"}>
                <NavBar />
                <VStack justify={"center"} align={"stretch"} h={"full"} w={"full"}>
                    <Element name={"Home"}>
                        <SectionWrapper mt={"80px"}>
                            <HeroSection />
                        </SectionWrapper>
                    </Element>
                    <Element name={"About Me"}>
                        <SectionWrapper align={"start"}>
                            <AboutSection />
                        </SectionWrapper>
                    </Element>

                    <Element name={"Projects"}>
                        <SectionWrapper align={"start"}>
                            <ProjectsSection />
                        </SectionWrapper>
                    </Element>

                    <Element name={"Lets Connect"}>
                        <SectionWrapper align={"start"} minHeight={"fit-content"}>
                            <ContactSection />
                        </SectionWrapper>
                    </Element>
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

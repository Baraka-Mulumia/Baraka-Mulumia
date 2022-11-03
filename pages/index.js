import {
    AboutSection,
    ContactSection,
    HeroSection,
    ProjectsSection,
    TimelineSection,
} from "../components/sections";
import { Box, Flex, VStack, useColorModeValue } from "@chakra-ui/react";

import CustomHead from "../components/subcomponents/CustomHead";
import { Element } from "react-scroll";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import React from "react";
import SectionWrapper from "../components/subcomponents/SectionWrapper";

export default function Home() {
    const overlay = useColorModeValue(
        "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.9) 100%)",
        "linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.9) 100%)"
    );

    return (
        <Box>
            <CustomHead />
            <Box w={"full"} py={3} position={"relative"}>
                <NavBar />
                <VStack justify={"center"} align={"stretch"} h={"full"} w={"full"} spacing={0}>
                    <Element name={"Home"}>
                        <Box
                            backgroundImage={"url('/image-assets/bg-image.jpg')"}
                            backgroundSize={"cover"}
                        >
                            <SectionWrapper mt={"80px"} bg={overlay}>
                                <HeroSection />
                            </SectionWrapper>
                        </Box>
                    </Element>

                    <Element name={"About Me"}>
                        <Box
                            backgroundImage={"url('/image-assets/bg-image-2.jpg')"}
                            backgroundSize={"cover"}
                        >
                            <SectionWrapper align={"start"} bg={overlay}>
                                <AboutSection />
                            </SectionWrapper>
                        </Box>
                    </Element>

                    <Element name={"Timeline"}>
                        <TimelineSection />
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

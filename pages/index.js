import { Box, Flex, Text, VStack } from "@chakra-ui/react";

import { HeroSection } from "../components/sections";
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
                </VStack>
            </Box>
        </Box>
    );
}

const SectionWrapper = ({ children, ...props }) => {
    return (
        <Flex justify={"center"} align={"center"} minHeight={"calc(100vh - 100px)"} {...props}>
            {children}
        </Flex>
    );
};

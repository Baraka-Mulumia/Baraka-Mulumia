import { Box, Center, Text, VStack } from "@chakra-ui/react";

import NavBar from "../components/NavBar";

export default function Home() {
    return (
        <Box>
            <Box w={"full"} py={3} position={"relative"}>
                <NavBar />
                <Box height={"calc(100vh - 100px)"} mx={"auto"} mt={"80px"} maxW={"1280px"}>
                    <VStack justify={"center"} h={"full"}>
                        <Text variant={"heading1"}>Baraka Mulumia</Text>
                        <Text variant={"heading2"}>With Love</Text>
                    </VStack>
                </Box>
            </Box>
        </Box>
    );
}

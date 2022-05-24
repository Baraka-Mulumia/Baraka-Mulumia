import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";

const ContactSection = () => {
    return (
        <Box>
            <Flex justify={"center"} direction={"column"} align={"center"} w={"full"}>
                <Text fontSize={"6xl"} fontWeight={600}>
                    Lets Connect
                </Text>
            </Flex>
        </Box>
    );
};
export default ContactSection;

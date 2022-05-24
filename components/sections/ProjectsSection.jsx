import { Box, Flex, Text } from "@chakra-ui/react";

const ProjectsSection = () => {
    return (
        <Box>
            <Flex justify={"center"} direction={"column"} align={"center"} w={"full"}>
                <Text fontSize={"6xl"} fontWeight={600}>
                    Recent Works
                </Text>
            </Flex>
        </Box>
    );
};
export default ProjectsSection;

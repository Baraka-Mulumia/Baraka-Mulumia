import { Avatar, Box, Center, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";

import Image from "next/image";

const ProjectCard = ({ project }) => {
    const bg = useColorModeValue("backgrounds.light.200", "backgrounds.dark.200");

    return (
        <Center py={6}>
            <Box
                maxW={"445px"}
                cursor={"pointer"}
                w={"full"}
                bg={bg}
                _hover={{
                    transform: "scale(1.025)",
                }}
                boxShadow={"2xl"}
                rounded={"md"}
                p={6}
                overflow={"hidden"}
            >
                <Box h={"210px"} bg={"gray.100"} mt={-6} mx={-6} mb={6} pos={"relative"}>
                    <Image src={project.img} layout={"fill"} alt={""} />
                </Box>
                <Stack>
                    <Heading
                        color={useColorModeValue("gray.700", "white")}
                        fontSize={"2xl"}
                        fontFamily={"body"}
                    >
                        {project.name}
                    </Heading>
                    <Text color={"gray.500"} size={"lg"}>
                        {project.desc}
                    </Text>
                </Stack>
                <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                    <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                        <Text fontWeight={600}>Technologies</Text>
                        <Text color={"gray.500"}>{project.technologies.join(", ")}</Text>
                    </Stack>
                </Stack>
            </Box>
        </Center>
    );
};

export default ProjectCard;

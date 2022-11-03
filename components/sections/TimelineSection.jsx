import { Box, Flex, Link, Stack, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";

import React from "react";
import SectionWrapper from "../subcomponents/SectionWrapper";
import { timelineItemList } from "../../constants/timeline-list";

const TimeLineItem = ({ date, role, description, company, companyLink }) => {
    const periodColor = useColorModeValue("red.500", "red.300");
    const headingColor = useColorModeValue("blue.500", "blue.300");
    const companyColor = useColorModeValue("gray.500", "gray.300");

    return (
        <Stack position={"relative"} spacing={0}>
            <Stack
                h={"full"}
                spacing={0}
                position={"absolute"}
                top={0}
                left={0}
                placeItems={"center"}
            >
                <Box w={3} h={3} rounded={"full"} border={"2px"} borderColor={"red.600"}></Box>
                <Box h={"full"} w={0.5} bg={"red.600"}></Box>
            </Stack>
            <Box px={2}>
                <Text fontSize={"lg"} color={periodColor} fontWeight={600}>
                    {date}
                </Text>
            </Box>

            <Stack px={6} spacing={0}>
                <Text size={"xl"} fontWeight={600} color={headingColor}>
                    {role}
                </Text>
                <Link _focus={{ outline: "none" }} href={companyLink} target={"_blank"}>
                    <Text size={"xs"} fontWeight={600} color={companyColor}>
                        {company}
                    </Text>
                </Link>
                <Text size={"sm"} maxW={"xl"}>
                    {description}
                </Text>
            </Stack>
        </Stack>
    );
};

const Timeline = () => {
    const lightBgGradient = "linear(to-r, white 10%, transparent)";
    const darkBgGradient = "linear(to-r, gray.700 10%, transparent)";

    const { colorMode } = useColorMode();

    const bgGradient = colorMode === "light" ? lightBgGradient : darkBgGradient;

    return (
        <SectionWrapper position={"relative"}>
            <Flex
                flex={1}
                zIndex={0}
                display={{ base: "none", lg: "flex" }}
                backgroundImage="url('/image-assets/bg-image-3.jpg')"
                backgroundSize={"cover"}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                position={"absolute"}
                width={"50%"}
                insetY={0}
                right={0}
            >
                <Flex bgGradient={bgGradient} w={"full"} h={"full"} />
            </Flex>
            <Stack w={"full"} h={"full"} zIndex={10} position={"relative"}>
                <Text fontSize={"4xl"} textAlign={"center"} fontWeight={600}>
                    Timeline
                </Text>

                {timelineItemList.map((item, index) => (
                    <TimeLineItem key={index} {...item} />
                ))}
            </Stack>
        </SectionWrapper>
    );
};

export default Timeline;

import {
    AspectRatio,
    Box,
    Button,
    Flex,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";

const ImageBgVector = () => (
    <svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 553 575"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M279.931 1.32528C370.749 -4.88475 473.129 8.87038 526.424 82.5948C578.061 154.026 542.384 248.472 520.246 333.762C499.319 414.39 479.393 501.243 407.024 542.611C329.414 586.976 232.089 584.072 152.057 544.231C73.2867 505.019 19.8538 428.37 3.86137 341.914C-11.3417 259.726 19.7568 178.595 72.407 113.64C124.496 49.3773 197.352 6.97194 279.931 1.32528Z"
            fill="#E53E3E"
        />
    </svg>
);

const HeroSection = () => {
    const nameColor = useColorModeValue("red.600", "red.300");
    return (
        <Stack
            justify={{ base: "center", mxd: "space-between" }}
            align={"center"}
            direction={{ base: "column", mxd: "row" }}
            maxW={"1080px"}
            w={"full"}
            spacing={{ base: 8, mxd: 4 }}
            mx={"auto"}
        >
            <Stack spacing={2}>
                <Stack spacing={2} justify={"space-between"}>
                    <Text size={"sm"}>{"Holla I'm"}</Text>
                    <Text size={"2xl"} fontWeight={600} color={nameColor}>
                        Baraka Mulumia
                    </Text>
                </Stack>
                <Stack spacing={0}>
                    <Box>
                        <Text display={"inline"} fontSize={"6xl"} fontWeight={600} lineHeight={1}>
                            Software
                        </Text>
                        <Box display={"flex"} fontWeight={600} pl={8}>
                            <Text fontSize={"6xl"} fontWeight={600} lineHeight={1}>
                                Developer
                            </Text>
                            <Box bg={"red.600"} h={4} w={4} rounded={"full"}></Box>
                        </Box>
                    </Box>
                </Stack>
                <Text maxW={96}>
                    A Software Architect, SaaS engineer and Creative-Coder with a passion for
                    building scalable, performant and maintainable software.
                </Text>
                <Box w={"fit-content"}>
                    <Link
                        href="https://drive.google.com/file/d/1m4KrSivqp9o5e5Ppv5JClfWY-o0MeLKU/view?usp=sharing"
                        target={"_blank"}
                        _hover={{ textDecoration: "none" }}
                        _focus={{ boxShadow: "none", textDecoration: "none" }}
                    >
                        <Button colorScheme={"blue"}>
                            <Text variant={"cWhiteBlack"} px={6}>
                                Check CV Here
                            </Text>
                        </Button>
                    </Link>
                </Box>
            </Stack>

            <Flex
                position={"relative"}
                w={{ base: "full", mxd: "50%" }}
                zIndex={0}
                justify={"center"}
                align={"center"}
            >
                <Flex zIndex={3} position={"relative"}>
                    <AspectRatio ratio={5 / 4} w={{ base: "360px", md: "500px" }}>
                        <Image
                            src={"/image-assets/profile-image-baraka.png"}
                            alt={"Baraka Mulumia"}
                            objectFit="cover"
                            objectPosition={"top center"}
                        />
                    </AspectRatio>
                    <Box
                        pos={"absolute"}
                        top={0}
                        left={0}
                        zIndex={-1}
                        height={{ base: "270px", md: "400px" }}
                        width={{ base: "300px", md: "400px" }}
                    >
                        <ImageBgVector />
                    </Box>
                </Flex>
            </Flex>
        </Stack>
    );
};
export default HeroSection;

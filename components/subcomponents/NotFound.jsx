import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";

import Link from "next/link";

export default function NotFound() {
    return (
        <Box h={"100vh"} display={"flex"} flexDir={"column"} justifyContent={"center"}>
            <Center>
                <Box textAlign="center" py={10} px={6}>
                    <Text
                        display="inline-block"
                        size="2xl"
                        variant={"heading1"}
                        bgGradient="linear(to-r, teal.400, teal.600)"
                        backgroundClip="text"
                    >
                        404
                    </Text>
                    <Text size={"xl"} mt={3} mb={2}>
                        Page Not Found
                    </Text>
                    <Text variant={"textSecondary"} mb={6}>
                        The page you&apos;re looking for does not seem to exist
                    </Text>

                    <Link href={"/"}>
                        <a>
                            <Button
                                colorScheme={"red"}
                                bgGradient="linear(to-r, red.400, red.500, red.600)"
                                color="white"
                                variant="solid"
                            >
                                Go to Home
                            </Button>
                        </a>
                    </Link>
                </Box>
            </Center>
        </Box>
    );
}

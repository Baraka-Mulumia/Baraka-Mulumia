import { Avatar, Box, Flex, Link, Text, useColorModeValue } from "@chakra-ui/react";

import ExternalLink from "./subcomponents/ExternalLink";

const Footer = () => {
    const borderColor = useColorModeValue("primary.dark.200", "primary.light.200");
    const linkColor = useColorModeValue("text.light.subtext", "text.dark.subtext");

    return (
        <Box py={10}>
            <Flex
                align={"center"}
                _before={{
                    content: '""',
                    borderBottom: "1px solid",
                    borderColor,
                    flexGrow: 1,
                    mr: 8,
                }}
                _after={{
                    content: '""',
                    borderBottom: "1px solid",
                    borderColor,
                    flexGrow: 1,
                    ml: 8,
                }}
            >
                <ExternalLink to={"https://mshindicreations.com"}>
                    <Avatar
                        src={"/image-assets/mshindi-creations-logo.png"}
                        title={"Mshindi Creations"}
                        name={"Mshindi Creations"}
                    />
                </ExternalLink>
            </Flex>
            <Text pt={6} fontSize={"sm"} textAlign={"center"}>
                &copy; {new Date().getFullYear()}{" "}
                <ExternalLink to={"https://mshindicreations.com"}>Mshindi Creations</ExternalLink>{" "}
                All rights reserved
            </Text>
        </Box>
    );
};
export default Footer;

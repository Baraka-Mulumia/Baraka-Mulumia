import { Avatar, Box, Flex, Link, Text, useColorModeValue } from "@chakra-ui/react";

import ExternalLink from "./subcomponents/ExternalLink";
import React from "react";

const Footer = () => {
    const borderColor = useColorModeValue("primary.dark.200", "primary.light.200");

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
                <ExternalLink to={"https://iambaraka.dev"}>
                    <Avatar
                        src={"/image-assets/mshindi-creations-logo.jpg"}
                        title={"Baraka Mulumia"}
                        name={"Baraka Mulumia"}
                    />
                </ExternalLink>
            </Flex>
            <Text pt={6} fontSize={"sm"} textAlign={"center"}>
                &copy; {new Date().getFullYear()}{" "}
                <ExternalLink to={"https://iambaraka.dev"}>iambaraka.dev</ExternalLink> All rights
                reserved
            </Text>
        </Box>
    );
};
export default Footer;

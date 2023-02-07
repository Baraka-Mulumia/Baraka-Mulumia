import { Box, Flex } from "@chakra-ui/react";

import React from "react";

const SectionWrapper = ({ children, ...props }) => {
    return (
        <Flex justify={"center"} align={"center"} minHeight={"calc(100vh - 100px)"} {...props}>
            <Box maxW={"1280px"} minW={"364px"} py={8} px={4} flexGrow={1}>
                {children}
            </Box>
        </Flex>
    );
};

export default SectionWrapper;

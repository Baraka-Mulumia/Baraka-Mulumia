import { Box, Container, HStack } from "@chakra-ui/react";
import { DesktopNav, DesktopNavItem } from "./DesktopNav";

import { Branding } from "./Branding";
import React from "react";
import { ReadBlogButton } from "./ReadBlogButton";
import { ThemeSwitcher } from "../ThemeSwitcher";

const Header = () => {
  return (
    <Box>
      <Container maxW={"container.xl"}>
        <HStack py={4} justifyContent={"space-between"} alignItems={"center"}>
          <Branding />
          <DesktopNav />
          <HStack alignItems={"center"} spacing={6}>
            <ThemeSwitcher />
            <ReadBlogButton />
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Header;

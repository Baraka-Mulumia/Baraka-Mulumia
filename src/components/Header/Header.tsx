import { Box, Container, HStack, Hide } from "@chakra-ui/react";
import { DesktopNav, DesktopNavItem } from "./DesktopNav";

import { Branding } from "./Branding";
import { HiddenOnBreakPoint } from "../layout/HiddenOnBreakPoint";
import { NavigationDrawer } from "./NavigationDrawer";
import React from "react";
import { ReadBlogButton } from "./ReadBlogButton";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { VisibleOnBreakPoint } from "../layout/VisibleOnBreakPoint";

const Header = () => {
  return (
    <Box>
      <Container maxW={"container.xl"}>
        <HStack py={4} justifyContent={"space-between"} alignItems={"center"}>
          <Branding />
          <VisibleOnBreakPoint breakpoint={"xxmd"}>
            <DesktopNav />
          </VisibleOnBreakPoint>
          <HStack alignItems={"center"} spacing={6}>
            <ThemeSwitcher />
            <VisibleOnBreakPoint breakpoint={"md"}>
              <ReadBlogButton />
            </VisibleOnBreakPoint>
            <HiddenOnBreakPoint breakpoint={"xxmd"}>
              <NavigationDrawer />
            </HiddenOnBreakPoint>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Header;

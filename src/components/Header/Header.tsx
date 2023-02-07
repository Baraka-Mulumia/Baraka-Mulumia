import {
  Box,
  Container,
  HStack,
  Hide,
  useColorModeValue,
} from "@chakra-ui/react";
import { DesktopNav, DesktopNavItem } from "./DesktopNav";
import React, { FunctionComponent } from "react";

import { Branding } from "./Branding";
import { HiddenOnBreakPoint } from "../layout/HiddenOnBreakPoint";
import { NavigationDrawer } from "./NavigationDrawer";
import { ReadBlogButton } from "./ReadBlogButton";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { VisibleOnBreakPoint } from "../layout/VisibleOnBreakPoint";

export const Header: FunctionComponent<{
  isSticky?: boolean;
}> = ({ isSticky = false }) => {
  const navBgOnSticky = useColorModeValue(
    "backgrounds.light.100",
    "backgrounds.dark.100"
  );

  const navBg = isSticky ? navBgOnSticky : "transparent";

  return (
    <Box
      as={"header"}
      w={"full"}
      bg={navBg}
      boxShadow={isSticky ? "md" : "none"}
    >
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

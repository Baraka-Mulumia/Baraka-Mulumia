import { Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";

import { Branding } from "./Header/Branding";
import { DesktopNavItem } from "./Header/DesktopNav";
import { FunctionComponent } from "react";
import { SocialMediaIcons } from "./SocialMediaIcons";
import { map } from "lodash";
import { navigationLinks } from "@/data/navigation-links";

export const Footer: FunctionComponent = () => {
  const footerBg = useColorModeValue(
    "backgrounds.dark.200",
    "backgrounds.dark.200"
  );

  return (
    <Stack
      bg={footerBg}
      py={14}
      alignItems={"center"}
      justifyContent={"center"}
      spacing={{
        base: 3,
        md: 6,
      }}
    >
      <Box maxW={"sm"} mx={"auto"}>
        <Branding isWhite={true} />
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={4}
        fontSize={"sm"}
      >
        {map(navigationLinks, (item) => (
          <DesktopNavItem
            label={item.name}
            key={item.href}
            path={item.href}
            isWhite={true}
          />
        ))}
      </Stack>
      <SocialMediaIcons />
      <Text fontSize={"sm"} fontWeight={"medium"} variant={"text_white"}>
        © {new Date().getFullYear()} All rights reserved. Baraka Mulumia
      </Text>
    </Stack>
  );
};

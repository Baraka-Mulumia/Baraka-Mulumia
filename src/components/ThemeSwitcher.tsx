import { Box, IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import { FunctionComponent } from "react";

export const ThemeSwitcher: FunctionComponent = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = colorMode === "dark" ? "white" : "black";

  return (
    <Box>
      <IconButton
        border={"1px solid red"}
        aria-label="toggle theme"
        rounded="full"
        size="xs"
        onClick={toggleColorMode}
        _focus={{
          boxShadow: "none",
        }}
        bg={"transparent"}
        icon={
          colorMode === "dark" ? (
            <SunIcon color={iconColor} />
          ) : (
            <MoonIcon color={iconColor} />
          )
        }
      />
    </Box>
  );
};

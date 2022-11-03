import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";

import { FaMoon } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";

const ThemeToggleIcon = () => {
    const { toggleColorMode, colorMode } = useColorMode();
    const themeIconColor = useColorModeValue("primary.dark.200", "primary.light.200");

    return (
        <IconButton
            color={themeIconColor}
            size-={"sm"}
            aria-label={"Change theme"}
            bg={"transparent"}
            border={"1px solid"}
            borderColor={themeIconColor}
            icon={colorMode === "light" ? <FaMoon size={20} /> : <MdOutlineLightMode size={20} />}
            onClick={toggleColorMode}
        />
    );
};
export default ThemeToggleIcon;

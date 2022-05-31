import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";

import { FaMoon } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";

const ThemeToggleIcon = () => {
    const { toggleColorMode, colorMode } = useColorMode();
    const themeIconColor = useColorModeValue("primary.dark.200", "primary.light.200");

    return (
        <IconButton
            color={themeIconColor}
            aria-label={"Change theme"}
            variant={"solid"}
            icon={colorMode === "light" ? <FaMoon size={24} /> : <MdOutlineLightMode size={24} />}
            onClick={toggleColorMode}
        />
    );
};
export default ThemeToggleIcon;

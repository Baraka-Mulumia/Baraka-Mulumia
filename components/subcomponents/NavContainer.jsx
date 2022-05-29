import { useEffect, useState } from "react";

import { Box } from "@chakra-ui/react";

const NavContainer = ({ children, primaryBgColor, secondaryBgColor, ...props }) => {
    const changeBg = () => {
        const windowPosition = window.scrollY;
        if (windowPosition >= 200) {
            setIsScroll(true);
        } else {
            setIsScroll(false);
        }
    };

    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", changeBg);

        return function unMount() {
            window.removeEventListener("scroll", changeBg);
        };
    }, []);

    return (
        <Box
            position={"fixed"}
            zIndex={1000}
            top={0}
            left={0}
            w={"full"}
            bg={isScroll ? secondaryBgColor : primaryBgColor}
            {...props}
        >
            {children}
        </Box>
    );
};
export default NavContainer;

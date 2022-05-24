import { Link, useColorModeValue } from "@chakra-ui/react";

const ExternalLink = ({ children, to, ...props }) => {
    const linkColor = useColorModeValue("text.light.subtext", "text.dark.subtext");

    return (
        <Link
            href={to}
            _focus={{ textDecoration: "none", outline: "none", borer: "none" }}
            color={linkColor}
            target={"_blank"}
            {...props}
        >
            {children}
        </Link>
    );
};
export default ExternalLink;

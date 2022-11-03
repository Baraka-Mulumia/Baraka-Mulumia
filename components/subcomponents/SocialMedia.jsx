import { IconButton, Stack, useColorModeValue } from "@chakra-ui/react";

import ExternalLink from "./ExternalLink";
import { SocialMediaLinks } from "../../constants/social-media-links";

const SocialMediaIcon = ({ link, name, Icon }) => {
    const color = useColorModeValue("#330C2F", "#FBFBFF");
    return (
        <ExternalLink to={link}>
            <Icon size={32} fill={color} />
        </ExternalLink>
    );
};

const SocialMedia = () => {
    return (
        <Stack direction={"row"} spacing={{ base: 4, sm: 8 }}>
            {SocialMediaLinks.map((link) => (
                <SocialMediaIcon {...link} key={link.name} />
            ))}
        </Stack>
    );
};
export default SocialMedia;

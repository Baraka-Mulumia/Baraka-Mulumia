import { Box, Flex, Stack, Text, useColorModeValue } from "@chakra-ui/react";

import SocialMedia from "../subcomponents/SocialMedia";

const Ornament = () => {
    return (
        <svg
            width="365"
            height="117"
            viewBox="0 0 365 117"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_dd_501_795)">
                <path
                    d="M43.9999 45.1331C43.9999 45.1331 70.4999 51.4226 95.2447 35.6331C119.99 19.8436 122.012 60.6331 139.727 60.6331C157.443 60.6331 166.495 45.1331 184.21 45.1331C201.926 45.1331 210.977 60.6331 228.693 60.6331C246.409 60.6331 243.817 35.6331 273.176 35.6331C302.534 35.6331 294.829 53.5518 320.046 58.8736"
                    stroke="#FD5956"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="12 12"
                />
            </g>
            <defs>
                <filter
                    id="filter0_dd_501_795"
                    x="-0.000549316"
                    y="0.572266"
                    width="364.047"
                    height="116.061"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="12" />
                    <feGaussianBlur stdDeviation="21" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 0.403922 0 0 0 0 0 0 0 0 0.22 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_501_795"
                    />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="8" />
                    <feGaussianBlur stdDeviation="9" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 0.403922 0 0 0 0 0 0 0 0 0.32 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_501_795"
                        result="effect2_dropShadow_501_795"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_501_795"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
};

const ContactSection = () => {
    const headingColor = useColorModeValue("red.400", "red.300");
    return (
        <Stack
            justify={"space-between"}
            direction={"column"}
            align={"center"}
            w={"full"}
            h={"full"}
            spacing={10}
        >
            <Box>
                <Ornament />
            </Box>
            <Text fontSize={"4xl"} color={headingColor} fontWeight={600}>
                Get in Touch
            </Text>
            <Text variant={"textPrimary"} maxW={"600px"} size={"lg"} textAlign={"center"}>
                Truth is a deep kindness that teaches us to be content in our everyday life and
                share with the people the same happiness. the feeling of sunday is the same
                everywhere: heavy, melancholy, standing still.
            </Text>
            <Box>
                <SocialMedia />
            </Box>
        </Stack>
    );
};
export default ContactSection;

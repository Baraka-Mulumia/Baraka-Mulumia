import { AspectRatio, Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";

const Ornament = () => {
    const color = useColorModeValue("#0D1321", "#FBFBFF");
    return (
        <svg
            width="144"
            height="344"
            viewBox="0 0 144 344"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_dd_501_771)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M46.9999 40C49.7613 40 51.9999 37.7614 51.9999 35C51.9999 32.2386 49.7613 30 46.9999 30C44.2385 30 41.9999 32.2386 41.9999 35C41.9999 37.7614 44.2385 40 46.9999 40ZM46.9999 90C49.7613 90 51.9999 87.7614 51.9999 85C51.9999 82.2386 49.7613 80 46.9999 80C44.2385 80 41.9999 82.2386 41.9999 85C41.9999 87.7614 44.2385 90 46.9999 90ZM51.9999 135C51.9999 137.761 49.7613 140 46.9999 140C44.2385 140 41.9999 137.761 41.9999 135C41.9999 132.239 44.2385 130 46.9999 130C49.7613 130 51.9999 132.239 51.9999 135ZM46.9999 190C49.7613 190 51.9999 187.761 51.9999 185C51.9999 182.239 49.7613 180 46.9999 180C44.2385 180 41.9999 182.239 41.9999 185C41.9999 187.761 44.2385 190 46.9999 190ZM51.9999 235C51.9999 237.761 49.7613 240 46.9999 240C44.2385 240 41.9999 237.761 41.9999 235C41.9999 232.239 44.2385 230 46.9999 230C49.7613 230 51.9999 232.239 51.9999 235ZM46.9999 290C49.7613 290 51.9999 287.761 51.9999 285C51.9999 282.239 49.7613 280 46.9999 280C44.2385 280 41.9999 282.239 41.9999 285C41.9999 287.761 44.2385 290 46.9999 290ZM102 35C102 37.7614 99.7613 40 96.9999 40C94.2385 40 91.9999 37.7614 91.9999 35C91.9999 32.2386 94.2385 30 96.9999 30C99.7613 30 102 32.2386 102 35ZM96.9999 90C99.7613 90 102 87.7614 102 85C102 82.2386 99.7613 80 96.9999 80C94.2385 80 91.9999 82.2386 91.9999 85C91.9999 87.7614 94.2385 90 96.9999 90ZM102 135C102 137.761 99.7613 140 96.9999 140C94.2385 140 91.9999 137.761 91.9999 135C91.9999 132.239 94.2385 130 96.9999 130C99.7613 130 102 132.239 102 135ZM96.9999 190C99.7613 190 102 187.761 102 185C102 182.239 99.7613 180 96.9999 180C94.2385 180 91.9999 182.239 91.9999 185C91.9999 187.761 94.2385 190 96.9999 190ZM102 235C102 237.761 99.7613 240 96.9999 240C94.2385 240 91.9999 237.761 91.9999 235C91.9999 232.239 94.2385 230 96.9999 230C99.7613 230 102 232.239 102 235ZM96.9999 290C99.7613 290 102 287.761 102 285C102 282.239 99.7613 280 96.9999 280C94.2385 280 91.9999 282.239 91.9999 285C91.9999 287.761 94.2385 290 96.9999 290Z"
                    fill={color}
                />
            </g>
            <defs>
                <filter
                    id="filter0_dd_501_771"
                    x="-0.00012207"
                    y="0"
                    width="144"
                    height="344"
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
                        result="effect1_dropShadow_501_771"
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
                        in2="effect1_dropShadow_501_771"
                        result="effect2_dropShadow_501_771"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_501_771"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
};

const AboutSection = () => {
    return (
        <Box pos={"relative"} h={"full"} w={"full"} zIndex={0}>
            <Box position={"absolute"} left={0} bottom={0}>
                <Ornament />
            </Box>
            <Flex justify={"center"} direction={"column"} align={"center"} w={"full"}>
                <Text fontSize={"6xl"} fontWeight={600}>
                    About Me
                </Text>
                <Text maxW={"600px"} size={"xl"} textAlign={"center"}>
                    An amazing problem solver who enjoys creating things that live on the internet
                    and is enthusiastic about building amazing software products. My Favorite
                    technologies are
                    <Text variant={"textPrimary"} as={"span"} fontWeight={600}>
                        JavasScript, ReactJs, NodeJS and NextJS
                    </Text>
                </Text>
                <Box>
                    <Image src={"/image-assets/02-Baraka-Mulumia.png"} alt={""} />
                </Box>
            </Flex>
            <Box position={"absolute"} right={"0"} bottom={0}>
                <Ornament />
            </Box>
            <Box position={"absolute"} right={"0"} bottom={0}>
                <Ornament />
            </Box>
        </Box>
    );
};
export default AboutSection;

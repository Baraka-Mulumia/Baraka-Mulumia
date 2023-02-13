import {
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { FunctionComponent } from "react";

type SimpleBannerProps = {
  title: string;
  description: string;
};

export const SimpleBanner: FunctionComponent<SimpleBannerProps> = ({
  title,
  description,
}) => {
  const bannerBg = useColorModeValue(
    "backgrounds.light.200",
    "backgrounds.dark.200"
  );

  return (
    <Stack
      minH={96}
      w={"full"}
      placeContent={"center"}
      placeItems={"center"}
      bg={bannerBg}
    >
      <Flex
        direction={"column"}
        align={"center"}
        justify={"center"}
        maxW={"container.lg"}
        textAlign={"center"}
        gap={4}
      >
        <Heading as="h1" size="2xl">
          {title}
        </Heading>

        <Text>{description}</Text>
      </Flex>
    </Stack>
  );
};

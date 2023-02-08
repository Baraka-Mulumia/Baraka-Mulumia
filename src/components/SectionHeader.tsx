import { Heading, Stack, Text } from "@chakra-ui/react";

import { FunctionComponent } from "react";

type SectionHeaderProps = {
  title: string;
  slogan: string;
  isWhite?: boolean;
};

export const SectionHeader: FunctionComponent<SectionHeaderProps> = ({
  title,
  slogan,
  isWhite = false,
}) => {
  return (
    <Stack as="header" spacing={2} align="center">
      <Text
        color={isWhite ? "white" : "primary.light.red"}
        textTransform="uppercase"
        fontWeight={500}
      >
        {slogan}
      </Text>
      <Heading as="h2" size="xl">
        {title}
      </Heading>
    </Stack>
  );
};

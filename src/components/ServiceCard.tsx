import { Box, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";

import { FunctionComponent } from "react";
import Image from "next/image";

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
};

export const ServiceCard: FunctionComponent<ServiceCardProps> = ({
  title,
  description,
  image,
}) => {
  const headingColor = useColorModeValue(
    "text.light.headings",
    "text.dark.headings"
  );

  return (
    <Stack
      maxW={"sm"}
      h={{
        base: "auto",
        md: 72,
      }}
    >
      <Box
        h={{
          base: "50px",
          md: "80px",
        }}
        w={{
          base: "50px",
          md: "80px",
        }}
        position={"relative"}
      >
        <Image src={image} alt={"Baraka Mulumia - " + title} fill />
      </Box>
      <Stack>
        <Box
          h={{
            base: "auto",
            md: 12,
          }}
        >
          <Heading as="h3" size="md" color={headingColor}>
            {title}
          </Heading>
        </Box>
        <Text>{description}</Text>
      </Stack>
    </Stack>
  );
};

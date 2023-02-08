import { Box, Heading, Stack, Text } from "@chakra-ui/react";

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
  return (
    <Stack maxW={"sm"}>
      <Box
        h={{
          base: "50px",
          md: "100px",
        }}
        w={{
          base: "50px",
          md: "100px",
        }}
        position={"relative"}
      >
        <Image src={image} alt={"Baraka Mulumia - " + title} fill />
      </Box>
      <Stack>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text>{description}</Text>
      </Stack>
    </Stack>
  );
};

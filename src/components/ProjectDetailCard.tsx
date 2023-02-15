import {
  Box,
  Button,
  HStack,
  Heading,
  Link,
  Stack,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { FunctionComponent } from "react";

import Image from "next/image";
import { ProjectContent } from "@/lib/types";
import { map } from "lodash";

type ProjectDetailCardProps = {
  project: ProjectContent;
};

const TechnologyBadge = ({ name }: { name: string }) => {
  return (
    <Tag size={"md"} variant="solid" colorScheme="orange">
      {name}
    </Tag>
  );
};

export const ProjectDetailCard: FunctionComponent<ProjectDetailCardProps> = ({
  project: {
    title,
    description,
    mainImage,
    url,
    sourceCodeUrl,
    isHosted,
    technologies,
  },
}) => {
  const bgCOlor = useColorModeValue("white", "gray.900");
  const headingColor = useColorModeValue(
    "text.light.headings",
    "text.dark.headings"
  );
  const altText = (alt: string | null) =>
    alt || `Baraka Mulumia's Project  - ${title}`;

  return (
    <Stack
      px={1}
      py={4}
      spacing={3}
      bg={bgCOlor}
      shadow={"md"}
      w={"full"}
      rounded={"28px"}
      maxW={"container.md"}
      minW={{
        base: "100%",
        md: "md",
      }}
    >
      <Heading textAlign={"center"} color={headingColor} as={"h3"}>
        {title}
      </Heading>

      <Stack
        spacing={{
          base: 1,
          md: 4,
        }}
        w={"full"}
        justifyContent={"center"}
        alignItems={"center"}
        // direction={{ base: "column", md: "row" }}
      >
        <Box
          w={{
            base: "90%",
            // md: "300px",
          }}
          h={{ base: "200px", sxm: "400px" }}
          boxShadow={"lg"}
          position={"relative"}
        >
          <Image
            src={mainImage.asset.url}
            alt={altText(mainImage.alt)}
            className={"rounded-md"}
            fill
          />
        </Box>
        <Stack alignSelf={"flex-start"} px={4} w={"full"}>
          <Text>{description}</Text>

          <HStack spacing={1} wrap={"wrap"}>
            {technologies &&
              technologies.length > 0 &&
              map(technologies, (tech) => (
                <TechnologyBadge name={tech} key={tech} />
              ))}
          </HStack>

          <HStack spacing={4} pb={6}>
            {isHosted && (
              <Link isExternal href={url} className={"text-decoration-none"}>
                <Button variant={"primary"} rounded={"2px"}>
                  Live Preview
                </Button>
              </Link>
            )}

            {sourceCodeUrl && (
              <Link
                isExternal
                href={sourceCodeUrl}
                className={"text-decoration-none"}
              >
                <Button colorScheme={"blue"} rounded={"2px"}>
                  Source Code
                </Button>
              </Link>
            )}
          </HStack>
        </Stack>
      </Stack>
    </Stack>
  );
};

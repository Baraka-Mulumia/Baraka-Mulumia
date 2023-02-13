import {
  Box,
  HStack,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FunctionComponent, PropsWithChildren } from "react";

import { AnimatedBottomBorder } from "./AnimatedBottomBorder";
import Image from "next/image";
import { ProjectContent } from "@/lib/types";

const ProjectPreviewLink: FunctionComponent<
  PropsWithChildren<{
    href: string;
  }>
> = ({ href, children }) => {
  return (
    <Link
      href={href}
      isExternal
      _hover={{
        textDecoration: "none",
      }}
    >
      {children}
    </Link>
  );
};

export const ProjectPreviewCard: FunctionComponent<{
  project: ProjectContent;
}> = ({ project }) => {
  const bgColor = useColorModeValue(
    "backgrounds.light.100",
    "backgrounds.dark.200"
  );

  return (
    <Stack
      maxW={"sm"}
      spacing={3}
      py={2}
      alignItems={"center"}
      h={{
        base: "auto",
        md: 96,
      }}
      boxShadow={"xl"}
      borderRadius={"10px"}
      bg={bgColor}
      _hover={{
        boxShadow: "2xl",
        transform: "translateY(-5px)",
      }}
      transition={"all 0.2s ease-in-out"}
    >
      <ProjectPreviewLink href={project.url}>
        <Box
          h={{
            base: 48,
          }}
          w={"sm"}
          position={"relative"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Image
            src={project.mainImage.asset.url}
            alt={"Baraka Mulumia - Project: " + project.title}
            fill
          />
        </Box>
      </ProjectPreviewLink>

      <Stack spacing={1} p={3}>
        <ProjectPreviewLink href={project.url}>
          <Box h={12}>
            <AnimatedBottomBorder>
              <Heading
                as={"h3"}
                fontSize={{
                  base: "xl",
                  md: "2xl",
                }}
                _hover={{
                  color: "primary.light.red",
                }}
              >
                {project.title}
              </Heading>
            </AnimatedBottomBorder>
          </Box>
        </ProjectPreviewLink>
        <Text fontSize={"sm"} noOfLines={2}>
          {project.description}
        </Text>
      </Stack>
    </Stack>
  );
};

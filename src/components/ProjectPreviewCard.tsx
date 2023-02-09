import { Box, HStack, Heading, Link, Stack, Text } from "@chakra-ui/react";
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
      _hover={{
        boxShadow: "2xl",
      }}
      borderRadius={"10px"}
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
            alt={"Baraka Mulumia - Web application development"}
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

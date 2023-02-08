import { Box, HStack, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { FunctionComponent, PropsWithChildren } from "react";

import { AnimatedBottomBorder } from "./AnimatedBottomBorder";
import Image from "next/image";

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

export const ProjectPreviewCard: FunctionComponent = () => {
  return (
    <Stack
      maxW={"sm"}
      spacing={3}
      boxShadow={"2xl"}
      p={2}
      rounded={"sm"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <ProjectPreviewLink href="https://spinfluence.vercel.app/">
        <Box
          h={{
            base: 48,
            md: 64,
            lg: 80,
          }}
          w={{
            base: 64,
            md: 64,
            lg: 96,
          }}
          position={"relative"}
        >
          <Image
            src={"/images/service-thumb.png"}
            alt={"Baraka Mulumia - Web application development"}
            fill
          />
        </Box>
      </ProjectPreviewLink>

      <Stack spacing={1} p={3}>
        <ProjectPreviewLink href="https://spinfluence.vercel.app/">
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
              Spinfluence Solutions
            </Heading>
          </AnimatedBottomBorder>
        </ProjectPreviewLink>

        <Text fontSize={"sm"}>
          Landing page for a software consulatncy agency startup.
        </Text>
      </Stack>
    </Stack>
  );
};

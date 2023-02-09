import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";
import { FunctionComponent } from "react";
// import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  title: string;
  description?: string;
  thumbnail?: string;
  slug?: string;
  size?: "large" | "small";
  isReverse?: boolean;
};

export const BlogCard: FunctionComponent<BlogCardProps> = ({
  title,
  description,
  thumbnail,
  slug,
  size = "large",
  isReverse = false,
}) => {
  const headingColorOnOverlay = useColorModeValue(
    "text.dark.headings",
    "text.light.headings"
  );

  const headingColor = useColorModeValue(
    "text.light.headings",
    "text.dark.headings"
  );

  return (
    <Link href="/blog">
      <Stack
        w={"full"}
        p={4}
        direction={{
          base: "column",
          md: size === "large" ? (isReverse ? "row-reverse" : "row") : "column",
        }}
        justifyContent={"center"}
        spacing={4}
      >
        <Box maxH={80} overflow={"hidden"}>
          {thumbnail && <Image src={thumbnail} alt={""} objectFit={"cover"} />}
        </Box>

        <Stack maxW={"sm"}>
          <Heading as="h3" p={1} fontSize={"xl"}>
            {title}
          </Heading>
          <Text fontSize={"sm"} color={"gray.500"} align={"justify"}>
            {description}
          </Text>

          <HStack spacing={1}>
            <Image src={thumbnail} alt="" w={8} h={8} rounded={"full"} />
            <Stack direction={"column"} spacing={0}>
              <Text fontSize={"sm"}>John Doe</Text>
              <Text fontSize={"xs"}>5 min read</Text>
            </Stack>
          </HStack>
        </Stack>
      </Stack>
    </Link>
  );
};

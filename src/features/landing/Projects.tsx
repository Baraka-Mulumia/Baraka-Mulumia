import { Box, Button, HStack } from "@chakra-ui/react";

import { BlockContainer } from "@/components/layout/BlockContainer";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { FunctionComponent } from "react";
import Link from "next/link";
import { ProjectPreviewCard } from "@/components/ProjectPreviewCard";
import { SectionHeader } from "@/components/SectionHeader";

export const Projects: FunctionComponent = () => {
  return (
    <Box as="section" id="services" py="20" w={"full"}>
      <BlockContainer w={"full"} minH={"auto"}>
        <SectionHeader title="Some of my work" slogan="The art of creating" />

        <HStack
          w={"full"}
          spacing={4}
          mt={8}
          justifyContent={"center"}
          flexWrap={"wrap"}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <ProjectPreviewCard key={index} />
          ))}
        </HStack>

        <HStack spacing={4} mt={8} justifyContent={"flex-end"}>
          <Link href="/portfolio">
            <Button variant={"primary"} rightIcon={<ChevronRightIcon />}>
              View All Projects{" "}
            </Button>
          </Link>
        </HStack>
      </BlockContainer>
    </Box>
  );
};

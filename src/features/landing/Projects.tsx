import { Box, Button, HStack } from "@chakra-ui/react";

import { BlockContainer } from "@/components/layout/BlockContainer";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { FunctionComponent } from "react";
import Link from "next/link";
import { ProjectContent } from "@/lib/types";
import { ProjectPreviewCard } from "@/components/ProjectPreviewCard";
import { SectionHeader } from "@/components/SectionHeader";
import { map } from "lodash";

export const Projects: FunctionComponent<{
  data: ProjectContent[];
}> = ({ data: projects }) => {
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
          {map(projects, (project) => (
            <ProjectPreviewCard key={project.slug.current} project={project} />
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

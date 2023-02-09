import { Box, Flex, Stack } from "@chakra-ui/react";

import { BlockContainer } from "@/components/layout/BlockContainer";
import { ContactForm } from "@/components/ContactForm";
import { FunctionComponent } from "react";
import { SectionHeader } from "@/components/SectionHeader";

// ! TODO:  HANDLE SUBMIT

export const Contact: FunctionComponent = () => {
  return (
    <BlockContainer w={"full"} minH={"auto"}>
      <Stack
        spacing={{
          base: 10,
          md: 20,
        }}
      >
        <SectionHeader
          title="Lets talk about your next project"
          slogan="Expertly designed, Expertly created"
        />
        <Flex
          w={"full"}
          placeContent={"center"}
          placeItems={"center"}
          bg={"backgrounds.dark.200"}
          borderRadius={"xl"}
          py={{
            base: 5,
            md: 10,
          }}
        >
          <ContactForm colorVariant={"secondary"} />
        </Flex>
      </Stack>
    </BlockContainer>
  );
};

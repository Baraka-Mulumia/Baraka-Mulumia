import { Box, BoxProps, Container, Stack } from "@chakra-ui/react";
import { FunctionComponent, PropsWithChildren } from "react";

export const BlockContainer: FunctionComponent<PropsWithChildren<BoxProps>> = ({
  children,
  ...props
}) => {
  return (
    <Box
      as={"section"}
      w={"full"}
      minH={"80vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      {...props}
    >
      <Container maxW={"container.xl"} h={"full"}>
        <Stack spacing={8} py={8} h={"full"}>
          {children}
        </Stack>
      </Container>
    </Box>
  );
};

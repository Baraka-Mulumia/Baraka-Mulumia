import { Box, BoxProps, Container, Stack } from "@chakra-ui/react";
import { FunctionComponent, PropsWithChildren } from "react";

type BlockContainerProps = BoxProps & {
  innerSpacingY?: number;
};

export const BlockContainer: FunctionComponent<
  PropsWithChildren<BlockContainerProps>
> = ({ children, innerSpacingY = 8, ...props }) => {
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
        <Stack spacing={8} py={innerSpacingY} h={"full"}>
          {children}
        </Stack>
      </Container>
    </Box>
  );
};

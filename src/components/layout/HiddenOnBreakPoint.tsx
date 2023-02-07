import { Box, BoxProps } from "@chakra-ui/react";
import { FunctionComponent, PropsWithChildren } from "react";

export const HiddenOnBreakPoint: FunctionComponent<
  PropsWithChildren<
    BoxProps & {
      breakpoint: string;
    }
  >
> = ({ breakpoint, children, ...props }) => {
  return (
    <Box display={{ base: "block", [breakpoint]: "none" }} {...props}>
      {children}
    </Box>
  );
};

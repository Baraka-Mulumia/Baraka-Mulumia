import { Box, BoxProps } from "@chakra-ui/react";
import { FunctionComponent, PropsWithChildren } from "react";

export const VisibleOnBreakPoint: FunctionComponent<
  PropsWithChildren<
    BoxProps & {
      breakpoint: string;
    }
  >
> = ({ breakpoint, children, ...props }) => {
  return (
    <Box display={{ base: "none", [breakpoint]: "block" }} {...props}>
      {children}
    </Box>
  );
};

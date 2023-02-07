import { Box, Text } from "@chakra-ui/react";

import { AnimatedBottomBorder } from "../AnimatedBottomBorder";
import { FunctionComponent } from "react";
import Link from "next/link";

export const Branding: FunctionComponent = () => {
  return (
    <Link href={"/"}>
      <AnimatedBottomBorder>
        <Text
          as={"h1"}
          fontFamily={"heading"}
          fontWeight={"bold"}
          fontSize={{
            base: "xl",
            md: "2xl",
          }}
        >
          Baraka M. Mulumia
        </Text>
      </AnimatedBottomBorder>
    </Link>
  );
};

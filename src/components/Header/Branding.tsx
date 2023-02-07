import { Box, Text, useColorModeValue } from "@chakra-ui/react";

import { AnimatedBottomBorder } from "../AnimatedBottomBorder";
import { FunctionComponent } from "react";
import Link from "next/link";

export const Branding: FunctionComponent = () => {
  const headingColor = useColorModeValue(
    "text.light.headings",
    "text.dark.headings"
  );

  return (
    <Link href={"/"}>
      <AnimatedBottomBorder>
        <Text
          as={"h1"}
          fontFamily={"heading"}
          fontWeight={700}
          fontSize={{
            base: "xl",
            md: "2xl",
          }}
          color={headingColor}
        >
          Baraka M. Mulumia
        </Text>
      </AnimatedBottomBorder>
    </Link>
  );
};

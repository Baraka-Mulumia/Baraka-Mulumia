import React, { FunctionComponent } from "react";

import { Button } from "@chakra-ui/react";
import Link from "next/link";

export const ReadBlogButton: FunctionComponent = () => {
  return (
    <Link href="/blog">
      <Button
        colorScheme={"red"}
        rounded={"full"}
        variant={"outline"}
        fontWeight={"medium"}
        fontSize={"sm"}
        px={6}
        _hover={{
          bg: "#EA3A60",
          color: "white",
        }}
      >
        My Blog
      </Button>
    </Link>
  );
};

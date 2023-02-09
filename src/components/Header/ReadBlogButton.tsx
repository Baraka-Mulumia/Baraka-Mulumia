import React, { FunctionComponent } from "react";

import { Button } from "@chakra-ui/react";
import Link from "next/link";

export const ReadBlogButton: FunctionComponent = () => {
  return (
    <Link href="/blog">
      <Button variant={"primaryOutline"}>Blog</Button>
    </Link>
  );
};

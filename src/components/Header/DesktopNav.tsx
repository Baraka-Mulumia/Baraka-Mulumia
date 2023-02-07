import { HStack, Text } from "@chakra-ui/react";

import { AnimatedBottomBorder } from "../AnimatedBottomBorder";
import { FunctionComponent } from "react";
import Link from "next/link";
import { map } from "lodash";
import { navLinkList } from "@/data/navlinklist";

type DesktopNavItemProps = {
  label: string;
  path: string;
};

export const DesktopNavItem: FunctionComponent<DesktopNavItemProps> = ({
  label,
  path,
}) => (
  <Link href={path}>
    <AnimatedBottomBorder
      minW={"24"}
      placeItems={"center"}
      placeContent={"center"}
      cursor={"pointer"}
    >
      <Text>{label}</Text>
    </AnimatedBottomBorder>
  </Link>
);

export const DesktopNav = () => {
  return (
    <HStack alignItems={"center"}>
      {map(navLinkList, (item) => (
        <DesktopNavItem label={item.name} key={item.href} path={item.href} />
      ))}
    </HStack>
  );
};

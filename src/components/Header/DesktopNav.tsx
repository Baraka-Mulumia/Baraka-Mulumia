import { HStack, Text } from "@chakra-ui/react";

import { AnimatedBottomBorder } from "../AnimatedBottomBorder";
import { FunctionComponent } from "react";
import Link from "next/link";
import { map } from "lodash";
import { navigationLinks } from "@/data/navigation-links";

type DesktopNavItemProps = {
  label: string;
  path: string;
  isWhite?: boolean;
};

export const DesktopNavItem: FunctionComponent<DesktopNavItemProps> = ({
  label,
  path,
  isWhite = false,
}) => (
  <Link href={path}>
    <AnimatedBottomBorder
      minW={"24"}
      placeItems={"center"}
      placeContent={"center"}
      cursor={"pointer"}
    >
      <Text variant={isWhite ? "text_white" : "primary"}>{label}</Text>
    </AnimatedBottomBorder>
  </Link>
);

export const DesktopNav = () => {
  return (
    <HStack alignItems={"center"}>
      {map(navigationLinks, (item) => (
        <DesktopNavItem label={item.name} key={item.href} path={item.href} />
      ))}
    </HStack>
  );
};

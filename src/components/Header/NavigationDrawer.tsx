import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Stack,
  Text,
  VStack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import { Branding } from "./Branding";
import { FunctionComponent } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { ReadBlogButton } from "./ReadBlogButton";
import { map } from "lodash";
import { navigationLinks } from "@/data/navigation-links";

type MobileNavItemProps = {
  label: string;
  href: string;
  onClick?: () => void;
};

const MobileNavItem: FunctionComponent<MobileNavItemProps> = ({
  label,
  href,
  onClick,
}) => {
  return (
    <Link href={href}>
      <Stack placeContent={"center"} py={2} w={"100%"} onClick={onClick}>
        <Text>{label}</Text>
      </Stack>
    </Link>
  );
};

export const NavigationDrawer: FunctionComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dividerCOlor = useColorModeValue(
    "primary.light.300",
    "primary.dark.300"
  );

  const drawerBg = useColorModeValue("primary.light.100", "primary.dark.100");

  return (
    <>
      <IconButton
        aria-label="open drawer"
        rounded="md"
        onClick={onOpen}
        _focus={{
          boxShadow: "none",
        }}
        bg={"transparent"}
        icon={<HamburgerIcon fontSize={"2xl"} />}
      />

      <Drawer
        placement={"left"}
        onClose={onClose}
        isOpen={isOpen}
        isFullHeight={true}
      >
        <DrawerOverlay />
        <DrawerContent bg={drawerBg}>
          <DrawerHeader borderBottomWidth="1px">
            <Branding />
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody>
            <VStack
              divider={<Divider borderColor={dividerCOlor} />}
              spacing={4}
              align="stretch"
            >
              {map(navigationLinks, (navLink) => (
                <MobileNavItem
                  key={navLink.name}
                  label={navLink.name}
                  href={navLink.href}
                  onClick={onClose}
                />
              ))}
              <Stack
                justifySelf={"center"}
                placeContent={"center"}
                alignItems={"center"}
                py={2}
                mt={10}
              >
                <ReadBlogButton />
              </Stack>
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <Text fontSize={"xs"}>Expertly designed, expertly delivered</Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

import {
    Avatar,
    Box,
    Button,
    Divider,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    IconButton,
    Text,
    VStack,
    useColorModeValue,
    useDisclosure,
} from "@chakra-ui/react";
import { MdMenu, MdOutlineClose } from "react-icons/md";
import { useEffect, useRef, useState } from "react";

import Link from "next/link";
import NavContainer from "./subcomponents/NavContainer";
import ThemeToggleIcon from "./subcomponents/ThemeToggleIcon";

const navItems = ["Home", "About Me", "Projects", "Lets Connect"];

function SideBar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const iconColor = useColorModeValue("primary.dark.100", "primary.light.100");
    const drawerBg = useColorModeValue("backgrounds.light.100", "backgrounds.dark.100");
    const initialFocusRef = useRef();
    return (
        <>
            <IconButton
                aria-label={"open drawer menu"}
                variant={"transparent"}
                color={iconColor}
                icon={<MdMenu size={32} />}
                onClick={onOpen}
            />
            <Drawer
                placement={"left"}
                onClose={onClose}
                isOpen={isOpen}
                initialFocusRef={initialFocusRef}
            >
                <DrawerOverlay />
                <DrawerContent bg={drawerBg}>
                    <DrawerHeader borderBottomWidth="1px">
                        <Flex justify={"space-between"} align={"center"}>
                            <Text ref={initialFocusRef} variant={"heading3"}>
                                Baraka Mulumia
                            </Text>
                            <Box>
                                <IconButton
                                    color={iconColor}
                                    icon={<MdOutlineClose size={24} />}
                                    aria-label={"close drawer menu"}
                                    variant={"transparent"}
                                    onClick={onClose}
                                />
                            </Box>
                        </Flex>
                    </DrawerHeader>
                    <DrawerBody p={0}>
                        <VStack w={"full"} align={"stretch"} p={3} spacing={3}>
                            {navItems.map((label, index) => (
                                <MobileNavItem label={label} key={label} index={index} />
                            ))}
                        </VStack>
                        <Divider />
                        <Flex pt={8} justify={"center"} align={"center"}>
                            <Link href={"/blog"}>
                                <a>
                                    <Button variant={"primary"}>My Blog</Button>
                                </a>
                            </Link>
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}

const MobileNavItem = ({ label, index }) => (
    <Box
        cursor={"pointer"}
        borderBottomWidth={index !== navItems.length - 1 ? "1px" : 0}
        py={2}
        borderBottomColor={"gray.300"}
    >
        <Text variant={"navLink"} fontWeight={500}>
            {label}
        </Text>
    </Box>
);

const DesktopNavItem = ({ label, index }) => {
    const primaryColor = useColorModeValue("primary.dark.100", "primary.light.100");
    return (
        <Box
            cursor={"pointer"}
            _hover={{
                _after: {
                    width: "100%",
                },
            }}
            _after={{
                content: "''",
                display: "block",
                width: 0,
                height: "2px",
                background: primaryColor,
                transition: "width .3s",
            }}
            py={1}
        >
            <Text variant={"navLink"} size={"lg"} fontWeight={400}>
                {label}
            </Text>
        </Box>
    );
};

const NavBar = () => {
    const secondaryNavBg = useColorModeValue("backgrounds.light.200", "backgrounds.dark.200");
    const primaryNavBg = useColorModeValue("backgrounds.light.100", "backgrounds.dark.100");

    return (
        <NavContainer primaryBgColor={primaryNavBg} secondaryBgColor={secondaryNavBg}>
            <Flex
                align={"center"}
                justify={"space-between"}
                p={2}
                w={"100%"}
                h={"80px"}
                mx={"auto"}
                maxW={"1280px"}
            >
                <Box display={{ base: "block", md: "none" }} zIndex={1001}>
                    <SideBar />
                </Box>
                <Flex align={"center"}>
                    <Avatar
                        src={"/image-assets/03-Baraka-Mulumia.png"}
                        title={"Baraka Mulumia"}
                        size={"sm"}
                    />
                    <Box display={{ base: "none", md: "block" }}>
                        <Text variant={"heading3"}>Baraka</Text>
                    </Box>
                </Flex>
                <Flex justify={"center"} gap={2} display={{ base: "none", md: "flex" }}>
                    {navItems.slice(1).map((label, index) => (
                        <DesktopNavItem label={label} index={index} key={label + "desktop"} />
                    ))}
                </Flex>

                <Flex gap={4}>
                    <ThemeToggleIcon />
                    <Flex
                        justify={"center"}
                        align={"center"}
                        display={{ base: "none", md: "flex" }}
                    >
                        <Link href={"/blog"}>
                            <a>
                                <Button variant={"primary"}>
                                    <Text variant={"cWhite"}>My Blog</Text>
                                </Button>
                            </a>
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
        </NavContainer>
    );
};

export default NavBar;

import { createBreakpoints, darken, mode, transparentize, whiten } from "@chakra-ui/theme-tools";

import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: "light",
    useSystemColorMode: true,
};

const breakpoints = createBreakpoints({
    sm: "360px",
    sxm: "480px",
    md: "640px",
    mxd: "800px",
    xl: "1024px",
    xxl: "1280px",
    xxxl: "1440px",
});

const colors = {
    primary: {
        light: {
            _000: "#FFFFFF",
            100: "#FFFFEF",
            200: "#FBFBFF",
            300: "#733D47",
        },
        dark: {
            _000: "#000000",
            100: "#0D1321",
            200: "#330C2F",
            300: "#BF9B9B",
        },
    },
    text: {
        light: {
            headings: "#2D3748",
            body: "#4A5568",
            captions: "#330C2F",
            subtext: "#4A5568",
            disabled: "#EAE0D5",
        },
        dark: {
            headings: "#FEF9EF",
            body: "#EDF2F7",
            captions: "#FBFBFF",
            subtext: "#A0AEC0",
            disabled: "#565264",
        },
    },
    backgrounds: {
        light: {
            _000: "#FFFFFF",
            100: "#FFFFEF",
            200: "#FAF5E4",
        },
        dark: {
            _000: "#000000",
            100: "#0d1117",
            200: "#330C2F",
        },
    },
};

const components = {
    Text: {
        baseStyle: {
            p: 2,
            fontWeight: 400,
        },
        variants: {
            subtext: (props) => ({
                color: mode("text.light.subtext", "text.dark.subtext")(props),
                fontSize: "12px",
            }),
            h3: (props) => ({
                color: mode("text.light.captions", "text.dark.captions")(props),
            }),
            h2: (props) => ({
                color: mode("text.light.headings", "text.dark.headings")(props),
                fontSize: "14px",
                fontWeight: "bold",
            }),
            h1: (props) => ({
                color: mode("text.light.headings", "text.dark.headings")(props),
                fontSize: "14px",
            }),
            cBlackWhite: (props) => ({
                color: mode("primary.dark._000", "primary.light._000")(props),
            }),
            cWhiteBlack: (props) => ({
                color: mode("primary.light._000", "primary.dark._000")(props),
            }),
            cBlack: (props) => ({
                color: mode("primary.dark._000", "primary.dark._000")(props),
            }),
            cWhite: (props) => ({
                color: mode("primary.light._000", "primary.light._000")(props),
            }),
            textCaption: (props) => ({
                color: mode("text.light.captions", "text.dark.captions")(props),
            }),
            navLink: (props) => ({
                color: mode("text.light.body", "text.dark.body")(props),
                _hover: {
                    color: mode("primary.dark.100", "primary.light.100")(props),
                    fontWeight: 500,
                },
            }),

            heading1: (props) => ({
                color: mode("text.light.headings", "text.dark.headings")(props),
                fontSize: "2.25rem",
                fontWeight: 700,
            }),
            heading2: (props) => ({
                color: mode("text.light.headings", "text.dark.headings")(props),
                fontSize: "1.875rem",
                fontWeight: 600,
            }),
            heading3: (props) => ({
                color: mode("text.light.headings", "text.dark.headings")(props),
                fontSize: "1.125rem",
                fontWeight: 600,
            }),

            textDisabled: (props) => ({
                color: mode("text.light.disabled", "text.dark.disabled")(props),
            }),
            textPrimary: (props) => ({
                color: mode("text.light.body", "text.dark.body")(props),
            }),
            textSecondary: (props) => ({
                color: mode("text.light.subtext", "text.dark.subtext")(props),
            }),
        },

        sizes: {
            "2xs": {
                fontSize: "10px",
                lineHeight: "12.1px",
            },
            xs: {
                fontSize: "12px",
                lineHeight: "14.5px",
            },
            sm: {
                fontSize: "14px",
                lineHeight: "17px",
            },
            md: {
                fontSize: "15px",
                lineHeight: "18px",
            },
            lg: {
                fontSize: "16px",
                lineHeight: "19.5px",
            },
            xl: {
                fontSize: "18px",
                lineHeight: "22px",
            },
            "2xl": {
                fontSize: "20px",
                lineHeight: "24px",
            },
            "3xl": {
                fontSize: "24px",
                lineHeight: "29px",
            },
            "4xl": {
                fontSize: "28px",
                lineHeight: "34px",
            },
            "5xl": {
                fontSize: "32px",
                lineHeight: "39px",
            },
        },
    },
    Button: {
        baseStyle: (props) => ({
            bg: mode("primary.light.300", "primary.dark.300")(props),
            color: mode("primary.light._000", "primary.dark._000")(props),
            fontSize: "18px",
            h: "32px",
            p: "5px 10px",
            borderRadius: "5px",

            _hover: {
                bg: mode(darken("primary.light.300", 10), whiten("primary.dark.300", 10))(props),
            },
            _focus: {
                bg: {
                    md: mode(
                        darken("primary.light._000", 20),
                        whiten("primary.dark._000", 30)
                    )(props),
                },
                outline: "none",
                boxShadow: "none",
            },
        }),
        sizes: {
            sm: {
                h: "43px",
            },
            sxm: {
                minWidth: "72px",
                fontSize: "14px",
                fontWeight: "normal",
            },
            md: {
                fontSize: "16px",
                fontWeight: "500",
                fontStyle: "normal",
            },
        },
        variants: {
            primary: (props) => ({
                fill: mode("primary.light._000", "primary.dark._000")(props),
            }),
            secondary: (props) => ({
                bg: "transparent",
                border: "1px solid",
                borderColor: mode("primary.light.300", "primary.dark.300")(props),
                color: mode("primary.light.300", "primary.dark.300")(props),
                _hover: {
                    bg: mode(
                        whiten("primary.light.100", 70),
                        whiten("backgrounds.dark.100", 20)
                    )(props),
                },
            }),
            primary_ghost: (props) => ({
                bg: "transparent",
                border: "none",
                color: mode("primary.light.200", "primary.dark.200")(props),
                _hover: {
                    bg: transparentize(mode("primary.light.200", "primary.dark.200")(props), 0.3),
                },
            }),
            primary_light: (props) => ({
                bg: transparentize(mode("primary.light.300", "primary.dark.300")(props), 0.1),
                border: "none",
                color: mode("primary.light.300", "primary.dark.300")(props),
                _hover: {
                    bg: transparentize(mode("primary.light.300", "primary.dark.300")(props), 0.3),
                },
            }),
            secondary_light: (props) => ({
                bg: transparentize(mode("primary.light.300", "primary.dark.300")(props), 0.4),
                border: "none",
                borderColor: mode("primary.light.300", "primary.dark.300")(props),
                color: mode("primary.light.300", "primary.dark.300")(props),
                _hover: {
                    bg: mode(
                        whiten("primary.light.100", 70),
                        whiten("backgrounds.dark.100", 20)
                    )(props),
                },
            }),
            sidebar_button: (props) => ({
                bg: "transparent",
                borderRadius: "10px",
                fill: mode("primary.dark.300", "primary.dark.300")(props),
                _hover: {
                    bg: mode(darken("primary.dark.300", 20), whiten("primary.dark.300", 20))(props),
                    fill: "white",
                },
            }),
            active_sidebar_button: (props) => ({
                borderRadius: "10px",
                fill: mode("white", "black")(props),
                bg: mode("primary.light.300", "primary.dark.300")(props),
            }),
            transparent: (props) => ({
                bg: "transparent",
                _hover: {
                    bg: {
                        md: mode(
                            darken("primary.light._000", 20),
                            whiten("primary.dark._000", 30)
                        )(props),
                    },
                },
                _focus: {
                    bg: {
                        md: mode(
                            darken("primary.light._000", 20),
                            whiten("primary.dark._000", 30)
                        )(props),
                    },
                    boxShadow: "none",
                },
            }),
            transparent_nav_a: (props) => ({
                bg: "transparent",
                color: mode("primary.light.300", "primary.dark.300")(props),
                borderRadius: 0,
                h: "full",
                fill: mode("primary.light.300", "primary.dark.300")(props),
                stroke: mode("primary.light.300", "primary.dark.300")(props),
                _hover: {
                    bg: {
                        md: mode(
                            darken("primary.light._000", 10),
                            whiten("backgrounds.dark._000", 20)
                        )(props),
                    },
                },
            }),
        },
    },
};

const theme = extendTheme({
    config,
    breakpoints,
    colors,
    components,
    styles: {
        global: (props) => ({
            body: {
                color: (props) => mode("text.light.body", "text.dark.body")(props),
                bg: mode("backgrounds.light.100", "backgrounds.dark.100")(props),
                fontFamily: "'Inter', sans-serif",
            },
        }),
    },
});

export default theme;

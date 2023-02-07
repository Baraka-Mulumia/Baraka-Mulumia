import { Inter, Nunito } from "@next/font/google";

import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

const nunito = Nunito({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const theme = extendTheme({
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  },

  breakpoints: {
    sm: "360px",
    sxm: "480px",
    md: "640px",
    mxd: "768px",
    xxmd: "840px",
    lg: "992px",
    xl: "1024px",
    xxl: "1280px",
    xxxl: "1440px",
  },

  colors: {
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
        primary: "#733D47",
        headings: "#2D3748",
        body: "#000000eb",
        captions: "#330C2F",
        subtext: "#4A5568",
        disabled: "#EAE0D5",
      },
      dark: {
        primary: "#F7FAFC",
        headings: "#FEF9EF",
        body: "#EDF2F7",
        captions: "#FBFBFF",
        subtext: "#A0AEC0",
        disabled: "#565264",
      },
    },
    backgrounds: {
      light: {
        "000": "#FFFFFF",
        100: "#F7FAFC",
        200: "#FAF5E4",
      },
      dark: {
        "000": "#000000",
        100: "#0d1117",
        200: "#1A202C",
      },
    },
  },
  fonts: {
    body: inter.style.fontFamily,
    heading: nunito.style.fontFamily,
    subtext: nunito.style.fontFamily,
  },

  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: (props: StyleFunctionProps) =>
          mode("text.light.primary", "text.dark.primary")(props),
        bg: (props: StyleFunctionProps) =>
          mode("backgrounds.dark.200", "backgrounds.light.200")(props),
      },
    }),
  },
});

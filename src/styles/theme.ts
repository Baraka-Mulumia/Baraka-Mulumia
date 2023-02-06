import { Inter, Nunito } from "@next/font/google";

import { extendTheme } from "@chakra-ui/react";

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
    initialColorMode: "light",
    useSystemColorMode: false,
  },

  colors: {},
  fonts: {
    body: inter.style.fontFamily,
    heading: nunito.style.fontFamily,
    subtext: nunito.style.fontFamily,
  },

  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "gray.800",
      },
    },
  },
});

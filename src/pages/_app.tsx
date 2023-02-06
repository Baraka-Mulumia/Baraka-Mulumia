import { AppHead } from "@/components/AppHead";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AppHead />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

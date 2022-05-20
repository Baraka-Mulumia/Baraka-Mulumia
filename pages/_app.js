import { ChakraProvider } from "@chakra-ui/react";
import CustomHead from "../components/subcomponents/CustomHead";
import theme from "../lib/theme";

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <CustomHead />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;

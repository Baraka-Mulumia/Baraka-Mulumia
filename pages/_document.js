import Document, { Head, Html, Main, NextScript } from "next/document";

import { ColorModeScript } from "@chakra-ui/react";
import createCache from "@emotion/cache";
import createEmotionServer from "@emotion/server/create-instance";

const emotionCache = createCache({
    key: "css",
});

const APP_NAME = "Baraka-Mulumia";

const { extractCritical } = createEmotionServer(emotionCache);

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        const styles = extractCritical(initialProps.html);
        return {
            ...initialProps,
            styles: [
                initialProps.styles,
                <style
                    key="emotion-css"
                    dangerouslySetInnerHTML={{ __html: styles.css }}
                    data-emotion-css={styles.ids.join(" ")}
                />,
            ],
        };
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="UTF-8" key="charset" />
                    <meta name="application-name" content={APP_NAME} />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                    <meta name="apple-mobile-web-app-title" content={APP_NAME} />

                    <meta name="mobile-web-app-capable" content="yes" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"} />
                    <link
                        href={
                            "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;500;600;700;800;900&display=swap"
                        }
                        rel={"stylesheet"}
                    />
                    <link
                        href={
                            "https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
                        }
                        rel={"stylesheet"}
                    />
                </Head>
                <body>
                    <ColorModeScript initialColorMode={"system"} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;

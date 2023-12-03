import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

import { Analytics } from '@vercel/analytics/react';
import { ColorModeScript } from '@chakra-ui/react';
import createCache from '@emotion/cache';
import createEmotionServer from '@emotion/server/create-instance';
import theme from '@/config/theme';

const emotionKey = 'emotion-css';

const emotionCache = createCache({
  key: emotionKey,
});

const APP_NAME = 'Baraka Mulumia';

const { extractCritical } = createEmotionServer(emotionCache);

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const styles = extractCritical(initialProps.html);
    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <style
          key={emotionKey}
          dangerouslySetInnerHTML={{ __html: styles.css }}
          data-emotion-css={styles.ids.join(' ')}
        />,
      ],
    };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='UTF-8' key='charset' />
          <meta name='application-name' content={APP_NAME} />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='default'
          />
          <meta name='apple-mobile-web-app-title' content={APP_NAME} />

          <meta name='mobile-web-app-capable' content='yes' />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
          <Analytics />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

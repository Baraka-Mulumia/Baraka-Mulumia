import theme, { appFont } from '@/config/theme';

import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { NotificationProvider } from '@/providers/Notification.provider';
import SEO from '@/components/SEO';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <SEO />
        <NotificationProvider>
          <main className={appFont.className}>
            <Component {...pageProps} />
          </main>
        </NotificationProvider>
      </ChakraProvider>
      <Analytics />
    </>
  );
}

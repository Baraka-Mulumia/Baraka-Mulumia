import '@/styles/globals.css';

import { AppHead } from '@/components/AppHead';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { NotificationProvider } from '@/providers/Notification.provider';
import { theme } from '@/styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AppHead />
      <NotificationProvider>
        <Component {...pageProps} />
      </NotificationProvider>
    </ChakraProvider>
  );
}

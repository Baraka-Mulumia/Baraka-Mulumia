import { DM_Sans } from 'next/font/google';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const appFont = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const theme = extendTheme({
  config: {
    initialColorMode: 'system',
    useSystemColorMode: true,
  },

  breakpoints: {
    sm: '360px',
    sxm: '480px',
    md: '640px',
    mxd: '768px',
    xxmd: '840px',
    lg: '992px',
    xl: '1024px',
    xxl: '1280px',
    xxxl: '1440px',
  },

  colors: {
    primary: {
      light: {
        '000': '#FFFFFF',
        100: '#FFFFEF',
        200: '#FBFBFF',
        300: '#733D47',
        400: '',
        red: ' #EA3A60',
      },
      dark: {
        '000': '#000000',
        100: '#0D1321',
        200: '#330C2F',
        300: '#BF9B9B',
        red: '#EA3A60',
      },
    },

    text: {
      light: {
        primary: '#733D47',
        headings: '#0F2137',
        subtext: '#02073E',
        captions: '#4A5568',
        disabled: '#EAE0D5',
      },
      dark: {
        primary: '#F7FAFC',
        headings: '#FEF9EF',
        subtext: '#A0AEC0',
        captions: '#FBFBFF',
        disabled: '#565264',
      },
    },
    backgrounds: {
      light: {
        '000': '#FFFFFF',
        100: '#F7FAFC',
        200: '#E2E8F0',
      },
      dark: {
        '000': '#000000',
        100: '#0d1117',
        200: '#171923',
      },
    },
  },
  fonts: {
    body: appFont.style.fontFamily,
    heading: appFont.style.fontFamily,
  },

  components: {
    Button: {
      baseStyle: {
        fontWeight: '500',
        borderRadius: '0.5rem',
        _focus: {
          boxShadow: 'none',
          outline: 'none',
        },
      },
      variants: {
        primary: (props: StyleFunctionProps) => ({
          bg: mode('primary.light.red', 'primary.dark.red')(props),
          color: mode('primary.light.000', 'primary.light.200')(props),
          fontWeight: '500',
          letterSpacing: '-0.15px',
          fontsize: '16px',
          linHeight: '24px',
          borderRadius: '48px',
          padding: '0.75rem 1.5rem',
          _active: {
            transform: 'scale(0.95)',
          },
        }),

        primaryOutline: (props: StyleFunctionProps) => ({
          bg: mode('primary.light.000', 'backgrounds.dark.100')(props),
          color: mode('primary.light.red', 'primary.dark.red')(props),
          fontWeight: '500',
          letterSpacing: '-0.15px',
          fontsize: '16px',
          linHeight: '24px',
          borderRadius: '48px',
          padding: '0.75rem 1.5rem',
          border: '1px solid',
          borderColor: mode('primary.light.red', 'primary.dark.red')(props),

          _hover: {
            bg: mode('primary.light.red', 'primary.dark.red')(props),
            color: mode('primary.light.000', 'primary.light.200')(props),
          },

          _active: {
            transform: 'scale(0.95)',
          },
        }),
      },
    },
    Text: {
      baseStyle: (props: StyleFunctionProps) => ({
        color: mode('text.light.primary', 'text.dark.primary')(props),
      }),

      variants: {
        headings: (props: StyleFunctionProps) => ({
          color: mode('text.light.headings', 'text.dark.headings')(props),
          fontWeight: '700',
          fontSize: '32px',
          lineHeight: '48px',
        }),
        text_white: (props: StyleFunctionProps) => ({
          color: mode('primary.light.000', 'primary.light.000')(props),
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '24px',
        }),
      },
    },
  },

  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        ...appFont.style,
        color: (props: StyleFunctionProps) =>
          mode('primary.light.300', 'text.dark.primary')(props),
        bg: mode('backgrounds.light.100', 'backgrounds.dark.100')(props),
      },
    }),
  },
});

export default theme;

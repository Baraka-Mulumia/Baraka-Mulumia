import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';

import { ExternalLink } from '@/components/ExternalLink';
import Image from 'next/image';
import { PortableTextComponents } from '@portabletext/react';
import { SanityAsset } from '@sanity/image-url/lib/types/types';
import sanityAPI from '.';

const PTComponents: PortableTextComponents = {
  types: {
    image: ({ value }: { value: SanityAsset }) => {
      if (!value?.asset?._ref) {
        return null;
      }

      return (
        <Box
          position={'relative'}
          w={'80%'}
          h={'400px'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          alignSelf={'center'}>
          <Image
            alt={value.alt || ' '}
            loading='lazy'
            className='rounded-lg'
            src={sanityAPI.urlFor(value.asset).url()}
            fill
          />
        </Box>
      );
    },
  },
  marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    em: ({ children }) => {
      const emphasisColor = useColorModeValue('gray.500', 'gray.300');

      return (
        <Text
          as={'em'}
          fontWeight='500'
          fontStyle='italic'
          color={emphasisColor}>
          {children}
        </Text>
      );
    },

    // Ex. 2: rendering a custom `link` annotation
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http')
        ? '_blank'
        : undefined;

      const linkColor = useColorModeValue('blue.500', 'blue.300');

      return (
        <ExternalLink
          href={value?.href}
          target={target}
          color={linkColor}
          rel={target === '_blank' ? 'noindex nofollow' : ''}>
          {children}
        </ExternalLink>
      );
    },
  },

  block: {
    h1: ({ children }) => (
      <Heading
        as={'h1'}
        maxW={'container.lg'}
        fontSize={{
          base: '2xl',
          md: '4xl',
        }}
        textTransform={'capitalize'}>
        {children}
      </Heading>
    ),
    h2: ({ children }) => (
      <Heading
        as={'h2'}
        maxW={'container.lg'}
        fontSize={{
          base: '2xl',
          md: '4xl',
        }}
        textTransform={'capitalize'}>
        {children}
      </Heading>
    ),
    h3: ({ children }) => (
      <Heading
        as={'h3'}
        maxW={'container.lg'}
        fontSize={{
          base: 'xl',
          md: '2xl',
        }}
        textTransform={'capitalize'}>
        {children}
      </Heading>
    ),
    h4: ({ children }) => (
      <Heading as={'h4'} maxW={'container.lg'} textTransform={'capitalize'}>
        {children}
      </Heading>
    ),
    normal: ({ children }) => (
      <Text
        fontSize={{
          base: 'lg',
          md: 'xl',
        }}
        lineHeight={'tall'}>
        {children}
      </Text>
    ),
  },
};

export default PTComponents;

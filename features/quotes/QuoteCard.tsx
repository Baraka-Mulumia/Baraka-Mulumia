import { Box, Stack, useColorModeValue } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';

import AppText from '@/components/AppText';
import { ExternalLink } from '@/components/ExternalLink';
import { ImQuotesLeft } from 'react-icons/im';
import Link from 'next/link';
import { QUOTE_ICON_COLORS } from '@/constants';
import { Quote } from '@/types';
import { getRandomNumber } from '@/lib/functions';

const QuoteCard: FunctionComponent<{
  quote: Quote | null;
  isPreview?: boolean;
}> = ({ quote, isPreview = false }) => {
  const iconCOlor =
    QUOTE_ICON_COLORS[getRandomNumber(0, QUOTE_ICON_COLORS.length - 1)];

  const authorColor = useColorModeValue('blue.500', 'blue.200');
  const cardBgColor = useColorModeValue('white', 'gray.800');

  const Author = (
    <AppText
      fontSize={{
        base: 'sm',
        md: 'md',
      }}
      color={authorColor}
      textTransform='uppercase'>
      - {quote?.author}
    </AppText>
  );

  return (
    <Stack
      maxW={'xl'}
      p={{
        base: '6',
        md: '10',
      }}
      height={'fit-content'}
      spacing={4}
      borderRadius={'16px'}
      bgColor={cardBgColor}
      boxShadow={'0 0 10px rgba(0,0,0,0.1)'}
      _hover={{
        boxShadow: '0 0 20px rgba(0,0,0,0.2)',
        transform: 'scale(1.02) translateY(-2px)',
      }}>
      <Box>
        <ImQuotesLeft fontSize='80px' fontWeight='bold' color={iconCOlor} />
      </Box>
      {isPreview ? (
        <Link href={`/favorite-quotes`}>
          <AppText
            fontSize={{
              base: 'lg',
              md: 'xl',
            }}>
            {quote?.quote}
          </AppText>
        </Link>
      ) : (
        <AppText
          fontSize={{
            base: 'lg',
            md: 'xl',
          }}>
          {quote?.quote}
        </AppText>
      )}
      {quote?.author && (
        <>
          {quote?.source ? (
            <ExternalLink href={quote?.source}>{Author}</ExternalLink>
          ) : (
            Author
          )}
        </>
      )}
    </Stack>
  );
};

export default QuoteCard;

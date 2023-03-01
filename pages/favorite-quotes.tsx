import { Header } from '@/components/header';
import { NextPage } from 'next';
import { PageHeroSection } from '@/components/PageHeroSection';
import { PageWrapper } from '@/containers/PageWrapper';
import { Quote } from '@/types';
import QuoteCard from '@/features/quotes/QuoteCard';
import React from 'react';
import { Stack } from '@chakra-ui/react';
import { map } from 'lodash';
import sanityAPI from '@/sanityAPI';

export async function getStaticProps() {
  const { data } = await sanityAPI.getQuotes();

  if (!data) {
    return {
      quotes: [],
    };
  }

  return {
    props: {
      quotes: data,
      revalidate: 600,
    },
  };
}

const FavoriteQuotesPage: NextPage<{
  quotes: Quote[];
}> = ({ quotes }) => {
  return (
    <PageWrapper Nav={Header}>
      <PageHeroSection
        heading='Inspiring Quotes to Empower Your Mind and Soul'
        leadText=' Delve into the wisdom of great thinkers, visionaries, and leaders to fuel your inner fire and unlock your full potential.'
      />

      <Stack
        direction={{
          base: 'column',
          md: 'row',
        }}
        gap={4}
        spacing={4}
        p={{
          base: '6',
          md: '10',
        }}
        flexWrap='wrap'
        justifyContent='center'>
        {map(quotes, quote => (
          <QuoteCard key={quote._id} quote={quote} />
        ))}
      </Stack>
    </PageWrapper>
  );
};

export default FavoriteQuotesPage;

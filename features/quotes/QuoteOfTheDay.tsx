import { Flex, SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/react';
import React, { FunctionComponent, useEffect, useState } from 'react';

import { Quote } from '@/types';
import QuoteCard from './QuoteCard';
import sanityAPI from '@/sanityAPI';

const QuoteOfTheDay: FunctionComponent = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [isLoading, setLoading] = useState(true);

  const getQuote = async () => {
    setLoading(true);
    const { data } = await sanityAPI.getRandomQuote();
    setQuote(data);
    setLoading(false);
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      p={{
        base: '10',
        md: '20',
      }}>
      {isLoading ? (
        <QuoteLoadingSkeleton />
      ) : (
        <QuoteCard quote={quote} isPreview={true} />
      )}
    </Flex>
  );
};

const QuoteLoadingSkeleton: FunctionComponent = () => {
  return (
    <Stack
      w={'lg'}
      p={4}
      spacing={8}
      borderRadius={'16px'}
      boxShadow={'0 0 10px rgba(0,0,0,0.1)'}>
      <SkeletonCircle size={'10'} />
      <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight={'16px'} />
      <SkeletonText mt='4' noOfLines={1} w={10} skeletonHeight={'16px'} />
    </Stack>
  );
};

export default QuoteOfTheDay;

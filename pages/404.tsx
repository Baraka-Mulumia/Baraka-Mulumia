import { Container } from '@chakra-ui/react';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/header';
import { NextPage } from 'next';
import PageNotFound from '@/components/PageNotFound';
import { PageWrapper } from '@/containers/PageWrapper';

const _404Page: NextPage = () => {
  return (
    <PageWrapper Nav={Header}>
      <Container maxW={'7xl'} p='12'>
        <PageNotFound />
      </Container>
      <Footer />
    </PageWrapper>
  );
};

export default _404Page;

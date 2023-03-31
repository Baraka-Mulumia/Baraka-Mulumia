import { Container, Flex, Heading, Stack } from '@chakra-ui/react';

import { BlockContainer } from '@/containers/BlockContainer';
import { BlogPost } from '@/types';
import { Footer } from '@/components/Footer';
import Head from 'next/head';
import { Header } from '@/components/header';
import Image from 'next/image';
import { NextPage } from 'next';
import PTComponents from '@/sanityAPI/PTComponents';
import { PageWrapper } from '@/containers/PageWrapper';
import { PortableText } from '@portabletext/react';
import QuoteOfTheDay from '@/features/quotes/QuoteOfTheDay';
import { map } from 'lodash';
import sanityAPI from '@/sanityAPI';

export async function getStaticPaths() {
  const { data: paths, error } = await sanityAPI.getSlugs('post');

  if (error) {
    return {
      paths: [],
      fallback: false,
    };
  }
  return {
    paths:
      paths &&
      map(paths, ({ slug }) => ({
        params: { slug: slug?.current },
      })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: any) {
  const { data: post } = await sanityAPI.getBlogPostBySlug(slug);

  if (!post) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  return {
    props: {
      post,
    },
  };
}

type ReadBlogPostPageProps = {
  post: BlogPost;
};

const ReadBlogPostPage: NextPage<ReadBlogPostPageProps> = ({ post }) => {
  return (
    <>
      <Head>
        <meta name={'description'} content={post.title} />
      </Head>

      <PageWrapper Nav={Header}>
        <BlockContainer>
          <Stack
            justifyContent={'center'}
            alignItems={'center'}
            spacing={{
              base: '1rem',
              md: '2rem',
            }}>
            <Heading
              as={'h1'}
              maxW={'container.lg'}
              fontSize={{
                base: '2xl',
                md: '4xl',
              }}
              textTransform={'capitalize'}>
              {post.title}
            </Heading>
            <Flex
              position={'relative'}
              h={{
                base: '300px',
                md: '500px',
              }}
              w={'100%'}
              maxW={'container.lg'}>
              <Image
                src={post.mainImage.asset.url}
                alt={post.title}
                fill
                style={{
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  borderRadius: '10px',
                }}
              />
            </Flex>

            <Container maxW={'container.lg'}>
              <Stack
                textAlign={{
                  md: 'justify',
                }}
                spacing={4}>
                <PortableText value={post.body} components={PTComponents} />
              </Stack>
            </Container>
          </Stack>
        </BlockContainer>
        <QuoteOfTheDay />
        <Footer />
      </PageWrapper>
    </>
  );
};

export default ReadBlogPostPage;

import { Box, Container, Flex, Heading, Stack } from '@chakra-ui/react';

import { BlockContainer } from '@/containers/BlockContainer';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/header';
import Image from 'next/image';
import { NextPage } from 'next';
import { PageWrapper } from '@/containers/PageWrapper';
import { PortableText } from '@portabletext/react';
import { SanityAsset } from '@sanity/image-url/lib/types/types';
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
  post: any;
};

const ptComponents = {
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
};

const ReadBlogPostPage: NextPage<ReadBlogPostPageProps> = ({ post }) => {
  return (
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

          <Container maxW={'container.md'}>
            <Stack textAlign={'justify'}>
              <PortableText value={post.body} components={ptComponents} />
            </Stack>
          </Container>
        </Stack>
      </BlockContainer>

      <Footer />
    </PageWrapper>
  );
};

export default ReadBlogPostPage;

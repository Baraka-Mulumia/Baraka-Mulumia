import { Flex, Heading, Stack, Text } from "@chakra-ui/react";

import { BlockContainer } from "@/components/layout/BlockContainer";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/Header";
import Image from "next/image";
import { NextPage } from "next";
import { PageCOntentContainer } from "@/components/layout/PageCOntentContainer";
import { SanityClient } from "@/lib/sanityClient";
import { map } from "lodash";

const postSlugsQuery = `*[_type == "post"]{
  _id,
  slug,
}`;

export async function getStaticPaths() {
  const paths = await SanityClient.fetch(postSlugsQuery);

  return {
    paths: map(paths, ({ slug }) => ({
      params: { slug: slug.current },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: any) {
  const postQuery = `*[_type == "post" && slug.current == $slug][0]{
    title,
  excerpt,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  slug,
  author->{
    name,
    image {
      asset->{
        _id,
        url
      },
      alt
    }
  },
  _createdAt,
  publishedAt,
  categories[]->{
    title,
    slug
  },
  }`;

  const post = await SanityClient.fetch(postQuery, { slug });

  return {
    props: {
      post,
    },
  };
}

type ReadBlogPostPageProps = {
  post: any;
};

const ReadBlogPostPage: NextPage<ReadBlogPostPageProps> = ({ post }) => {
  return (
    <PageCOntentContainer Nav={Header}>
      <BlockContainer>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          spacing={{
            base: "1rem",
            md: "2rem",
          }}
        >
          <Heading
            as={"h1"}
            maxW={"container.lg"}
            fontSize={{
              base: "2xl",
              md: "4xl",
            }}
            textTransform={"capitalize"}
          >
            {post.title}
          </Heading>
          <Flex
            position={"relative"}
            h={{
              base: "300px",
              md: "500px",
            }}
            w={"100%"}
            maxW={"container.lg"}
          >
            <Image
              src={post.mainImage.asset.url}
              alt={post.title}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "top center",
                borderRadius: "10px",
              }}
            />
          </Flex>
          <Text>{post.excerpt}</Text>
        </Stack>
      </BlockContainer>

      <Footer />
    </PageCOntentContainer>
  );
};

export default ReadBlogPostPage;

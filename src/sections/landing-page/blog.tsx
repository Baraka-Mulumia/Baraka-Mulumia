import { Box, Button, Grid, GridItem, HStack, Stack } from "@chakra-ui/react";

import { BlockContainer } from "@/components/layout/BlockContainer";
import { BlogCard } from "@/components/BlogCard";
import { FunctionComponent } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { map } from "lodash";

const blogPosts = [
  {
    title: "How to work with prototype design with adobe xd featuring tools",
    description:
      "The 2019 Innovation by Design Awards honor the designers and businesses solving the problems of today and tomorrow. It is one of the most sought-after design",
    thumbnail: "/images/service-thumb.png",
    slug: "/blog",
  },
  {
    title: "How to work with prototype design with adobe xd featuring tools",
    description:
      "The 2019 Innovation by Design Awards honor the designers and businesses solving the problems of today and tomorrow. It is one of the most sought-after design",
    thumbnail: "/images/service-thumb.png",
    slug: "/blog",
  },
  {
    title: "How to work with prototype design with adobe xd featuring tools",
    description:
      "The 2019 Innovation by Design Awards honor the designers and businesses solving the problems of today and tomorrow. It is one of the most sought-after design",
    thumbnail: "/images/service-thumb.png",
    slug: "/blog",
  },
  {
    title: "How to work with prototype design with adobe xd featuring tools",
    description:
      "The 2019 Innovation by Design Awards honor the designers and businesses solving the problems of today and tomorrow. It is one of the most sought-after design",
    thumbnail: "/images/service-thumb.png",
    slug: "/blog",
  },
  {
    title: "How to work with prototype design with adobe xd featuring tools",
    description:
      "The 2019 Innovation by Design Awards honor the designers and businesses solving the problems of today and tomorrow. It is one of the most sought-after design",
    thumbnail: "/images/service-thumb.png",
    slug: "/blog",
  },
];

export const Blog: FunctionComponent = () => {
  const masonryOptions = {
    transitionDuration: 0,
  };

  const firstBlogPost = blogPosts[0];

  const middleBlogPosts = blogPosts.slice(1, blogPosts.length - 1);

  const lastBlogPost = blogPosts[blogPosts.length - 1];

  return (
    <Box as="section" id="blog" py="20" w={"full"}>
      <BlockContainer w={"full"}>
        <SectionHeader
          title="Read my latest articles"
          slogan="Code Chronicles News feed"
        />
        <Stack spacing={4}>
          <BlogCard size={"large"} {...firstBlogPost} />

          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
          >
            {map(middleBlogPosts, (post, index) => (
              <GridItem key={index}>
                <BlogCard size={"small"} {...post} />
              </GridItem>
            ))}
          </Grid>

          <BlogCard size={"large"} isReverse={true} {...lastBlogPost} />
        </Stack>
      </BlockContainer>
    </Box>
  );
};

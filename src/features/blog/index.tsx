import { Box, Grid, GridItem, Stack } from "@chakra-ui/react";

import { BlockContainer } from "@/components/layout/BlockContainer";
import { BlogPostCard } from "@/components/BlogPostCard";
import { FunctionComponent } from "react";
import { PostContent } from "@/lib/types";
import { map } from "lodash";

export const BlogPosts: FunctionComponent<{
  posts: PostContent[];
}> = ({ posts }) => {
  const firstBlogPost = posts[0];

  // const middleBlogPosts = posts.slice(1, posts.length - 1);

  // const lastBlogPost = posts[posts.length - 1];

  return (
    <Box as="section" id="blog" py="20" w={"full"}>
      <BlockContainer w={"full"} justifyContent={"start"} alignItems={"start"}>
        <Stack spacing={4}>
          <BlogPostCard size={"large"} {...firstBlogPost} />

          {/* <Grid
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
          </Grid> */}
          {/* 
          <BlogCard size={"large"} isReverse={true} {...lastBlogPost} /> */}
        </Stack>
      </BlockContainer>
    </Box>
  );
};

import { Box, Grid, GridItem, Stack } from '@chakra-ui/react';
import { chunk, map } from 'lodash';

import { BlockContainer } from '@/containers/BlockContainer';
import { BlogPost } from '@/types';
import { BlogPostCard } from './BlogPostCard';
import { FunctionComponent } from 'react';
import { uuid } from '@/lib/functions';

// group together 5 posts into a single block
const BlogPostBlock: FunctionComponent<{
  posts: BlogPost[];
}> = ({ posts }) => {
  const firstPost = posts[0];

  const midPosts = posts.slice(1, 5);

  const lastPost = posts[5];

  return (
    <Stack spacing={4}>
      {firstPost && <BlogPostCard size={'large'} {...firstPost} />}

      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}>
        {midPosts &&
          midPosts.length > 0 &&
          map(midPosts, post => (
            <GridItem key={uuid()}>
              <BlogPostCard size={'small'} {...post} />
            </GridItem>
          ))}
      </Grid>

      {lastPost && <BlogPostCard size={'large'} {...lastPost} />}
    </Stack>
  );
};

export const BlogPosts: FunctionComponent<{
  posts: BlogPost[];
}> = ({ posts }) => {
  const postGroups = chunk(posts, 5);

  return (
    <Box as='section' id='blog' py='20' w={'full'}>
      <BlockContainer w={'full'} justifyContent={'start'} alignItems={'start'}>
        <Stack spacing={4}>
          {map(postGroups, posts => (
            <BlogPostBlock posts={posts} key={uuid()} />
          ))}
        </Stack>
      </BlockContainer>
    </Box>
  );
};

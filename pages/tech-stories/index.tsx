import { BLOG_POSTS_QUERY, SanityClient } from '@/lib/sanityClient';

import { BlogPost } from '@/lib/types';
import { BlogPosts } from '@/features/posts';
import { Contact } from '@/features/landing/Contact';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/header';
import { NextPage } from 'next';
import { PageWrapper } from '@/containers/PageWrapper';
import { SimpleBanner } from '@/components/SimpleBanner';

export async function getStaticProps() {
  try {
    const data = await SanityClient.fetch(BLOG_POSTS_QUERY);

    return {
      props: {
        posts: data,
      },
    };
  } catch (error) {
    return {
      props: {
        posts: [],
      },
    };
  }
}

type BlogPageProps = {
  posts: BlogPost[];
};

const Blog: NextPage<BlogPageProps> = ({ posts }) => {
  return (
    <PageWrapper Nav={Header}>
      <SimpleBanner
        title="Baraka's Thoughts and Musings"
        description='Welcome to my blog page! This page is a collection of my thoughts and musings on various tech topics. From My Journey to coding, which explores my tech story, to the future of technology, in which  i delve into what lies ahead, each post offers a unique perspective and insight into the world around us. I hope my writing will inspire you, challenge your thinking, and spark meaningful conversations. Thank you for taking the time to read my blog.'
      />
      <BlogPosts posts={posts} />
      <Contact />
      <Footer />
    </PageWrapper>
  );
};
export default Blog;

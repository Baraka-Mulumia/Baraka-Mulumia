import { BLOG_POSTS_QUERY, SanityClient } from '@/lib/sanityClient';

import { BlogPost } from '@/lib/types';
import { BlogPosts } from '@/features/posts';
import { Contact } from '@/features/landing/Contact';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/header';
import { NextPage } from 'next';
import { PageHeroSection } from '@/components/PageHeroSection';
import { PageWrapper } from '@/containers/PageWrapper';

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
      <PageHeroSection
        heading='Insights and Stories from the World of Software Development'
        leadText='Welcome to TechTalk, your go-to source for the latest news, trends, and stories from the world of technology and software development. Join me on a journey through the exciting and constantly evolving world of software development, as we explore the latest innovations, share inspiring developer stories, and offer practical tips and insights to help you succeed in your tech career'
      />
      <BlogPosts posts={posts} />
      <Contact />
      <Footer />
    </PageWrapper>
  );
};
export default Blog;

import { BlogPost, Service } from '@/types';

import { BlogPosts } from '@/features/posts';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/header';
import { NextPage } from 'next';
import { PageHeroSection } from '@/components/PageHeroSection';
import { PageWrapper } from '@/containers/PageWrapper';
import QuoteOfTheDay from '@/features/quotes/QuoteOfTheDay';
import sanityAPI from '@/sanityAPI';

type BlogPageProps = {
  posts: BlogPost[];
  services: Service[];
};

export async function getStaticProps() {
  const { data } = await sanityAPI.getMultipleDocuments<BlogPageProps>([
    'services',
    'posts',
  ]);

  if (!data) {
    return {
      services: [],
      projects: [],
    };
  }

  const { services, posts } = data;

  return {
    props: {
      services,
      posts,
    },
  };
}

const Blog: NextPage<BlogPageProps> = ({ posts }) => {
  return (
    <PageWrapper Nav={Header}>
      <PageHeroSection
        heading='Insights and Stories from the World of Tech'
        leadText='Join me on a journey through the exciting and constantly evolving world of software development, as we explore the latest innovations, share inspiring developer stories, and offer practical tips and insights to help you succeed in your tech career'
      />
      <BlogPosts posts={posts} />
      <QuoteOfTheDay />
      <Footer />
    </PageWrapper>
  );
};
export default Blog;

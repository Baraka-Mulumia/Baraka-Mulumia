import {
  BLOG_POSTS_QUERY,
  SERVICES_TITLES_QUERY,
  SanityClient,
} from '@/lib/sanityClient';
import { BlogPost, Service } from '@/lib/types';

import { BlogPosts } from '@/features/posts';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/header';
import { InquiryForm } from '@/features/landing/InquiryForm';
import { NextPage } from 'next';
import { PageHeroSection } from '@/components/PageHeroSection';
import { PageWrapper } from '@/containers/PageWrapper';

const queries = `{
  "services": ${SERVICES_TITLES_QUERY},
  "posts": ${BLOG_POSTS_QUERY}
}`;

export async function getStaticProps() {
  try {
    const data = await SanityClient.fetch(queries);

    return {
      props: {
        posts: data.posts,
        services: data.services,
      },
    };
  } catch (error) {
    return {
      props: {
        posts: [],
        services: [],
      },
    };
  }
}

type BlogPageProps = {
  posts: BlogPost[];
  services: Service[];
};

const Blog: NextPage<BlogPageProps> = ({ posts, services }) => {
  return (
    <PageWrapper Nav={Header}>
      <PageHeroSection
        heading='Insights and Stories from the World of Tech'
        leadText='Join me on a journey through the exciting and constantly evolving world of software development, as we explore the latest innovations, share inspiring developer stories, and offer practical tips and insights to help you succeed in your tech career'
      />
      <BlogPosts posts={posts} />
      <InquiryForm services={services} />
      <Footer />
    </PageWrapper>
  );
};
export default Blog;

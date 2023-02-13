import { SanityClient, blogPostsQuery } from "@/lib/sanityClient";

import { BlogPosts } from "@/features/blog";
import { Header } from "@/components/Header/Header";
import { NextPage } from "next";
import { PageCOntentContainer } from "@/components/layout/PageCOntentContainer";
import { PostContent } from "@/lib/types";

export async function getStaticProps() {
  try {
    const data = await SanityClient.fetch(blogPostsQuery);

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
  posts: PostContent[];
};

const Blog: NextPage<BlogPageProps> = ({ posts }) => {
  return (
    <PageCOntentContainer Nav={Header}>
      <BlogPosts posts={posts} />
    </PageCOntentContainer>
  );
};
export default Blog;

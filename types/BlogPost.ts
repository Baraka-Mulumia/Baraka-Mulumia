import { SanityImage } from './SanityImage';
import { SanitySlug } from './SanitySlug';

export type BlogPost = {
  title: string;
  slug: SanitySlug;
  excerpt: string;
  mainImage: SanityImage;
  author: {
    name: string;
    image: SanityImage;
  };
  publishedAt: string;
  categories: {
    title: string;
    slug: SanitySlug;
  }[];
  body: string;
  _createdAt: string;
};

//TODO:  Create blog post preview type

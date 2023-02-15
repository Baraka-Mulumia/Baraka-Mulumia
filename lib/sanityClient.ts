import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const SanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  //   useCdn: true,
  apiVersion: '2021-03-25',
});

export function urlFor(source: any) {
  return imageUrlBuilder(SanityClient).image(source);
}

// Queries
export const SERVICES_QUERY = `*[_type == "service"] | order(_createdAt asc) {
  title,
  description,
  image {
    asset->{
      _id,
      url
    },
    alt
  },
  slug,
  _createdAt
}`;

export const BLOG_POSTS_QUERY = `*[_type == "post"] | order(_updatedAt desc) {
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

export const SINGLE_BLOG_POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
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
    body
}`;

export const ALL_PROJECTS_QUERY = `*[_type == "project"] | order(_createdAt desc) { 
_createdAt,
  _id,
  title,
  description,
  isHosted,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  slug,
  sourceCodeUrl,
  status,
  technologies,
  url,
}`;

export const FIRST_3_PROJECTS_QUERY = `*[_type == "project"] | order(_createdAt desc) [0..2] { 
    _createdAt,
  _id,
  title,
  description,
  isHosted,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  slug,
  sourceCodeUrl,
  status,
  technologies,
  url,
}`;

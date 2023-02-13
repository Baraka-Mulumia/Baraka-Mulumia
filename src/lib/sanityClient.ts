import SanityClientConstructor from "@sanity/client";

export const SanityClient = SanityClientConstructor({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  //   useCdn: true,
  apiVersion: "2021-03-25",
});

// queries
export const servicesQuery = `*[_type == "service"] | order(_createdAt asc) {
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

export const projectsPreviewQuery = `*[_type == "project"] | order(_createdAt asc)[0..2]{
  title,
  description,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  slug,
  url,
  sourceCodeUrl,
  isHosted,
}`;

export const blogPostsQuery = `*[_type == "post"] | order(_updatedAt desc) {
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

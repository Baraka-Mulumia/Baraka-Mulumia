export const SERVICES_QUERY = `*[_type == "service"] | order(_createdAt asc) {
    _id,
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

export const PARTIAL_SERVICES_QUERY = `*[_type == "service"] | order(_createdAt asc) {
    _id,
    title,
    slug,
}`;

const BlOG_POST = `
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
  }
`;

export const BLOG_POSTS_QUERY = `*[_type == "post"] | order(_createdAt desc) {
 ${BlOG_POST}
}`;

export const SINGLE_BLOG_POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
    ${BlOG_POST},
    body  
}`;

export const BLOG_POST_SLUGS_QUERY = `*[_type == "post"] | order(_createdAt desc) {
    _id,
    slug
}`;

const PROJECT = `
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
  url`;

export const PROJECTS_QUERY = `*[_type == "project"] | order(order asc) { 
    ${PROJECT}
}`;

export const FIRST_3_PROJECTS_QUERY = `*[_type == "project"] | order(order asc) [0..2] { 
    ${PROJECT}
}`;

const QUOTE = `
  _id,
  quote,
  author,
  source,
  _createdAt
`;

export const RANDOM_QUOTE_QUERY = `*[_type == "quote"] | order() [0] {
    ${QUOTE}
}`;

export const QUOTES_QUERY = `*[_type == "quote"] | order(_createdAt desc) {
    ${QUOTE}
}`;

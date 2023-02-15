export type SanityImage = {
  asset: {
    url: string;
    _id: string;
  };
  alt: string;
};

export type SanitySlug = {
  current: string;
};

export type ServiceContent = {
  title: string;
  description: string;
  image: SanityImage;
  slug: SanitySlug;
};

export type ProjectContent = {
  _id: string;
  title: string;
  description: string;
  mainImage: SanityImage;
  slug: SanitySlug;
  technologies: string[];
  status: string;
  url: string;
  sourceCodeUrl: string;
  isHosted: boolean;
};
export type PostContent = {
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

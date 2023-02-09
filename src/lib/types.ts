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
  title: string;
  description: string;
  mainImage: SanityImage;
  slug: SanitySlug;
  technologies: string[];
  images?: SanityImage[];
  status: string;
  url: string;
  sourceCodeUrl: string;
  isHosted: boolean;
};

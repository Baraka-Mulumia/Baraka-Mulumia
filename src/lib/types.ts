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

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

export type Service = {
  title: string;
  description: string;
  image: SanityImage;
  slug: SanitySlug;
};

export type Project = {
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

export type HomePageProps = {
  services: Service[];
  projects: Project[];
};

export type NotificationType = {
  id: string;
  title: string;
  message?: string;
  type: 'success' | 'error' | 'info' | 'warning';
};

export type InquiryInput = {
  fullName: string;
  email: string;
  service?: string;
  message?: string;
};

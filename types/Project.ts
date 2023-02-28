import { SanityImage } from './SanityImage';
import { SanitySlug } from './SanitySlug';

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

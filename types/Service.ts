import { SanityImage } from './SanityImage';
import { SanitySlug } from './SanitySlug';

export type Service = {
  title: string;
  description: string;
  image: SanityImage;
  slug: SanitySlug;
};

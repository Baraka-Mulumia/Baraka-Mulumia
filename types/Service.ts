import { SanityImage } from './SanityImage';
import { SanitySlug } from './SanitySlug';

export type Service = {
  _id: string;
  title: string;
  description: string;
  image: SanityImage;
  slug: SanitySlug;
};

export type PartialService = Pick<Service, '_id' | 'title' | 'slug'>;

import {
  BLOG_POSTS_QUERY,
  BLOG_POST_SLUGS_QUERY,
  FIRST_3_PROJECTS_QUERY,
  PARTIAL_SERVICES_QUERY,
  PROJECTS_QUERY,
  QUOTES_QUERY,
  SERVICES_QUERY,
  SINGLE_BLOG_POST_QUERY,
} from './queries';
import {
  BlogPost,
  PartialService,
  Project,
  Quote,
  SanitySlug,
  Service,
} from '@/types';
import { SanityClient, createClient } from '@sanity/client';

import { SanityAsset } from '@sanity/image-url/lib/types/types';
import { getRandomNumber } from './../lib/functions';
import imageUrlBuilder from '@sanity/image-url';

const queryMap = {
  services: SERVICES_QUERY,
  partialServices: PARTIAL_SERVICES_QUERY,
  posts: BLOG_POSTS_QUERY,
  blogPostSlugs: BLOG_POST_SLUGS_QUERY,
  singleBlogPost: SINGLE_BLOG_POST_QUERY,
  projects: PROJECTS_QUERY,
  first3Projects: FIRST_3_PROJECTS_QUERY,
};

type query = keyof typeof queryMap;

type SanityResponse<T> = {
  data: T | null;
  error: unknown;
};

type SanitySlugInfo = {
  _id: string;
  slug: SanitySlug;
};

class SanityAPI {
  client: SanityClient;

  constructor() {
    this.client = createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: 'production',
      useCdn: true,
      apiVersion: '2021-03-25',
    });
  }

  urlFor(source: SanityAsset) {
    return imageUrlBuilder(this.client).image(source);
  }

  // Queries
  getServices = async (): Promise<SanityResponse<Service[]>> => {
    try {
      const data = await this.client.fetch(SERVICES_QUERY);
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  };

  getPartialService = async (): Promise<SanityResponse<PartialService[]>> => {
    try {
      const data = await this.client.fetch(PARTIAL_SERVICES_QUERY);
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  };

  getBlogPosts = async (): Promise<SanityResponse<BlogPost[]>> => {
    try {
      const data = await this.client.fetch(BLOG_POSTS_QUERY);
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  };

  getBlogPostBySlug = async (
    slug: string,
  ): Promise<SanityResponse<BlogPost>> => {
    try {
      const data = await this.client.fetch(SINGLE_BLOG_POST_QUERY, { slug });
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  };

  getProjects = async (
    getFirst3 = false,
  ): Promise<SanityResponse<Project[]>> => {
    if (getFirst3) {
      try {
        const data = await this.client.fetch(FIRST_3_PROJECTS_QUERY);
        return { data, error: null };
      } catch (error) {
        return { data: null, error };
      }
    } else {
      try {
        const data = await this.client.fetch(PROJECTS_QUERY);
        return { data, error: null };
      } catch (error) {
        return { data: null, error };
      }
    }
  };

  getMultipleDocuments = async <T>(
    queries: query[],
  ): Promise<SanityResponse<T>> => {
    try {
      const cumulativeQuery = queries
        .map(query => `"${query}": ${queryMap[query]}`)
        .join(',');

      const data = await this.client.fetch(`{${cumulativeQuery}}`);

      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  };

  getSlugs = async (
    documentType: string,
  ): Promise<SanityResponse<SanitySlugInfo[]>> => {
    const query = `*[_type == $documentType] {
      _id,
      slug
    }`;

    try {
      const data = await this.client.fetch(query, { documentType });
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  };

  //TODO : Fix this - find a way to fetch only one quote from Sanity
  getRandomQuote = async (): Promise<SanityResponse<Quote>> => {
    try {
      const data = await this.client.fetch(QUOTES_QUERY);

      const randomIndex = getRandomNumber(0, data.length - 1);

      return { data: data[randomIndex], error: null };
    } catch (error) {
      return { data: null, error };
    }
  };

  getQuotes = async (): Promise<SanityResponse<Quote[]>> => {
    try {
      const data = await this.client.fetch(QUOTES_QUERY);
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  };
}

export default new SanityAPI();

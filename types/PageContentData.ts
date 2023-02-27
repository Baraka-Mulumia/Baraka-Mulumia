import { Project } from './Project';
import { Service } from './Service';

export type PageContentData = {
  services?: Service[];
  projects?: Project[];
};

export type PageContentDataRequired = Required<PageContentData>;

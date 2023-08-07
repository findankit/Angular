import { Response } from "./butter-cms-response";

export class BCGetContentResponseModel {
  sitemap!: string;
  'posts/search'!: string;
  posts!: string;
  pages!: string;
  search!: string;
  authors!: string;
  categories!: string;
  tags!: string;
}

export type GetContentResponseModel = Response | BCGetContentResponseModel;
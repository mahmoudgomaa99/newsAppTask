export interface TArticle {
  source?: {
    id: string;
    name: string;
  };
  author?: string;
  title?: string;
  description?: string;
  url?: string;
  urlToImage?: string;
  publishedAt?: string;
  content?: string;
}

export interface TQuerieing {
  query?: string;
  page?: number;
}

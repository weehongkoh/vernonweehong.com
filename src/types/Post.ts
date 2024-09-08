export type PostDataProp = {
  data: PostProp[];
};

export type PostProp = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  categories: string[];
  date_created: string;
};

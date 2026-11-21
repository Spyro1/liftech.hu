export type NewsPost = {
  _id: string;
  title: string;
  caption?: string;
  validFrom?: string;
  validUntil?: string;
  link?: string;
  linkText?: string;
  inverted?: boolean;
  label?: string;
  image: string;
  imageRatio?: number;
};

const query = `*[_type=="news"]|order(_createdAt desc)[0...12]{_id,title,caption,validFrom,validUntil,link,linkText,inverted,label,"image":image.asset->url,"imageRatio":image.asset->metadata.dimensions.aspectRatio}`;

export const fetchNews = async (): Promise<NewsPost[]> => {
  if (!import.meta.env.VITE_SANITY_PROJECT_ID) return [];
  const dataset = import.meta.env.VITE_SANITY_DATASET || "production";
  const url = `https://${import.meta.env.VITE_SANITY_PROJECT_ID}.apicdn.sanity.io/v2024-01-01/data/query/${dataset}?query=${encodeURIComponent(query)}`;
  const res = await fetch(url);
  if (!res.ok) return [];
  return (await res.json()).result ?? [];
};

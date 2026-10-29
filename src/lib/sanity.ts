export type NewsPost = {
  _id: string;
  title: string;
  caption?: string;
  date: string;
  link?: string;
  image: string;
};

const query = `*[_type=="news"]|order(date desc)[0...12]{_id,title,caption,date,link,"image":image.asset->url}`;

export const fetchNews = async (): Promise<NewsPost[]> => {
  if (!import.meta.env.VITE_SANITY_PROJECT_ID) return [];
  const res = await fetch(
    `https://${import.meta.env.VITE_SANITY_PROJECT_ID}.apicdn.sanity.io/v2024-01-01/data/query/production?query=${encodeURIComponent(query)}`,
  );
  return (await res.json()).result ?? [];
};

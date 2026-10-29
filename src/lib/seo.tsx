import { Helmet } from "react-helmet-async";

export default function Seo({
  title,
  description,
  robots,
}: {
  title: string;
  description?: string;
  robots?: string;
}) {
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {robots && <meta name="robots" content={robots} />}
    </Helmet>
  );
}

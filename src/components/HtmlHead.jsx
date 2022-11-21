import { Helmet } from "react-helmet";

export function HtmlHead({ title, description }) {
  return (
    <Helmet>
      <title>{`${title} · Night Login UGM`}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
import user from '../../config/user';

interface ISEO{
  keywords?: string;
  description?: string;
  title?: string;
}

const {
  author, title, metaDescription, keywords: userKeywords,
} = user;

function SEO({
  keywords, description, title: Title,
}: ISEO): JSX.Element {
  const userTitle = title.toLocaleString();
  return (
    <>
      <meta content="index, follow" name="robots" />
      <meta content={metaDescription.en} lang="en" name="description" />
      <meta content={metaDescription.es} lang="es" name="description" />
      <meta content={keywords || userKeywords.join(', ')} name="keywords" />
      <meta content={author} name="author" />
      <meta content={Title || userTitle} name="og:title" />
      <meta content={userTitle} name="og:site_name" />
      <meta content={description || metaDescription.es} name="og:description" />
      <meta content="website" name="og:type" />
      <meta content={description || metaDescription.es} name="twitter:card" />
      <meta content={author} name="twitter:creator" />
      <meta content={Title || userTitle} name="twitter:title" />
      <meta content={description || metaDescription.es} name="twitter:description" />
    </>
  );
}

export default SEO;
